#!/bin/bash

# Check if npx is installed
if ! command -v npx &> /dev/null
then
    echo "npx could not be found, please install Node.js and npm first."
    exit
fi

# Run the Astro upgrade command
npx @astrojs/upgrade

# Check if the command was successful
if [ $? -eq 0 ]; then
    echo "Astro upgrade completed successfully."
else
    echo "Astro upgrade failed. Please check the error messages above."
fi
