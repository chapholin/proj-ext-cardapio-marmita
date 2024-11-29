//import Item from '@/src/components/Item'
import { StyleSheet, ScrollView, View, Text, Image, Linking } from 'react-native'
//import { Ionicons } from '@expo/vector-icons'
//import { createDrawerNavigator } from '@react-navigation/drawer'
//import { NavigationContainer } from '@react-navigation/native'
//import Inicio from './Inicio'
//import Texto from './Texto'
//import Imagem from './Imagem'
//import Rolagem from './Rolagem'
//import Botao from './Botao'
//import Pressionavel from './Pressionavel'
//import Entrada from './Entrada'
//import Pilha from '../stack'
//import Abas from '../tabs'

export default function App() {
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                            source={require('../../assets/images/card-capa-face-200x74.031mm.png')}
                            style={styles.imagemLogo}
                    />
                    <Text style={styles.textoLink} onPress={
                    () => {Linking.openURL('https://wa.me//')}
                    }>
                        CLIQUE AQUI
                        <Text style={styles.secundario}> 
                            {' '}E PEÇA JÁ!
                        </Text>
                    </Text>                                
                </View>

                <View style={styles.containerBorder}>
                    <Text style={styles.secundario}>
                        Cardápio n° 1
                    </Text>
                    <Text style={styles.primario}>
                        Carne desfiada, brócolis,
                    </Text>
                    <Text style={styles.primario}>
                        cenoura, arroz e feijão
                    </Text>                    
                    <Image
                        source={require('../../assets/images/card1-carne-desfiada.jpg')}
                        style={styles.imagem}
                    />                    
                </View>

                <View style={styles.containerBorder}>
                    <Text style={styles.secundario}>
                        Cardápio n° 2
                    </Text>
                    <Text style={styles.primario}>
                        Filé de frango, brócolis,
                    </Text>
                    <Text style={styles.primario}>
                        cenoura, arroz e feijão
                    </Text>                    
                    <Image
                        source={require('../../assets/images/card2-file-de-frango.jpg')}
                        style={styles.imagem}
                    />                    
                </View>

                <View style={styles.containerBorder}>
                    <Text style={styles.secundario}>
                        Cardápio n° 3
                    </Text>
                    <Text style={styles.primario}>
                        Frango desfiado, purê
                    </Text>
                    <Text style={styles.primario}>
                        de batata e arroz
                    </Text>                    
                    <Image
                        source={require('../../assets/images/card2-frango-desfiado.jpg')}
                        style={styles.imagem}
                    />                    
                </View>                

                <View style={styles.containerBorder}>
                    <Text style={styles.secundario}>
                        Cardápio n° 4
                    </Text>
                    <Text style={styles.primario}>
                        Picadinho de frango, purê
                    </Text>
                    <Text style={styles.primario}>
                        de batata e arroz
                    </Text>                    
                    <Image
                        source={require('../../assets/images/card2-picadinho-frango.png')}
                        style={styles.imagem}
                    />                    
                </View>

                 <View style={styles.containerBorder}>
                    <Text style={styles.secundario}>
                        Cardápio n° 5
                    </Text>
                    <Text style={styles.primario}>
                        Legumes 
                    </Text>
                    <Text style={styles.primario}>
                        variados
                    </Text>                    
                    <Image
                        source={require('../../assets/images/card3-legumes.jpg')}
                        style={styles.imagem}
                    />                    
                </View>                
                                              
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdee9',
    },
    containerLogo: {
        marginBottom: 15,        
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ffdee9',
    },    
    containerBorder: {
        borderWidth:3,
        borderColor:'#e9cdd7',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        marginBottom: 10,        
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ffdee9',
    },
    textoLink: {
        textAlign: 'center',
        fontSize: 16,
        //paddingBottom: 10,
        color: '#5c0a0a',
        fontStyle: 'italic',
    },
    primario: {
        textAlign: 'center',
        color: '#5c0a0a',
        fontSize: 16,
        //paddingTop: 10,
        fontWeight: 'bold',
    },
    secundario: {
        textAlign: 'center',
        fontSize: 16,
        //paddingBottom: 10,
        color: '#777',
        fontStyle: 'italic',
    },
    //imagemRemota: {
    //    width: 300,
    //    height: 200,
    //    marginBottom: 30,
    //},
    label: {
        textAlign: 'center',
        fontSize: 16,
        padding: 20,
    },
    imagem: {
        width: 300,
        height: 200,
        //marginTop: 20,
        //marginBottom: 20,
    },
    imagemLogo: {
        width: 300,
        height: 120,
        marginTop: 38,
        //marginBottom: 20,
        //borderWidth: 3,
        //borderColor: '#f28bae'
    },
})


