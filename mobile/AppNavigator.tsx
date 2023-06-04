// AppNavigator.tsx

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddCharacterScreen from './AddCharacterScreen';
import ListCharactersScreen from './ListCharactersScreen';

const AppNavigator = createStackNavigator({
  AddCharacter: { screen: AddCharacterScreen },
  ListCharacters: { screen: ListCharactersScreen },
});

export default createAppContainer(AppNavigator);