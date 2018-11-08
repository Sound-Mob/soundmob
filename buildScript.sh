#!/usr/bin/env bash

# This build script will build a new docker container with a specified version tag.

# Do not use latest tag to avoid complications. instead simply version the application

# Build a new docker image
docker build -t us.gcr.io/sound-mob12282/soundmob:15.04 .

# Push new docker image to gcloud
docker push us.gcr.io/sound-mob12282/soundmob:15.04

# Navigate to GCLOUD
# Create a new GCE with recent docker image
# SSH into NGINX proxy
# Redirect to new GCE internal IP
# Wait for compile, and the new version of the application should be running at soundmob.net


## currently buggy
# Update running compute engine with newest image
# gcloud compute instanceslatest update-container soundmobmachine7 --container-image us.gcr.io/sound-mob12282/soundmob:
