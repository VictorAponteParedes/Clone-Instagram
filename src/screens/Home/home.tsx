import React, { useRef } from "react";

import { View, Text, Image, ScrollView, Animated } from "react-native";
import { MenuHeader } from "../../components/Header/header";
import { EstadoPerfil } from "../../components/Estado-perfil/estado-perfil";
import { Feed } from "../../components/feed/feed";
import { CustomBottomMenu } from "../../components/MenuNavegacion/menuNavegacion";
import {
  imageFeed,
  ImagenPerfil,
  ImagenPerfil2,
  ImagenPerfil3,
  ImagenPerfil4,
  ItemPerfil2,
  ItemPerfil3,
  ItemPerfil4,
} from "../../mock/mock";

export const Home = () => {
  const handleMenuSelect = (section) => {
    console.log(`Se seleccionó la sección: ${section}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: 10, top: 30 }}>
          <MenuHeader />
          <EstadoPerfil />
          <Feed
            imageFeed={ItemPerfil2}
            imagePerfil={ImagenPerfil}
            nombre="Victor"
          />
          <Feed
            imageFeed={imageFeed}
            imagePerfil={ImagenPerfil2}
            nombre="Carlos"
          />
          <Feed
            imageFeed={ItemPerfil3}
            imagePerfil={ImagenPerfil3}
            nombre="Maria"
          />
          <Feed
            imageFeed={ItemPerfil4}
            imagePerfil={ImagenPerfil4}
            nombre="Adalberto"
          />
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <CustomBottomMenu onSelect={handleMenuSelect} />
      </View>
    </View>
  );
};
