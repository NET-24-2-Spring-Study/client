import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import { FaHeart, FaTrash} from "react-icons/fa";
import Letter from '../components/Modal/Letter/ChatLetter';
import styled from "styled-components";
import axios from 'axios';
import {Fface, Tface, Hface, heart, Emptyheart} from '../assets/letterImg/icons';
import DeleteLetterModal from '../components/Modal/Letter/DeleteLetter';
import data from '../datas/mail';

const LetterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Mailbox() {
  const [isLetterModalVisible, setLetterModalVisible] = useState(false);
  const [mails, setMails] = useState([]);
  const [seeAllActive, setSeeAllActive] = useState(true);
  const [seeFavoritesActive, setSeeFavoritesActive] = useState(false);
  const [seeNotReadActive, setSeeNotReadActive] = useState(false);
  const [mailDetails, setMailDetails] = useState(null);
  const userId = 1; //임시유저아이디
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedMailIds, setSelectedMailIds] = useState([]);  

  const handleLetterClick = async (mailId) => {
    //임시
    const mail = data.find(mail => mail.mailId === mailId);
    if (mail) {
      setMailDetails(mail); 
      setLetterModalVisible(true); 
    }
    /**try {
      const response = await axios.get(`/api/v1/mail?mailId=${mailId}`);
      if (response.data.code === "200") {
        setMailDetails(response.data.data);  // 메일 상세 정보를 상태에 저장
        setLetterModalVisible(true);  // 모달 열기
      } else if(response.data.code === "MAIL5001"){
        console.error("편지 가져오기 실패:", response.data.message);
      } else {
        console.error("편지가 없습니다:", response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }*/
  };

  const handleDeleteClick = () => {
    if (selectedMailIds.length > 0) {
      setDeleteModalVisible(true);
    }
    else{
      console.log("삭제할 편지가 없습니다.");
    }
  };

  // 예시 데이터 설정
  const fetchMailsForType = (listType = "all") => {
    switch (listType) {
      case "starred":
        return data.filter(mail => mail.starred);
      case "notRead":
        return data.filter(mail => !mail.read);
      case "all":
      default:
        return data;
    }
  };

/**useEffect(() => {
    const fetchMails = async (listType = '') => {
      try {
        const response = await axios.get(`/api/v1/mail/list${listType ? `?listType=${listType}` : ''}`);
        if (response.data.code === "200") {
          setMails(response.data.data.mails); 
        } else if (response.data.code === "MAIL5001") {
          console.error("편지 가져오기 실패:", response.data.message);
        } else {
          console.error("편지가 없습니다", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    fetchMails('');
  }, []);

 */
  const toggleFavorite = (mailId) => {
    const updatedMails = mails.map((mail) =>
      mail.mailId === mailId ? { ...mail, starred: !mail.starred } : mail
    );
    setMails(updatedMails);
    /**
    axios.patch(`/api/v1/mail/star/${mailId}`)
      .then(response => {
        if (response.data.code === "200") {
          console.log("즐겨찾기 추가 성공");
        }else if (response.data.code === "MAIL5001") {
          console.error("실패:", response.data.message);
        } else {
          console.error("메일이 없습니다", response.data.message);
        }
      })
      .catch(error => console.error("즐겨찾기 추가 실패", error));
    */
};


  const getChatbotImage = (chatbotType) => {
      switch (chatbotType) {
        case 'F':
          return Fface;
        case 'T':
          return Tface;
        case 'H':
          return Hface;
        default:
          return Hface;
      }
    };
  
  const handleSeeAllToggle = () => {
    setSeeAllActive(true);
    setSeeFavoritesActive(false);
    setSeeNotReadActive(false);
    //fetchMails('all'); 

    setMails(fetchMailsForType("all"));
    };
  const handleSeeFavoritesToggle = () => {
    //fetchFavoriteMails();
    setSeeFavoritesActive(true);
    setSeeAllActive(false);
    setSeeNotReadActive(false);
    //fetchMails('starred');  

    setMails(fetchMailsForType("starred"));
    };
  const handleSeeNotReadToggle = () => {
    setSeeNotReadActive(true);
    setSeeAllActive(false);
    setSeeFavoritesActive(false);
    //fetchMails('notRead');  

    setMails(fetchMailsForType("notRead"));
    };

  const handleCheck = (mailId) => {
    setSelectedMailIds((prevSelected) => {
      if (prevSelected.includes(mailId)) {
        return prevSelected.filter(id => id !== mailId);
      } else {
        return [...prevSelected, mailId];
      }
    });
  };
    
  useEffect(() => {
    //예시
    setMails(fetchMailsForType("all"));
  }, []); 
  

  return (
    <LetterWrapper>
    <L.Container>
      <L.Mailbox>
          <L.TopRow>
            <L.SeeAll seeAllActive={seeAllActive} onClick={handleSeeAllToggle} />
            <L.Favorites seeFavoritesActive={seeFavoritesActive} onClick={handleSeeFavoritesToggle} />
            <L.NotRead seeNotReadActive={seeNotReadActive} onClick={handleSeeNotReadToggle} />
            <L.Delete onClick={() => handleDeleteClick()}/>
          </L.TopRow>
          <L.LettersWrapper>
          <L.Letters>
          {mails.map(mail => (
            <L.LetterContainer key={mail.mailId}>
              <L.CheckBox>
                <L.Check
                  type="checkbox"
                  checked={selectedMailIds.includes(mail.mailId)}
                  onChange={() => handleCheck(mail.mailId)}
                />
              </L.CheckBox>
              <L.Letter onClick={() => handleLetterClick(mail.mailId)}>  
                <L.ChatBox>
                  <L.Chatbot>
                    <img src={getChatbotImage(mail.chatbotType)} alt="chatbot" />
                    {!mail.read && <L.RedDot></L.RedDot>}
                  </L.Chatbot>
                </L.ChatBox>
                <L.TextBox>
                  <L.Title>{mail.content}</L.Title>
                  <L.Date>{mail.createdAt}</L.Date>
                </L.TextBox>
                <L.HeartBox>
                <L.Heart like={mail.starred}>
                  <img 
                    src={mail.starred ? heart : Emptyheart} 
                    onClick={(e) => {
                      e.stopPropagation(); // 이벤트 전파를 막아 모달이 뜨지 않게 함
                      toggleFavorite(mail.mailId);
                    }}  
                    alt="favorite"
                  />
                </L.Heart>
                </L.HeartBox>
              </L.Letter>
            </L.LetterContainer>
          ))}
          </L.Letters>
          </L.LettersWrapper>
      </L.Mailbox>
      {isLetterModalVisible && mailDetails && (
          <Letter
            mailId={mailDetails.mailId}
            userId={userId}
            content={mailDetails.content}
            createdAt={mailDetails.createdAt}
            chatbotType={mailDetails.chatbotType}
            setLetterModal={setLetterModalVisible}
          />
        )}
        {isDeleteModalVisible && (
                <DeleteLetterModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={() => {
                  setMails(mails.filter(mail => !selectedMailIds.includes(mail.mailId)));
                  setDeleteModalVisible(false);
                }}
                mailId={selectedMailIds}
                />
            )}
    </L.Container>
    </LetterWrapper>
  );
}

export default Mailbox;

