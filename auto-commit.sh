#!/bin/bash

# Auto-commit and push script
# Monitors for file changes and commits/pushes automatically

while true; do
  # Check for uncommitted changes
  if ! git diff-index --quiet HEAD --; then
    # Stage all changes
    git add .
    
    # Commit with timestamp
    git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to remote
    git push origin main
    
    echo "✓ Auto-committed and pushed at $(date '+%H:%M:%S')"
  fi
  
  # Wait 5 seconds before checking again
  sleep 5
done
