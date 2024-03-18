import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { ImagenPerfil } from "../../mock/mock";

export const CustomBottomMenu = ({ onSelect }) => {
  return (
    <View
      style={{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
      }}>
      <TouchableOpacity onPress={() => onSelect("home")}>
        <MaterialCommunityIcons name="home" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("arrow-right-arrow-left")}>
        <Feather name="search" size={25} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("arrow-right-arrow-left")}>
        <Octicons name="diff-added" size={25} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("home")}>
        <MaterialCommunityIcons name="movie-play" size={25} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("cog")}>
        <Image
          style={{ borderRadius: 100, width: 35, height: 35 }}
          source={ImagenPerfil}
        />
      </TouchableOpacity>
    </View>
  );
};
