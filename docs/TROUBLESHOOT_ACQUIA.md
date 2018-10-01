# Troubleshooting Acquia Error Messages

* Version: 1.0
* Created: 09/28/2018
* Last Updated: 09/28/2018
* Intended Audience: DoIT

## Summary

## Troubleshooting Table

| Error Message | Detail | Link |
| ------- |:-------:| -------:|
| `Error: Failed to clear the APC cache for servers web-1747.enterprise-g1.hosting.acquia.com, web-1748.enterprise-g1.hosting.acquia.com.` | The .htaccess file has been altered and the ACSF customizations have been removed, causing an inability to access the apc_rebuild.php file | `blt recipes:acsf:init:all` |

## See Also

* [Troubleshooting Terminal Error Messages](docs/TROUBLESHOOT_TERMINAL)

## Keywords

* bug
* Acquia
* Drupal
* PHP
* troubleshooting
