/*
  Movies.js
  This file displays the current trending movies on TMDB.
  Click on a movie and a modal dialogue will display.
*/

import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';

import styles from './styles';
import { fetchTrendingMovies } from './api/tmdb';
import { TMDB_IMAGE_BASE } from './api/config';
import DetailsModal from './components/DetailsModal';
import PageHeader from './components/PageHeader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch Movie data
  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  // Display loading indicator if data isnt responding
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <PageHeader title="Trending Movies" />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Pressable onPress={() => openModal(item)} style={styles.card}>
            <Image
              source={{ uri: `${TMDB_IMAGE_BASE}${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
      <DetailsModal
        visible={modalVisible}
        item={selectedMovie}
        type="movie"
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
