import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to React Native</Text>
        <Text style={styles.subtitle}>Building mobile apps with ease</Text>
        
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Sample image URL
          style={styles.image}
        />

        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-forward" size={20} color="#fff" />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>EVANGELISTAJM2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-between', // Space between content and footer
    backgroundColor: '#e0f7fa', // Light blue background
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center', // Center text
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center', // Center text
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
    marginTop: 16, // Add some spacing above the button
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Center the footer text
  },
});
