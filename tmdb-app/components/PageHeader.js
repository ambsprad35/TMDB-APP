/*
  PageHeader.js
  This file displays the header for each page.  
  For reusability, this code was put into it's own file.
*/

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';

import styles from '../styles';

export default function PageHeader({ title }) {
  return (
    <SafeAreaView style={localStyles.safe}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  safe: {
    backgroundColor: '#111',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
