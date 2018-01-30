
#### New Components
* Verify that your component is not a sub-component of an already existing one.
* If not, create a new Directory in the Demo Directory.
* Prefix the directory's title with "demo-".
* Separate all components within the title with hyphens, i.e. "demo-app-example".
* Include the following in your directory:
    * CSS File
    * HTML File
    * TS Component File
    * ReadMe File
* Import your directory into the app.module and demo.module files of the app and demo directories.
* Create declarations within the modules for the imports.
* Add the correct route and name to navitem array within the app.component.ts file.
* Double check your work before you commit!
<br><br>

#### Sub-Components
* If your component is a sub-component, check for a expansion panel component at the end of the component's HTML File.
* If one exists, add another panel for your sub-component.
* If one does not exist, [create a new one](https://material.angular.io/components/expansion/overview).
* Update any style or content descriptions as needed.
* Double check your work before you commit!