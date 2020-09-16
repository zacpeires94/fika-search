import React from 'react';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from './containers'

export default function App() {  

  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </NativeRouter>
  );
}
