import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ItemProps } from "../TaskList";
import { styles } from "./styles";

type Props = {
  item: ItemProps;
  onCheck?: (id: string) => void;
  onRemove?: (id: string) => void;
};

export function Task({item:{description, checked, id}, onCheck, onRemove}: Props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={
          checked ? 
            [styles.checkButton, styles.checkedButton] : 
            styles.checkButton
          }
        onPress={() => onCheck?.(id)}
      >
        {checked && (
          <Ionicons name="checkmark-outline" size={14} color="#F2F2F2" />
        )}
      </TouchableOpacity>
      <Text 
        style={
          checked ? 
            [styles.checkText, styles.checkedText] : 
            styles.checkText
          }
      >{description}</Text>
      <TouchableOpacity onPress={() => onRemove?.(id)}>
        <Ionicons name="trash-outline" size={16} color={checked ? "#808080" : "#F2F2F2"} />
      </TouchableOpacity>
    </View>
  )
}