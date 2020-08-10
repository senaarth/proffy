import React from 'react';
import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/49957403?s=460&u=170776941473671902ffee948e33b4a012829359&v=4" alt="Arthur Sena"/>
                <div>
                    <strong>Arthur Sena</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <footer>
                <p>
                    Preço por hora:
                    <strong>R$100,00</strong>
                </p>
                <button type="button" >
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;