#!/bin/bash
# Run scrubbing functions that fix issues with ACSF SSO login
# Assumes alias files are up-to-date - uses drush/sites to find site names and environments

environments=( dev test live )
for file in "drush/sites"/*
do
    siteName=${file#drush/sites/}
    siteName=${siteName%.site.yml}
    if [ $siteName != README.md ] && [ ${siteName:0:2} != 01 ]; 
    then
        for env in ${environments[@]}
        do 
            if grep -wq "$env" $file ;
            then
                echo "Scrubbing $siteName $env ..."
                drush @"$siteName"."$env" acsf-duplication-scrub-batch "$siteName" creighton
            fi;
        done
    fi;
done
