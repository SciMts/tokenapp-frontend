#!/bin/bash

#servers to deploy to and jumphost for the tunnel
SERVERS=( "tokenapp1.modum.intern" "tokenapp2.modum.intern" )
JUMP_HOST="jump.modum.io"

#if only one key is provided, both servers have the same key
PRIV_PROXY=$1
if [ "$#" -gt 1 ]; then
   PRIV_APP=$2
else
   PRIV_APP=$1
fi

if [ ! -f "$PRIV_PROXY" ]; then
    echo "Proxy private key not found! Please make sure you have the valid private key: deploy.sh private_proxy.key private_app.key"
    exit 1
fi

if [ ! -f "$PRIV_APP" ]; then
    echo "App private key not found! Please make sure you have the valid private key: deploy.sh private_proxy.key private_app.key"
    exit 1
fi

#Build and install of the frontend
if ! npm install; then
    echo "npm install failed"
    exit 1
fi
if ! npm run build; then
    echo "npm build failed"
    exit 1
fi

#Deployment
for i in "${SERVERS[@]}"
do
    ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -f -L 1237:"$i":22 -i "$PRIV_PROXY" -p 2202 ubuntu@"$JUMP_HOST" sleep 3; \
    scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -r -i "$PRIV_APP" -P 1237 dist/* ubuntu@localhost:/var/www/html
    sleep 3
done
