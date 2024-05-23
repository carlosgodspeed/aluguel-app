import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor:'#fff',}}
    >

      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather
           name="search"
           size={24}
           color="black"
          />
          <TextInput
           placeholder="O que está procurando?"
           style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal:15, }}>

        <New
         cover={require('../assets/house1.jpg')}
         name="Casa de Praia"
         description="Casa Nova, Próxima ao mar em Porto Seguro, Ambiente seguro e monitorado 24hrs."
         onPress={() => navigation.navigate('detail')}
        />

        <New
         cover={require('../assets/house2.jpg')}
         name="Caasa Floripa"
         description="Casa com Piscina Localizada em Florianopolis, Localizada ao centro da Cidade Ambiente seguro e monitorado 24hrs."
         onPress={() => navigation.navigate('detail')}
        />

        <New
         cover={require('../assets/house3.jpg')}
         name="Casa de Luxo"
         description="Casa De Alto Padrão Localizada em Condominio de Luxo em São Paulo, Ambiente seguro e monitorado 24hrs."
         onPress={() => navigation.navigate('detail')}
        />

      </ScrollView>
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal:15,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   width:'100%',
   marginVertical:20, 
  },
  inputArea:{
   paddingHorizontal:15,
   flexDirection:'row',
   alignItems:'center',
   width:'98%',
   backgroundColor:'#fff',
   elevation:2,
   paddingHorizontal:10,
   height:37,
   borderRadius:10,
  },
  input:{
   fontFamily:'Montserrat_500Medium',
   paddingHorizontal:10,
   fontSize:13,
   width:'90%',
  },
  contentNew:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
  },
  title:{
   paddingHorizontal:15,
   fontFamily:'Montserrat_700Bold',
   fontSize:18,
   color:'#4f4a4a' 
  }
});