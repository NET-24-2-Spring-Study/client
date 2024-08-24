import React, { useState } from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/chatStart/ChairWeb.png'
import Simmaeum from '../../assets/chatbot/chatStart/Simmaeum.png'
import Banbani from '../../assets/chatbot/chatStart/Banbani.png'
import Neuranee from '../../assets/chatbot/chatStart/Neuranee.png'

import ChatbotBox from '../../components/Chatbot/ChatbotBox/ChatbotBox';

export default function Chatbot() {
  const result = localStorage.getItem('result');
  return (
    <S.App>
      <S.Top>
        <S.Chair src={Chair} alt="상담의자"/>
        {result >= 70 
          ? <S.Character src={Neuranee} alt='chatbot' />
          : result >= 40 ? <S.Character src={Banbani} alt='chatbot' /> 
          : <S.Character src={Simmaeum} alt='chatbot' /> 
        }
      </S.Top>
      <S.Bottom>
        <S.Header>
          <S.BackBtn/>
          {result >= 70 
            ? <h1>뉴러니</h1>
            : result >= 40 ? <h1>반바니</h1>
            : <h1>심마음</h1> 
          }
          <button>끝내기</button>
        </S.Header>
        <ChatbotBox />
      </S.Bottom>
    </S.App>
  );
}