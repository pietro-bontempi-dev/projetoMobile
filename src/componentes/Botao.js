import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Botao ({ texto, style }){
    return <TouchableOpacity style={[estilos.botao, style]}>
                <Texto style={estilos.botaoTexto}>{texto}</Texto>
           </TouchableOpacity>
};

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "purple",
        paddingVertical: 12,
        borderRadius: 6,
    },
    botaoTexto: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 26,
    },
});