import React, {useEffect, useState} from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,

 } from "react-native";
import colors from '../styles/colors';

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Merkel from '../assets/profile/angela-merkel.png';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem("@plantmanager:user");
            setUserName(user || '');
        }
        loadStorageUserName();
    }, [userName]) // sempre que o username mudar, 
                    //ele dispara o useEffect (ou seja, redenriza o componente novamente)
    return (
        <View style={styles.container}>
            <View>

            <Text style={styles.greeting}>
                Olá,
            </Text>
            <Text style={styles.username}>
                {userName}
            </Text>
            </View>
                <Image source={Merkel} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        //backgroundColor: colors.red
      //  padding: 20
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting:
    {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }

})
