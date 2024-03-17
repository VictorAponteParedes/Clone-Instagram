import React from "react";

import { View, Text, Image, ScrollView } from "react-native";
import { MenuHeader } from "../../components/Header/header";
import { EstadoPerfil } from "../../components/Estado-perfil/estado-perfil";
import { Feed } from "../../components/feed/feed";
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
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <MenuHeader />
        <EstadoPerfil />
        <Feed
          imageFeed={imageFeed}
          imagePerfil={ImagenPerfil}
          nombre="Victor"
        />
        <Feed
          imageFeed={ItemPerfil2}
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
  );
};
