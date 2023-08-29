import React from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import Cabecalho from '../../src/componentes/Cabecalho';
import Contatos from '../../src/componentes/Contatos';
import Texto from '../../src/componentes/Texto';
import Carrossel from '../../src/mocks/Carrossel'

import Prod1 from '../../assets/produtos/prod1.png';
import Prod2 from '../../assets/produtos/prod2.png';
import Prod3 from '../../assets/produtos/prod3.png';
import Prod4 from '../../assets/produtos/prod4.png';
import Prod5 from '../../assets/produtos/prod5.png';
import Imagem from '../../assets/Imagem.png';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: Prod1,
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'Novidade',
  },
  {
    coverImageUri: Prod2
  },
  {
    coverImageUri: Prod3
  },
  {
    coverImageUri: Prod4
  },
  {
    coverImageUri: Prod5
  },
];

const Imagens = () => {
  const renderItem = data => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
        <View style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor },]}>
          <Texto style={styles.cornerLabelText}>
            {data.cornerLabelText}
          </Texto>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.line} />
      <ScrollView>
        <Texto style={styles.titulo}> {Carrossel.Imagens.produtos} </Texto>
        <Carousel
          pagination={PaginationLight}
          renderItem={renderItem}
          data={DATA}
          loop
          autoplay
        />

        <View style={styles.line} />

        <Texto style={styles.titulo}> {Carrossel.Imagens.sobre} </Texto>
        <View style={styles.item}>
          <Texto style={styles.textoConteudo}> {Carrossel.Imagens.conteudo} </Texto>
          <Image style={styles.imagem} source={Imagem} />
        </View>

        <View style={styles.line} />

        <Contatos/>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    marginTop: 0,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 1.0,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  titulo: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: "bold",
    color: '#660066',
    textAlign: 'center',
  },
  Cabecalho: {
    paddingTop: 0,
  },
  textoConteudo: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    width: 225,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 10,
    alignItems: "center",
    alignContent: "center",
  },
  imagem: {
    borderRadius: 8,
  },
  line: {
    paddingTop:10, 
    borderBottomColor: '#660066',
    borderBottomWidth: 2,
  },
});

export default Imagens;