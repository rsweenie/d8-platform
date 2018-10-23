# Testing

* Version: 1.0
* Created: 08/29/2018
* Last Updated: 08/31/2018
* Intended Audience: UCOM

## Summary

Testing procedures and best practices

## Dev

* The [development environment](http://dev-creighton.acsitefactory.com) is intended for development and testing by the web devs.

* In the dev environment, the web developers will create content for testing. UCOM may be asked to verify a feature visually, but as development is still in progress, and code changes are made rapidly in this environment, it should _not_ be used for testing feedback. Tickets should never be created based on the status of the development environment.

## Test

* Testing of code changes will be performed in the test environment.

* The code in the test environment should mirror as closely as possible the state of the production environment.

* For code changes, user acceptance testing (UAT) should be performed in this environment.

* When UAT testing is being performed, the Wrike parent ticket should have the status `User Acceptance Testing`. The testing subtask should contain testing criteria for the parent ticket. Subtasks created in the testing ticket should have a status of `New`.

* Testing feedback should attempt to remain relevant to the parent task. Each feedback item should be added as a subtask in the testing ticket. Unrelated bugs or issues discovered during testing should be added as a new ticket. Web developers can assist if there are questions on whether a particular feedback item is relevant to the parent ticket or whether it should be a new ticket.
    * Example testing subtasks:
        * Styles
            * Font size and color do not match mockup, should be 18px $darkBlue
        * Warning when adding content
            * There was a warning when I saved the content page after editing. Screenshot attached. http://contenttest-dev.acsitefactory.com/content-page-bc

## Prod

* New sites are built in production.

* New content is added to sites in production.

* To add content to sites that are live, there are two options:
    * Create the content, but leave it "unpublished" until it is ready for production.
    * Clone the site, and build the content directly in the cloned site. Once the new content is ready to go live, the cloned site will take the place of the original.

* If there are problems with content in production and code changes are required, the site will be staged down to the test and dev environments for testing.

## Keywords

* testing
* UAT

[Home](/d8-platform/docs/UCOM/TABLE_OF_CONTENTS)
