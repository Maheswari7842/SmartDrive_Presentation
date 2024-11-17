import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handleNavigation = () => {
    Alert.alert("Smart Navigation", "Optimizing your route with live traffic updates!");
  };

  const handleDiagnostics = () => {
    Alert.alert("Vehicle Diagnostics", "Everything looks good! No issues detected.");
  };

  const handleRemoteControl = () => {
    Alert.alert("Remote Control", "Car unlocked and AC turned on!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartDrive App</Text>

      <Button title="Smart Navigation" onPress={handleNavigation} />
      <Button title="Vehicle Diagnostics" onPress={handleDiagnostics} />
      <Button title="Remote Control" onPress={handleRemoteControl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
