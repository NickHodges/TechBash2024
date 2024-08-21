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
)

# Check if the --step flag is passed
step_mode=false
if [[ "$1" == "--step" ]]; then
    step_mode=true
fi

# Iterate over the branches array
for (( i=1; i<${#branches[@]}; i++ )); do
    previous_branch=${branches[$((i-1))]}
    current_branch=${branches[$i]}

    echo "Checking out $current_branch..."
    git checkout $current_branch

    echo "Merging $previous_branch into $current_branch..."
    git merge $previous_branch -m "Merging in $previous_branch"

    if [ $? -ne 0 ]; then
        echo "Merge conflict detected. Resolve the conflict and then run the script again."
        exit 1
    fi

    if [ "$step_mode" = true ]; then
        read -p "Press Enter to continue to the next branch..."
    fi
done

echo "All merges completed successfully!"
