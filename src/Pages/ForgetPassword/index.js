import { TextInput, View, Text } from "react-native-web";
import { Link } from '@react-navigation/native';
import styles from "./styles";

export default function ForgetPassword(){
    return(
        <View style={styles.container}>
            <Text style={styles.emailText}>Digite seu email</Text>
            <TextInput placeholder='email' style={styles.email}/>
            <Text style={styles.passwordText}>Digite seu nome</Text>
            <TextInput placeholder='senha' style={styles.password}/>
            <Link to={{screen: 'Login'}} style={styles.link}>Volte para Login</Link>
        </View>
    )
}