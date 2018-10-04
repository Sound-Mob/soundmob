#!/usr/bin/env bash

# Build a new docker image
docker build -t us.gcr.io/sound-mob12282/soundmob .

# Push new docker image to gcloud
docker push us.gcr.io/sound-mob12282/soundmob:latest

# Update running compute engine with newest image
gcloud compute instances update-container soundmobmachine2 --container-image us.gcr.io/sound-mob12282/soundmob:latest
