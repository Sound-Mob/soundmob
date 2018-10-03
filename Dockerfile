# base image
FROM node:carbon

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.2.3
#RUN npm install -g ajv@^6.0.0

# add app
COPY . /usr/src/app

# expose port that app runs on for the world
EXPOSE 8080


# start app
CMD ng serve --host 0.0.0.0

# us.gcr.io/sound-mob12282/soundmob:1.0

# rebuild after changes
# remember to reversion or use :latest
# docker build -t us.gcr.io/sound-mob12282/soundmob:latest .

# push image to gcloud
# docker push us.gcr.io/sound-mob12282/soundmob:latest

# show running docker process 
# docker ps

# show docker images
# docker image ls