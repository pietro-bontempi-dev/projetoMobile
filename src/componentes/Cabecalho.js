import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Cabecalho(){
    return<>
        <Image source={topo} style={estilos.topo}/>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height: 380/768*width,
    }
});