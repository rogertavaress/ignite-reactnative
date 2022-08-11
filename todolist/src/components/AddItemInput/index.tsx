import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import PlusImage from "../../assets/plus.png";
import { useState } from "react";

export function AddItemInput() {
  const [inputActive, setInputActive] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput 
        style={inputActive ? [styles.input, styles.inputFocussed] : styles.input} 
        placeholder="Adicione uma nova tarefa" 
        placeholderTextColor="#808080"
        onFocus={()=> setInputActive(true)}
        onBlur={()=> setInputActive(false)}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Image source={PlusImage} />
      </TouchableOpacity>
    </View>
  );
}