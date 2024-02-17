export const testJson = {
    "completedHtml": "<h3>Thank you for completing the survey!</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "facilitiesBySuburb",
        "elements": [
         {
          "type": "tagbox",
          "name": "suburb",
          "title": "Select Suburb",
          "isRequired": true,
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/all/{country}"
          }
         },
         {
          "type": "tagbox",
          "name": "facility",
          "title": "Select Facilities",
          "enableIf": "{suburb} notempty",
          "isRequired": true,
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/filter/{suburb}/{country}"
          }
         }
        ],
        "title": "Filter Facilities by selected Suburbs",
        "description": "Only facilities from the selected suburb are queried.",
        "showNumber": true,
        "showQuestionNumbers": "off"
       },
       {
        "type": "comment",
        "name": "comments",
        "title": "Comments "
       }
      ]
     }
    ],
    "showTitle": false,
    "completeText": "SUBMIT"
   }