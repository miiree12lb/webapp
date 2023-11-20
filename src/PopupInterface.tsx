import React from "react";
import Modal from "reactjs-popup";
//@ts-ignore
import * as popup_style from "./css/popup.css";
// @ts-ignore
import back from "../assets/images/back.png";

interface PopupProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    content: React.ReactNode;
}

const PopupInterface: React.FC<PopupProps> = ({ isOpen, onRequestClose, title, content }) => {
  return (
    <Modal open={isOpen} onClose={onRequestClose} closeOnDocumentClick={false}>
      <div className="popup_holder">
        <div className="popup_content">
            <div className="header">
                <img id={popup_style.back} src={back} alt="back" onClick={onRequestClose}/>
                <h1 id={popup_style.title}>{title}</h1>
            </div>
            {content}
        </div>
      </div>
    </Modal>
  );
};

export default PopupInterface;
