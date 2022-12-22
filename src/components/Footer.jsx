import React from 'react'
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-grid">
            <div className="column">
                <h3 className='column-title'>
                    МЫ В СОЦИАЛЬНЫХ СЕТЯХ   
                </h3>
                <img src="../../icons/instagram.png" alt="instagram" />
            </div>

            <div className="column">
                <h3 className='column-title'>
                    КОНТАКТНЫЕ ТЕЛЕФОНЫ 
                </h3>
                <p>+375 29 292-29-29 (VEL)</p>
                <p>+375 33 333-33-33 (МТС)</p>
            </div>

            <div className="column">
                <h3 className='column-title'>
                    О НАС
                </h3>
                <p style={{maxWidth: '220px'}}>Индивидуальное изготовление EVA ковриков для вашего автомобиля</p>
                <p style={{marginTop: '12px'}}>ваш город</p>
            </div>
        </div>
      </div>
    </div>
  )
}
