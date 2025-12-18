/*
  Shows.js
  This file displays the current trending shows on TMDB.
  Click on a show and a modal dialogue will display.

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
import { fetchTrendingTV } from './api/tmdb';
import { TMDB_IMAGE_BASE } from './api/config';
import DetailsModal from './components/DetailsModal';
import PageHeader from './components/PageHeader';

export default function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch tv show data
  useEffect(() => {
    fetchTrendingTV()
      .then((data) => setShows(data.results))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const openModal = (show) => {
    setSelectedShow(show);
    setModalVisible(true);
  };

  // Display loading indicator if data isn't responding
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <PageHeader title="Trending Shows" />
      <FlatList
        data={shows}
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
              {item.name}
            </Text>
          </Pressable>
        )}
      />
      <DetailsModal
        visible={modalVisible}
        item={selectedShow}
        type="tv"
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
