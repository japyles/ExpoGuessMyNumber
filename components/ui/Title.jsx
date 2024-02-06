import { Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SpaceX',
    fontSize: 23,
    textTransform: 'uppercase',
    color: 'seashell',
    textAlign: 'center',
    padding: 12,
    width: 300,
    maxWidth: '80%',
    // borderWidth: Platform.OS === 'ios' ? 2 : 0,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: 'seashell',
  },
});
