import React from "react";
import { TextInput, SafeAreaView, Alert } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import GlobalStyles from "../styles/HeaderStyles";

const Header = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Entypo
        name="location-pin"
        size={30}
        color="#FFF"
        onPress={() => Alert.alert("location")}
        style={GlobalStyles.Icon}
      />
      <TextInput
        style={GlobalStyles.txtInput}
        value={search}
        onChangeText={(txt) => setSearch(txt)}
        placeholder="نام شهر خود را وارد کنید..."
        placeholderTextColor="#FFF"
      />
      <Feather
        name="search"
        size={30}
        color="#FFF"
        onPress={() => Alert.alert("search")}
        style={GlobalStyles.Icon}
      />
    </SafeAreaView>
  );
};

export default Header;
