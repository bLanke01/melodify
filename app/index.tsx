import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Melodify</Text>
      <Image
        source={require('../assets/images/music.png')} // Replace with your image path
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./songs')}
      >
        <Text style={styles.buttonText}>View All Songs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./songs/add-song')}
      >
        <Text style={styles.buttonText}>Add a New Song</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ca3ad', 
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', 
  },
  image: {
    width: 150, 
    height: 150,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#ffffff', 
    borderRadius: 5,
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#000',
  },
  buttonText: {
    color: '#000', 
    fontSize: 16,
  },
});

export default HomeScreen;
