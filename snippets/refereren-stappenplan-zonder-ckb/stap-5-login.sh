curl -X POST \
  -H "Content-Type: application/json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d '{
    "organization": "http://data.lblod.info/id/bestuurseenheden/169b6bfa2d8ee340f266af26d1a6055182214082dca720b8817d3893692f3068",
    "publisher": {
      "uri": "http://data.lblod.info/vendors/your-vendor",
      "key": "your-secret-key"
    }
}' https://databankerediensten.vendor-test.lblod.info/vendor/login
