#!/usr/bin/env bash

echo -e "\nUpdating codebase..."

git fetch
git pull

echo -e"\nBuilding the project..."
if npm run build; then
    echo -e"\nBuild successful. Restarting the service..."
    service rubit restart
else
    echo -e"\nBuild failed. Service not restarted."
    exit 1
fi
