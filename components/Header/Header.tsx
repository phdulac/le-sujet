import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

const user = {
  name: 'Jeniffer',
  avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
};

export const Header = () => (
  <View
    style={{
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 16,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Ionicons name="dice-sharp" size={24} color="black" />
      <Text style={{ fontSize: 20, color: '#111827', fontWeight: 'bold' }}>Le sujet</Text>
    </View>
    <Image
      source={{ uri: user.avatar }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#e5e7eb',
      }}
    />
  </View>
);
