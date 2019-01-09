/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { f, auth, storage } from "./config/config";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    //this.registerUser("nicolas.viana@am4.com.br", "123@mudar");

    auth.onAuthStateChanged((user)=>{
      if(user){

      }
      else{

      }
    })

  }

  async facebookLogin = () =>{
    const  {type, token}  = await Expo.Facebook.logInWithReadPermissionsAsync("524474748037636", 
    {
      permissions: ["public_profile"]
    });
    if(type === "SUCCESS"){
      const credentials = auth.FacebookAuthProvider.credential(token);
      auth.signInWithCredential(credentials).then(success=>{
        console.log(success);
      }, error=>{
        console.log(error);
      })
    }
  }

  registerUser = (email, password) => {
    console.log(email);
    console.log(password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
