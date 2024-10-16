#!/usr/bin/env bash

echo "\nUpdating codebase..."

git fetch
git pull

echo "\nBuilding the project..."
if npm run build; then
    echo "\nBuild successful. Restarting the service..."
    service rubit restart
else
    echo "\nBuild failed. Service not restarted."
    exit 1
fi
