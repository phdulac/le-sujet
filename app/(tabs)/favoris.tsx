import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { topics, Topic, Tag } from '../../data/topics';

// Simuler des favoris (en réalité, cela viendrait d'un état global ou d'une base de données)
const favorisIds = ['1', '3']; // IDs des sujets favoris
const favoris = topics.filter((topic) => favorisIds.includes(topic.id));

const FavoriCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
      style={{ width: Dimensions.get('window').width - 32 }}>
      <Image source={{ uri: topic.imageUrl }} className="w-full h-40" resizeMode="cover" />
      <View className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-xl font-bold flex-1 mr-2">{topic.title}</Text>
          <TouchableOpacity className="p-2">
            <Text className="text-red-500 text-xl">♥</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-600 mb-3" numberOfLines={3}>
          {topic.description}
        </Text>
        <View className="flex-row flex-wrap mb-3">
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
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-400 text-sm">{topic.date}</Text>
          <Text className="text-gray-400 text-sm">{topic.views} vues</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

export default function Favoris() {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="pb-4 px-4 bg-white">
        <Text className="text-2xl font-bold">Mes Favoris</Text>
        <Text className="text-gray-600 mt-1">
          {favoris.length} article{favoris.length > 1 ? 's' : ''} sauvegardé
          {favoris.length > 1 ? 's' : ''}
        </Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {favoris.length > 0 ? (
          favoris.map((topic) => <FavoriCard key={topic.id} topic={topic} />)
        ) : (
          <View className="flex-1 justify-center items-center py-20">
            <Text className="text-6xl mb-4">♥</Text>
            <Text className="text-xl font-semibold text-gray-700 mb-2">Aucun favori</Text>
            <Text className="text-gray-500 text-center px-8">
              Sauvegardez vos articles préférés pour les retrouver facilement ici
            </Text>
            <Link href="/" asChild>
              <TouchableOpacity className="bg-blue-500 rounded-lg py-3 px-6 mt-6">
                <Text className="text-white font-medium">Découvrir des articles</Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
