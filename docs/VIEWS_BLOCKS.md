# Views & Blocks

* Version: 1.0
* Created: 08/29/2018
* Last Updated: 08/29/2018
* Intended Audience: UCOM/DoIT

## Summary

Configuration management procedures for creating and modifying views and blocks in D8

## Procedure

### UCOM

1. Create/modify view or block.
2. Determine if it should be available on a single site, or should be made available to all sites on the D8 platform.
3. Coordinate with web developers. They will need to know the name of the view or block, and whether it should be made available on all sites, or should only be available on a single site.

### DoIT

#### If the block/view should only be available to a single site

1. Go to Configuration > Development > Configuration Synchronization.
2. Go to the Ignore tab.
3. If config_ignore.settings is not already in the list of ignored configuration files, add it.
4. Add the view/block configuration file to the list of ignored configuration files.
5. Save.

#### If the block/view should be available to all sites on the D8 platform

1. Run `drush @[siteName].[env] config:status` to ensure that the config export won't be exporting file changes we don't want to apply to the entire platform.
2. Keep any unwanted files listed in the config status from being exported by putting the file names on the Ignore tab under Configuration > Development > Configuration Synchronization.
3. Run `drush @[siteName].[env] cex`.
4. Pull the changes to your local environment using `drush cpull @[siteName].[env] @self`.
5. Commit the changes to version control.

<!-- ## See Also

* thing 1
* thing 2 -->

## Keywords

* view
* block
* configuration

[Home](/d8-platform/docs/UCOM/TABLE_OF_CONTENTS)