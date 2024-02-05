import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/gameOverRound.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 33,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'edge',
    textAlign: 'center',
    marginVertical: 23,
  },

  highlight: {
    fontFamily: 'edge',
    color: Colors.primary500,
  },
});
