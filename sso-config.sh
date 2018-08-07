#!/bin/bash
# Copy files down from selected Acquia site

echo 'Please enter the name of the production site on which to configure SSO: '
read site_name
site_alias="@$site_name.01live"
# Finds site id for selected Acquia site
site_path="Site path"
while read line
do
    if echo $line | grep -q "$site_path";
    then
        echo "LINE: $line"
        # prefix=$(echo "$site_path sites/g/files/indaly" | sed 's/ //g')
        new_line=$(echo "$line" | sed 's/ //g')
        site_id=$(echo "${new_line#'Site path        : sites/g/files/indaly'}" | tr '\r' ' ' | sed 's/ //g')
        echo "Site ID: $site_id"
    fi;
done < <(drush $site_alias core:status)

# If alias is incorrect, the return will be
# [preflight] The alias @$site_alias could not be found.

# Sets sp_entity_id for ACSF SSO into the selected site
# eval drush @site_alias cset samlauth.authentication sp_entity_id "urn:acquia:acsf:saml:sp:creighton:01live:$site_id"
