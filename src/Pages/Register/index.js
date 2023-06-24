import { View, Text, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';

export default function Register(){
    return(
        <View style={styles.container}>
            <Text style={styles.userText}>Nome de Usuário</Text>
            <TextInput style={styles.user} placeholder='usuario'/>
            <Text style={styles.emailText}>Email</Text>
            <TextInput style={styles.email} placeholder='email'/>
            <Text style={styles.passwordText}>Senha</Text>
            <TextInput style={styles.password} placeholder='senha'/>
            <Link to={{ screen: 'Login'}} style={styles.link}>Cadastrar-se</Link>
        </View>
    );
}