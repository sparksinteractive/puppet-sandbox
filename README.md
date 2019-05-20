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
