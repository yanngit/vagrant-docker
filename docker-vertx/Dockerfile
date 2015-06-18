FROM ubuntu:14.04
 
# Install dev tools: jdk, git etc...
RUN apt-get update && apt-get install -y openjdk-7-jdk git wget

# jdk7 is the default jdk
RUN ln -fs /usr/lib/jvm/java-7-openjdk-amd64/jre/bin/java /etc/alternatives/java
 
# Install vertx
RUN \
  mkdir -p /usr/local/vertx && cd /usr/local/vertx && \
  wget http://dl.bintray.com/vertx/downloads/vert.x-2.1.2.tar.gz -qO - | tar -xz
 
# Add vertx to the path
ENV PATH /usr/local/vertx/vert.x-2.1.2/bin:$PATH
 
WORKDIR /vagrant

#EXPOSE 8080

#Try to run ssh demon
 
CMD ["bash"]
