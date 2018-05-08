*** HTML ***

# Select inputs

## Use

A Select text field (aka dropdown menu) is a type of text field which offers a menu of choices from a moderately long list when only one selection is valid. [see Material Design Menus](https://material.io/guidelines/components/menus.html#menus-behavior) and [Angular Material Select](https://material.angular.io/components/select/overview)
In code the Select field uses the out of the box Angular Material implementation. In the Sketch library and Text Field can be made into a Select field. See [Text Fields](/display/IDS/Text+fields)

<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use Select inputs when seeing all available choices is not important or space is limited and only one choice is valid. 
* Use brief helper text in place of long labels
    
</td>
<td>
<h4 id="dont">Don't</h4>

* Don't use when knowing choices is important. Use [checkboxes](/display/IDS/Checkboxes). When it is important to see available choices use [radio buttons](/display/IDS/Radio+buttons)
    
</td>
</tr>
</tbody>
</table>

For large lists (e.g. over 100 items) use a [dialog](/display/IDS/Dialogs) with select list inside to accommodate more robust searches.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <mat-form-field>
        <mat-select placeholder="Favorite StarTrek Planet">
            <mat-option *ngFor="let planet of planets" [value]="planet.value">
                    {{ planet.viewValue }}
            </mat-option>
        </mat-select>
    </mat-form-field>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;mat-form-field&gt;</p>
        <p>&lt;mat-select placeholder=&quot;Favorite StarTrek Planet&quot;&gt;</p>
        <p>    &lt;mat-option &#42;ngFor=&quot;let planet of planets&quot; [value]=&quot;planet.value&quot;&gt;</p>
        <p>       {{ '{' }}{{ '{' }}planet.viewValue {{ '}' }}{{ '}' }}</p>
        <p>    &lt;/mat-option&gt;</p>
        <p>&lt;/mat-select&gt;</p>
        <p>&lt;/mat-form-field&gt;</p>
    </mat-tab>
    <mat-tab label="TS">
    <p>planets = [ </p>
        <p>{{ '{' }}value: 'vulcan-0', viewValue: 'Vulcan'{{ '}' }},</p>
        <p>{{ '{' }}value: 'romulus-1', viewValue: 'Romulus'{{ '}' }},</p>
        <p>{{ '{' }}value: 'qonos-2', viewValue: `Qo'noS`{{ '}' }}</p>
    <p>];</p>
    </mat-tab>
</mat-tab-group>

## Content

* Select inputs is out of the box and does not require additional content!

## Style

* Use same styling as [text fields](/display/IDS/Text+fields) Text should be brief. Avoid acronyms or codes unless they are generally understood.

*** TypeScript *** 
  planets = [
    {value: 'vulcan-0', viewValue: 'Vulcan'},
    {value: 'romulus-1', viewValue: 'Romulus'},
    {value: 'qonos-2', viewValue: `Qo'noS`}
  ];

*** ExternalTypeScript ***

*** Imports ***