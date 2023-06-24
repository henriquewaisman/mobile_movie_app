import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ForgetPassword from '../Pages/ForgetPassword';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginPage' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='RegisterPage' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='ForgetPasswordPage' component={ForgetPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}