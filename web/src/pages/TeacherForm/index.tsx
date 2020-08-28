import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/index';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

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

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Inglês', label: 'Inglês'},
                            { value: 'Espanhol', label: 'Espanhol'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Química', label: 'Química'},
                        ]}
                    />
                    <Input name="cost" label="Custo Hora/Aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button>+ Novo Horário</button>
                    </legend>

                    <div className="schedule-item">
                        <Select 
                            name="week-day" 
                            label="Dia da Semana" 
                            options={[
                                { value: '0', label: 'Domingo'},
                                { value: '1', label: 'Segunda-Feira'},
                                { value: '2', label: 'Terça-Feira'},
                                { value: '3', label: 'Quarta-Feira'},
                                { value: '4', label: 'Quinta-Feira'},
                                { value: '5', label: 'Sexta-Feira'},
                                { value: '6', label: 'Sábado'},
                            ]}
                        />

                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
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