import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useData } from '../../dataHooks/hooks';

export default function Login({ navigation }) {
    const { isLoading } = useData()
    return (
        <>
            <View style={styles.loginWrapper}>
                <View style={styles.loginMain}>
                    <View style={styles.logoBG}>

                    </View>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>
                            Logo
                        </Text>
                    </View>
                    <View style={styles.welecome}>
                        <Text style={styles.welecomeText}>
                            Welecome Back!
                        </Text>
                        <Text style={styles.cliclBlowText}>
                            Click blow to get started
                        </Text>
                    </View>
                    <TouchableOpacity  onPress={() => {navigation.navigate('Chat') }}>
                    <View style={styles.googlLogin}>
                        <Image
                            style={styles.googleImage}
                            source={require('../../assets/images/google.png')}
                        />
                        <Text style={styles.continueText}>
                            Continue with Google
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    loginMain: {
        width: "100%",
        height: "100%",
        backgroundColor: "#0D1525"
    },
    logoBG: {

        width: 800,
        height: "40%",
        backgroundColor: "#1B2333",
        transform: [{ rotate: '340deg' }],
        marginLeft: -180,
        marginTop: -90

    },
    logo: {

        marginTop:-80,
        marginLeft:"auto",
        marginRight:"auto",
        width:175,
        height:175,
        backgroundColor: "#D9D9D9",
        borderRadius:100,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    logoText: {
        
        color: "#0D1525",
        fontFamily: "Helvetica",
        fontSize:20,
        fontWeight:"700",

    },
    welecome:{

        marginTop:100,
        marginLeft:"auto",
        marginRight:"auto",
        height:100,

    },
    welecomeText:{
        color: "#CDCDCD",
        fontFamily: "Helvetica",
        fontSize:22,
        fontWeight:"700",
    },
    cliclBlowText:{

        color: "#999999",
        fontFamily: "Helvetica",
        fontSize:16,
        fontWeight:"500",
        
    },
    googlLogin: {

        marginTop:100,
        backgroundColor: "#FFFFFF",
        marginLeft:"auto",
        marginRight:"auto",
        height:50,
        width:260,
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
        alignItems:"center",
        borderRadius:50,

    },
    googleImage: {

        height: 20,
        width: 20

    },
    continueText: {
        color: "#333333",
        fontWeight:"400",
        fontSize:18
    }


});