import { Text, View } from "react-native";
import {styles} from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>21/08/2022</Text>
    </ View>
  )
}