import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  createdCount?: number;
  completedCount?: number;
}

export function TaskListHeader({createdCount = 0, completedCount = 0}:Props) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <Text style={[styles.text, styles.textBlue]}>Criadas</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{createdCount}</Text>
        </View>
      </View>
      <View style={styles.side}>
        <Text style={[styles.text, styles.textPurple]}>Concluídas</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{completedCount}</Text>
        </View>
      </View>
    </View>
  );
}