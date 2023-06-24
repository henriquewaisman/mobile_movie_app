import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Pages/Dashboard';
import MovieDetailsPage from '../Pages/MovieDetailsPage';


const Stack = createNativeStackNavigator();


export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}/>
            <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}