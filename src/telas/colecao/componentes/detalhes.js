import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto'

export default function Detalhes({ nome, fornecedor, descricao, preco, logo, botao }) {
    const loggando = () => alert('Clicou...')
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.cabecalhoFornecedor}>
            <Image source={logo} style={estilos.imagemFornecedor} />
            <Texto style={estilos.fornecedor}>{ fornecedor }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <TouchableOpacity style={estilos.botao}onPress={loggando}>
            <Texto style={estilos.textoBotao} >
            {botao='Comprar'}
            </Texto>
        </TouchableOpacity>
    </>;
}
const estilos = StyleSheet.create({
    textoBotao: {
       fontSize: 16,
       fontWeight: 'bold',
        lineHeight: 16,
        alignContent: 'center',
        textAlign: 'center'
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#00ffff",
        paddingVertical: 20,
        borderRadius: 10,
    },

    fornecedor: {
        fontSize: 16,
        lineHeight: 36,
        marginLeft: 12,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    imagemFornecedor: {
        width: 31,
        height: 31
    },
    cabecalhoFornecedor: {
        flexDirection: 'row',// tudo em uma linha
        paddingVertical: 12
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    },
});

