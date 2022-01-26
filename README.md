# Hypixel crafts API

I was doing a little project with hypixel crafts and didnt found API that provides crafts, so I decided to create my own API.

It currently contains 38 items crafts, adding more soon.

Planning to add JSON for each item separately soon.

By sending GET request to the API you will get JSON file with crafts.

All crafts have their own ID starting from zero.

There is structure of items in api:

"id": , <br>
  "item_name": "", <br>
  "description": "", <br>
  "rairity" : "", <br>
  "type": "", <br>
  "recipe": { <br>
    "A1": "", <br>
    "A2": "", <br>
    "A3": "", <br>
    "B1": "", <br>
    "B2": "", <br>
    "B3": "", <br>
    "C1": "", <br>
    "C2": "", <br>
    "C3": "", <br>
    "1": { <br>
      "item": "summ" <br>
      } <br>
   }, <br>
   "other": "Requires: "
