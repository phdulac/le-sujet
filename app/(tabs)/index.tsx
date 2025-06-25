import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { topics, Topic, Tag } from '../../data/topics';

const TopicCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
      style={{ width: (Dimensions.get('window').width - 48) / 2 }}>
      <Image source={{ uri: topic.imageUrl }} className="w-full h-32" resizeMode="cover" />
      <View className="p-3">
        <Text className="text-lg font-bold mb-1">{topic.title}</Text>
        <Text className="text-gray-600 text-sm" numberOfLines={2}>
          {topic.description}
        </Text>
        <View className="flex-row flex-wrap mt-2">
          {topic.tags.map((tag: Tag) => (
            <View
              key={tag.id}
              className="px-2 py-1 rounded-full mr-1 mb-1"
              style={{ backgroundColor: tag.color + '20' }}>
              <Text className="text-xs" style={{ color: tag.color }}>
                {tag.name}
              </Text>
            </View>
          ))}
        </View>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-400 text-xs">{topic.date}</Text>
          <Text className="text-gray-400 text-xs">{topic.views} vues</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="pt-12 pb-4 px-4 bg-white">
        <Text className="text-2xl font-bold">Sujets d'actualité</Text>
      </View>
      <ScrollView className="flex-1 px-4">
        <View className="flex-row flex-wrap justify-between">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
