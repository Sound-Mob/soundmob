# base image
FROM node:carbon

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV API_KEY 46194612
ENV ClientSecret cQhab-s-o7qS86YJibqwBNse
ENV ClientID 722337432918-jghn5kh97lndbar71k7k7ndcp53vtqbh.apps.googleusercontent.com
ENV Youtube AIzaSyBAV7zvekRAn13KNlXXFaTAYYasLz_3OTc
ENV SESSION_ID 1_MX40NjE5NDYxMn5-MTUzOTAzMzUzNjI0NH5hOU80aitkUTRCejNLYlVjQUJBZzRIVTR-fg
ENV TOKEN T1 == cGFydG5lcl9pZD00NjE5NDYxMiZzaWc9YWZjZTA1YWZiZmE2OWQ3NmY2ZmIzODQyNjg0NzMzZDMyZjkwZmY3YzpzZXNzaW9uX2lkPTFfTVg0ME5qRTVORFl4TW41LU1UVXpPVEF6TXpVek5qSTBOSDVoT1U4MGFpdGtVVFJDZWpOTFlsVmpRVUpCWnpSSVZUUi1mZyZjcmVhdGVfdGltZT0xNTM5MDMzNjEzJm5vbmNlPTAuNDA1MjUzOTkxNjE0NjA3NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQxNjI5MjEyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9
ENV PORT 80

# ENV NODE_ENV production

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


