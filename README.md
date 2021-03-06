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
* Fix GCP firewall rules issue

## GCP

Create a Project

Create a repo:
```sh
gcloud source repos create <puppet-sandbox>
```

Push to repo:
```
git remote add google <source repo url>
git push --all google
```

Tag and Build Image:
```
docker tag api-node gcr.io/puppet-sandbox-241218/puppet-sandbox
```

```
gcloud builds submit "$(pwd)/api-node" --tag=gcr.io/puppet-sandbox-241218/puppet-sandbox
```

## Puppet

Setting up puppet:

* Create an Application, link to git repo
* Create an Application Group (for deploying a front end, as well as other moving pieces like a database)
* Create Environments for the group (Staging + Prod)
* Link to GCP Project

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
sudo usermod -aG docker ${USER}
su - ${USER}
```
