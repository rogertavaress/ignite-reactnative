import React, { useCallback, useState } from "react";
import { Alert, View } from "react-native";

import { AddItemInput } from "../../components/AddItemInput";
import { Header } from "../../components/Header";
import { TaskList, ItemProps } from "../../components/TaskList";
import { styles } from "./styles";

export function List() {
  const [tasks, setTasks] = useState<ItemProps[]>([]);

  const removeItem = (id: string) => {
    setTasks(prevValue => {
      const itemIndex = prevValue.findIndex((task) => task.id === id);
      
      if(itemIndex < 0) {
        return prevValue;
      }

      prevValue.splice(itemIndex, 1)

      return [...prevValue];
    })
  }

  const handleAddItem = useCallback((descriptionRaw: string)=> {
    const description = descriptionRaw.trim();
    
    if(description.length === 0) {
      return
    }

    const newTask: ItemProps = {
      id: new Date().getTime().toString(),
      description,
      checked: false
    }

    setTasks(prevState => [newTask, ...prevState])
  },[tasks]);

  const handleCheckItem = useCallback((id: string)=> {
    setTasks(prevValue => {
      const itemIndex = prevValue.findIndex((task) => task.id === id);
      
      if(itemIndex < 0) {
        return prevValue;
      }

      prevValue[itemIndex] = {...prevValue[itemIndex], checked: !prevValue[itemIndex].checked}

      return [...prevValue];
    })
  },[]);

  const handleRemoveItem = useCallback((id: string) => {
    const task = tasks.find((task) => task.id === id);

    if(!task) {
      return
    }

    Alert.alert(
      "Remover", 
      `Tem certeza que quer remover o item: ${task.description}`, 
      [
        {text: "Sim", onPress: () => removeItem(id)}, 
        {text: "Não"}
      ]
    )
  }, [tasks]);

  return (
    <View style={styles.container}>
      <Header />
      <AddItemInput onSubmit={handleAddItem} />
      <TaskList items={tasks} onCheck={handleCheckItem} onRemove={handleRemoveItem} />
    </View>
  )
}