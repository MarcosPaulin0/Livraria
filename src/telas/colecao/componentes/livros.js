import React from 'react';
import Texto from '../../../componentes/Texto';
import { View, Image, StyleSheet } from 'react-native';


export default function Livros({titulo, lista}){
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {
            lista.map(({nome, imagem})=> {
                return <View key={nome} style={estilos.item}>
                    <Image source={imagem} style={estilos.imagem}/>
                    <Texto style={estilos.nome}>{nome}</Texto>
                </View>
            })
        }
    </>;
}
    const estilos = StyleSheet.create({
        nome: {
            marginLeft: 16,
            fontSize: 16,
            lineHeight: 26,
            color: '#464646'
        },
        imagem: {
            width: 46,
            height: 46,
            alignItems:'center'
        },

        item:{
            flexDirection: 'row',
            borderBottomWidth: 10,
            borderBottomColor: '#ececec',
            paddingVertical: 16,
            alignItems: 'center'
        },

        titulo: {
            color: 'blue',
            fontWeight: 'bold',
            marginTop: 32,
            marginBottom: 8,
            fontSize: 20,
            lineHeight: 32,
            textAlign: 'center'
        },
     
    });
