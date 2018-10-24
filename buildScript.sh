#!/usr/bin/env bash

# Build a new docker image
# do NOT use tags, then push WITH latest tag !important
docker build -t us.gcr.io/sound-mob12282/soundmob:presentation .

# Push new docker image to gcloud
docker push us.gcr.io/sound-mob12282/soundmob:presentation


# Update running compute engine with newest image
# gcloud compute instanceslatest update-container soundmobmachine7 --container-image us.gcr.io/sound-mob12282/soundmob:


#server.listen change to 80
#let googleCallbackURL = 'localhost:3000/auth/google/callback';
# if (process.env.NODEENV === 'production') {
#   googleCallbackURL = 'soundmob.net/auth/google/callback';
# }

#certbot shit, this will give us a cert that lasts 3 months
# certbot -d soundmob.net --manual --logs-dir certbot --config-dir certbot --work-dir certbot --server https://acme-v02.api.letsencrypt.org/directory --email jvalamis@gmail.com --preferred-challenges dns certonly

#checking if domain
#dig @8.8.8.8 soundmob.systems
#host -t txt soundmob.systems
#nslookup -type=txt soundmob.systems
