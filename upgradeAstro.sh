#!/bin/bash

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install Node.js and npm first."
    exit 1
fi

# Install or update Astro globally to the latest version
echo "Installing or updating Astro to the latest version globally..."
npm install astro@latest

# Check if the command was successful
if [ $? -eq 0 ]; then
    echo "Astro has been upgraded to the latest version globally."
else
    echo "Failed to upgrade Astro. Please check the error messages above."
fi
