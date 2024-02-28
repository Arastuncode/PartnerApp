import React from "react";
import {  View, TextInput, StyleSheet,ScrollView, Pressable , Text, Image, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Partner = () => {
    return (
        <ScrollView>
        <View style={styles.headBox}>
            <View>
                <Text style={styles.mainText}>Azərsun</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Pressable  style={styles.btn}>
                    <AntDesign name="bells" size={32} color="#fff" />
                </Pressable >

                <Pressable  style={styles.btn}>
                    <Ionicons name="home" size={32} color="#fff" />
                </Pressable >
            </View>
        </View>
        <View style={styles.imageBox}>
            <ImageBackground
                source={require('../assets/mainbg.jpg')}
                style={styles.backgroundImage}
                >
                <View style={styles.container}>
                    <Image source={require('../assets/circule.jpg')} style={styles.image} />
                    <View style={styles.txtBox}>
                        <Text style={styles.imgTxt}>Azərsun</Text>
                        <Text style={{...styles.imgTxt, fontSize:16}}>
                            <View style={styles.circle}></View>    
                            Online
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>

    </ScrollView>
    )
};
const styles = StyleSheet.create({
    headBox:{
        backgroundColor: '#1886EB', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 10
    },
    mainText: {
        // fontWeight: 600,
        fontSize:38,
        color: '#FFF',
    },
    btn:{
        marginHorizontal: 10,
    },
    btnText:{
        color: '#fff',
        fontSize:38
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height:140
    },
    imageBox:{
        height: 180,
        position: 'relative',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        padding:10,
        position: 'absolute',
        left: 10,
        bottom: 5
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    imgTxt:{
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
        display: 'block',
    },
    txtBox:{
        marginVertical: 20,
        marginHorizontal: 10,
    },
    circle:{
        backgroundColor: "green",
        width: 1,
        height: 1,
        // padding: 20,
        borderRadius: 100,
    }
});
export default Partner;