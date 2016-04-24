#!/bin/bash

curl -u 8fb55af1-a8aa-4d50-8118-ab88248fcc0c:vNJfq3vTgI2K -X POST --header "Content-Type: audio/ogg;codecs=opus" --header "Transfer-Encoding: chunked" --data-binary Weather.opus "https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?continuous=true" -o output.json

echo output.json