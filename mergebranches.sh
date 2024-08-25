#!/bin/bash

# Array of branches in the order they should be merged
branches=(
    "Step1"
    "Step2"
    "Step3"
    "Step4"
    "Step5"
    "Step6"
    "Step7"
    "Step8"
    "Step9"
    "Step10"
    "Step11"
    "Step12"
    "Step13"
    "Step14"
    "Step15"
    "Step16"
    "Step17"
    "Step18"
)

# Check if the --step or --incoming flags are passed
step_mode=false
incoming_mode=false

for arg in "$@"; do
    case $arg in
        --step)
            step_mode=true
            ;;
        --incoming)
            incoming_mode=true
            ;;
    esac
done

# Iterate over the branches array
for (( i=1; i<${#branches[@]}; i++ )); do
    previous_branch=${branches[$((i-1))]}
    current_branch=${branches[$i]}

    echo "Checking out $current_branch..."
    git checkout $current_branch

    if [ "$incoming_mode" = true ]; then
        echo "Merging $previous_branch into $current_branch with incoming changes..."
        git merge -X theirs $previous_branch -m "Merging in $previous_branch with incoming changes"
    else
        echo "Merging $previous_branch into $current_branch..."
        git merge $previous_branch -m "Merging in $previous_branch"
    fi

    if [ $? -ne 0 ]; then
        echo "Merge conflict detected. Resolve the conflict and then run the script again."
        exit 1
    fi

    if [ "$step_mode" = true ]; then
        read -p "Press Enter to continue to the next branch..."
    fi
done

echo "All merges and pushes completed successfully!"
