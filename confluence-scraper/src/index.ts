/* Notes: Must add username, password, and generator-component directory
 below. */
import { Scraper } from  '../../scraper-component/src/scraper' 
import { Parser } from '../../parser-component/src/index'
let util = require('util');
let fs = require('fs');
var yeoman = require ('yeoman-environment');
var env = yeoman.createEnv();

let scraper = new Scraper();
let parser = new Parser();

const args = process.argv;
if (args.length < 0) {
    console.log('Error: Missing Username and password; Run command:\nnpm start [username] [password]');
}
else {
    //add ulti username and password here
    let user = '';
    let pass = '';

    scraper.scrape(user, pass).then((res: any) => {
        if (res === null) {
            console.log('Error: Unable to retrieve data from confluence. Wrong username and/or password?');
        }
        else {
            fs.writeFileSync('./raw.json', util.inspect(JSON.stringify(res)) , 'utf-8');
        
            let result = parser.parse(res);

            //use for troubleshooting generator directories and linking (i.e. can't find module error)
            /*env.lookup(function () {
                console.log(env.get('component:app'))
            });*/
            fs.writeFileSync('./data.json',JSON.stringify(result) , 'utf-8');

            //add full file path to generator component here
            env.register(require.resolve(''), 'component:app');
            env.run(`component:app ./data.json`);
            
            //fs.writeFileSync('./data.json', util.inspect(JSON.stringify(result)) , 'utf-8');
        }
    })
}




