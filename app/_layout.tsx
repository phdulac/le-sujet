import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { useColorScheme, View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { Header } from '../components/Header/Header';

function Layout() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Header />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
          },
          headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackButtonDisplayMode: 'minimal',
        }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="topic/[id]"
          options={({ route }: { route: RouteProp<any, string> }) => ({
            title: (route.params as any)?.title || 'Détails',
          })}
        />
      </Stack>
    </View>
  );
}

export default withExpoSnack(Layout);
