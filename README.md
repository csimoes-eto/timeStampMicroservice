# Timestamp Microservice

### User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if it can be successfully parsed by `new Date(date_string)` (JS) . The unix timestamp is an **integer** specifying **milliseconds**. The usage of date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) ensure an UTC timestamp.
3. If the date string is **empty** the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`.

#### Example output:
{"unix":664588800000,"utc":"Wed, 23 Jan 1991 00:00:00 GMT"}
