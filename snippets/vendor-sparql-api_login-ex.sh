curl -v -X POST \
  -H "Content-Type: application/json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d '{
    "organization": "http://data.lblod.info/id/bestuurseenheden/be278471a2a318edba32e7ac4294c0eafbe4c8077a34dcbb9c2e43211d4a78a6",
    "publisher": {
        "uri": "http://example.com/vendor/mechelen",
        "key": "mechelen-secret-key"
    }
}' https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login
