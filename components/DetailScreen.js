import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

export const DetailScreen = ({navigation, route}) => {
    const title = route.params.title;
    const description = route.params.description;
    return(
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <TouchableOpacity
                style= {styles.btn}
                onPress={() => navigation.popToTop()} //navigation.goBack()
            >
                <Text style={styles.item}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: { 
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    title: {
      color: "rgb(25, 96, 124)", 
      fontSize:25,
    },
    btn: {
        border: "0",
        backgroundColor: "#ffa500",
        borderRadius: "15px",
        paddingTop: "5px",
        paddingRight: "15px",
        paddingBottom: "5px",
        paddingLeft: "15px",
    }
    
  });
