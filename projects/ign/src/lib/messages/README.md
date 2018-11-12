## Use
  The ign-messages is used to display error messages that are maually reported or on the submitting of a form.

  ### Implementation
    - Acquire a reference to the component from your template, using Angular's `@ViewChild` decorator to be able to invoke its public API.
    - Remove any error handling logic you may have in your submit handler and let the error propagate up. After that is done, just add <ign-messages> wherever you would like to display the error messages and pass your submit handler's returned promise or observable into the handleErrors(...) method.
    - Alternatively, use the report method to manually report errors to ign-messages.

  ### Accessibility
    - Since ign-messages wraps around ign-error-banner, it has an aria-live region of "assertive".

## API
  ### Selector
    * ign-messages

  ### Exported As
    * MessagesComponent
    
  ### Properties
    * @ViewChild('messages') messages: MessagesComponent
      * Reference to component, used to access public API (see implementation)

## Implementation HTML
  <form (ngSubmit)="messages.handleErrors(handleSubmit(form))">
    <ign-messages #messages></ign-messages>
    ...
    <button type="button" (click)="doSomething()">Click Me!</button>
    <button type="submit">Submit Form!</button>
  </form>

## Implementation TS
  @Component({})
  export class MyComponent {
    @ViewChild('messages') messages: MessagesComponent;
    ...

    async doSomething() {
    this.messages.report({ type: 'error', message: 'Something happened!' });
    }

    async handleSubmit(data: SomeData) {
    await this.apollo.mutate(...).take(1).toPromise();
    this.log.success(`It worked!`);
    }
  }