import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://wallpaperaccess.com/full/400472.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Getting Started</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background with transparency
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Light border color for contrast
    borderRadius: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Roboto', // Updated font family
    color: '#fff', // White text color for contrast
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347', // Tomato color for the button
    borderRadius: 5,
  },
  buttonText: {
    color: '#000', // Black text color for contrast on the button
    fontSize: 18,
    fontFamily: 'Roboto', // Updated font family
  },
});

export default GettingStarted;