# Shell Scripts

## drush-alias.sh

This shell script is used to generate drush aliases for sites created on ACSF. It will prompt for the site name, and generate a file containing the aliases for all three environments. Alias files are located in the `drush/sites/` directory, and have a naming convention of `$sitename.site.yml`. If a site is not intended to be used in all environments, the extraneous environments should be manually removed from the generated file.

## acsf-duplication-scrub-batch.sh

This shell script checks all of the files in the `drush/sites/` directory, looks at each file to see what environments each site has an alias for. It then runs the `acsf-duplication-scrub-batch` on each available environment for each site. The drush-alias script may need to be utilized to update the alias files prior to running this script.