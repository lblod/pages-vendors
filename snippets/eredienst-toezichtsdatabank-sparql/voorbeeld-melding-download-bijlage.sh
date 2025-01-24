#!/bin/bash

HOST="https://databankerediensten.lokaalbestuur.vlaanderen.be"

echo "Let's download the first html file attached to a submission we encounter."
echo Login first.

SESSION_ID=$(curl -X POST \
  -H "Content-Type: application/json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d '{
    "organization": "https://data.lblod.info/id/bestuursorganen/0df01206dd8440a99c4ff70bb5bef7e8409d86bead52290e51133be48eff8481",
    "publisher": {
        "uri": "http://data.lblod.info/vendors/x-y-z",
        "key": "AE86-GT86"
    }
}' $HOST/vendor/login | jq -r '."@id"')

echo "Retreived session uri: " $SESSION_ID

echo "Preparing query"

ATTACHMENT_QUERY="
  PREFIX meb: <http://rdf.myexperiment.org/ontologies/base/>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
  PREFIX prov: <http://www.w3.org/ns/prov#>
  PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
  PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
  PREFIX am: <http://lblod.data.gift/vocabularies/automatische-melding/>

  SELECT DISTINCT ?fileName ?downloadLink
  WHERE {
    ?submission
      a meb:Submission ;
      prov:generated ?formData .

    ?formData
      a am:FormData ;
      dcterms:hasPart ?remoteUrl .

    ?remoteFile
      a nfo:RemoteDataObject ;
      nfo:fileName ?fileName ;
      dcterms:format \"text/html\" ;
      nie:url ?downloadLink .
  }
  LIMIT 1
"

RESPONSE=$(curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
 --data-urlencode "query=$ATTACHMENT_QUERY" \
  $HOST/vendor/sparql)

echo $RESPONSE | jq .

FILE_NAME=$(echo "$RESPONSE" | jq -r '.results.bindings[0].fileName.value')
FILE_LOCATION=$(echo "$RESPONSE" | jq -r '.results.bindings[0].fileLocation.value')

echo FileName: $FILE_NAME
echo FileLocation: $FILE_LOCATION
echo Downloading the file

curl -o $FILE_NAME -b CookieJar.tsv -c CookieJar.tsv $FILE_LOCATION
