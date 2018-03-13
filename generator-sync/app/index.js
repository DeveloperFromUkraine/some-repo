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

/** NEEDS TO WRITE ALL COMPONENT NAMES */
class SyncGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.names = [];
        this.readMeContent = [];
        const componentName = '';
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
    
    /** writes out to files in directory if readMe's, creates blank pages otherwise */
    writing() {
        for (let i = 0; i < this.names.length; i++){ 
            try{
                let stat = fs.statSync(`./src/${this.names[i]}/${this.names[i]}.md`);
                let capitalizedName;
                if (stat.isFile()){
                    capitalizedName = this.names[i];
                    capitalizedName = capitalizedName.charAt(0).toUpperCase() + this.names[i].slice(1);
                    for (let j = 0; j < capitalizedName.length; j++){
                        if (capitalizedName.charAt(j) === '-'){
                            capitalizedName = capitalizedName.substr(0, j+1) + (capitalizedName.charAt(j+1).toUpperCase()) + capitalizedName.substr((j+1) + 1);
                        }
                    }

                    if (this.names[i] !== 'text-list-item' && this.names[i] !== 'list-item' && this.names[i] !== 'list-selection' && this.names[i] !== 'select-container' && this.names[i] !== 'dialog'){
                        let tsParsedMarkdown = [];
                        let externalTSMarkdown = [];
                        let tsImportsParsedMarkdown = [];
                        let htmlParsedMarkdown = [];
                        let markdownContents = fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}.md`, 'utf8'); 
                    
                        let importsSectionIndex = markdownContents.indexOf('*** Imports ***');
                        let tsSectionIndex = markdownContents.indexOf('*** TypeScript ***');
                        let htmlSectionIndex = markdownContents.indexOf('*** HTML ***');
                        let externalTSSectionIndex = markdownContents.indexOf('*** ExternalTypeScript ***');

                        if (tsSectionIndex > -1 && htmlSectionIndex > -1 && importsSectionIndex > -1 && externalTSSectionIndex > -1){
                            htmlParsedMarkdown = markdownContents.substring(htmlSectionIndex + 12, tsSectionIndex);
                            tsImportsParsedMarkdown = markdownContents.substring(importsSectionIndex + 15, markdownContents.length);
                            tsParsedMarkdown = markdownContents.substring(tsSectionIndex + 18, externalTSSectionIndex);
                            externalTSMarkdown = markdownContents.substring(externalTSSectionIndex + 27, importsSectionIndex)
                            this.readMeContent.push(
                                {
                                    content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                    tsCode : tsParsedMarkdown,
                                    additionalImports : tsImportsParsedMarkdown,
                                    externalTSCode: externalTSMarkdown,
                                    routeName: this.names[i],
                                    name: capitalizedName.split('-').join(" "),
                                })
                            
                        }

                        else if (tsSectionIndex > -1 && htmlSectionIndex > -1 && importsSectionIndex > -1 && !externalTSSectionIndex > -1){
                            htmlParsedMarkdown = markdownContents.substring(htmlSectionIndex + 12, tsSectionIndex);
                            tsImportsParsedMarkdown = markdownContents.substring(importsSectionIndex + 15, markdownContents.length);
                            tsParsedMarkdown = markdownContents.substring(tsSectionIndex + 18, externalTSSectionIndex);
                            externalTSMarkdown = markdownContents.substring(externalTSSectionIndex + 27, importsSectionIndex)
                            this.readMeContent.push(
                                {
                                    content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                    tsCode : tsParsedMarkdown,
                                    additionalImports : tsImportsParsedMarkdown,
                                    routeName: this.names[i],
                                    name: capitalizedName.split('-').join(" "),
                                })
                            
                        }

                        else if (tsSectionIndex > -1 && importsSectionIndex > -1 && externalTSSectionIndex && !htmlSectionIndex > -1 && externalTSindex){
                            tsImportsParsedMarkdown = markdownContents.substring(importsSectionIndex + 15, markdownContents.length);
                            tsParsedMarkdown = markdownContents.substring(tsSectionIndex + 18, externalTSSectionIndex);
                            externalTSMarkdown = markdownContents.substring(externalTSSectionIndex + 27, importsSectionIndex)
                            this.readMeContent.push(
                                {
                                    tsCode : tsParsedMarkdown,
                                    externalTSCode: externalTSMarkdown,
                                    additionalImports : tsImportsParsedMarkdown,
                                    routeName: this.names[i],
                                    name: capitalizedName.split('-').join(" "),
                                })
                            
                        }

                        else if (importsSectionIndex > -1 && htmlSectionIndex > -1 && !tsSectionIndex > -1 && !externalTSSectionIndex > -1){
                            htmlParsedMarkdown = markdownContents.substring(htmlSectionIndex + 12, importsSectionIndex);
                            tsImportsParsedMarkdown = markdownContents.substring(importsSectionIndex + 15, markdownContents.length);
                            this.readMeContent.push(
                                {
                                    content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                    additionalImports : tsImportsParsedMarkdown,
                                    routeName: this.names[i],
                                    name: capitalizedName.split('-').join(" "),
                                })
                            
                        }

                        else if (!importsSectionIndex > -1 && !externalTSSectionIndex > -1 && htmlSectionIndex > -1 && !tsSectionIndex > -1){
                            htmlParsedMarkdown = markdownContents.substring(htmlSectionIndex + 12, importsSectionIndex);
                            tsImportsParsedMarkdown = markdownContents.substring(importsSectionIndex + 15, markdownContents.length);
                            this.readMeContent.push(
                                {
                                    content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                    routeName: this.names[i],
                                    name: capitalizedName.split('-').join(" "),
                                })
                            
                        }
                    }

                    else if (this.names[i] === 'dialog'){
                        let tsParsedMarkdown = [];
                        let externalTSMarkdown = [];
                        let tsImportsParsedMarkdown = [];
                        let htmlParsedMarkdown = [];
                        let markdownContent = [];
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}.md`, 'utf8')); 
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-${this.names[i]}.md`, 'utf8')); 
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-${this.names[i]}-background.md`, 'utf8'));
                        markdownContent.push(fs.readFileSync(`./src/${this.names[i]}/${this.names[i]}-accept-cancel.md`, 'utf8'));  
                        let index = 0;
                    
                        for (let j = 0; j < markdownContent.length; j++){
                            let importsSectionIndex = markdownContent[j].indexOf('*** Imports ***');
                            let tsSectionIndex = markdownContent[j].indexOf('*** TypeScript ***');
                            let htmlSectionIndex = markdownContent[j].indexOf('*** HTML ***');
                            let externalTSSectionIndex = markdownContent[j].indexOf('*** ExternalTypeScript ***');

                            if (tsSectionIndex > -1 && htmlSectionIndex > -1 && importsSectionIndex > -1 && externalTSSectionIndex > -1){
                                htmlParsedMarkdown = markdownContent[j].substring(htmlSectionIndex + 12, tsSectionIndex);
                                tsImportsParsedMarkdown = markdownContent[j].substring(importsSectionIndex + 15, markdownContent[j].length);
                                tsParsedMarkdown = markdownContent[j].substring(tsSectionIndex + 18, externalTSSectionIndex);
                                externalTSMarkdown = markdownContent[j].substring(externalTSSectionIndex + 27, importsSectionIndex)
                                let tempName = "";
                                if (index === 0){
                                    tempName = `${this.names[i]}`;
                                }

                                else{
                                    tempName = `${this.names[i]}-accept-cancel`;
                                }

                                capitalizedName = capitalizedName.charAt(0).toUpperCase() + tempName.slice(1);
                                for (let j = 0; j < capitalizedName.length; j++){
                                    if (capitalizedName.charAt(j) === '-'){
                                        capitalizedName = capitalizedName.substr(0, j+1) + (capitalizedName.charAt(j+1).toUpperCase()) + capitalizedName.substr((j+1) + 1);
                                    }
                                }

                                this.readMeContent.push(
                                    {
                                        content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                        tsCode : tsParsedMarkdown,
                                        additionalImports : tsImportsParsedMarkdown,
                                        externalTSCode: externalTSMarkdown,
                                        routeName: tempName,
                                        name: capitalizedName.split('-').join(" "),
                                    })
                                
                            }

                            else if(!importsSectionIndex > -1 && htmlSectionIndex > -1 && !tsSectionIndex > -1 && !externalTSSectionIndex > -1){
                                htmlParsedMarkdown = markdownContent[j].substring(htmlSectionIndex + 12, markdownContent[j].length);
                                let tempName = "";
                                if (index === 1){
                                    tempName = `${this.names[i]}-${this.names[i]}`;
                                }
                                else if (index === 2){
                                    tempName = `${this.names[i]}-${this.names[i]}-background`;
                                }

                                capitalizedName = capitalizedName.charAt(0).toUpperCase() + tempName.slice(1);
                                for (let j = 0; j < capitalizedName.length; j++){
                                    if (capitalizedName.charAt(j) === '-'){
                                        capitalizedName = capitalizedName.substr(0, j+1) + (capitalizedName.charAt(j+1).toUpperCase()) + capitalizedName.substr((j+1) + 1);
                                    }
                                }
                                this.readMeContent.push(
                                    {
                                        content: decode(markdown.toHTML(htmlParsedMarkdown)),
                                        routeName: tempName,
                                        name: capitalizedName.split('-').join(" "),
                                    }
                                )
                            }
                            index = index + 1;
                        }
                    }
                }
            }

            catch (err){
                let capitalizedName = this.names[i];
                capitalizedName = capitalizedName.charAt(0).toUpperCase() + this.names[i].slice(1);
                    for (let j = 0; j < capitalizedName.length; j++){
                        if (capitalizedName.charAt(j) === "-"){
                            capitalizedName = capitalizedName.substr(0, j+1) + (capitalizedName.charAt(j+1).toUpperCase()) + capitalizedName.substr((j+1) + 1);
                        }
                    }

                this.readMeContent.push(
                    {
                        routeName: this.names[i],
                        name: capitalizedName.split('-').join(" "),
                        content: "",
                    }
                )

            }
        }

        for (let i = 0; i < this.readMeContent.length; i++){
            if (this.readMeContent[i].routeName !== 'dialog' && this.readMeContent[i].routeName !== 'dialog-dialog-background' && this.readMeContent[i].routeName !== 'dialog-dialog' && this.readMeContent[i].routeName !== 'dialog-accept-cancel'){
                this.fs.copyTpl(
                    this.templatePath('../../templates/html-template.html'),
                    this.destinationPath(`./demo-app/app/demo/demo-${this.readMeContent[i].routeName}/demo-${this.readMeContent[i].routeName}.html`),
                    {
                        componentDescription: this.readMeContent[i].content,
                    }
                )

                this.fs.copyTpl(
                    this.templatePath('../../templates/typescript-template.md'),
                    this.destinationPath(`./demo-app/app/demo/demo-${this.readMeContent[i].routeName}/demo-${this.readMeContent[i].routeName}.component.ts`),
                    {
                        componentName: this.readMeContent[i].name.split(" ").join(""),
                        routeName: this.readMeContent[i].routeName,
                        tsCode: this.readMeContent[i].tsCode,
                        additionalImports: this.readMeContent[i].additionalImports,
                        externalTSCode: this.readMeContent[i].externalTSCode,

                    }
                )
            }
            else if (this.readMeContent[i].routeName === 'dialog' || this.readMeContent[i].routeName === 'dialog-accept-cancel') {
                this.fs.copyTpl(
                    this.templatePath('../../templates/html-template.html'),
                    this.destinationPath(`./demo-app/app/demo/demo-dialog/demo-${this.readMeContent[i].routeName}.html`),
                    {
                        componentDescription: this.readMeContent[i].content,
                    }
                )

                if (this.readMeContent[i].routeName === 'dialog-accept-cancel'){
                    this.fs.copyTpl(
                        this.templatePath('../../templates/dialog-typescript-template.md'),
                        this.destinationPath(`./demo-app/app/demo/demo-dialog/demo-${this.readMeContent[i].routeName}.component.ts`),
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
                        this.templatePath('../../templates/typescript-template.md'),
                        this.destinationPath(`./demo-app/app/demo/demo-dialog/demo-${this.readMeContent[i].routeName}.component.ts`),
                        {
                            componentName: this.readMeContent[i].name.split(" ").join(""),
                            routeName: this.readMeContent[i].routeName,
                            tsCode: this.readMeContent[i].tsCode,
                            additionalImports: this.readMeContent[i].additionalImports,
                            externalTSCode: this.readMeContent[i].externalTSCode,

                        }
                    )
                }
            }
            else{
                this.fs.copyTpl(
                    this.templatePath('../../templates/html-template.html'),
                    this.destinationPath(`./demo-app/app/demo/demo-dialog/demo-${this.readMeContent[i].routeName}.html`),
                    {
                        componentDescription: this.readMeContent[i].content,
                    }
                )
            }
        }   

        /**Writes app module file based on component list */
        let imports = [];
        let routes = [];
        let demoList = [];
        let demoImports = [];
        let componentNav = [];
        for (let i = 0; i < this.readMeContent.length; i++){
            if (this.readMeContent[i].routeName !== "text-list-item" && this.readMeContent[i].routeName !== "list-item" && this.readMeContent[i].routeName !== "list-selection" && this.readMeContent[i].routeName !== 'dialog-dialog' && this.readMeContent[i].routeName !== 'dialog-dialog-background' &&
            this.readMeContent[i].routeName !== 'dialog-accept-cancel' && this.readMeContent[i].routeName !== 'contribution'){
                imports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo/demo-` +
                this.readMeContent[i].routeName + `/demo-` + this.readMeContent[i].routeName + `.component';`)
                routes.push(`{ path: '` + this.readMeContent[i].routeName + `', component: Demo` + this.readMeContent[i].name.split(" ").join("") + `Component },`)
                demoList.push(`Demo` + this.readMeContent[i].name.split(" ").join("") + `Component,`)
                demoImports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo-` +
                this.readMeContent[i].routeName + `/demo-` + this.readMeContent[i].routeName + `.component';`);
                componentNav.push(`{ name: '` + this.readMeContent[i].name + `', route: '/` + this.readMeContent[i].routeName + `' },`)
            }
            else if (this.readMeContent[i].routeName === 'dialog-accept-cancel'){
                    imports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo/demo-dialog/demo-` + this.readMeContent[i].routeName 
                    + `.component';`);
                    demoList.push(`Demo` + this.readMeContent[i].name.split(" ").join("") + `Component,`)
                    demoImports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo-dialog/demo-` + 
                    this.readMeContent[i].routeName + `.component';`);
            }

            else if (this.readMeContent[i].routeName === 'contribution'){
                imports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo/demo-` +
                this.readMeContent[i].routeName + `/demo-` + this.readMeContent[i].routeName + `.component';`)
                routes.push(`{ path: '` + this.readMeContent[i].routeName + `', component: Demo` + this.readMeContent[i].name.split(" ").join("") + `Component },`)
                demoList.push(`Demo` + this.readMeContent[i].name.split(" ").join("") + `Component,`)
                demoImports.push(`import {Demo` + this.readMeContent[i].name.split(" ").join("") + `Component} from './demo-` +
                this.readMeContent[i].routeName + `/demo-` + this.readMeContent[i].routeName + `.component';`);
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