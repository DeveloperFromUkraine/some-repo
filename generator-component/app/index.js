var Generator = require('yeoman-generator');
var _ = require('lodash');
const cheerio = require('cheerio');
const rp = require('request-promise');
const fs = require('fs');

class ComponentGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        let skimmed = {};
    }

    format() {
        this.skimmed = [
            {name: "Data Table", Usage: [{subheader: "Subheader", content: "info"}, {
                subheader: "Subheader2", content: "info"}], HTML: [{htmlCode: "codehere"}],
                TS: [{tsCode: "codehere"}], Content: [{content: "content"}], Style: [{style: "style"}]}, 
            {name: "Tester", Usage: [{subheader: "Subheader", content: "info"}, 
                {subheader: "Subheader2", content: "info"}], HTML: [{htmlCode: "codehere"}],
                TS: [{tsCode: "codehere"}], Content: [{content: "content"}], Style: [{style: "style"}]}
        ];
    }
    async writing() {
        for (let i = 0; i < this.skimmed.length; i++){
            this.fs.copyTpl(
                this.templatePath('../../templates/html-template.html'),
                this.destinationPath(`./demo-app/app/demo/demo-${(this.skimmed[i].name).
                    toLowerCase().split(' ').join('-')}/demo-${(this.skimmed[i].name).toLowerCase().split(' ').join('-')}.html`),
                {
                   htmlCode : this.skimmed[i].HTML[0].htmlCode,
                   displayName : this.skimmed[i].name,
                   tsCode : this.skimmed[i].TS[0].tsCode,
                   componentDescription : this.skimmed[i].Usage[0].content,
                }
            )

            this.fs.copyTpl(
                this.templatePath('../../templates/readMe-template.md'),
                this.destinationPath(`./demo-app/app/demo/demo-${(this.skimmed[i].name).toLowerCase().
                    split(' ').join('-')}/demo-${(this.skimmed[i].name).toLowerCase().split(' ').join('-')}.md`),
                {
                    style : this.skimmed[i].Style[0].style,
                    content : this.skimmed[i].Content[0].content,
                }
            )

            this.fs.copyTpl(
                this.templatePath('../../templates/typescript-template.ts'),
                this.destinationPath(`./demo-app/app/demo/demo-${(this.skimmed[i].name).
                    toLowerCase().split(' ').join('-')}/demo-${(this.skimmed[i].name).toLowerCase().split(' ').join('-')}.component.ts`),
                {
                    routeName : this.skimmed[i].name.toLowerCase().split(' ').join('-'),
                    componentName : this.skimmed[i].name.split(' ').join(''),
                    tsCode : this.skimmed[i].TS[0].tsCode,
                }
            )
        }
            
    };
    /** fix this later */
    
    writeAppModule(){
        for (let i = 0; i < this.skimmed.length; i++){
            let fs = require('fs');
            let script = [];
            let modifiedScript = [];
            script = fs.readFileSync(`./demo-app/app/app.module.ts`, 'utf8');
            let scriptIndexBefore = script.indexOf("const routes: Routes = [")
            let scriptIndexAfter = scriptIndexBefore;
            modifiedScript.push(script.substring(0, scriptIndexBefore - 1) + `import { Demo` + this.skimmed[i].name.split(' ').join('') + `Component } from './demo/demo-`
                + this.skimmed[i].name.toLowerCase().split(' ').join('-') + `/demo-` + this.skimmed[i].name.toLowerCase().split(' ').join('-') + `.component';` + "\r\n" +
                script.substring(scriptIndexAfter - 1, scriptIndexAfter + 25) + "\r\n" + `{ path: '` + this.skimmed[i].name.toLowerCase().split(' ').join('-') + `', ` +
                `component: Demo` + this.skimmed[i].name.split(' ').join('') + `Component },` + "\r\n" + script.substring(scriptIndexAfter + 27, script.length));
            fs.writeFileSync(`./demo-app/app/app.module.ts`, modifiedScript, 'utf8');
        }
    }

   writeDemoAppModule() {
        for (let i = 0; i < this.skimmed.length; i++){
            let fs = require('fs');
            let script = [];
            let modifiedScript = [];
            script = fs.readFileSync(`./demo-app/app/demo/demo.module.ts`, 'utf8');
            let scriptIndexBefore = script.indexOf("import { MatExpansionModule } from '@angular/material';")
            let scriptIndexAfter = scriptIndexBefore + 1;
            let scriptIndexDeclarationBefore = script.indexOf("declarations: [")
            let scriptIndexDeclarationAfter = scriptIndexDeclarationBefore + 1;
            modifiedScript.push(script.substring(0, scriptIndexBefore - 1) + `import { Demo` + this.skimmed[i].name.split(' ').join('') + `Component } from './demo-`
                + this.skimmed[i].name.toLowerCase().split(' ').join('-') + `/demo-` + this.skimmed[i].name.toLowerCase().split(' ').join('-') + `.component';` + "\r\n" +
                script.substring(scriptIndexAfter - 2, scriptIndexDeclarationBefore + 19) + `Demo` + this.skimmed[i].name.split(' ').join('') + `Component,`
                + "\r\n" + script.substring(scriptIndexDeclarationAfter + 16, script.length) );
            fs.writeFileSync(`./demo-app/app/demo/demo.module.ts`, modifiedScript, 'utf8');
        }
    }

    writeAppComponent() {
        for (let i = 0; i < this.skimmed.length; i++){
            const fs = require('fs');

            let lines = fs.readFileSync(`./demo-app/app/app.component.ts`, {encoding: 'utf8'}).split('\n');
            const startIdx = lines.findIndex(val => /navItems = \[/.exec(val));
            const itemCount = lines.slice(startIdx).findIndex(val => /\];/.exec(val));
            const endIdx = itemCount + startIdx;

            let navItems = lines.slice(startIdx + 1, endIdx);

            navItems.push(`    { name: \'${this.skimmed[i].name}\' , route: \'/${this.skimmed[i].name.toLowerCase().split(' ').join('-')}\' },`);
            navItems.sort();
                
            lines.splice(startIdx + 1, itemCount - 1, ...navItems);
            fs.writeFileSync(`./demo-app/app/app.component.ts`, lines.join('\n'), 'utf8');
        }
    }
};

module.exports =  ComponentGenerator