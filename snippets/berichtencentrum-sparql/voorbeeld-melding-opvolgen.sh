#!/bin/bash

echo "First submit a new submission."

JOB_URI=$(curl --location --request POST 'https://api.loket.lokaalbestuur.vlaanderen.be/vendor/berichtencentrum/melding' \
--header 'Content-Type: application/json' \
--data-raw '{
    "href": "https://static.abb-bfg.s.redpencil.io/bericht-ckb-zwijveke-2.html",
    "authentication": {
        "configuration": {
            "scheme": "basic"
        },
        "credentials": {
            "username": "dummy",
            "password": "example"
        }
    },
    "organization": "http://data.lblod.info/id/besturenVanDeEredienst/2be549b1cc263776f4c9a770e5fdb50d",
    "publisher": {
        "uri": "http://data.lblod.info/vendors/x-y-z",
        "key": "AE86-GT86"
    },
    "submittedResource": "http://example.com/berichten/id/dummy-1"
}' | jq -r '.job')

echo "Retreived JOB_URI:" $JOB_URI

echo "Login in the vendor API and follow up the status."
echo "Login first..."

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

echo "Proceeding with finding more information about the job..."

JOB_QUERY="
  PREFIX oslc: <http://open-services.net/ns/core#>
  PREFIX cogs:  <http://vocab.deri.ie/cogs#>
  PREFIX adms: <http://www.w3.org/ns/adms#>
  PREFIX task: <http://redpencil.data.gift/vocabularies/tasks/>
  PREFIX dct: <http://purl.org/dc/terms/>

  SELECT DISTINCT ?job ?jobStatus ?message ?error ?errorMsg
  WHERE {
    VALUES ?job {
      <$JOB_URI>
    }

    ?job a cogs:Job;
      dct:subject ?message;
      adms:status ?jobStatus.

    OPTIONAL {
      ?job task:error ?error.

      ?error a oslc:Error;
        oslc:message ?errorMsg.
    }
  }
"

echo "Checking the status...."
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
 --data-urlencode "query=$JOB_QUERY" \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql | jq .

echo "Let's sleep 10 seconds and try again".
sleep 10s

echo "Checking the status, again...."
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
 --data-urlencode "query=$JOB_QUERY" \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql | jq .
