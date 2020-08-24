import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/index';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que deseja dar aulas!"
                description="O primeiro passo é preencher sua inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo"></Input>
                    <Input name="whatsapp" label="Avatar"></Input>
                    <Input name="whatsapp" label="Whatsapp"></Input>
                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Input name="subject" label="Matéria"></Input>
                    <Input name="cost" label="Custo Hora/Aula"></Input>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados.
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;