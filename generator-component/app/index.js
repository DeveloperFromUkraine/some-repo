/** Run yo component in the terminal to run the generator. 
 * Requires finished migration of playground to source in IDS.
 * 
 * Steps:
 * Run rm -rf node_modules and npm link base directory
 * Then run rm -rf node_modules and npm link from generator-component directory.
 * Then run npm link generator-component from generator-component directory
 * Then run npm link generator-component from base directory.
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
    }

    /**
     * Manipulates the array passed in via the parser to write to the objects for later injection via generator. Objects and arrays specified 
     * via the constructor.
     **/
    format() {
        //this whole thing needs refactored - need to implement singular function for mismo funcionalidad
        let pages;
        if (this.args[0] !== 'undefined' && this.args[0].length > 0){ 
            pages = JSON.parse(fs.readFileSync(this.args[0], 'utf-8'));
            if (pages.length > 0 && pages !== 'undefined'){
                let page = pages[0];
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
                        //create arrays for standard subheaders
                        tempObject = page[keysArray[i]]; 
                        if( tempObject.length > 0){
                            codeValues = Object.values(tempObject);
                            if (keysArray[i] === 'Use'){
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.useArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){
                                            
                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.useArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.useArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                            }

                            else if (keysArray[i] === 'Style'){
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.styleArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){
                                            
                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.styleArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.styleArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                            }

                            else if (keysArray[i] === 'Content'){
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.contentArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){
                                            
                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.contentArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.contentArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                            }

                            else if (keysArray[i] === 'Code'){
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.codeArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){
                                            
                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.codeArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.codeArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                            }

                            else if (keysArray[i] === 'Intro'){
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.introArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){

                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.introArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.introArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                            }

                            else{
                                this.tempArray = [];
                                for (let j = 0; j < codeValues.length; j++){
                                    if( codeValues[j].tag.length > 0){
                                        if (codeValues[j].tag === 'P' || (codeValues[j].tag[0] === 'H' && codeValues[j].tag.length >=2 && Number.isInteger(codeValues[j].tag[1]))){
                                            this.tempArray.push(('<' + codeValues[j].tag.toLowerCase() + '>') + (codeValues[j].content) + ('</' + codeValues[j].tag.toLowerCase() + '>'));
                                        }
                                        else if (codeValues[j].tag === 'IMG'){
                                            
                                        }
                                        else if (codeValues[j].tag[0] === '/'){
                                            this.tempArray.push( codeValues[j].content + '<' + codeValues[j].tag.toLowerCase() + '>');
                                        }
                                        else{
                                            this.tempArray.push('<' + codeValues[j].tag.toLowerCase() + '>' + codeValues[j].content);
                                        }
                                    }
                                }
                                this.otherArray.push(this.tempArray);
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Needs fixed. Writes to readMe, TS, and HTML files for component page in the playground based off of the parsed data
     * skimmed off of confluence. 
     **/
    async writing() {
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