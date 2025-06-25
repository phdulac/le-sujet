import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { withExpoSnack } from 'nativewind';

function Layout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
          },
          headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
            headerBackTitle: 'Retour',
          })}
        />
      </Stack>
    </>
  );
}

export default withExpoSnack(Layout);
