import React from 'react';
import { KEY } from '../chatBotConfig';

const Chatbotthemeccc = () => (
  <div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden' }}>
    <iframe width="350" height="430" allow="microphone;" src={`https://console.dialogflow.com/api-client/demo/embedded/${KEY}`}></iframe>
  </div>
);

export default Chatbotthemeccc;
