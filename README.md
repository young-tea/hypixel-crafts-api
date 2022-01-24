# Hypixel crafts API

I was doing a little project with hypixel crafts and didnt found API that provides crafts, so I decided to create my own API.

It currently contains 38 items crafts, adding more soon.

Planning to add JSON for each item separately soon.

By sending GET request to the API you will get JSON file with crafts.

All crafts have their own ID starting from zero.

There is structure of items in api:

"id": ,
  "item_name": "",
  "description": "",
  "rairity" : "",
  "type": "",
  "recipe": {
    "A1": "",
    "A2": "",
    "A3": "",
    "B1": "",
    "B2": "",
    "B3": "",
    "C1": "",
    "C2": "",
    "C3": "",
    "1": {
      "item": "summ"
      }
   },
   "other": "Requires: "
