# Common D8 Commands

All BLT and Drush commands, with the exception of `blt vm`, should be run from inside the VM.

## Table of Contents

* [BLT](#blt)
* [Drush](#drush)
* [Vagrant](#vagrant)

## BLT

### Version: 9.1.1

| Command | Purpose | Example |
| ------- |:-------:| -------:|
| `blt vm` | Initiate and set up virtual machine for blt projects | `blt vm` |
| `blt deploy` | Build deployment artifact, and push the code to the ACSF repository | `blt deploy` |
| `blt drupal:install` | Installs Drupal and sets correct file/directory permissions | `blt drupal:install` |
| `blt aliases` | Generates ACSF site aliases | `blt recipes:aliases:init:acquia` |
| `composer update acquia/blt` | Updates blt | `composer update acquia/blt --update-with-dependencies` |

## Drush

### Version: 9.3.0

| Command | Purpose | Example |
| ------- |:-------:| -------:|
| `drush $target uli`    | User login to target site | `drush @contenttest.01live uli` |
| `drush sql:sync $target $destination`    | Copy the database from a remote site down to another environment | `drush sql:sync @contenttest.01live @self` |
|  `drush cex` | Export active configuration from the local environment database to the config directory | `drush cex` |
|  `drush cim` | Import configuration from the config directory to the active configuration in the local environment database | `drush cim` |

## Vagrant

### Version: 2.0.0

| Command | Purpose | Example |
| ------- |:-------:| -------:|
| `vagrant up` | Starts and provisions the virtual machine | `vagrant up` |
| `vagrant ssh` | Connect to the virtual machine via SSH | `vagrant ssh` |
| `vagrant reload` | Restarts virtual machine, loads new Vagrantfile | `vagrant reload` |
| `vagrant halt` | Stops the virtual machine | `vagrant halt` |
| `vagrant destroy` | Stops and deletes all traces of the virtual machine | `vagrant destroy` |