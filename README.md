# vagrant-docker
Test project to deploy docker containers with vagrant
## Requirements for windows
- Install VirtualBox
- Install Boot2Docker (optionally, if you want to test docker containers out of vagrant)
- Install Vagrant
- Install rsync and ssh package with cygwin

##Usage
Run the following command using cygwin (or else if rsync and ssh are available) : 

`vagrant up`

Then you can acces to a minimalist http server with the address : `http://localhost:8181`
