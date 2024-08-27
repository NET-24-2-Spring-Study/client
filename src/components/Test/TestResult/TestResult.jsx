import React from 'react'
import * as S from './TestResult.style'

import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png'
import Banbani from '../../../assets/chatbot/test/Banbani.png'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png'

import chatbotInfo from '../../../datas/chatbot'
import { useNavigate } from 'react-router-dom'

export default function TestResult() {
  const result = localStorage.getItem('result');
  const score = localStorage.getItem('score');
  const isTestStart = true;

  const navigate = useNavigate();

  return (
    <S.App isTestStart={isTestStart}>
      <S.Container>
        <S.ResultBox>
          T/F의 성향이 {score}% {100-score}%인
        </S.ResultBox>
        <h1>나에게 맞는 심터 캐릭터는</h1>
        {result === 'Neuranee'
        ? <img src={Neuranee} alt='chatbot' />
        : result === 'Banbani' ? <img src={Banbani} alt='chatbot' /> 
        : <img src={Simmaeum} alt='chatbot' />  }
        <S.SpeechBubble>
        {result >= 70 
        ? (
          <>
            <h2>{chatbotInfo[2].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[2].info : chatbotInfo[2].mobile} </p>
          </>
        ) : result >= 40 ? (
          <>
            <h2>{chatbotInfo[1].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[1].info : chatbotInfo[1].mobile} </p>
          </>
        ): (
          <>
            <h2>{chatbotInfo[0].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[0].info : chatbotInfo[0].mobile} </p>
          </>
        )}
        </S.SpeechBubble>
        <S.BtnBox>
          <button onClick={() => navigate('/chatbot/choice')}>다른 캐릭터 보러가기</button>
          <button onClick={() => navigate('/chatbot')}>대화를 시작할까?</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  )
}
