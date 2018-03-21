/* This generator automatically creates components in the Playground based off the source directory's read me's. 
 * To use:
 *  Run rm -rf node_modules in the IDS directory.
 *  Run rm -rf node_modules in the generator-sync directory.
 *  Run npm link in the IDS directory.
 *  Run npm link in the generator-sync directory.
 *  Run npm link generator-sync in the generator-sync directory.
 *  Run npm link generator-sync in the IDS directory.
 *  Run yo sync from the IDS directory.
 * 
 *  If you wish to add a new component, create a readme with the component name, followed by .md 
 *  Then run the generator following the instructions above. Overwrite the demo.module, app.module, and app.component. 
 * 
 *  If unintenionally deleted an existing component from the Playground/demo-app directory, run yo sync and do not
 *  override the demo.module app.module, and app.component files. 
 * 
 *  If deleting the demo-app directory, overwrite the demo.module, app.module, and app.component. 
 * 
 * PLEASE NOTE THAT ANY CSS FILES FOR FORMATTING WITHIN THE MAT-TAB GROUP WILL BE DELETED AND MUST BE MANUALLY CREATED.
 * ALL STYLING AND FORMATTING SHOULD BE DONE WITHIN THE APP FILE'S SCSS FILE IF POSSIBLE. */

var Generator = require('yeoman-generator');
var _ = require('lodash');
const cheerio = require('cheerio');
const rp = require('request-promise');
const fs = require('fs');
var path = require('path');
var markdown = require("markdown").markdown;
var process = require ("process");
var decode = require('unescape');
var names = [];
var readMeContent= [];
var exceptionArray = [];
var dialogArray = [];

class SyncGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.names = [];
        this.readMeContent = [];
        const componentName = '';
        this.exceptionArray = ['text-list-item', 'list-item', 'select-container', 'list-selection'];
        this.dialogArray = ['dialog-dialog', 'dialog-dialog-background', 'dialog-accept-cancel'];

        this.helperFunction = function (nameArg, markdownContents, index){
            let tempNameArg = nameArg;
            for (let i = 0; i < markdownContents.length; i++){
                let tsParsedMarkdown = [];
                let externalTSMarkdown = [];
                let tsImportsParsedMarkdown = [];
                let htmlParsedMarkdown = [];

                let capitalizedName = '';
                let importsSectionIndex = markdownContents[i].indexOf('*** Imports ***');
                let tsSectionIndex = markdownContents[i].indexOf('*** TypeScript ***');
                let htmlSectionIndex = markdownContents[i].indexOf('*** HTML ***');
                let externalTSSectionIndex = markdownContents[i].indexOf('*** ExternalTypeScript ***');
                
                htmlParsedMarkdown = markdownContents[i].substring(htmlSectionIndex + 12, tsSectionIndex);
                tsImportsParsedMarkdown = markdownContents[i].substring(importsSectionIndex + 15, markdownContents[i].length);
                tsParsedMarkdown = markdownContents[i].substring(tsSectionIndex + 18, externalTSSectionIndex);
                externalTSMarkdown = markdownContents[i].substring(externalTSSectionIndex + 27, importsSectionIndex)

                if (index === 1 ){
                    index += 1;
                }
                else if (index === 2){
                    nameArg = tempNameArg + '-' + tempNameArg;
                    index += 1;
                    tsParsedMarkdown = [];
                }
                else if (index === 3){
                    nameArg = tempNameArg + '-' + tempNameArg +'-background';
                    index +=1;
                    tsParsedMarkdown = [];
                }
                else if (index === 4){
                    nameArg = tempNameArg + '-accept-cancel';
                }

                capitalizedName = nameArg.charAt(0).toUpperCase() + nameArg.slice(1);

                for (let k = 0; k < capitalizedName.length; k++){
                    if (capitalizedName.charAt(k) === '-'){
                        capitalizedName = capitalizedName.substr(0, k+1) + (capitalizedName.charAt(k+1).toUpperCase()) + capitalizedName.substr((k+1) + 1);
                    }
                }
                
                this.readMeContent.push(
                    {
                        content: (decode(markdown.toHTML(htmlParsedMarkdown)).split(`<p><`).join(`<`)).split(`></p>`).join(`>`),
                        tsCode : tsParsedMarkdown,
                        additionalImports : tsImportsParsedMarkdown,
                        externalTSCode: externalTSMarkdown,
                        routeName: nameArg,
                        name: capitalizedName.split('-').join(" "),
                        fileName: tempNameArg,
                    }
                )
            }
        }
    }

    /**creates an array of existing files */
    async extract() {
        let tempNames = [];
        let currentDirectory = './src'
        await new Promise((resolve, reject) => { 
            fs.readdir( currentDirectory, ( err, files ) => {
                if (err)
                    { reject(err); } 
                else{    
                    files.forEach( ( file, index ) => {
                        let directory = path.join( currentDirectory, file);
                        let stats = fs.statSync(directory);
                        if (stats.isDirectory()){
                            this.names.push(file);
                        }
                    })
                    resolve();
                }
            })
        })
    }
    
    /** writes out to files in directory if readMe's, */
    parsingComponents() {
        let index = 0;
        for (let i = 0; i < this.names.length; i++){ 
            let markdownContent = [];
            try{
                let stat = fs.statSync(`./src/${this.names[i]}/${this.names[i]}.md`);
                if (stat.isFile()){
                    if (this.exceptionArray.indexOf(this.names[i]) === -1 && this.names[i] !== 'dialog'){
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}.md`, 'utf8')); 
                        this.helperFunction(this.names[i], markdownContent, 0);
                    }
                    else if (this.names[i] === 'dialog'){
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}.md`, 'utf8')); 
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-${this.names[i]}.md`, 'utf8')); 
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-${this.names[i]}-background.md`, 'utf8'));
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-accept-cancel.md`, 'utf8'));  
                        this.helperFunction(this.names[i], markdownContent, 1);
                    }
                }
            }

            catch (err){

            }
        }
    }

    writingComponents(){
        for (let i = 0; i < this.readMeContent.length; i++){
            if (this.exceptionArray.indexOf(this.readMeContent[i].routeName) === -1){
                if (this.readMeContent[i].tsCode.length > 0){
                    this.fs.copyTpl(
                        this.templatePath('../../templates/html-template.html'),
                        this.destinationPath(`./demo-app/app/demo/demo-${this.readMeContent[i].fileName}/demo-${this.readMeContent[i].routeName}.html`),
                        {
                            componentDescription: this.readMeContent[i].content,
                        }
                    )

                    this.fs.copyTpl(
                        this.templatePath('../../templates/typescript-template.md'),
                        this.destinationPath(`./demo-app/app/demo/demo-${this.readMeContent[i].fileName}/demo-${this.readMeContent[i].routeName}.component.ts`),
                        {
                            componentName: this.readMeContent[i].name.split(" ").join(""),
                            routeName: this.readMeContent[i].routeName,
                            tsCode: this.readMeContent[i].tsCode,
                            additionalImports: this.readMeContent[i].additionalImports,
                            externalTSCode: this.readMeContent[i].externalTSCode,

                        }
                    )
                }
                else{
                    this.fs.copyTpl(
                        this.templatePath('../../templates/html-template.html'),
                        this.destinationPath(`./demo-app/app/demo/demo-${this.readMeContent[i].fileName}/demo-${this.readMeContent[i].routeName}.html`),
                        {
                            componentDescription: this.readMeContent[i].content,
                        }
                    )
                }
            }
        }   
    };


    writeToModules(){
        /**Writes app module, app component, and demo module file based on component list */
        let imports = [];
        let routes = [];
        let demoList = [];
        let demoImports = [];
        let componentNav = [];
        for (let i = 0; i < this.readMeContent.length; i++){
            if (this.exceptionArray.indexOf(this.readMeContent[i].routeName) === -1 && this.dialogArray.indexOf(this.readMeContent[i].routeName) === -1){
                imports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo/demo-` + this.readMeContent[i].fileName + `/demo-` + this.readMeContent[i].routeName 
                        + `.component';`);
                demoList.push(`Demo` + this.readMeContent[i].name.split(" ").join("") + `Component,`)
                demoImports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo-` + this.readMeContent[i].fileName + `/demo-` + 
                        this.readMeContent[i].routeName + `.component';`);

                if (this.readMeContent[i].routeName !== 'contribution'){
                    routes.push(`{ path: '` + this.readMeContent[i].routeName + `', component: Demo` + this.readMeContent[i].name.split(" ").join("") + `Component },`)
                    componentNav.push(`{ name: '` + this.readMeContent[i].name + `', route: '/` + this.readMeContent[i].routeName + `' },`)
                }
                else if (this.readMeContent[i].routeName === 'contribution'){
                    routes.push(`{ path: '` + this.readMeContent[i].routeName + `', component: Demo` + this.readMeContent[i].name.split(" ").join("") + `Component },`)
                }
            }


            this.fs.copyTpl(
                this.templatePath('../../templates/app-module-template.md'),
                this.destinationPath(`./demo-app/app/app.module.ts`),
                {
                    imports: imports,
                    routes: routes,
                }
            )

            this.fs.copyTpl(
                this.templatePath('../../templates/demo-module-template.md'),
                this.destinationPath(`./demo-app/app/demo/demo.module.ts`),
                {
                    imports: demoImports,
                    demoList: demoList,
                }
            )

            this.fs.copyTpl(
                this.templatePath('../../templates/app-component-template.component.md'),
                this.destinationPath(`./demo-app/app/app.component.ts`),
                {
                    componentNav: componentNav,
                }
            )
         }
    };
};

module.exports =  SyncGenerator