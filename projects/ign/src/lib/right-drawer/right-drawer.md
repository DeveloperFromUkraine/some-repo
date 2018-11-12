*** HTML ***
# Right Drawer

## Use
Right drawer components are used to display summarized information and navigational linkage to other pages
    and components when a selected item is clicked on.

## Sample
<mat-tab-group>
    <mat-tab label="Component Sample">
        <div class="tab-height">
            Look to the right!
            <ign-list-content>
                <ign-list-content-panel>
                    <ign-right-drawer
                            title="I am a title."
                            [startOpen]="true">
                        <ign-list-selection-item
                                key="1234"
                                title="I am a right drawer."
                                subtitle="I am a right drawer subtitle."
                        >
                        </ign-list-selection-item>
                    </ign-right-drawer>
                </ign-list-content-panel>
            </ign-list-content>
        </div></mat-tab>
    <mat-tab label="HTML"><div class="tab-height">
        <table style="width:100%">
            <p> Look to the right!</p>
            <p> &lt;ign-list-content&gt;</p>
            <p> &nbsp;&nbsp; &lt;ign-list-content-panel&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;  &lt;ign-right-drawer</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title="I am a title."</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [startOpen]="true"&gt; </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ign-list-selection-item </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  key="1234" </p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  title="I am a right drawer."</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  subtitle="I am a right drawer subtitle."</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ign-list-selection-item&gt;</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/ign-right-drawer&gt;</p>
            <p> &nbsp;&nbsp; &lt;/ign-list-content-panel&gt;</p>
            <p>  &lt;/ign-list-content&gt;</p>
        </table>
    </div></mat-tab>
</mat-tab-group>

## Content

* API:

    * attributes:
        * startOpen: boolean
        * open: boolean (implicit state, but exposed if needed)
        * title: string

    * methods:
        * toggleDrawer(boolean)
        * closeDrawer()
        * openDrawer()

    * emitters:
        * openChange(boolean)
* Right drawer components' content should be concise, use links, and or provide basic informational content.


## Style

* Right drawer components should always be located to the right.
* Right drawer components should be able to be closed.

*** TypeScript *** 

*** ExternalTypeScript ***

*** Imports ***