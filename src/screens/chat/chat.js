import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useData } from '../../dataHooks/hooks';

export default function Chat({ navigation }) {
    const { isLoading } = useData()
    return (
        <>
            <View style={styles.chatWrapper}>
                <View style={styles.chatMain}>
                    
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    chatMain: {
        width: "100%",
        height: "100%",
        backgroundColor: "#0D1525"
    },
});