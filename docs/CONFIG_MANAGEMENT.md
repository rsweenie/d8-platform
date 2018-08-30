# Configuration Management

* Version: 1.0
* Created: 08/30/2018
* Last Updated: 08/30/2018
* Intended Audience: DoIT

## Summary

Configuration management best practices

## Best Practices

1. Always check configuration status before importing or exporting configuration. This can be done in two ways:
    * From the command line - from inside the VM, run `drush config:status`.
    * From the drupal UI - Configuration > Development > Configuration Synchronization
2. If you are uncertain whether or not your config status is good to export, *please ask a teammate*.
3. Whenever possible, configuration should move from local > dev > test > production. Except in very specific circumstances (such as when people who do not have a Drupal 8 local environment setup are making changes to blocks or views), configuration changes should *not* regularly be made in the dev/test/production environments on ACSF and copied down to the local environment to be put into version control.

## See Also

* [Drush 9 Docs](https://drushcommands.com/drush-9x/)

## Keywords

* drush
* configuration
