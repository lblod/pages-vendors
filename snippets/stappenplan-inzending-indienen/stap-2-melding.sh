curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "href": "http://een.domein.van.mechelen.be/besluitenlijsten/2026-09-09.html",
    "organization": "http://data.lblod.info/id/bestuurseenheden/be278471a2a318edba32e7ac4294c0eafbe4c8077a34dcbb9c2e43211d4a78a6",
    "publisher": {
      "uri": "http://example.com/vendor/mechelen",
      "key": "your-secret-key"
    },
    "submittedResource": "http://een.domein.van.mechelen.be/id/besluitenlijsten/2026-09-09"
}' https://loket.vendor-test.lblod.info/melding
