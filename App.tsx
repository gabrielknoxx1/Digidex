import { StatusBar } from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyled } from './src/styles/global';


export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#CDCFC9"/>
    <GlobalStyled>
      <Home />
    </GlobalStyled>
  </>
  );
}

