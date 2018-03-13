import { Component } from '@angular/core';
<%- additionalImports %>
@Component({
    selector: 'ign-<%= routeName%>',
    templateUrl: './demo-<%= routeName%>.html',
})

export class Demo<%= componentName%>Component {
    <%- tsCode%>
}

<%- externalTSCode %>