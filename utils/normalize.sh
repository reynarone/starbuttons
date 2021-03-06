#!/bin/bash

FILENAMES=$(utils/bitrate.sh -o)
cd public/assets
for i in $(echo "$FILENAMES" | tr ' ' ' '); do
    mv $i current.mp3
    ffmpeg -i current.mp3 -ab 192k -map_metadata -1 $i
    rm current.mp3
done
cd ../..