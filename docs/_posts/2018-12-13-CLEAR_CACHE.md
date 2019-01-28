---
layout: default
title:  "Clearing Cache"
categories: [Process, ACSF]
---
{% include home.html %}
# Clearing Cache
* Version: 1.0
* Created: 12/13/2018 KLM
* Last Updated: 12/13/2018
* Intended Audience: UCOM

## Summary

Clearing Cache often is needed when content has been updated but is not sowing like expected

## Prerequisites

 1. URL of domain needing refresh
 2. access to domain needing refresh

## Procedure
**From subdomain**
1. Visit subdomain.creighton.edu/user
2. enter in blue creditials
3. Hover over the drupal drop
4. click flush all cache's
- this is the best way to make sure everything is updated, however you can instead hover over this and then select a specific cache to clear.

![cache options](images/clear_cache_options.png "cache images")

** from Aquia Cloud Site Factory **
1. log in to ACSF
2. select the environment the domain you need to update lives on, for example Dev, Test or live
3. find the domain you need to update
4. click the arrow to the left of login below the site
5. select clear cache's
6. confirm clear chaces
![cache options](images/clear_cache_acsf.png "cache images")


## Keywords

* debugging
