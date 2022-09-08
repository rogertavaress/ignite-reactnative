import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { Task } from '../Task';
import { TaskListEmpty } from '../TaskListEmpty';
import { TaskListHeader } from '../TaskListHeader';
import { styles } from './styles';

export type ItemProps = {
  id: string,
  description: string;
  checked: boolean;
}

type TaskListprops = {
  items?: ItemProps[];
  onCheck?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function TaskList({ items = [], onCheck, onRemove }: TaskListprops) {
  const completedCount = useMemo(()=> items.filter(item => item.checked).length, [items]);

  return (
    <FlatList
      style={styles.container}
      data={items}
      ListHeaderComponent={() => (
        <TaskListHeader completedCount={completedCount} createdCount={items.length} />
      )}
      ListEmptyComponent={() => (
        <TaskListEmpty />
      )}
      renderItem={({item}) => (
        <Task item={item} onCheck={onCheck} onRemove={onRemove} />
      )}
    />
  )
}