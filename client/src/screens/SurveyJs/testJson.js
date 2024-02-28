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
      "type": "html",
      "name": "html",
      "title": "HTML Component",
      "html": "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Data Display</title>\n</head>\n\n<body>\n\n    <label for=\"country-select\">Select Country:</label>\n    <select id=\"country-select\"></select>\n\n    <p id=\"selected-country-text\">Selected Country: </p>\n\n    <script>\n        // Fetch data from the API\n        fetch('https://ccc-backend.onrender.com/api/facilities/all/Australia')\n            .then(response => response.json())\n            .then(data => {\n                // Manipulate the DOM to display the data\n                displayData(data);\n                console.log(data);\n            })\n            .catch(error => {\n                console.error('Error fetching data:', error);\n            });\n\n        function displayData(data) {\n            // Get the container where data will be displayed\n            var dropdown = document.getElementById('country-select');\n            var selectedCountryText = document.getElementById('selected-country-text');\n\n            // Iterate through the data and add options to the dropdown\n            data.forEach(item => {\n                var option = document.createElement('option');\n                option.value = item;\n                option.text = item;\n                dropdown.add(option);\n            });\n\n            // Add event listener to the dropdown\n            dropdown.addEventListener('change', function () {\n                // Update the text element with the selected country\n                selectedCountryText.textContent = 'Selected Country: ' + dropdown.value;\n            });\n        }\n    </script>\n\n</body>\n\n</html>\n"
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