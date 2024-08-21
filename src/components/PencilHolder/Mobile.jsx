import React, { useState } from 'react'
import * as S from "./PencilHolderMobile.style"
import * as T from "./PencilHolder.style"
import Pencil from '../../assets/pencilHolder/Pencil.png'
import FirstModal from '../Modal/PencilHolder/FirstModal'
import SecondModal from '../Modal/PencilHolder/SecondModal'
import { useNavigate } from 'react-router-dom'

export default function Mobile() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const navigate = useNavigate(); 
  
  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  }
  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  }
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    navigate('/main')
  }
  const addWriting = () => {
    window.location.reload();
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setName(value);
    } else {
      alert("최대 10자까지 작성 가능합니다.");
    }
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      setContent(value);
    } else {
      alert("최대 150자까지 작성 가능합니다.");
    }
  };
  return (
    <div>

      <T.Container>
        <T.Wrapper>
          <T.Title>
            <h1>익명의 심터러에게 편지를 보내보세요!</h1>
            <p>편지는 익명으로 보내지며, 랜덤의 사용자에게 전송됩니다! </p>
            <p>익명의 편지로 따뜻한 마음을 전해주세요~</p>
          </T.Title>
          <S.Letter>
            <T.Wrapper>
              <S.WriteBox>
                <h3>표시할 이름</h3>
                <input 
                  placeholder='표시할 이름을 적어주세요! (최대 10자)'
                  value={name}
                  onChange={handleNameChange}></input>
              </S.WriteBox>
              <S.WriteBox>
                <h3>보낼 내용</h3>
                <textarea 
                  placeholder='따뜻한 마음을 가득 담아 적어보세요! (최대 150자)'
                  value={content}
                  onChange={handleContentChange}></textarea>
              </S.WriteBox>
              <T.SendBtn onClick={openFirstModal}>
                <T.PencilIcon>
                  <img src={Pencil} alt='icon'/>
                </T.PencilIcon>
                <p>보내기</p>
              </T.SendBtn>
            </T.Wrapper>
          </S.Letter>
        </T.Wrapper>
      </T.Container>
      <FirstModal isVisible={isFirstModalOpen} onClose={closeFirstModal} onConfirm={openSecondModal}/>
      <SecondModal isVisible={isSecondModalOpen} onClose={closeSecondModal} onConfirm={addWriting}/>
    </div>
  )
}