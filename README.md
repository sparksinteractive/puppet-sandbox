# puppet-sandbox

Sandbox for build pipelines with Puppet

### Requirements

* Github
* Puppet Account
* GCP Account
* AWS Account

### Workflow

* Create git repo
* Push initial code to git
* Checkout git branch
* Build pipeline with Puppet
* Push code the branch
* Puppet will build, test, deploy to GCP and/or AWS

### TODO

* Setup a GCP-only pipeline
* Test with Bitbucket
* Build tests

## Puppet

Setting up puppet:

* Create an Application, link to git repo
* Create an Application Group (for deploying a front end, as well as other moving pieces like a database)
* Create Environments for the group (Staging + Prod)
* Link to GCP Project
** First, push container to GCP
