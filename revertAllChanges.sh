#!/bin/bash

# Fetch all remote branches
git fetch --all

# Get the list of all branches
branches=$(git for-each-ref --format='%(refname:short)' refs/heads/)

# Loop through each branch
for branch in $branches; do
  echo "Processing branch: $branch"

  # Checkout the branch
  git checkout "$branch"

  # Find the commit from 15 minutes ago
  commit_hash=$(git rev-list -n 1 --before="11:00" "$branch")



  if [ -z "$commit_hash" ]; then
    echo "No commit found for $branch 15 minutes ago. Skipping..."
    continue
  fi

  echo "Resetting $branch to commit $commit_hash"

  # Reset the branch to that commit
  git reset --hard "$commit_hash"

  # Force push the branch to the remote repository
  git push origin "$branch" --force
done

echo "All branches have been reset."
