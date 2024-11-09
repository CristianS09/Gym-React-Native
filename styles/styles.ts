import { StyleSheet } from 'react-native'

//Estilo do aplicativo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 5,
        width: 350,
        height: 150
    },
    sectionContainer: {
        margin: 5
    },
    sectionText: {
        fontSize: 25,
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        margin: 10
    }
});

export default styles;