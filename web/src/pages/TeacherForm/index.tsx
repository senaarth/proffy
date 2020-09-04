import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/index';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {
    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');

    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const [scheduleItems, setScheduleITems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleITems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        console.log({
            name,
            avatar,
            whatsapp,
            subject,
            cost
        });
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que deseja dar aulas!"
                description="O primeiro passo é preencher sua inscrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                            name="name" 
                            label="Nome Completo" 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }} 
                        />

                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => { setAvatar(e.target.value) }}  
                        />

                        <Input 
                            name="whatsapp" 
                            label="Whatsapp" 
                            value={whatsapp} 
                            onChange={(e) => { setWhatsapp(e.target.value) }} 
                        />

                        <TextArea 
                            name="bio" 
                            label="Biografia"
                            value={bio} 
                            onChange={(e) => { setBio(e.target.value) }} 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
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
                        <Input 
                            name="cost" 
                            label="Custo Hora/Aula" 
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                        </legend>

                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
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
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br/>
                            Preencha todos os dados.
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;