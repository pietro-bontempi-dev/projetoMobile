import React, { useState } from "react";

import { View, TextInput, Button } from "react-native"

import Texto from '../src/componentes/Texto';
import estilosMinhaCesta from "./estilosMinhaCesta";
import CampoInteiro from "../src/componentes/CampoInteiro";

export default function Item({nome, descricao, preco}){

    const [quantidade, setQuantidade] = useState(1);

    const [total, setTotal] = useState(preco);

    const calculaTotal = (quantidade) => {setTotal(quantidade*preco);}

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    return <>
    <View style={estilosMinhaCesta.margem}>
        <Texto style={estilosMinhaCesta.nome}>{nome}</Texto>
        <Texto style={estilosMinhaCesta.descricao}>{descricao}</Texto>
        <Texto style={estilosMinhaCesta.preco}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)}</Texto>
    

    <View style={estilosMinhaCesta.listaDesejos}>
        <View style={estilosMinhaCesta.posicao}>
            <Texto>Quantidade</Texto>
            <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal} />
        </View>
        <View style={estilosMinhaCesta.posicao}>
            <Texto>Total</Texto>
            <Texto>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}</Texto>
        </View>

        <Button title="Adicionar" />

    </View>

    <View style={estilosMinhaCesta.divisor}></View>

    </View>

    </>  

}