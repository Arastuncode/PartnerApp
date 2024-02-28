import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Partner from './screens/Partner';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#1886EB' />
      <Partner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // marginHorizontal: 10
  },
});
