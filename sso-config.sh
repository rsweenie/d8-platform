#!/bin/bash
# Copy files down from selected Acquia site

# takes site name as an argument
# $1 = site name

site_alias="@$1.01live"
# Finds site id for selected Acquia site
site_path="Site path"
while read line
do
    if echo $line | grep -q "$site_path";
    then
        new_line=$(echo "$line" | sed 's/ //g')
        prefix=$(echo "$site_path:sites/g/files/indaly" | sed 's/ //g')
        site_id=$(echo "${new_line#$prefix}" | tr '\r' ' ' | sed 's/ //g')
    fi;
done < <(drush $site_alias core:status)

# If alias is incorrect, the return will be
# [preflight] The alias @$site_alias could not be found.

# Sets sp_entity_id for ACSF SSO into the selected site
echo "drush ($site_alias) cset samlauth.authentication sp_entity_id urn:acquia:acsf:saml:sp:creighton:01live:($site_id) -y"

eval drush $site_alias cset samlauth.authentication sp_entity_id "urn:acquia:acsf:saml:sp:creighton:01live:$site_id" -y
