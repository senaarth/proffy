import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/index';
import './styles.css';

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
            </main>
        </div>
    )
}

export default TeacherForm;