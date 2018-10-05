#!/usr/bin/env bash

# Build a new docker image
docker build -t us.gcr.io/sound-mob12282/soundmob .

# #docker push jvalamis/soundmob:tagname
# docker tag us.gcr.io/sound-mob12282/soundmob:v5 us.gcr.io/sound-mob12282/soundmob:v5

# Push new docker image to gcloud
docker push us.gcr.io/sound-mob12282/soundmob:latest

# Update running compute engine with newest image
gcloud compute instances update-container soundmobmachine3 --container-image us.gcr.io/sound-mob12282/soundmob:latest
