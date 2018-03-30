*** HTML ***

# Text fields

## Use
Text fields (aka Inputs) let users enter edit and select text including names currency email percents phone numbers urls and zip codes. Fields may be tied to specific formatting and /or masking. see [Material Design Text fields](https://material.io/guidelines/components/text-fields.html) and [Angular Material Inputs.](https://material.angular.io/components/input/overview) Text fields typically reside in forms but can appear in other places like dialog boxes and search.

<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use a width directive to adjust width to fit anticipated input 
* Use brief helper text in place of long labels
    
</td>
<td>
<h4 id="dont">Don't</h4>

* Don't use long labels; progressively disclose more info when further explanation is necessary
    
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <mat-form-field>
            <input matInput placeholder="Input">
        </mat-form-field>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;mat-form-field&gt;</p>
        <p>    &lt;input matInput placeholder=&quot;Input&quot;&gt;</p>
        <p>&lt;/mat-form-field&gt;</p>
    </mat-tab>
</mat-tab-group>

## Content

* Text field components should contain text. 

## Style
* Label (floating)
    * Input field label   
    * Shows after user has input a value on press and on focus
    * Text field labels display the type of input a field requires. Every text field should have a label.
    * Labels are aligned with the input line and always visible. They can be resting (when a field is inactive and empty) or floating.

* Label (resting)
    * Input field label   
    * Initial field label that rests in input until field is focused or value entered... becomes floating label

* Placeholder (hint) Text
    * Placeholder text rests in the input field until the user starts entering text. It may contain an action or an example such as a phone number or email address.
    * Shows on Press

* Input Text
    * Text entered into a text field is called input text.
   
* Input Line
    * The input line provides the accordance for users to enter a value below the input text
        
* Helper Text (optional)
    * Helper text gives context about a field’s input such as how the input will be used.
        
* Component should be set to "accent" theme; will show on Focus state
    * (error will use "warn" theme out of box)
    

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***