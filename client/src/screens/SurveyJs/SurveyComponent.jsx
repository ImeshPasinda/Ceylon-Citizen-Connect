import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { themeJson } from './theme';
import './index.css';
import { testJson } from './testJson';
import { baseURL } from '../../apiConfig';
import Chatbotthemeccc from '../../components/Chatbottheme-ccc';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";



function SurveyComponent() {
    const navigate = useNavigate();
    const modifiedJson = JSON.parse(JSON.stringify(testJson));
    const [country, setCountry] = React.useState('');
    const [infoWindowOpen, setInfoWindowOpen] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const countryParam = urlParams.get('country');

        if (countryParam) {
            setCountry(countryParam);
        } else {
            setCountry('None');
        }
    }, []);

    modifiedJson.pages[0].elements[0].elements[0].choicesByUrl.url = `https://ccc-backend.onrender.com/api/facilities/all/${country}`;
    modifiedJson.pages[0].elements[0].elements[1].choicesByUrl.url = `https://ccc-backend.onrender.com/api/facilities/filter/{suburb}/${country}`;

    const survey = new Model(modifiedJson);

    survey.applyTheme(themeJson);

    const handleSurveyComplete = async (sender) => {
        try {
            const response = await fetch(`${baseURL}/api/survey/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sender.data),
            });

            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

            if (response.ok) {
                console.log('Survey data saved successfully!', sender.data);
            } else {
                console.error('Failed to save survey data');
            }
        } catch (error) {
            console.error('Error saving survey data:', error);
        }

        // After completing the survey, navigate back to the survey page with the current country parameter
        navigate(`/survey?country=${encodeURIComponent(country)}`);
    };

    survey.onComplete.add(handleSurveyComplete);

    const latitude = 6.0329;
    const longitude = 80.2168;


    const MapWithMarker = withGoogleMap(({ latitude, longitude }) => (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: latitude, lng: longitude }}
        >
            <Marker
                position={{ lat: latitude, lng: longitude }}
                onClick={() => setInfoWindowOpen(true)}
            >
                {infoWindowOpen && (
                    <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
                        <div>
                            <p>Marker Popup Content</p>
                            {/* Add any content you want to display in the popup */}
                        </div>
                    </InfoWindow>
                )}
            </Marker>
        </GoogleMap>
    ));


    return (
        <div className="bg">
            <br />
            <br />
            <br />
            <div className="header-txt">Pre - Signup Survey</div>
            <div className="map-container">
                <MapWithMarker
                    latitude={latitude}
                    longitude={longitude}
                    containerElement={<div style={{ height: '400px', borderRadius: 20 }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
            {/* <Survey model={survey} /> */}
            {['auto-start'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <div className="fixed-bottom" style={{ paddingBottom: '60px', paddingRight: '20px' }}>
                            <Chatbotthemeccc />
                        </div>
                    }
                >
                    <div className="position-fixed bottom-0 end-0" style={{ paddingBottom: '50px', paddingRight: '25px' }}>
                        <button
                            className="btn rounded-circle shadow-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModall"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '60px',
                            }}
                        >
                            <i className="fas fa-robot" style={{ fontSize: '25px' }}></i>
                        </button>
                    </div>
                </OverlayTrigger>
            ))}
        </div>
    );
}

export default SurveyComponent;
