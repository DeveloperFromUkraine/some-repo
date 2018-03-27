/** Run yo component in the terminal to run the generator. 
 * Requires finished migration of playground to source in IDS.
 * 
 * Steps:
 * Run rm -rf node_modules and npm link base directory
 * Then run rm -rf node_modules and npm link from generator-component directory.
 * Then run npm link generator-component from generator-component directory
 * Then run npm link generator-component from base directory.
 * -------(this section above only needs done once)------------------
 * 
 * cd into the confluence-scraper directory
 * run npm start to begin the scraper/parser/generator */

 var Generator = require('yeoman-generator');
 const fs = require('fs');
 var toMarkdown = require('to-markdown');
 
 var useArray;
 var styleArray;
 var contentArray;
 var introArray;
 var codeArray;
 var otherArray;
 var tempArray;
 var firstHalfHtmlArray;
 var secondHalfHtmlArray;
 var standardKeys = [];
 
 class ComponentGenerator extends Generator {
     constructor(args, opts) {
         super(args, opts);
         let name;
         let html;
         let ts;
         this.styleArray = [];
         this.contentArray = [];
         this.introArray = [];
         this.codeArray = [];
         this.otherArray =[]; 
         this.useArray = [];
         this.tempArray = [];
         this.firstHalfHtmlArray = [];
         this.secondHalfHtmlArray = [];
         this.standardKeys = ['Use', 'Intro', 'Code', 'Content', 'Style']
 
         this.helperFunction = function(name, codeValue){
             if( codeValue.tag.length > 0){
                 if (codeValue.tag === 'P' || (codeValue.tag[0] === 'H' && codeValue.tag.length >=2 && Number.isInteger(codeValue.tag[1]))){
                     this[name].push(('<' + codeValue.tag.toLowerCase() + '>') + (codeValue.content) + ('</' + codeValue.tag.toLowerCase() + '>'));
                 }
                 else if (codeValue.tag === 'IMG'){
                     
                 }
                 else if (codeValue.tag[0] === '/'){
                     this[name].push( codeValue.content + '<' + codeValue.tag.toLowerCase() + '>');
                 }
                 else{
                     this[name].push('<' + codeValue.tag.toLowerCase() + '>' + codeValue.content);
                 }
             }
         }
     }
 
     /**
      * Manipulates the array passed in via the parser to write to the objects for later injection via generator. Objects and arrays specified 
      * via the constructor.
      **/
     format() {
         let pages;
         if (this.args[0] !== 'undefined' && this.args[0].length > 0){ 
             pages = JSON.parse(fs.readFileSync(this.args[0], 'utf-8'));
             if (pages.length > 0 && pages !== 'undefined'){
                 for (let pageNumber = 0; pageNumber < pages.length; pageNumber++){
                     let page = pages[pageNumber];
                     let keysArray = Object.keys(page);
                     let codeValues;
                     let tempObject;
 
                     for (let i = 0; i< keysArray.length; i++){
                         if (keysArray[i] === 'name'){
                             this.name = page[keysArray[i]];
                         }
                         else if (keysArray[i] === 'TS' || keysArray[i] === 'HTML'){
                             tempObject = page[keysArray[i]];
                             if (tempObject.length > 0){
                                 codeValues = Object.values(tempObject[0]);
                                 if (keysArray[i] === 'TS'){
                                     this.ts = codeValues[0];
                                 }
                                 else if(keysArray[i] === 'HTML'){
                                     this.html = codeValues[0];
                                 }
                             }
                         }
                         else{
                             tempObject = page[keysArray[i]]; 
                             if( tempObject.length > 0){
                                 codeValues = Object.values(tempObject);
                                 //create arrays for standard subheaders
                                 if (this.standardKeys.indexOf(keysArray[i]) > -1){
                                     for (let j = 0; j < codeValues.length; j++){
                                         if (codeValues[j] !== 'undefined' && keysArray[i] !== 'undefined'){
                                             this.helperFunction(keysArray[i].toLowerCase() + 'Array', codeValues[j]);
                                         }
                                     }
                                 }
                                 
                                 //create arrays for nonstandard subheaders
                                 else{
                                     this.tempArray = [];
                                     for (let j = 0; j < codeValues.length; j++){
                                         if (codeValues[j] !== 'undefined' && keysArray[i] !== 'undefined'){
                                             this.helperFunction('tempArray', codeValues[j]);
                                         }
                                     }
                                     this.otherArray.push(this.tempArray);
                                 }
                             }
                         }
                     }
                     this._writing();
                 }
             }
         }
     }
 
     /** Writes a read me in source file using markdown for future sync via generator-sync */
     async _writing() {
         this.firstHalfHtmlArray.push(this.introArray + this.useArray);
         this.secondHalfHtmlArray.push(this.contentArray + this.styleArray + this.codeArray + this.otherArray);
 
             this.fs.copyTpl(
                 this.templatePath('../../templates/readMe-template.md'),
                 this.destinationPath(`../src/${(this.name).toLowerCase().split(' ').join('-')}/${(this.name).toLowerCase().split(' ').join('-')}.md`),
                 {
                    name: this.name,
                    firstHalfContent: ((toMarkdown(this.firstHalfHtmlArray[0]).split(',').join('')).split(`\n\n`).join("\n")).split(`\n\n`).join("\n"),
                    secondHalfContent: ((toMarkdown(this.secondHalfHtmlArray[0]).split(',').join('')).split(`\n\n`).join("\n")).split(`\n\n`).join("\n"), 
                    htmlCode : this.html,
                    tsCode : this.ts,
                 }
             )
         };
 };
 
 module.exports =  ComponentGenerator