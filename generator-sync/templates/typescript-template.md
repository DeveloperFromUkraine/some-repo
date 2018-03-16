import { Component } from '@angular/core';
<%- additionalImports %>
@Component({
    selector: 'demo-<%= routeName%>',
    templateUrl: './demo-<%= routeName%>.html',
})

export class Demo<%= componentName%>Component {
    <%- tsCode%>
}

<%- externalTSCode %>