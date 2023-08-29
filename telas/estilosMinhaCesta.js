import React from "react";

import { StyleSheet } from "react-native";

export default StyleSheet.create({

    nome: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 24,
    },

    descricao: {
        color: 'red',
        fontSize: 16,
    },

    preco: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 8,
    },
    
    margem: {
        marginTop: 50,
        padding: 24,
    },

    listaDesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },

    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }

});