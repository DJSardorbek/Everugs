import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../App";
import classes from "../../styles/MyModal.module.css";

export default function MyModal() {
  const { modal, setModal } = useContext(ModalContext)
  const modalClasses = [classes.myModal];
  if (modal) {
    modalClasses.push(classes.active);
  }
  return (
    <div className={modalClasses.join(" ")} 
        onClick={() => {
          setModal(false);
          document.body.style.overflow = 'unset';
          }}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modalContentCenter}>
          <div className={classes.title}>ФОРМА ЗАЯВКИ</div>
          <div className={classes.firstRow}>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваш e-mail" />
          </div>
          <div className={classes.secondRow}>
            <textarea
              rows="10"
              cols="30"
              placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"
            ></textarea>
          </div>
          <button className="btn" 
            onClick={() => {
              setModal(false);
              document.body.style.overflow = 'unset';
              }}>отправить
          </button>
        </div>
      </div>
    </div>
  );
}
