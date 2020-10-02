import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis.">
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Escolha uma matéria.'}
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da Semana</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Dia da Semana'}
                        />
                        </View>

                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da Semana</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Horário'}
                        />
                        </View>
                    </View>
                </View>
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;
