import React from 'react';
import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço por hora:
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${teacher.whatsapp}`} target="blank">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;