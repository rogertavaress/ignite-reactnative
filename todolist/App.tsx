import { StatusBar } from 'expo-status-bar';
import { List } from './src/screens/List';

export default function App() {
  return (
    <>
      <List />
      <StatusBar style="light" />
    </>
  );
}