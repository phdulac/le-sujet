import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sondages() {
  const sondages = [
    {
      id: 1,
      question: 'Quelle est votre opinion sur la réforme des retraites ?',
      participants: 1247,
      date: 'Il y a 2 jours',
      active: true,
    },
    {
      id: 2,
      question: "Êtes-vous favorable à l'augmentation du SMIC ?",
      participants: 892,
      date: 'Il y a 5 jours',
      active: true,
    },
    {
      id: 3,
      question: "Quelle source d'énergie préférez-vous pour l'avenir ?",
      participants: 1567,
      date: 'Il y a 1 semaine',
      active: false,
    },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      <View className="pt-12 pb-4 px-4 bg-white">
        <Text className="text-2xl font-bold">Sondages</Text>
        <Text className="text-gray-600 mt-1">Participez aux débats</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {sondages.map((sondage) => (
          <TouchableOpacity
            key={sondage.id}
            className={`bg-white rounded-lg shadow-md p-4 mb-4 ${
              sondage.active ? 'border-l-4 border-blue-500' : 'opacity-60'
            }`}>
            <View className="flex-row justify-between items-start mb-2">
              <Text className="text-lg font-semibold flex-1 mr-2">{sondage.question}</Text>
              {sondage.active && (
                <View className="bg-green-100 px-2 py-1 rounded-full">
                  <Text className="text-green-700 text-xs font-medium">Actif</Text>
                </View>
              )}
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 text-sm">{sondage.participants} participants</Text>
              <Text className="text-gray-400 text-sm">{sondage.date}</Text>
            </View>

            {sondage.active && (
              <TouchableOpacity className="bg-blue-500 rounded-lg py-2 mt-3">
                <Text className="text-white text-center font-medium">Participer</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
