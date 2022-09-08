import { Image, View, Text } from "react-native";

import TaskIcon from "../../assets/task-icon.png";
import { styles } from "./styles";

export function TaskListEmpty() {
  return (
    <View style={styles.container}>
      <Image 
        source={TaskIcon} 
        style={styles.icon}
      />
      <Text style={[styles.description, styles.bold]}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={[styles.description]}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}