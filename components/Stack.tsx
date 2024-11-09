import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Initial from '../screens/Initial';
import Home from '../screens/Home'

const Stack = () => {
    //Instanciando um Stack Navigator
    const Stack = createStackNavigator();

    //Função para retornar as telas
    const StackScreens = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShadowVisible: true }}>
                <Stack.Screen name='Initial' component={Initial} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Home' component={Home} options={{
                    headerStyle: {
                        backgroundColor: '#111'
                    },
                    headerTintColor: '#fff',
                    title: 'Gym App'
                }} />
            </Stack.Navigator>
        )
    }

    //Retornando as telas
    return (
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    );
}

export default Stack;