# Deployment Process

* Version: 1.0
* Last Updated: 8/28/2018
* Intended Audience: DoIT

## Local

* Make code changes
* If configuration has changed, go to Configuration > Development > Configuration Synchronization, or run `drush config:status`
    - If there are more changed config files than the ones you wish to export, put the names of those files in the Ignore tab
    - export config using `drush cex`
* `git pull [remote] master` to get the most recent changes from the master branch
* Push changes on a feature branch to git
* Create a pull request
* Merge branch into master
* Switch to master branch using `git checkout master`
* Pull merged code from github using `git pull [remote] master`
* `blt deploy`
    - Do you want to create a tag? `n`
    - Enter a commit message
    - Enter a branch name `Press enter to push to master-build`

## Dev on ACSF

* Clear cache and verify changes in the dev environment

* The Update Code process does not need to be run unless we need to switch to a new branch/tag in dev or we need to run `db-update.sh`

## Test on ACSF

* Once code is verified on dev, a tag can be deployed

* `blt deploy`
    - Do you want to create a tag? `y`
    - Enter a commit message
    - Enter a tag name `yyyymmdd.version`

* Once the deploy process is complete, run the [Update Code](https://www.test-creighton.acsitefactory.com/admin/gardens/site-update/update) process on ACSF test
    - Select the tag that was just deployed from the dropdown under `Site Update Action`
    - Click the `Update` button

* Verify changes on test

## Prod on ACSF

* Once changes have been verified on test, run the [Update Code](https://www.creighton.acsitefactory.com/admin/gardens/site-update/update) process on ACSF prod
    - Select the tag that was just deployed from the dropdown under `Site Update Action`
    - Check the `Select this check box to confirm that you want to update your public-facing production environment.` box
    - Click the `Update` button
