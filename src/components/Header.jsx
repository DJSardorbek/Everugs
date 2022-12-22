import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../App';
import "../styles/Header.css";

export default function Header() {
    const {modal, setModal} = useContext(ModalContext);
    const OpenModal = () => {
        setModal(true);
        document.body.style.overflow = 'hidden';
    }
    return (
        <div className='header'>
            <div className="container">
                <div className="header-title">
                    <div className="title-logo">
                        <img src="../icons/logo.png" alt="logo"/>
                        <h3 className='title-logo-text'>EVARUGS</h3>
                    </div>
                    <div className="title-nav">
                        <Link className='nav-item' onClick={OpenModal}>
                            отзывы
                        </Link>
                        <Link className='nav-item'>
                            что это?
                        </Link>
                        <Link className='nav-item'>
                            контакты
                        </Link>
                    </div>
                </div>

                <div className="header-content">
                    <div className="left-content">
                        <h4>Инновационные коврики для автомобиля</h4>
                        <p>в вашем городе</p>
                        <button 
                            className='btn'
                            onClick={OpenModal}>ЗАКАЗАТЬ
                        </button>
                    </div>
                    <div className="right-content">
                        <img src="../images/header-img.png" alt="header-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
