const fs = require('fs');

let lines = fs.readFileSync(`/Users/mariaha/Desktop/ignite-design-system/demo-app/app/app.component.ts`, {
    encoding: 'utf8'
}).split('\n');

const startIdx = lines.findIndex(val => /navItems = \[/.exec(val));
const itemCount = lines.slice(startIdx).findIndex(val => /\];/.exec(val));
const endIdx = itemCount + startIdx;

let navItems = lines.slice(startIdx + 1, endIdx);

navItems.push(`    { name: 'My awesome item!', route: '/my-awesome-route' },`);
navItems.sort();

lines.splice(startIdx + 1, itemCount - 1, ...navItems);

console.log(lines);
// fs.writeFileSync()