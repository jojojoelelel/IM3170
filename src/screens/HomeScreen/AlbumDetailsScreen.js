// AlbumsDetailsScreen.js
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import SongItem from '../../components/SongItem';
import {access_token2} from '@env';
import * as SpotifyAPI from '../../services/Spotify-web-api';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MusicPlayerContext} from '../../contexts/SongContext';
import {AppContext} from '../../navigation/AppNavigation.js';
import MusicPlayerBar from '../../components/MusicPlayerBar.js';
import PlayerControls from '../../components/PlayerControls.js';

const AlbumsDetailsScreen = ({route}) => {
  const {album, artist} = route.params;
  const [songs, setSongs] = useState([]);
  const [artistName, setArtistName] = useState(''); // State to store the artist's name
  const [playing, setPlaying] = useState(false);
  const {
    isPlaying,
    setIsPlaying,
    currentTrack,
    setCurrentTrack,
    playTrack,
    pauseTrack,
    skipToNext,
    skipToPrevious,
  } = useContext(MusicPlayerContext);
    const {access_token, setaccess_token} = useContext(AppContext);

    useEffect(() => {
      const fetchAlbumDetails = async () => {
        try {
          const tracks = await SpotifyAPI.getAlbumDetails(access_token, album.id,);
          console.log('Fetched album details:', tracks); // Log fetched tracks for debugging
          //console.log(route.params); // Lop fetched album for debugging
          setSongs(tracks); // Assuming the returned value is directly the list of tracks
          setArtistName(album.artist); // Set the artist's name once it's fetched
        } catch (error) {
          console.error('Failed to fetch album details:', error);
          //console.log('Request details:', error.request); // Log request details for debugging
          //console.log('Response data:', error.response && error.response.data); // Log response data for debugging
        }
      };

      fetchAlbumDetails();
    }, [album.id]);

  return (
    <ScrollView style={styles.container}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={{
                  marginHorizontal: 15,
                  marginTop: 10,
                }}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </Pressable>
      <Image source={{uri: album.imageUrl}} style={styles.coverImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.playlistTitle}>{album.name}</Text>
        <Text style={styles.description}>{`By ${artistName}`}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shuffle</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={songs}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SongItem
              id={item.id}
              title={item.name}
              artist={item.artist}
              cover={album.imageUrl}
              preview_url={item.preview_url}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#121212',
    },
  coverImage: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  playlistTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Add styles for FlatList and SongItem here
});


export default AlbumsDetailsScreen;