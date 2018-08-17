# Dev D8 Development Process

## Local

* All changes should be made in the local environment. Configuration changes could easily be lost or overwritten if work is done in any environment on Acquia
* Run `drush sql:sync @$sitename.$env @self` to copy the db from the desired site on Acquia down to the local environment
* Make the desired code changes
* Commit changes to git, and push to the github cu-webteam [repository](https://github.com/cu-webteam/d8-platform/)
    * Using the feature-branching workflow
        - [https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
    * !important Code reviews on pull requests
* Run `blt deploy`
    * Do you want to create a tag? `n`
    * Enter a valid commit message 
    * Enter the branch name for the deployment artifact [master-build]
* Deploy to the master-build branch to see changes in dev without needing to run the Update Code process on ACSF. The only reason to run Update Code on dev would be if we needed to run the db-update hook, in which case we can run the Update Code process while still selecting the master-build branch.

## Dev

* The master-build branch should remain deployed on ACSF Dev by default
* Code changes should be visible on ACSF Dev as soon as the blt deploy process is complete
* “Unit testing” is completed in the dev environment
    * Devs push up code changes and verify, adding content if necessary
    * Devs pass a link to UCOM, where it is verified visually without adding content
    * In order for this to work, we need to know the testing criteria!

## Stage

* Run blt deploy
    * Do you want to create a tag? `y`
    * Enter a valid commit message 
    * Enter the tag name for the deployment artifact E.g., 1.0.0-build
        - Tag names use the following format: YearMonthDay.version, ex: `20180717.1`
        - Each subsequent tag push on that day should increment the version
* Update code on stage, selecting the tag that was just deployed
    * [https://www.test-creighton.acsitefactory.com/](https://www.test-creighton.acsitefactory.com/) > Administration > Update Code
    * Select the tag from the dropdown
* “Integration testing” is completed in the stage environment
    * Devs push up code changes and verify
    * Devs inform UCOM of the site(s) to use for testing
    * UCOM verifies style and functionality

## Prod

Update code on production, selecting the tag that was just deployed

* [https://www.creighton.acsitefactory.com/](https://www.creighton.acsitefactory.com/) > Administration > Update Code
* Select the tag from the dropdown
