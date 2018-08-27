# Creating New Sites in Acquia Cloud Site Factory

## Version 1.0

### Last Updated: 7/17/2018

### Intended audience: UCOM

In Acquia Cloud Site Factory, new websites should first be created in your production environment, and then staged to your non-production environments for thorough testing before deploying them to production.
Production: creighton.acsitefactory.com

1. Select one of the groups from the menu on the left side of the screen

2. Select the “Create a new site” button on the top right of the screen

3. Enter the site name. `!important` Select the creighton installation profile from the list at the bottom of the screen

4. Click the `Create site` button at the bottom of the screen. `!caution` Coordinate with devs on this step: The site should now be staged to the dev and test environments for testing prior to launch, but care should be taken - staging sites down to dev or test will wipe all sites currently in those environments and only copy down the sites selected for staging. https://docs.acquia.com/site-factory/workflow/staging/
