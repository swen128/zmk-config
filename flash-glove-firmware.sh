#!/bin/bash

SOURCE_DIR=`pwd`

# Find the latest *.uf2 file in the source directory
LATEST_FILE=$(ls -t $SOURCE_DIR/*.uf2 2>/dev/null | head -1)
if [ -z "$LATEST_FILE" ]; then
  echo "No .uf2 file found in $SOURCE_DIR."
  exit 1
fi

# Pick the correct destination volume
if [ -d "/Volumes/GLV80RHBOOT" ]; then
  TARGET_DIR="/Volumes/GLV80RHBOOT"
elif [ -d "/Volumes/GLV80LHBOOT" ]; then
  TARGET_DIR="/Volumes/GLV80LHBOOT"
else
  echo "Neither /Volumes/GLV80RHBOOT nor /Volumes/GLV80LHBOOT is mounted."
  exit 1
fi

(
  cd $TARGET_DIR
  cp "$LATEST_FILE" "$TARGET_DIR"
)

echo "Copied: $LATEST_FILE to $TARGET_DIR"

