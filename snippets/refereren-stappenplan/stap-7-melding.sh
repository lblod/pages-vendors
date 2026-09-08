curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "href": "http://data.grobbendonk.be/besluiten/2026-advies-jaarrekening-stlambertus.html",
    "organization": "http://data.lblod.info/id/bestuurseenheden/f4641f7ba21f1a575993f1b523fb581af12269164006abeab121886037ac0cad",
    "publisher": {
      "uri": "http://data.lblod.info/vendors/your-vendor",
      "key": "your-secret-key"
    },
    "submittedResource": "http://data.grobbendonk.be/besluiten/2026-advies-jaarrekening-stlambertus"
}' https://api.loket.lokaalbestuur.vlaanderen.be/melding
