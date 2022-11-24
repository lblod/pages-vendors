curl -v -X POST \
  -H "Content-Type: application/sparql-query" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d 'SELECT DISTINCT ?s ?p ?o WHERE { ?s ?p ?o . } LIMIT 10' \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
