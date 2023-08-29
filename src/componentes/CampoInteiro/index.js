import React from "react";
import { TextInput } from "react-native";

export default function CampoInteiro({valor, acao}){
    
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificaInteiro) return;

        const removeZeros = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeros);
    }

    const nroTexto = String(valor, acao);

    return <TextInput 
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(novoValor)=>{atualiza(novoValor, acao)}}
        value={nroTexto}
    />

}