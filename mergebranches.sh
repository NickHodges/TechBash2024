#!/bin/bash

# Array of branches in the order they should be merged
branches=(
    "main"
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
    "Step19"
    "Step20"
)

# Flags
step_mode=false
incoming_mode=false
build_mode=false
merge_mode=false

# Parse command-line arguments
for arg in "$@"; do
    case $arg in
        --step)
            step_mode=true
            ;;
        --incoming)
            incoming_mode=true
            ;;
        --build)
            build_mode=true
            ;;
        --merge)
            merge_mode=true
            ;;
    esac
done

# Check if no relevant flags are set
if [ "$merge_mode" = false ] && [ "$build_mode" = false ]; then
    echo "Nothing will be done because no flags are set."
    exit 0
fi

# Iterate over the branches array
for (( i=1; i<${#branches[@]}; i++ )); do
    previous_branch=${branches[$((i-1))]}
    current_branch=${branches[$i]}

    echo "Checking out $current_branch..."
    git checkout $current_branch

    # Merge branches only if the --merge flag is set
    if [ "$merge_mode" = true ]; then
        if [ "$incoming_mode" = true ]; then
            echo "Merging $previous_branch into $current_branch with incoming changes..."
            git merge -X theirs $previous_branch -m "Merging in $previous_branch with incoming changes"
        else
            echo "Merging $previous_branch into $current_branch..."
            git merge $previous_branch -m "Merging in $previous_branch"
        fi

        # Check for merge conflicts
        if [ $? -ne 0 ]; then
            echo "Merge conflict detected. Resolve the conflict and then run the script again."
            exit 1
        fi
    fi

    # Run build command if --build flag is set
    if [ "$build_mode" = true ]; then
        echo "Running npm run build for $current_branch..."
        npm run build
        if [ $? -ne 0 ]; then
            echo "Build failed for $current_branch. Resolve the issue and run the script again."
            exit 1
        fi
    fi

    # Pause for user input if step mode is enabled
    if [ "$step_mode" = true ]; then
        read -p "Press Enter to continue to the next branch..."
    fi
done

echo "Operation completed successfully!"
