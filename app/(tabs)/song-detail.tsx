import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

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

export default function SongDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const song = MOCK_SONGS.find((s) => s.id === id);

  if (!song) {
    return <ThemedText style={{ marginTop: 100, alignSelf: 'center' }}>Song not found.</ThemedText>;
  }

  const playableUrl = song.youtubeUrl;

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 18, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="arrow-back" size={26} color="#222" />
        <ThemedText style={{ marginLeft: 8 }} type="defaultSemiBold">Back</ThemedText>
      </TouchableOpacity>
      <Image source={{ uri: song.image }} style={styles.image} />
      <ThemedText type="title" style={{ marginTop: 12 }}>{song.title}</ThemedText>
      <ThemedText type="defaultSemiBold">By {song.artist}</ThemedText>
      <ThemedText style={{ marginBottom: 12, color: '#888' }}>{song.playlist}</ThemedText>
      <ThemedText style={{ color: '#18b318', fontWeight: 'bold', fontSize: 18 }}>Score: {song.score}</ThemedText>
      <TouchableOpacity style={styles.playButton} onPress={() => Linking.openURL(playableUrl)}>
        <Ionicons name="play" size={30} color="#fff" />
        <ThemedText style={{ color: '#fff', marginLeft: 8 }}>Play (YouTube)</ThemedText>
      </TouchableOpacity>
      {/* Info Table Section */}
      <View style={styles.infoContainer}>
        <ThemedText type="subtitle" style={{ marginBottom: 12 }}>
          Song Information
        </ThemedText>
        <InfoRow label="Title:" value={song.title} />
        <InfoRow label="Artist:" value={song.artist} />
        <InfoRow label="Playlist:" value={song.playlist} />
        <InfoRow label="Score:" value={song.score} valueStyle={{ color: '#18b318', fontWeight: 'bold' }} />
        <InfoRow label="YouTube:" value={<TouchableOpacity onPress={() => Linking.openURL(song.youtubeUrl)}><ThemedText style={{ color: '#0a7ea4', textDecorationLine: 'underline' }}>Open YouTube</ThemedText></TouchableOpacity>} />
      </View>
    </ThemedView>
  );
}

function InfoRow({ label, value, valueStyle = {} }: { label: string; value: React.ReactNode; valueStyle?: any }) {
  return (
    <View style={styles.infoRow}>
      <ThemedText type="defaultSemiBold" style={styles.infoLabel}>{label}</ThemedText>
      {typeof value === 'string' || typeof value === 'number' ? (
        <ThemedText style={[styles.infoValue, valueStyle]}>{value}</ThemedText>
      ) : (
        value
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220,
    borderRadius: 14,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    alignSelf: 'center',
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 28,
    marginBottom: 24,
  },
  infoContainer: {
    backgroundColor: '#f4f6fa',
    borderRadius: 18,
    padding: 18,
    marginTop: 12,
    marginBottom: 18,
    shadowColor: '#00000020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },
  infoLabel: {
    width: 90,
    fontWeight: 'bold',
    color: '#293046',
    fontSize: 16,
  },
  infoValue: {
    flex: 1,
    color: '#222',
    fontSize: 16,
    fontWeight: '400',
  },
});
