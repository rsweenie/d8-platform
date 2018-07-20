#!/bin/bash
#
# Factory Hook: db-update
#
# The existence of one or more executable files in the
# /factory-hooks/db-update directory will prompt them to be run *instead of* the
# regular database update (drush updatedb) command. So that update command will
# normally be part of the commands executed below.
#
# Usage: post-code-deploy site env db-role domain custom-arg
# Map the script inputs to convenient names.
# Acquia hosting site / environment names
site="$1"
env="$2"
# database role. (Not expected to be needed in most hook scripts.)
db_role="$3"
# The public domain name of the website.
domain="$4"

# BLT executable:
blt="/var/www/html/$site.$env/vendor/acquia/blt/bin/blt"

# You need the URI of the site factory website in order for drush to target that
# site. Without it, the drush command will fail. Use the uri.php file provided by the acsf module to
# locate the URI based on the site, environment and db role arguments.
uri=`/usr/bin/env php /mnt/www/html/$site.$env/hooks/acquia/uri.php $site $env $db_role`

# Print a statement to the cloud log.
echo "$site.$env: Running BLT deploy tasks on $uri domain in $env environment on the $site subscription."

IFS='.' read -a name <<< "${uri}"

$blt drupal:update --environment=$env --site=${name[0]} --define drush.uri=$domain --verbose --yes

# Print a statement to the cloud log
echo "Running config import on $uri"

# Get sitename from uri
siteName="${uri%%.*}"

# Get alias env 
subEnv="${env#01}"

# Temporarily add samlauth to config ignore
drush @"$siteName.$subEnv" config:set config_ignore.settings ignored_config_entities.4 samlauth.authentication -y

# Config import any changes just pushed to the code base
drush @"$siteName.$subEnv" config:import vcs -y

# Scrubbing functions to fix login errors
drush @"$siteName.$subEnv" acsf-duplication-scrub-batch "$siteName" "$site"
echo drush @"$siteName.$subEnv" acsf-duplication-scrub-batch "$siteName" "$site"
# Push a notification to the #edw channel on slack
curl -X POST -H "Content-type: application/json" --data "{\"text\":\"Code updated on $siteName.$subEnv\"}" https://hooks.slack.com/services/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