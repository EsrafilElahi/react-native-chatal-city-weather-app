import React, { useState, useEffect, useRef } from "react";
import {
  ImageBackground,
  Dimensions,
  Text,
  View,
  // I18nManager,
} from "react-native";
import Header from "./Header";
import { useFonts } from "expo-font";
import GlobalStyles from "../styles/BodyStyles";

const customFonts = {
  yekan: require("../assets/fonts/yekan.ttf"),
  oswald: require("../assets/fonts/Oswald-Light.ttf"),
  oswald_regular: require("../assets/fonts/Oswald-Regular.ttf"),
};

const RenderItem = ({ location, images }) => {
  const [isFontLoaded] = useFonts(customFonts);


  if (!isFontLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={images[location?.weatherType]}
      resizeMode="cover"
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
      }}
    >
      <View style={GlobalStyles.layer}>
        <Header />
        <View style={GlobalStyles.weatherInfo}>
          {/* city */}
          <View style={GlobalStyles.cityView}>
            <Text style={GlobalStyles.city}>{location.city}</Text>
          </View>
          {/* dateTime */}
          <View style={GlobalStyles.dateTimeView}>
            <Text style={GlobalStyles.dateTime}>{location.dateTime}</Text>
          </View>
          <View style={GlobalStyles.divider} />
          {/* temp */}
          <View style={GlobalStyles.tempContainer}>
            <View style={GlobalStyles.tempNameView}>
              <Text style={GlobalStyles.tempName}>دما :</Text>
            </View>

            <View style={GlobalStyles.tempDegree}>
              <View style={GlobalStyles.tempDayContainer}>
                <Text style={GlobalStyles.tempDayName}>روز : </Text>
                <Text style={GlobalStyles.tempDay}>{location.tempDay}</Text>
              </View>
              <View style={GlobalStyles.tempNightContainer}>
                <Text style={GlobalStyles.tempNightName}>شب : </Text>
                <Text style={GlobalStyles.tempNight}>{location.tempNight}</Text>
              </View>
            </View>
          </View>
          <View style={GlobalStyles.divider} />
          {/* description */}
          <View style={GlobalStyles.description}>
            <Text style={GlobalStyles.weatherIcon}>{location.weatherType}</Text>
            <Text style={GlobalStyles.weatherDesc}>{location.description}</Text>
          </View>
          <View style={GlobalStyles.divider} />
          {/* rain percent */}
          <View style={GlobalStyles.rainPercentView}>
            <Text style={GlobalStyles.rain}>احتمال بارش باران :</Text>
            <Text style={GlobalStyles.rainPercent}>
              {location.rainPercent} %
            </Text>
          </View>
          <View style={GlobalStyles.divider} />
          {/* sun info */}
          <View style={GlobalStyles.sunInfo}>
            <View style={GlobalStyles.sunRiseView}>
              <Text style={GlobalStyles.sunRiseName}>طلوع آفتاب :</Text>
              <Text style={GlobalStyles.sunRiseTime}>{location.sunRise}</Text>
            </View>
            <View style={GlobalStyles.sunSetView}>
              <Text style={GlobalStyles.sunSetName}>غروب آفتاب :</Text>
              <Text style={GlobalStyles.sunSetTime}>{location.sunSet}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RenderItem;
