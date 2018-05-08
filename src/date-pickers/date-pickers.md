*** HTML ***

# Date pickers

## Use

The datepicker allows users to enter a date either through text input or by choosing a date from the calendar. It also supports setting a date range. See [Material Design date pickers](https://material.io/guidelines/components/pickers.html#pickers-date-pickers) and [Angular Material datepicker](https://material.angular.io/components/datepicker/overview).
In code date pickers are out of the box Angular Material components with the exception of Date Range Picker which is a custom implementation for now. Date pickers are composed of a Text Field with an icon that opens a Date Picker when clicked.
Use date pickers to help users choose properly formatted dates.

* Date pickers are helpful for choosing a not-yet-known date in context so you can be influenced by the day of the week or week of the month you're trying to select.
    
* They are less helpful for known dates like birthdates. This date picker allows entering free-form and using the picker.
    
* For date ranges: where it is helpful to see both the start and end date
    * now: use two date pickers
    * future: will provide a date range picker to make it easier
        
    
Combinations of this setup can be used to compose a Date Range Picker which is detailed below.

<table>
<tbody>
<tr>
<td>
<h4 id="do">Do</h4>

* Use when choosing a not-yet-known date in context so you can be influenced by the day of the week or week of the month  

</td>
<td>
<h4 id="dont">Don't</h4>

* Use for known dates if not needed. Dates can also be typed.
    
</td>
</tr>
</tbody>
</table>

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <mat-form-field>
            <input matInput [matDatepicker]="picker" placeholder="Choose a date">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
    </mat-tab>
    <mat-tab label="HTML">
        <p>&lt;mat-form-field&gt;</p>
        <p>    &lt;input matInput [matDatepicker]=&quot;picker&quot; placeholder=&quot;Choose a date&quot;&gt;</p>
        <p>    &lt;mat-datepicker-toggle matSuffix [for]=&quot;picker&quot;&gt;&lt;/mat-datepicker-toggle&gt;</p>
        <p>    &lt;mat-datepicker #picker&gt;&lt;/mat-datepicker&gt;</p>
        <p>&lt;/mat-form-field&gt;</p>
    </mat-tab>
</mat-tab-group>

## Content

* Date picker contain numeric dates. 

## Style

* No styling needed for this component!

*** TypeScript *** 



*** ExternalTypeScript ***

*** Imports ***