import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Linking, Pressable, StyleSheet, View } from 'react-native';

const MOCK_SONGS = [
  {
    id: '1',
    title: 'The Nights',
    artist: 'Avicii',
    playlist: 'Hot Electro Songs',
    score: 10,
    image: 'https://i.ytimg.com/vi/UtF6Jej8yb4/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=UtF6Jej8yb4',
  },
  {
    id: '2',
    title: 'Faded',
    artist: 'Alan Walker',
    playlist: 'EDM Hits',
    score: 9,
    image: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
  },
  {
    id: '3',
    title: 'Animals',
    artist: 'Martin Garrix',
    playlist: 'Electro Festival',
    score: 8,
    image: 'https://i.ytimg.com/vi/gCYcHz2k5x0/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=gCYcHz2k5x0',
  },
  {
    id: '4',
    title: 'Alone',
    artist: 'Alan Walker',
    playlist: 'EDM Hits',
    score: 8,
    image: 'https://i.ytimg.com/vi/1-xGerv5FOk/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=1-xGerv5FOk',
  },
  {
    id: '5',
    title: 'Silence (feat. Khalid)',
    artist: 'Marshmello',
    playlist: 'Chill Pop',
    score: 9,
    image: 'https://i.ytimg.com/vi/Tx1sqYc3qas/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Tx1sqYc3qas',
  },
  {
    id: '6',
    title: 'Summer',
    artist: 'Calvin Harris',
    playlist: 'Summer Vibes',
    score: 9,
    image: 'https://i.ytimg.com/vi/ebXbLfLACGM/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=ebXbLfLACGM',
  },
  {
    id: '7',
    title: 'Titanium (feat. Sia)',
    artist: 'David Guetta',
    playlist: 'EDM Legends',
    score: 10,
    image: 'https://i.ytimg.com/vi/BR_DFMUzX4E/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=BR_DFMUzX4E',
  },
  {
    id: '8',
    title: 'Clarity (feat. Foxes)',
    artist: 'Zedd',
    playlist: 'Pop EDM',
    score: 8,
    image: 'https://i.ytimg.com/vi/IxxstCcJlsc/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=IxxstCcJlsc',
  },
];

export default function SongListScreen() {
  const [songs] = useState<any[]>(MOCK_SONGS);
  const router = useRouter();

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push({ pathname: '/song-detail', params: { id: item.id } })} style={{ borderRadius: 20 }}>
          <ThemedView style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 16 }}>
              <ThemedText type="subtitle" numberOfLines={2}>
                {item.title}
              </ThemedText>
              <ThemedText type="defaultSemiBold">{item.artist}</ThemedText>
              <ThemedText type="default" style={{ color: '#878', fontSize: 13 }}>{item.playlist}</ThemedText>
              <ThemedText type="default" style={{ color: '#18b318', fontWeight: 'bold', fontSize: 15 }}>
                Score: {item.score}
              </ThemedText>
            </View>
            <Pressable onPress={() => Linking.openURL(item.youtubeUrl)} style={styles.playButton} hitSlop={10}>
              <Ionicons name="play" size={28} color="#fff" />
            </Pressable>
          </ThemedView>
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 48,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  playButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
