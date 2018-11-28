console.log('index.js loaded, not to be confused with server side server.js')
var data = JSON.stringify({
  "query": "# Write your query or mutation here\n{\n  records(q:\"age_group=30 to 49&facility_name=University Hospital\")\n  {\n    length_of_stay\n    total_costs\n  }\n}"
});


/*
fetch('https://i2apollo.herokuapp.com',
    {
        method:'POST',
        headers: {
            Accept: "application/json"
        },
        body:data

    }
)
*/

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://i2apollo.herokuapp.com",
  "method": "POST",
  "headers": {
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Connection": "keep-alive",
    "DNT": "1",
    "Origin": "http://localhost:4000",
    "cache-control": "no-cache",
    "Postman-Token": "4307686e-da28-4465-ab82-5fd74f633129"
  },
  "processData": false,
  "data": "{\"query\":\"# Write your query or mutation here\\n{\\n  records(q:\\\"age_group=30 to 49&facility_name=University Hospital\\\")\\n  {\\n    length_of_stay\\n    total_costs\\n  }\\n}\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});