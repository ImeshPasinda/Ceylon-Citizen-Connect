export const testJson = {
    "title": "SurveyJs Template",
    "completedHtml": "<h3>Thank you for completing the survey!</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "facilitiesBySuburb1",
        "elements": [
         {
          "type": "tagbox",
          "name": "suburb",
          "title": "Select Suburb",
          "isRequired": true,
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/all/Australia"
          }
         },
         {
          "type": "tagbox",
          "name": "facility",
          "title": "Select Facilities",
          "enableIf": "{suburb} notempty",
          "isRequired": true,
          "choicesOrder": "asc",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/filter/{suburb}/Australia"
          }
         }
        ],
        "title": "Filter Facilities by selected Suburbs",
        "description": "Only facilities from the selected suburb are queried.",
        "showNumber": true,
        "showQuestionNumbers": "off"
       },
       {
        "type": "panel",
        "name": "facilitiesBySuburb2",
        "elements": [
         {
          "type": "dropdown",
          "name": "suburbone",
          "title": "Suburb",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/all/Australia"
          }
         },
         {
          "type": "tagbox",
          "name": "facilityone",
          "startWithNewLine": false,
          "title": "Facility",
          "enableIf": "{suburbone} notempty",
          "choicesOrder": "asc",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/filter/{suburbone}/Australia"
          },
          "maxSelectedChoices": 3
         },
         {
          "type": "dropdown",
          "name": "suburbtwo",
          "title": "Suburb",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/all/Australia"
          }
         },
         {
          "type": "tagbox",
          "name": "facilitytwo",
          "startWithNewLine": false,
          "title": "Facility",
          "enableIf": "{suburbtwo} notempty",
          "choicesOrder": "asc",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/filter/{suburbtwo}/Australia"
          }
         },
         {
          "type": "dropdown",
          "name": "suburbthree",
          "title": "Suburb",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/all/Australia"
          }
         },
         {
          "type": "tagbox",
          "name": "facilitythree",
          "startWithNewLine": false,
          "title": "Facility",
          "enableIf": "{suburbthree} notempty",
          "choicesOrder": "asc",
          "choicesByUrl": {
           "url": "https://ccc-backend.onrender.com/api/facilities/filter/{suburbthree}/Australia"
          }
         }
        ],
        "title": "Nominate which facilities you would like to see included in your program. The gyms are grouped according to their proximity to each location. Please select the facilities you and your family (if you chose a family membership) would be likely to use. (Maximum 3 choices)",
        "description": "Please select the facilities you and your family (if you chose a family membership) would be likely to use. You can choose facilities based on suburbs or select \"All\" in suburb to display all the facilities available  within fitness passport.  (Max 3 choices)",
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