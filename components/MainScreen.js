import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Button, FlatList,TouchableOpacity } from "react-native";
import { initTodos } from '../todos';

export const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.item}>Here are your TODOs </Text>
      <FlatList
        data={[
          {
            key: "Walk the dog",
            description:
              "Go outside (carry an umbrella if needed, and a coat for your friend), and walk for 10 blocks and get back home"
          },
          {
            key: "Feed the dog",
            description:
              "Check the your dog food's package and check the amount of grams a dog your age need for the day. Divide it according to the amount of times you feed your pal"
          },
          {
            key: "Play with the dog",
            description:
              "Go the nearest park where other doggies go. And don't forget the ball!"
          },
          {
            key: "Pet the dog",
            description:
              "Take a break and look for your dog, pet him for a while, and cuddle, you could take a quick nap comfortably ;)"
          },
          {
            key: "Sleep the dog",
            description:
              "Day is over, get your dog to the bed, put the lights off and wrap your dog with a blanket, time to rest."
          }
        ]}
        renderItem={({item}) => 
          <TouchableOpacity 
            style={styles.li}
            onPress={() => navigation.navigate('Detail', {title: item.key, description: item.description})}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 32)"
  },
  item: {
    color: "rgb(37, 136, 175)",
    fontWeight: "bold",
    fontSize: 25,
  },
  li: {

    color: "rgb(37, 136, 175)",
    backgroundColor: "rgb(252, 221, 196)",
    borderRadius: "15px",
    padding: "15px 0 15px 0",
    border: "1px solid rgb(253, 186, 131)",
    margin: "5px",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight:"50px",
    paddingLeft:"50px",

  }
});