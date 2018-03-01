import { Component } from '@angular/core';

const NOTES: string = require('raw-loader!./demo-<%= routeName%>.md');

@Component({
    selector: 'demo-<%= routeName%>',
    templateUrl: './demo-<%= routeName%>.html',
})

export class Demo<%= componentName%>Component {
    <%- tsCode%>
    notes = NOTES;
}