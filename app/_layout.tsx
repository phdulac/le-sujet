import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { useColorScheme, View, SafeAreaView } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { Header } from '../components/Header/Header';

function Layout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#f9fafb' },
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
                headerShown: true,
                headerStyle: {
                  backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
                },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackButtonDisplayMode: 'minimal',
              })}
            />
          </Stack>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default withExpoSnack(Layout);
