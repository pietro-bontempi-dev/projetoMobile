import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }){
    
    //Determina a estilização padrão
    let estilo = estilos.texto;

    //Verifica se o texto é negrito ou não
    if (style?.fontWeight === "bold"){
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto : {
        fontFamily: "MontSerratRegular",
    },
    textoNegrito : {
        fontFamily: "MontSerratBold",
    }
});