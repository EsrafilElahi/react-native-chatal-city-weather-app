import React, { useState, useEffect, useRef } from "react";
import { FlatList, ScrollView } from "react-native";
import Locations from "./Locations";
import RenderItem from "./RenderItem";

const Body = () => {
  const [images, setImages] = useState({});

  const loadImages = async () => {
    setImages({
      Night: await require("../assets/pics/night.jpg"),
      Rainy: await require("../assets/pics/rainy.jpg"),
      Sunny: await require("../assets/pics/sunny.jpg"),
      Cloudy: await require("../assets/pics/cloudy.jpeg"),
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <ScrollView>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={Locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItem images={images} location={item} />
        )}
      />
    </ScrollView>
  );
};

export default Body;
