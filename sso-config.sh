#!/bin/bash
# Sets sp_entity id on site install

# takes site name as an argument
# $1 = site name
# $2 = environment

# site_alias="@$1.$2"
# Finds site id for selected Acquia site
site_path="Site path"
uri_prefix=""

if [ "$2" == "01dev" ] || [ "$2" == "01test" ];
then
    env_prefix="01"
    uri_prefix="${2#$env_prefix}-"
fi;

while read line
do
    if echo $line | grep -q "$site_path";
    then
        new_line=$(echo "$line" | sed 's/ //g')
        prefix=$(echo "$site_path:sites/g/files/indaly" | sed 's/ //g')
        site_id=$(echo "${new_line#$prefix}" | tr '\r' ' ' | sed 's/ //g')
    fi;
done < <(/mnt/www/html/creighton"$2"/vendor/bin/drush @self core:status --uri="$1"."$uri_prefix"creighton.acsitefactory.com --no-interaction -v --ansi)

eval "/mnt/www/html/creighton"$2"/vendor/bin/drush @self cim -y --uri="$1"."$uri_prefix"creighton.acsitefactory.com --no-interaction -v --ansi"

# Sets sp_entity_id for ACSF SSO into the selected site
eval "/mnt/www/html/creighton"$2"/vendor/bin/drush @self cset samlauth.authentication sp_entity_id urn:acquia:acsf:saml:sp:creighton:"$2":"$site_id" -y --uri="$1"."$uri_prefix"creighton.acsitefactory.com --no-interaction -v --ansi"
