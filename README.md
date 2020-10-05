# Backblaze B2 File Lister
Lists all contents of a b2 bucket


## API
### Settings (API keys)
1. Create `.env` file in the root api directory (where `package.json` is)
2. Add backblaze-b2 api keys into `.env` as follows;

```bash
B2_KEY_ID=_api_keyid_here_
B2_KEY_APPLICATION=_api_keyapplication_here_
B2_SHOW_PRIVATE_BUCKETS=false
```

3. Start server using `npm start`


### Endpoints
#### GET `/buckets`
Returns a list of buckets

#### POST `/bucket/files`
Returns a list of the buckets files

```json
Required POST data to send

{
	bucket: name_of_bucket
}
```


## Client
1. Create `.env` file in the root api directory (where `package.json` is)
2. Add api location into `.env` as follows;

```bash
REACT_APP_API=http://localhost:5000
```
