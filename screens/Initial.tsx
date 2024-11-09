import { ImageBackground, TouchableOpacity, Text } from "react-native"
import styles from "../styles/styles";
import { useEffect } from "react";

type Nav = {
    navigation: any
}

//Tela principal do aplicativo
const Initial = ({ navigation }: Nav) => {
    //Imagem de fundo
    const image = require('../images/background.jpg');

    useEffect(
        () => {
            //Tempo para trocar para a tela Home
            setInterval(() => navigation.navigate('Home'), 1000)
        }, []
    )

    return (
        <ImageBackground style={styles.imageBackground} source={image}>
        </ImageBackground>
    )
}

export default Initial;