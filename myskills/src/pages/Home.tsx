import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    showLog();
    if (newSkill.length === 0) {
      return;
    }
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  function showLog() {
    console.log('Mostrar log');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour < 18) {
      setGreeting('Boa tarde!');
    } else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={mySkills}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.title}>Olá Rogério</Text>
            <Text style={styles.greeting}>{greeting}</Text>
            <TextInput
              value={newSkill}
              style={styles.input}
              placeholder="Nova Skill"
              placeholderTextColor="#555"
              onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} title="Adicionar" />

            <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
          </>
        )}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff',
  },
});
