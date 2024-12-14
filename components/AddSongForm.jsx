import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const AddSongForm = ({ onAddSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleAddSong = () => {
    if (title.trim() === '' || artist.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }
    const newSong = { title, artist };
    onAddSong(newSong); // Pass the new song back to the parent
    setTitle('');
    setArtist('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Song Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter song title"
      />
      <Text style={styles.label}>Artist:</Text>
      <TextInput
        style={styles.input}
        value={artist}
        onChangeText={setArtist}
        placeholder="Enter artist name"
      />
      <Button title="Add Song" onPress={handleAddSong} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
});

export default AddSongForm;
