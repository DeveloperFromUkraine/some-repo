*** HTML ***

<h1><%- name %></h1>
<%- firstHalfContent %>
<h2>Sample</h2>
    <mat-tab-group>
        <mat-tab label="Component Sample">
            <%- htmlCode %>
        </mat-tab>
        <mat-tab label="HTML">
            <%= htmlCode %>
        </mat-tab>
        <mat-tab label="TS">
            <%= tsCode %>
        </mat-tab>
    </mat-tab-group>
<%- secondHalfContent %>

*** TypeScript *** 

<%- tsCode %>

*** ExternalTypeScript ***

*** Imports ***