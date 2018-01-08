# Dialogs

Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. see [Material Design Dialogs](https://material.io/guidelines/components/dialogs.html) and [Angular Material Dialogs](https://material.angular.io/components/dialog/overview)

## Use

Use dialogs to progressively disclose additional information, prompt users to take action or confirm choices that may be destructive or have far reaching consequences. Dialogs can also be used to present modal forms when it is important user stays in context.

**Do**

1. Do use flat buttons for dialog actions
2. Do use short, succinct labels that are verbs
3. Do use a titles on the dialog when it helps organize the description
4. Do use only a description when a title isn't necessary
5. For Simple dialogs, use only description text without a title
6. Do use confirmation dialogs to inform the user of consequences or clarify desired action(s).

**Don't**

7. Don't use raised buttons (except for forms in dialogs)
8. Don't use a close button or a dark background on the simple dialog
9. Don't use "Yes" or "No" for button actions, instead use verbs.
10. Don't use a close icon

## Code

## Types

There are two types of dialogs with a few options: confirmation dialogs, and simple dialogs

### Confirmation dialogs

Confirmation dialogs require users to explicitly confirm a choice. It is a modal that requires action before the system can move on. Confirmations appear modally (on a darkened background (called a scrim)) to indicate the content below is no longer interactive.

Options: with or without titles

### Simple dialog

Simple dialogs provide in-context assistance such as a definition of a complex term, details, or actions about a list item. Their intent is to help the user understand something that may not be clear without interrupting the users flow.

#### Implementation
Simple dialogs appears below and to the right of an icon on mouseover and selection. Unlike the confirmation, the background is not usually darkened (however it will be for short term) . It remains open as long as the user is hovering over the icon or the content inside. It no longer appears when the user mouses away from either the icon or content. It does not require dismissal for the user to interact with the page (e.g. if keyboard focus is on a field, the field remains active).


### Forms in dialog
Forms can be presented in a dialog (aka modal screen) when it's important to keep context and the form is relatively small. For large or multi-step forms, navigate user to a new view page.
Forms in dialog should follow the same layout as forms not in dialogs
when cancel and delete are actions for the form, present a confirmation dialog when users attempt to execute a destructive action, cancel (discard information) or delete. This dialog will come over top of the form within the dialog:

## Style

### Size

* Confirmation
  * maxWidth: 360px;
  * height: (auto)
* Simple: (TBD based on context)
* Forms
  * maxWidth: 672px;
  * height: (in research)
  * dialogs should not take 100% of the screen width or height (except in modal)
  * for implementing size: see [MatDialogConfig](https://material.angular.io/components/form-field/overview) in Angular Material docs for dialogs.
