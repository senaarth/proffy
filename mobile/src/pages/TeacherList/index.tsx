import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import styles from './styles';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFilterVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis." 
                headerRight={
                    <BorderlessButton onPress={handleToggleFilterVisible} >
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                }
            >

                { isFiltersVisible && (
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

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
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
