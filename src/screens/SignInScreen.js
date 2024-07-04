import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const SigninScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSignin = () => {
      
        // Implement signin logic here
        console.log('Signing in with:', username, password);
        // Navigate to Home screen after successful signin
        const isAuthenticated = true; // Replace with actual authentication logic

        if (isAuthenticated) {
          // Navigate to the 'Home' screen
          navigation.navigate('Signup');
        } else {
          // Handle authentication failure (show error message, etc.)
          console.log('Authentication failed');
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input} 
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignin}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.linkText}>Don't have an account? Sign Up Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    linkText: {
      marginTop: 20,
        color: '#2196F3',
        textDecorationLine: 'underline',
    },
});

export default SigninScreen;
