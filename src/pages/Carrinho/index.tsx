import React from "react";

import { StyleSheet, View } from "react-native";

import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";
import carrinho from "../../mocks/carrinho";

export default function Carrinho() {
  return (
    <>
      <Topo />

      <View style={estilos.carrinho}>
        <Detalhe 
          nome={carrinho.detalhes.nome}
          nomeFazenda={carrinho.detalhes.nomeFazenda} descricao={""} preco={""}        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,

    paddingHorizontal: 16,
  },
});
