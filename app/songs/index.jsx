import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useSongs } from "../../components/SongContext";
import { Audio } from "expo-av";

const SongsPage = () => {
  const { songs, deleteSong } = useSongs(); 
  const router = useRouter();
  const [currentSound, setCurrentSound] = useState(null);

  const playSong = async (file) => {
    try {
      if (currentSound) {
        await currentSound.stopAsync();
        await currentSound.unloadAsync();
        setCurrentSound(null);
      }

      const { sound } = await Audio.Sound.createAsync(
        typeof file === "string" ? { uri: file } : file
      );
      setCurrentSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing the song:", error);
      alert("Unable to play the song.");
    }
  };

  const stopSong = async () => {
    try {
      if (currentSound) {
        await currentSound.stopAsync();
        await currentSound.unloadAsync();
        setCurrentSound(null);
      } else {
        alert("No song is currently playing.");
      }
    } catch (error) {
      console.error("Error stopping the song:", error);
      alert("Unable to stop the song.");
    }
  };

  const handleDeleteSong = (id) => {
    Alert.alert(
      "Delete Song",
      "Are you sure you want to delete this song?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteSong(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Songs</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
            <View style={styles.songActions}>
              <Button title="Play" onPress={() => playSong(item.file)} />
              <Button title="Stop" onPress={stopSong} color="red" />
              <Button title="Delete" onPress={() => handleDeleteSong(item.id)} color="orange" />
            </View>
          </View>
        )}
      />
      <Button
        title="Add a Song"
        onPress={() => router.push("/songs/add-song")}
        color="#007BFF"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", 
    padding: 16,
    justifyContent: "center", 
    alignItems: "center", 
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  songItem: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#333",
    alignItems: "center", 
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  songArtist: {
    fontSize: 18,
    color: "#bbb",
    textAlign: "center",
  },
});


export default SongsPage;
