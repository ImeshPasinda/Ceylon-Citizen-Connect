import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { testJson } from "./testJson";
import { baseURL } from "../../apiConfig";
import Chatbotthemeccc from "../../components/Chatbottheme-ccc";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function SurveyComponent() {
    // Clone the testJson object to avoid modifying the original one
    const modifiedJson = JSON.parse(JSON.stringify(testJson));

    //select employer country
    const country = 'New Zealand'

    // Update the choicesByUrl for the "suburb" question
    modifiedJson.pages[0].elements[0].elements[0].choicesByUrl.url = `https://ccc-backend.onrender.com/api/facilities/all/${country}`;

    // Update the choicesByUrl for the "facility" question
    modifiedJson.pages[0].elements[0].elements[1].choicesByUrl.url = `https://ccc-backend.onrender.com/api/facilities/filter/{suburb}/${country}`;
    const survey = new Model(modifiedJson);

    survey.applyTheme(themeJson);

    const handleSurveyComplete = async (sender) => {
        try {
            const response = await fetch(`${baseURL}/api/survey/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sender.data),
            });

            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

            if (response.ok) {
                console.log("Survey data saved successfully!", sender.data);
            } else {
                console.error("Failed to save survey data");
            }
        } catch (error) {
            console.error("Error saving survey data:", error);
        }
    };

    survey.onComplete.add(handleSurveyComplete);

    return (
        <div className="bg">
            <br />
            <br />
            <br />
            <div className="header-txt">Pre - Signup Survey</div>
            <Survey model={survey} />
            {['auto-start'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <div className="fixed-bottom" style={{ paddingBottom: '60px', paddingRight: '20px' }}><Chatbotthemeccc /></div>
                    }
                >
                    <div className="position-fixed bottom-0 end-0" style={{ paddingBottom: '50px', paddingRight: '25px' }}>
                        <button className="btn rounded-circle shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModall" style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '60px'
                        }} ><i className="fas fa-robot" style={{ fontSize: '25px' }} ></i></button>
                    </div>
                </OverlayTrigger>
            ))}
        </div>
    );
}

export default SurveyComponent;
