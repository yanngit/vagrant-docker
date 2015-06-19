FROM node:latest
##Use vagrant shared folder at build time rather than using the VM mounted folder with vagrant dynamically
COPY . /usr/src/app
WORKDIR /usr/src/app
##Install your application's dependencies
RUN npm install
RUN mkdir -p log
##Exposes our app port
EXPOSE 5000
##Replace this with your main "server" script file
CMD ["node", "app.js"]