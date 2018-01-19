<br>
## Content

* Simple dialogs appears below and to the right of an icon on mouseover and selection. Unlike the confirmation, the
background is not usually darkened (however it will be for short term) . It remains open as long as the user is hovering
over the icon or the content inside. It no longer appears when the user mouses away from either the icon or content.
It does not require dismissal for the user to interact with the page (e.g. if keyboard focus is on a field, the field
remains active).

* Forms can be presented in a dialog (aka modal screen) when it's important to keep context and the form is relatively
small. For large or multi-step forms, navigate user to a new view page.
Forms in dialog should follow the same layout as forms not in dialogs
when cancel and delete are actions for the form, present a confirmation dialog when users attempt to execute a
destructive action, cancel (discard information) or delete. This dialog will come over top of the form within the dialog.


<br>
## Style

**Do**

* Do use flat buttons for dialog actions
* Do use short, succinct labels that are verbs
* Do use a titles on the dialog when it helps organize the description
* Do use only a description when a title isn't necessary
* For Simple dialogs, use only description text without a title
* Do use confirmation dialogs to inform the user of consequences or clarify desired action(s).

**Don't**

* Don't use raised buttons (except for forms in dialogs)
* Don't use a close button or a dark background on the simple dialog
* Don't use "Yes" or "No" for button actions, instead use verbs.
* Don't use a close icon

<br>
## Confirmation dialogs

Confirmation dialogs require users to explicitly confirm a choice. It is a modal that requires action before the system
 can move on. Confirmations appear modally (on a darkened background (called a scrim)) to indicate the content below is
 no longer interactive.

Options: with or without titles

<br>
## Simple dialog

Simple dialogs provide in-context assistance such as a definition of a complex term, details, or actions about a list
 item. Their intent is to help the user understand something that may not be clear without interrupting the users flow.

<br>
## Size

* Confirmation
  * maxWidth: 360px;
  * height: (auto)
* Simple: (TBD based on context)
* Forms
  * maxWidth: 672px;
  * height: (in research)
  * dialogs should not take 100% of the screen width or height (except in modal)
  * for implementing size: see [MatDialogConfig](https://material.angular.io/components/form-field/overview) in Angular
   Material docs for dialogs.
