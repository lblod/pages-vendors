#!/bin/bash

echo "Let's download the attachments of the first message with attachments we find."
echo Login first.

SESSION_ID=$(curl -X POST \
  -H "Content-Type: application/json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d '{
    "organization": "http://data.lblod.info/id/besturenVanDeEredienst/2be549b1cc263776f4c9a770e5fdb50d",
    "publisher": {
        "uri": "http://data.lblod.info/vendors/x-y-z",
        "key": "AE86-GT86"
    }
}' https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login | jq -r '."@id"')

echo "Retreived session uri: " $SESSION_ID

echo Lets find a message with attachment.
echo We only download the first attachment we find.

ATTACHMENT_QUERY="
  PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
  PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
  PREFIX schema: <http://schema.org/>

  SELECT DISTINCT  ?fileName ?fileLocation
  WHERE {
     ?message a schema:Message;
       nie:hasPart ?attachment.

    ?attachment a nfo:FileDataObject;
      nfo:fileName ?fileName;
      nie:url ?fileLocation.
  }
  LIMIT 1
"

RESPONSE=$(curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
 --data-urlencode "query=$ATTACHMENT_QUERY" \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql)

echo $RESPONSE | jq .

FILE_NAME=$(echo "$RESPONSE" | jq -r '.results.bindings[0].fileName.value')
FILE_LOCATION=$(echo "$RESPONSE" | jq -r '.results.bindings[0].fileLocation.value')

echo FileName: $FILE_NAME
echo FileLocation: $FILE_LOCATION
echo Downloading the binary file

curl -o $FILE_NAME -b CookieJar.tsv -c CookieJar.tsv $FILE_LOCATION
