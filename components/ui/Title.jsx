import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'spacex',
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'seashell',
    textAlign: 'center',
    padding: 12,
  },
});
