curl -X DELETE \
  -b CookieJar.tsv \
  -o /dev/null -w "%{http_code}\n" \
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout
