import React from 'react'
import ChatBot from 'react-simple-chatbot';

export default function chatbot() {
  return (
    <div>

      <ChatBot
        botAvatar="https://cdn-icons-png.flaticon.com/512/2021/2021646.png"
        userAvatar= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
        enableMobileAutoFocus 
       
        headerTitle="Chat with us"
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you! I Agent in Ceylon Citizen Connect',
            trigger: '5',
          },
          {
            id: '5',
            message: 'What brings you here ?',
            trigger: '6',
          },
          {
            id: '6',
            options: [
              { value: 1, label: 'Example!', trigger: '7' },
              { value: 2, label: 'Give Feedback!', trigger: '8' },
              { value: 3, label: 'Example!', trigger: '9' },
            ],
          },
          {
            id: '7',
            message: 'Not Completed!',
            end: true,
          },
          {
            id: '8',
            component: (
               <a href='/feedback'>Click here!</a>
            ),
            end: true,
          },
          {
            id: '9',
            message: 'Not Colmpleted',
            end: true,
          },


        ]}
      />




    </div>
  )
}
