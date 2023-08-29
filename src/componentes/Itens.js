import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Texto from '../../src/componentes/Texto';

export default function Itens(props){

    function FilterDesc(desc){
        if(desc.lenght<27){
            return desc;
        }

        return `${desc.substring(0, 23)}...`;
    }

    return(
        <TouchableOpacity style={styles.container}>
            <Image source={props.img} style={styles.prdImg}></Image>
            <Texto style={styles.prdText}> {FilterDesc(props.children)} </Texto>
            <View opacity={0.4}>
                <Texto style={styles.prdText}> {props.cost} </Texto>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent:'center',
    },
    prdImg:{
        width: 175,
        height: 175,
    },
    prdText:{
        fontSize:16,
    }
})