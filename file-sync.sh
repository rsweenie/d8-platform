#!/bin/bash
# Copy files down from selected Acquia site

echo 'Please enter the alias of the site you would like to copy files from: '
read site_alias

# Gives @ to site alias if it's omitted
if !(echo $site_alias | grep -q "@");
then
    site_alias="@$site_alias"
fi;

# Finds public file path for selected Acquia site
public_files="Files, Public : "
declare file_path
while read line
do
    if echo $line | grep -q "$public_files";
    then
        prefix=$(echo "$public_files" | sed 's/ //g')
        new_line=$(echo "$line" | sed 's/ //g')
        file_path=${new_line#$prefix}
    fi;
done < <(drush $site_alias core:status)

# Copies images with image styles from the selected Acquia site to the local environment
drush rsync "$site_alias":/var/www/html/creighton.01live/docroot/sites/g/files/indaly711/files/ @self:/var/www/creighton/docroot/sites/default/files/ -y
