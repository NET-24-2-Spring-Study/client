import React, { useRef } from 'react';
import * as M from '../Modal/LogoutModal.style';
import x from '../../assets/x.png';
import { useNavigate } from 'react-router-dom';

const DeletePaperModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>작성한 내용을 쓰레기통에 버렸어요!</M.LogoutModalTitle>
        <M.ModalActions>
          <M.CancelButton onClick={() => navigate('/main')}>홈으로 돌아가기</M.CancelButton>
          <M.LogoutClickButton onClick={onClose}>더 작성하기</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeletePaperModal;