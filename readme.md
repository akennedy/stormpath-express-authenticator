## Get Token

    curl -i -X POST --user $API_KEY:$SECRET http://localhost:3000/oauth/token -d grant_type=client_credentials

## Test endpoint

    curl -i http://localhost:3000/not-so-secret

## Test secure endpoint

    curl -H 'Authorization: Bearer $JWTTOKEN' http://localhost:3000/secret

