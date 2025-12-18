/*
  Styles.js
  This file holds the StyleSheet for the entire application
*/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { padding: 8 },
  card: { flex: 1, margin: 8 },
  poster: {
    height: 250,
    borderRadius: 8,
  },
  title: {
    marginTop: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: '85%',
    padding: 20,
    borderRadius: 12,
  },
  modTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#111',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
