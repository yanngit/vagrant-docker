# vagrant-docker
Test project to deploy docker containers with vagrant
## Requirements for Windows
- VirtualBox
- Boot2Docker (optionally, if you want to test docker containers out of vagrant)
- Vagrant
- Install rsync and ssh package with cygwin

## Requirements for Linux
- VirtualBox
- Vagrant
- rsync 
- ssh

##Usage

###docker-vertex
Docker-vertex is running the web server vertx in a container without database
Run the `vagrant up` command in the *docker-vertex* folder using cygwin (or else if rsync and ssh are available). 

Then you can acces to a minimalist http server with the address : `http://localhost:8181`

###docker-node
Docker-node is running a minimalist nodejs web server without database
Run the `vagrant up` command in the *docker-node* folder using cygwin (or else if rsync and ssh are available). 

Then you can acces to a minimalist http server with the address : `http://localhost:8282`

###docker-node-redis
Docker-node-redis is running a multi container application. It's composed of a redis container and a node container running a minimalist web app. The web app is just checking the health of the redis databse and disply it to the front page. 

Run the `vagrant up --no-parallel` command in the *docker-node-redis* folder using cygwin (or else if rsync and ssh are available). 

Then you can acces to a minimalist http server with the address : `http://localhost:8383`

##Under the hood
If you are using Windows, Vagrant will deploy a virtual machine in order to launch Docker containers. Because Docker is using LXC (linux containers) it can't run natively on windows. Thereby Vagrant is creating a host machine running Linux for Docker containers defined in the docker-host folder. If you are using Linux this virtual machine is not necessary and the Vagrantfile shouldn't be necessary. If you want to access this virtual machine you can log into with ssh by using the following : 
- IP address : 127.0.0.1
- Port : 2222
- login : docker
- password : tcuser

Once logged in you can type in docker command to monitor processes running inside. If you are using Linux there is no need to login with ssh (because there is no VM) and you can just type in a sheel docker commands to monitor your processes.
