*** HTML ***

# Buttons

Buttons trigger actions. They may display as text imagery or both. Flat buttons and raised buttons are the most commonly used types. see [Material Design Buttons](https://material.io/guidelines/components/buttons.html) and [Angular Material Buttons](https://material.angular.io/components/button/overview).

## Use
<table>
<tbody>
<tr>
<th>
Context
</th>
<th>
Button type
</th>
</tr>
<tr>
<td>
Dialogs cards
</td>
<td>
Use [flat buttons](https://material.io/guidelines/components/buttons.html#buttons-flat-buttons) in dialogs and most cards.
</td>
</tr>
<tr>
<td>
Inline forms
</td>
<td>
[Raised buttons](https://material.io/guidelines/components/buttons.html#buttons-raised-buttons) or [flat buttons](https://material.io/guidelines/components/buttons.html#buttons-flat-buttons) can be used for inline buttons or forms (in progress)
 </td>
</tr>
<tr>
<td>
Always available
</td>
<td>
If your app requires actions to be persistent and readily available you can use the floating action button or [persistent footer buttons](https://material.io/guidelines/components/buttons.html#buttons-persistent-footer-buttons).
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
    <div class="button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button routerLink=".">Link</a>
    </div>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;div class=&quot;button-row&quot;&gt;<p>
        <p>&lt;button mat-button&gt;Basic&lt;/button&gt;</p>
        <p>&lt;button mat-button color=&quot;primary&quot;&gt;Primary&lt;/button&gt;</p>
        <p>&lt;button mat-button color=&quot;accent&quot;&gt;Accent&lt;/button&gt;</p>
        <p>&lt;button mat-button color=&quot;warn&quot;&gt;Warn&lt;/button&gt;</p>
        <p>&lt;button mat-button disabled&gt;Disabled&lt;/button&gt;</p>
        <p>&lt;a mat-button routerLink=&quot;.&quot;&gt;Link&lt;/a&gt;</p>
    &lt;/div&gt;
    </mat-tab>
</mat-tab-group>

## Content

* Buttons should have wrapped functionality within images.

## Style

* Buttons are out of the box components and do not require further styling!

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***