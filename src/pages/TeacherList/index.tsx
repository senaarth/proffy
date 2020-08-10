import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import wppIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;