import React from 'react';
import { ThemeProvider } from 'styled-components';
import Chatbot from './Chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Signika Negative',
  headerBgColor: '#081F3C',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#081F3C',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const Chatbottheme = () => (
  <ThemeProvider theme={theme}>
    <Chatbot steps={steps} />
  </ThemeProvider>
);

export default Chatbottheme;