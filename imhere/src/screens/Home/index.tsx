import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles} from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("click");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>21/08/2022</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </ View>
  )
}