curl -v -X POST \
-H 'Content-Type: application/json' \
-d '{
    "href": "http://vendor.example.com/conversaties/bestuur/1",
    "authentication": {
        "configuration": {
            "scheme": "basic"
        },
        "credentials": {
            "username": "foo",
            "password": "bar"
        }
    },
    "organization": "https://data.lblod.info/id/bestuurseenheden/974816591f269bb7d74aa1720922651529f3d3b2a787f5c60b73e5a0384950a4",
    "publisher": {
        "uri": "http://data.lblod.info/vendors/x-y-z",
        "key": "AE86-GT86"
    },
    "submittedResource": "http://nieuw/berichturi/voor/ABB"
}' https://api.loket.lokaalbestuur.vlaanderen.be/vendor/berichtencentrum/melding
