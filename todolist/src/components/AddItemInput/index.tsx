import { useRef, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import PlusImage from "../../assets/plus.png";

import { styles } from "./styles";

type InputProps = {
  onSubmit?: (description: string) => void;
}

export function AddItemInput({onSubmit}:InputProps) {
  const textInputRef = useRef<TextInput>(null);
  const [value, setValue] = useState('');
  const [inputActive, setInputActive] = useState(false);

  const handleSubmit = () => {
    onSubmit?.(value);
    textInputRef.current?.clear();
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        style={inputActive ? [styles.input, styles.inputFocussed] : styles.input} 
        placeholder="Adicione uma nova tarefa" 
        placeholderTextColor="#808080"
        onFocus={()=> setInputActive(true)}
        onBlur={()=> setInputActive(false)}
        onChangeText={setValue}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleSubmit}>
        <Image source={PlusImage} />
      </TouchableOpacity>
    </View>
  );
}