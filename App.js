import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Image, Pressable } from 'react-native';

export default function App() {
  return (
    /*Contenedor Principal*/
    <View style={miestilo.container}>
      <View style={miestilo.titulo}>
        <View>
            <ImageBackground source={require('./assets/logo.png')} resizeMode="contain" style={miestilo.banner}>
              
            </ImageBackground>
        </View>
      </View>

      <View style={{marginTop:50}}><Text style={{textAlign:'center', fontSize:30, fontFamily:'sans-serif-light',color:'#804000'}}>Nuestro Menú</Text></View>
      
      <View style={miestilo.carta1}>
          <View style={miestilo.imagen}>
              <Image source={require('./assets/carnes.jpg')} style={miestilo.foodImage}/>
              <Pressable style={miestilo.button}>
                 <Text style={miestilo.text}>¡Carnes!</Text>
              </Pressable>  
          </View>
          <View style={miestilo.imagen}>
              <Image source={require('./assets/mariscos.jpg')} style={miestilo.foodImage}/>
              <Pressable style={miestilo.button}>
                 <Text style={miestilo.text}>¡Mariscos!</Text>
              </Pressable> 
          </View>
      </View>

      <View style={miestilo.carta2}>
          <View style={miestilo.imagen}>
              <Image source={require('./assets/ensalada.jpg')} style={miestilo.foodImage}/>
              <Pressable style={miestilo.button}>
                 <Text style={miestilo.text}>¡Ensaladas!</Text>
              </Pressable>   
          </View>
          <View style={miestilo.imagen}>
              <Image source={require('./assets/bebidas.jpg')} style={miestilo.foodImage}/>
              <Pressable style={miestilo.button}>
                 <Text style={miestilo.text}>¡Bebidas!</Text>
              </Pressable> 
              
          </View>
      </View>

      <View style={miestilo.footer}>
          <Text style={{color:'gray', textAlign:'center',lineHeight: 45}}>Erick Alcides Reyes Avila #261318</Text>
          <Text style={{color:'gray', textAlign:'center',lineHeight: 15}}>Angel Sebastian Saravia Serpas #261118</Text>
      </View>

    </View>    
  );
}

const miestilo = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 25,
    paddingBottom: 0
  },
  titulo:{
     padding:5,
     height:'21%'
  },
  carta1:{
    flexDirection: 'row',
    marginTop:10,
    height:'30%'

  },
  carta2:{
    flexDirection: 'row',
    height:'30%',
    marginTop:-30,
  },
  imagen:{
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    marginTop: 10
  },
  footer:{
    height:75,
    flexDirection: 'column',
    marginBottom:5
  },
  banner: {
    flex: 1,
    height:220,
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#d25828',
    fontWeight: '300',
    fontFamily:'sans-serif-condensed'
  },
  foodImage:{
    height: '57%',
    width: '67%',
    borderRadius:150,
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    marginTop:15
  },
});
