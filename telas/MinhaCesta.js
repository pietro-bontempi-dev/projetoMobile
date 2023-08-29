import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from 'react-native';

import Texto from '../src/componentes/Texto';
import Item from './Item';

const produtos=[

    {
        id: 1,
        nome: "Cesta Inverno",
        preco: 79.90,
        descricao: "Cesta de frutas típicas do inverno!"
    },

    {
        id: 2,
        nome: "Cesta Verão",
        preco: 79.90,
        descricao: "Cesta de frutas típicas do verão!"
    },

    {
        id: 3,
        nome: "Cesta Primavera",
        preco: 79.90,
        descricao: "Cesta de frutas típicas do primavera!"
    }

];


export default function MinhaCesta(){

    return <SafeAreaView>
        <StatusBar />
        <FlatList
            data={produtos}
            renderItem={({item})=>(<Item {...item}/>)}
            keyExtractor={({id})=>(String(id))}
        />
    </SafeAreaView>
    
}