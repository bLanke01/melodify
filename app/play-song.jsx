import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';

const PlaySongScreen = () => {
  const { song } = useLocalSearchParams(); // Use this to extract params
  const songDetails = JSON.parse(song);
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      typeof songDetails.url === 'string'
        ? { uri: songDetails.url }
        : songDetails.url
    );
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{songDetails.title}</Text>
      <Text style={styles.artist}>{songDetails.artist}</Text>
      <Button title="Play" onPress={playSound} />
      <Button title="Stop" onPress={stopSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default PlaySongScreen;
