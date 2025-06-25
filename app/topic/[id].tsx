import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { topics, Topic, Opinion } from '../../data/topics';

const OpinionCard = ({ opinion }: { opinion: Opinion }) => (
  <View className="bg-white rounded-lg p-4 mb-4">
    <Text className="text-lg font-semibold mb-2">{opinion.title}</Text>
    <Text className="text-gray-600 mb-3">{opinion.description}</Text>

    <View className="space-y-2">
      <View className="flex-row">
        <Text className="text-gray-500 text-sm w-20">Source:</Text>
        <Text className="text-gray-700 text-sm flex-1">{opinion.source}</Text>
      </View>
      <View className="flex-row">
        <Text className="text-gray-500 text-sm w-20">Orientation:</Text>
        <Text className="text-gray-700 text-sm flex-1">{opinion.politicalOrientation}</Text>
      </View>
      <View className="flex-row">
        <Text className="text-gray-500 text-sm w-20">École:</Text>
        <Text className="text-gray-700 text-sm flex-1">{opinion.schoolOfThought}</Text>
      </View>
      <View className="flex-row">
        <Text className="text-gray-500 text-sm w-20">Généalogie:</Text>
        <Text className="text-gray-700 text-sm flex-1">{opinion.genealogy}</Text>
      </View>
    </View>
  </View>
);

export default function TopicDetail() {
  const { id, title } = useLocalSearchParams();
  const topic = topics.find((t) => t.id === id) as Topic;

  if (!topic) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Topic non trouvé</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView>
        <Image source={{ uri: topic.imageUrl }} className="w-full h-48" resizeMode="cover" />

        <View className="p-4">
          <Text className="text-2xl font-bold mb-2">{topic.title}</Text>
          <Text className="text-gray-600 mb-4">{topic.description}</Text>

          <View className="flex-row flex-wrap mb-4">
            {topic.tags.map((tag) => (
              <View
                key={tag.id}
                className="px-3 py-1 rounded-full mr-2 mb-2"
                style={{ backgroundColor: tag.color + '20' }}>
                <Text className="text-sm font-medium" style={{ color: tag.color }}>
                  {tag.name}
                </Text>
              </View>
            ))}
          </View>

          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-gray-500">{topic.date}</Text>
            <Text className="text-gray-500">{topic.views} vues</Text>
          </View>

          <View className="mb-4">
            <Text className="text-xl font-bold mb-4">Opinions</Text>
            {topic.opinions.map((opinion) => (
              <OpinionCard key={opinion.id} opinion={opinion} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
