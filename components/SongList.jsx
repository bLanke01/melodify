import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SongList = ({ songs, onSongSelect }) => {
  return (
    <View>
      {songs.map((song) => (
        <View key={song.id} style={styles.songContainer}>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text style={styles.songArtist}>{song.artist}</Text>
          <Button title="Play" onPress={() => onSongSelect(song)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SongList;
