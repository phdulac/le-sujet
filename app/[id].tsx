import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { topics, Topic, Tag, Opinion } from '../data/topics';

export default function TopicDetail() {
  const { id } = useLocalSearchParams();
  const topic = topics.find((t: Topic) => t.id === id);

  if (!topic) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Sujet non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <Image
        source={{ uri: topic.imageUrl }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">{topic.title}</Text>
        <Text className="text-gray-600 mb-4">{topic.description}</Text>
        
        <View className="flex-row flex-wrap mb-4">
          {topic.tags.map((tag: Tag) => (
            <View 
              key={tag.id}
              className="px-3 py-1 rounded-full mr-2 mb-2"
              style={{ backgroundColor: tag.color + '20' }}
            >
              <Text 
                className="text-sm"
                style={{ color: tag.color }}
              >
                {tag.name}
              </Text>
            </View>
          ))}
        </View>

        <Text className="text-xl font-bold mb-4">Points de vue</Text>
        {topic.opinions.map((opinion: Opinion) => (
          <View key={opinion.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
            <Text className="text-lg font-bold mb-2">{opinion.title}</Text>
            <Text className="text-gray-600 mb-3">{opinion.description}</Text>
            
            <View className="border-t border-gray-200 pt-3">
              <Text className="text-sm text-gray-500">Source: {opinion.source}</Text>
              <Text className="text-sm text-gray-500">Orientation politique: {opinion.politicalOrientation}</Text>
              <Text className="text-sm text-gray-500">École de pensée: {opinion.schoolOfThought}</Text>
              <Text className="text-sm text-gray-500">Généalogie: {opinion.genealogy}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
} 