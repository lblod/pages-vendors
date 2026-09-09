curl -X POST \
  -H "Content-Type: application/json" \
  -b CookieJar.tsv -c CookieJar.tsv \
  -d '{
    "organization": "http://data.lblod.info/id/bestuurseenheden/f4641f7ba21f1a575993f1b523fb581af12269164006abeab121886037ac0cad",
    "publisher": {
      "uri": "http://data.lblod.info/vendors/your-vendor",
      "key": "your-secret-key"
    }
}' https://databankerediensten.vendor-test.lblod.info/vendor/login
