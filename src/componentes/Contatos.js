import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Wpp from '../../assets/icones/whatsapp.png';
import Insta from '../../assets/icones/instagram.png';
import ML from '../../assets/icones/mercadoLivre.png';
import Texto from '../componentes/Texto';
import Carrossel from '../mocks/Carrossel';

export default function Contatos() {
    return <>
        <Texto style={styles.titulo}> {Carrossel.Imagens.contato}</Texto>
        <Texto style={styles.textoConteudo2}> {Carrossel.Imagens.conteudoCont}</Texto>

        <View style={styles.item}>
            <Image source={Wpp} />
            <Texto style={styles.redes}> {Carrossel.redes_sociais.Whats}</Texto>
            <Image source={Insta} />
            <Texto style={styles.redes}> {Carrossel.redes_sociais.Inst}</Texto>
            <Image source={ML} />
            <Texto style={styles.redes}> {Carrossel.redes_sociais.Mercado}</Texto>
        </View>
    </>
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 10,
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 20,
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
    textoConteudo2: {
        fontSize: 16,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
    },
    redes: {
        fontSize: 16,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 10,
    },
});