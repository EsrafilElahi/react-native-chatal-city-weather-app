import React, { useState } from "react";
import { TextInput, SafeAreaView, Alert } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import GlobalStyles from "../styles/HeaderStyles";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Feather
        name="search"
        size={30}
        color="black"
        onPress={() => Alert.alert("search")}
        style={GlobalStyles.Icon}
      />
      <TextInput
        style={GlobalStyles.txtInput}
        value={search}
        onChangeText={setSearch}
        placeholder="نام شهر خود را وارد کنید..."
        placeholderTextColor="black"
      />
      <Entypo
        name="location-pin"
        size={30}
        color="black"
        onPress={() => Alert.alert("location")}
        style={GlobalStyles.Icon}
      />
    </SafeAreaView>
  );
};

export default Header;
