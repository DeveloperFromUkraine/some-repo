
## Content

* Error banners should be displayed when there was an issue executing an instruction, whether it is an error from
the front end or back end.
* Error banners should include mechanisms that allow the user to close the component.
* Error banners should not include informational, non-error messages.


## Style
* Error banners should be short and concise. Longer errors should be displayed in logs.
* If there are multiple errors, they should be displayed on the same banner in a list format.
* Error banners should be displayed along the top of the page or in the corners.
* Error banners should avoid overlapping any elements or content on the page.
* Error banners should maintain their formatting and red font, as to draw attention to the user that there was a problem.

## Accessibility
* Add a descriptive aria-label with the dismiss buttons tag 
* Refer to the Sample HTML for an example