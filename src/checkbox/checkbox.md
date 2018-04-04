*** HTML ***
# Checkboxes

## Use
Checkboxes are a type of selection control that allows selecting multiple options from a set. Utilize checkboxes
    for multiple choice selections and agreement selections. Avoid using checkboxes for selections in which a singular
    choice is desired.
See [Material Design Selection Controls](https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox) and [Angular Material Checkboxes](https://material.angular.io/components/checkbox/overview).
  
<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use if there are multiple options presented for selection
    
</td>
<td>
<h4 id="dont">Don't</h4>

* Don't use for single options use a Switch instead
    
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height"> 
            <div id="checkboxList" aria-label="Checkbox List">
                <mat-checkbox aria-describedby="checkboxList">Check me!</mat-checkbox> 
                <mat-checkbox aria-describedby="checkboxList">Check me too!</mat-checkbox> 
            </div>    
        </div>
    </mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p>&lt;div id="checkboxList" aria-label ="Checkbox List"&gt; </p>
            <p>    &nbsp; &lt;mat-checkbox aria-describedby="checkboxList"&gt;Check me!&lt;/mat-checkbox&gt; </p>
            <p>    &nbsp; &lt;mat-checkbox aria-describedby="checkboxList"&gt;Check me too!&lt;/mat-checkbox&gt; </p>
            <p>&lt;/div&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Style

* Horizontal group: options should be separated by 16px of space on the right
* Vertical group: options should be separated by 16px of space below
* All Selection Controls use Accent color to indicate the selected state.

## Content
* Use short, succinct labels for options; groups can be preceded by a heading and/or informational text. Progressively disclose longer descriptions when possible.

## Accessibility
* Assign a unique ID within the enclosing div for the checkboxes
* Assign a descriptive aria-label within the enclosing div for the checkboxes
* Reference that same ID within each checkbox using the aria-describedby tag
* Refer to Sample HTML for an example

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***