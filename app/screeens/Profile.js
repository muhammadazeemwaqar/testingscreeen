import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import DetailComponent from "../components/DetailComponent";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.textbox}>
        <Text style={styles.text}>Profile</Text>
      </View>

      <View style={styles.imagebox}>
        <Image
          style={styles.img}
          source={require("../../assets/Ellipse.png")}
        />
      </View>
      <Text style={styles.text2}>Jossin Uddin</Text>
      <Text style={styles.text3}>Electrician</Text>

      <View style={styles.locationbox}>
        <Ionicons name="location-outline" size={20} color="red" />
        <Text style={{ color: "red" }}>Dhaka</Text>
      </View>

      <DetailComponent
        detail="+3821427834"
        name="Phone number"
        inputfield="3742"
      />
      <DetailComponent detail="75875357374535" name="Govt ID" />
      <DetailComponent detail="www.facebook.com/ali" name="Facebook" />
      <TouchableOpacity style={styles.btn}>
        <Text>Sumbit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  textbox: {
    width: wp("100%"),
    height: hp("5%"),
    // backgroundColor: "green",
    marginTop: hp("0.7%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  imagebox: {
    marginTop: hp("1%"),
    width: wp("40%"),
    height: hp("20%"),
    backgroundColor: "blue",
    borderRadius: 400 / 2,
  },
  img: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  text2: {
    fontWeight: "bold",
    fontSize: hp("2%"),
    marginTop: hp("0.3%"),
  },
  locationbox: {
    width: wp("100%"),
    height: hp("5%"),
    //  backgroundColor: "green",
    marginTop: hp("0.7%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btn: {
    width: "90%",
    height: "7%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: hp("5%"),
  },
});
