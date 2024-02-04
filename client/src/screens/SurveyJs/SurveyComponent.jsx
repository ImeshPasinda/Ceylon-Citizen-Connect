import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json";
import { baseURL } from "../../apiConfig";

function SurveyComponent() {
    const survey = new Model(json);
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
        </div>
    );
}

export default SurveyComponent;
