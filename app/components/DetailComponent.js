import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DetailComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftsidebox}>
        <View style={styles.upperbox}>
          <Text style={{ marginLeft: hp("1%") }}>{props.name}</Text>
        </View>
        <View style={styles.bottombox}>
          <TextInput placeholder={props.detail} style={styles.input} />
        </View>
      </View>
      <View style={styles.rightsidebox}>
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("9%"),
    // backgroundColor: "red",
    flexDirection: "row",
  },
  leftsidebox: {
    width: "85%",
    height: "100%",
    //  backgroundColor: "pink",
  },
  rightsidebox: {
    width: "15%",
    height: "100%",
    //  backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  upperbox: {
    width: "100%",
    height: "40%",
    // backgroundColor: "orange",
  },
  bottombox: {
    width: "100%",
    height: "60%",
    //  backgroundColor: "blue",
  },
  input: {
    width: "90%",
    height: "100%",
    marginHorizontal: 10,
    // borderColor: "black",
    //borderWidth: hp("0.1%"),
    padding: 5,
    backgroundColor: "#939393",
    borderRadius: 10,
  },
});
