import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { topics, Topic, Tag } from '../../data/topics';

const tabs = ['Feeds', 'Popular', 'Following'];

const TabsBar = ({ selected, onSelect }: { selected: string; onSelect: (tab: string) => void }) => (
  <View
    className="flex-row justify-center self-center bg-gray-100 px-2 py-2 mt-2 rounded-full"
    style={{ gap: 8 }}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        onPress={() => onSelect(tab)}
        className={`px-5 py-2 rounded-full ${selected === tab ? 'bg-black' : 'bg-gray-100'}`}
        style={{ marginHorizontal: 4 }}>
        <Text className={`font-semibold ${selected === tab ? 'text-white' : 'text-gray-700'}`}>
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const FeaturedCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      className="bg-white rounded-3xl shadow-lg mb-6 overflow-hidden"
      style={{ width: '100%', marginTop: 16 }}>
      <Image source={{ uri: topic.imageUrl }} className="w-full h-44" resizeMode="cover" />
      <View className="p-4">
        <View className="flex-row mb-2" style={{ gap: 6 }}>
          {topic.tags.map((tag: Tag) => (
            <View
              key={tag.id}
              className="px-2 py-0.5 rounded-full"
              style={{ backgroundColor: tag.color + '18' }}>
              <Text className="text-xs font-medium" style={{ color: tag.color }}>
                {tag.name}
              </Text>
            </View>
          ))}
        </View>
        <Text className="text-xl font-bold mb-1 text-gray-900">{topic.title}</Text>
        <View className="flex-row items-center mb-1">
          <Text className="text-black font-semibold text-sm mr-2">Life At</Text>
        </View>
        <Text className="text-gray-600 text-base" numberOfLines={2}>
          {topic.description}
        </Text>
      </View>
    </TouchableOpacity>
  </Link>
);

const ArticleItem = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity className="flex-row items-center bg-white rounded-xl mb-3 p-3">
      <Image
        source={{ uri: topic.imageUrl }}
        className="w-16 h-16 rounded-lg mr-3"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="font-semibold text-base mb-1" numberOfLines={2}>
          {topic.title}
        </Text>
        <View className="flex-row items-center mb-1">
          {topic.tags[0] && (
            <Text className="text-xs text-gray-500 mr-2">{topic.tags[0].name}</Text>
          )}
          <Text className="text-xs text-gray-400">• {topic.date}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-xs text-gray-400 mr-2">{topic.views} vues</Text>
          <Text className="text-xs text-gray-400">• 4 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

const CARD_MARGIN = 8;

const TopicCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      className="bg-white rounded-2xl shadow-md overflow-hidden mb-4"
      style={{
        width: (Dimensions.get('window').width - 48) / 2,
        marginBottom: CARD_MARGIN,
        marginRight: CARD_MARGIN,
      }}>
      <Image source={{ uri: topic.imageUrl }} className="w-full h-32" resizeMode="cover" />
      <View className="p-3">
        <Text className="text-lg font-bold mb-1 text-gray-900">{topic.title}</Text>
        <Text className="text-gray-600 text-sm" numberOfLines={2}>
          {topic.description}
        </Text>
        <View className="flex-row flex-wrap mt-2" style={{ gap: 4 }}>
          {topic.tags.map((tag: Tag) => (
            <View
              key={tag.id}
              className="px-2 py-0.5 rounded-full mr-1 mb-1"
              style={{ backgroundColor: tag.color + '18' }}>
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
  const [selectedTab, setSelectedTab] = useState('Feeds');
  const featured = topics[0];
  const rest = topics.slice(1);
  const justForYou = rest.slice(0, 3); // 3 articles pour l'exemple
  return (
    <>
      <TabsBar selected={selectedTab} onSelect={setSelectedTab} />
      <ScrollView className="flex-1 px-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <FeaturedCard topic={featured} />
        {/* Section Just For You */}
        <View className="flex-row justify-between items-center mb-2 mt-2">
          <Text className="text-lg font-bold">Just For You</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-semibold text-sm">See More</Text>
          </TouchableOpacity>
        </View>
        <View className="mb-6">
          {justForYou.map((topic) => (
            <ArticleItem key={topic.id} topic={topic} />
          ))}
        </View>
        {/* Grille des autres topics */}
        <View className="flex-row flex-wrap justify-between">
          {rest.slice(3).map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
