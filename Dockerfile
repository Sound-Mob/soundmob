# base image
FROM node:carbon

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PORT 80
# ENV NODEENV production

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.2.3

# add app
COPY . /usr/src/app

# expose port that app runs on for the world
EXPOSE 80

# start app
#CMD ng serve --proxy-config proxy.conf.json --host 0.0.0.0 node server/app.js
CMD npm run testDeploy


# us.gcr.io/sound-mob12282/soundmob:1.0

# rebuild after changes
# remember to reversion with : or leave blank to default to latest
# docker build -t us.gcr.io/sound-mob12282/soundmob .

# push image to gcloud
# docker push us.gcr.io/sound-mob12282/soundmob:latest

# docker image ls
# docker container ls
# docker kill $(docker ps -q)

# update container
# 

# show running docker process 
# docker ps

# show docker images
# docker image ls

# gcloud commands to check the instances i have running
# gcloud compute instances list

# gcloud compute instances update-container {your-instance-here} --container-image {your-image-here (us.grc.io/whatever)}
