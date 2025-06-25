import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

const user = {
  name: 'Jeniffer',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

export const Header = () => (
  <View className="flex-row pt-20 pb-4 px-4 bg-white justify-between">
    <View className="flex-row items-center gap-2">
      <Ionicons name="dice-sharp" size={24} color="black" />
      <Text className="text-xl text-gray-900 font-bold">Le sujet</Text>
    </View>
    <Image
      source={{ uri: user.avatar }}
      className="w-10 h-10 rounded-full border-2 border-white shadow ml-3 self-end"
    />
  </View>
);
