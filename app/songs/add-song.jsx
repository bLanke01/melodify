import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSongs } from "../../components/SongContext";

const AddSongPage = () => {
  const { addSong } = useSongs();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleAddSong = () => {
    if (title.trim() === "" || artist.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    addSong({ title, artist });
    alert("Song added successfully!");
    router.push("/songs"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Song</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Song Title"
      />
      <TextInput
        style={styles.input}
        value={artist}
        onChangeText={setArtist}
        placeholder="Artist"
      />
      <Button title="Add Song" onPress={handleAddSong} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#9ca3ad", 
  },
  title: {
    fontSize: 32, 
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", 
    textAlign: "center",
  },
  input: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#9ca3ad", 
    color: "black", 
    fontSize: 30, 
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});


export default AddSongPage;
