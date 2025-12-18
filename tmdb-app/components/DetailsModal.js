/*
  DetailsModal.js
  This file displays the modal dialogues for each movie and show when clicked.
  For movies, the modal will display title, release date, and the number of users
  who have favorited the movie.
  For TV shows, the modal will display title, last air date, and number of users
  who have added the show to their watchlist. 
  For reusability, this code was put into it's own file.
*/

import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

import styles from '../styles';

export default function DetailsModal({ visible, item, type, onClose }) {
  if (!item) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.modTitle}>
            {type === 'movie' ? item.title : item.name}
          </Text>

          <Text style={styles.text}>
            {type === 'movie'
              ? `Release Date: ${item.release_date}`
              : `Last Air Date: ${item.first_air_date}`}
          </Text>

          <Text style={styles.text}>
            {type === 'movie'
              ? `Users Who Favorited: ${item.vote_count}`
              : `Users Who Added to Watchlist: ${item.vote_count}`}
          </Text>

          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
