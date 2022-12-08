curl -v -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/sparql-results+json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d 'query=SELECT+DISTINCT+?s+?p+?o+WHERE+{+?s+?p+?o+.+}+LIMIT+10' \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
