import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';


export default function Login(){

    const { SignIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.nossoapp}>Nosso App</Text>
            <Text style={styles.version}>versão filmes</Text>
            <Text style={styles.userText}>Usuário</Text>
            <TextInput style={styles.user} placeholder="usuário"/>
            <Text style={styles.passwordText}>Senha</Text>
            <TextInput style={styles.password} placeholder='senha' secureTextEntry={true}/>
            <TouchableOpacity style={styles.dashboardLink} onPress={() => SignIn()}>
                <Text>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerDiv}>
                <Text style={styles.questionRegister}>Não tem conta? </Text>
                <Link to={{screen: 'Register'}} style={styles.registerLink}>Cadastre-se</Link>
            </View>
            <Link to={{screen: 'ForgetPassword'}} style={styles.passwordLink}>Esqueci Minha Senha</Link>
        </View>
    )
}