#!/bin/bash

# Ensure a branch name and time are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <branch-name> <time>"
  echo "Example: $0 main 'yesterday 11:00'"
  exit 1
fi

# Get the branch name and time from the script arguments
BRANCH_NAME=$1
TIME=$2

# Checkout the specified branch
git checkout "$BRANCH_NAME"

# Fetch the latest commits to ensure we have up-to-date information
git fetch --all

# Find the commit hash for the specified time
commit_hash=$(git rev-list -n 1 --before="$TIME" "$BRANCH_NAME")

# Check if a commit hash was found
if [ -z "$commit_hash" ]; then
  echo "No commit found for $BRANCH_NAME at $TIME."
  exit 1
fi

echo "Resetting $BRANCH_NAME to commit $commit_hash at $TIME"

# Reset the branch to that commit
git reset --hard "$commit_hash"

# Force push the branch to the remote repository
git push origin "$BRANCH_NAME" --force

echo "Branch $BRANCH_NAME has been reset to its state at $TIME."
