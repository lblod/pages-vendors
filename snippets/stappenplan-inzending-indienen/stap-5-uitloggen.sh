curl -X DELETE \
  -b CookieJar.tsv \
  -o /dev/null -w "%{http_code}\n" \
  https://loket.vendor-test.lblod.info/vendor/logout
