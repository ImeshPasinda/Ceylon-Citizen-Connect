export const json = {
   "completedHtml": "<h3>Thank you for completing the survey!</h3>",
   "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "radiogroup",
       "name": "question1",
       "title": "How satisfied are you with the accessibility of government announcements?",
       "isRequired": true,
       "choices": [
        {
         "value": "Item 1",
         "text": "Very Satisfied"
        },
        {
         "value": "Item 2",
         "text": "Satisfied"
        },
        {
         "value": "Item 3",
         "text": "Neutral"
        },
        {
         "value": "Item 5",
         "text": "Dissatisfied"
        },
        {
         "value": "Item 6",
         "text": "Very Dissatisfied"
        }
       ]
      },
      {
       "type": "dropdown",
       "name": "question2",
       "title": "What kind of country do you expect the government of Sri Lanka to grow?",
       "isRequired": true,
       "choices": [
        "Item 1",
        "Item 2",
        "Item 3"
       ],
       "choicesByUrl": {
        "url": "https://surveyjs.io/api/CountriesExample"
       }
      },
      {
       "type": "checkbox",
       "name": "question3",
       "title": "Select the public services you have utilized in the past year?",
       "isRequired": true,
       "choices": [
        {
         "value": "Item 1",
         "text": "Electricity"
        },
        {
         "value": "Item 2",
         "text": "Water Supply"
        },
        {
         "value": "Item 3",
         "text": "Health Services"
        },
        {
         "value": "Item 4",
         "text": "Education"
        },
        {
         "value": "Item 5",
         "text": "Public Transport"
        }
       ]
      },
      {
       "type": "tagbox",
       "name": "question4",
       "title": "What type of government job opportunities are you interested in? (Please select up to 3 options)",
       "isRequired": true,
       "commentText": "Suggestions",
       "choices": [
        {
         "value": "Item 1",
         "text": "Administrative"
        },
        {
         "value": "Item 2",
         "text": "Technical"
        },
        {
         "value": "Item 3",
         "text": "Healthcare"
        },
        {
         "value": "Item 4",
         "text": "Education"
        },
        {
         "value": "Item 5",
         "text": "Civil Services"
        }
       ],
       "maxSelectedChoices": 3,
       "minSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "question5",
       "title": "Please select the communication channels through which you prefer to receive government updates?",
       "isRequired": true,
       "choices": [
        {
         "value": "Item 1",
         "text": "Email"
        },
        {
         "value": "Item 2",
         "text": "SMS"
        },
        {
         "value": "Item 3",
         "text": "Mobile App Notifications"
        },
        {
         "value": "Item 4",
         "text": "Postal Mail"
        },
        {
         "value": "Item 5",
         "text": "Social Media"
        }
       ],
       "showSelectAllItem": true
      },
      {
       "type": "comment",
       "name": "question6",
       "title": "Comments"
      }
     ]
    }
   ],
   "showTitle": false
  }