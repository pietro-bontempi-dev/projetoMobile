import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Cabecalho from '../src/componentes/Cabecalho';
import Texto from '../src/componentes/Texto';
import Carrossel from '../src/mocks/Carrossel'
import Itens from '../src/componentes/Itens';

export default function Produtos() {
    return (
        <View style={styles.container}>
            <Cabecalho />
            <View>
                <TouchableOpacity style={{ position: "absolute", right: 0, alignSelf: 'center' }}>
                    <MaterialIcons
                        name="filter-list"
                        size={24}
                        color='#660066'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.line}/>

            <ScrollView>
                <Texto style={styles.titulo}>{Carrossel.Imagens.produtos}</Texto>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/1.png')} cost='R$39,99'>Produto 1</Itens>
                    <Itens img={require('../assets/produtos/2.png')} cost='R$39,99'>Produto 2</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/3.png')} cost='R$39,99'>Produto 3</Itens>
                    <Itens img={require('../assets/produtos/4.png')} cost='R$39,99'>Produto 4</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/5.png')} cost='R$39,99'>Produto 5</Itens>
                    <Itens img={require('../assets/produtos/6.png')} cost='R$39,99'>Produto 6</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/7.png')} cost='R$39,99'>Produto 7</Itens>
                    <Itens img={require('../assets/produtos/8.png')} cost='R$39,99'>Produto 8</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/9.png')} cost='R$39,99'>Produto 9</Itens>
                    <Itens img={require('../assets/produtos/10.png')} cost='R$39,99'>Produto 10</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/11.png')} cost='R$39,99'>Produto 11</Itens>
                    <Itens img={require('../assets/produtos/12.png')} cost='R$39,99'>Produto 12</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/13.png')} cost='R$39,99'>Produto 13</Itens>
                    <Itens img={require('../assets/produtos/14.png')} cost='R$39,99'>Produto 14</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/15.png')} cost='R$39,99'>Produto 15</Itens>
                    <Itens img={require('../assets/produtos/16.png')} cost='R$39,99'>Produto 16</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/17.png')} cost='R$39,99'>Produto 17</Itens>
                    <Itens img={require('../assets/produtos/18.png')} cost='R$39,99'>Produto 18</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/19.png')} cost='R$39,99'>Produto 19</Itens>
                    <Itens img={require('../assets/produtos/20.png')} cost='R$39,99'>Produto 20</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/21.png')} cost='R$39,99'>Produto 21</Itens>
                    <Itens img={require('../assets/produtos/22.png')} cost='R$39,99'>Produto 22</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/23.png')} cost='R$39,99'>Produto 23</Itens>
                    <Itens img={require('../assets/produtos/24.png')} cost='R$39,99'>Produto 24</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/25.png')} cost='R$39,99'>Produto 25</Itens>
                    <Itens img={require('../assets/produtos/26.png')} cost='R$39,99'>Produto 26</Itens>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Itens img={require('../assets/produtos/27.png')} cost='R$39,99'>Produto 27</Itens>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F2F2F2",
    },
    titulo: {
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: "bold",
        color: '#660066',
        alignContent: "center",
        textAlign: 'center',
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    line:{
        borderBottomColor:'#660066',
        borderBottomWidth: 2,
    }
})