import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <Text style={styles.subtitle}>Building mobile apps with ease</Text>
      
      <Image 
        source={{ uri: 'https://example.com/image.png' }} 
        style={styles.image}
      />

      <TouchableOpacity style={styles.button}>
        <Icon name="arrow-forward" size={20} color="#fff" />
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
  },
});
