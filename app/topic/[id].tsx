import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { topics, Topic, Opinion } from '../../data/topics';

const OpinionCard = ({ opinion }: { opinion: Opinion }) => (
  <View
    style={{
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    }}>
    <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{opinion.title}</Text>
    <Text style={{ color: '#6b7280', marginBottom: 12 }}>{opinion.description}</Text>

    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#6b7280', fontSize: 14, width: 80 }}>Source:</Text>
        <Text style={{ color: '#374151', fontSize: 14, flex: 1 }}>{opinion.source}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#6b7280', fontSize: 14, width: 80 }}>Orientation:</Text>
        <Text style={{ color: '#374151', fontSize: 14, flex: 1 }}>
          {opinion.politicalOrientation}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#6b7280', fontSize: 14, width: 80 }}>École:</Text>
        <Text style={{ color: '#374151', fontSize: 14, flex: 1 }}>{opinion.schoolOfThought}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#6b7280', fontSize: 14, width: 80 }}>Généalogie:</Text>
        <Text style={{ color: '#374151', fontSize: 14, flex: 1 }}>{opinion.genealogy}</Text>
      </View>
    </View>
  </View>
);

export default function TopicDetail() {
  const { id, title } = useLocalSearchParams();
  const topic = topics.find((t) => t.id === id) as Topic;

  if (!topic) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Topic non trouvé</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: topic.imageUrl }}
          style={{ width: '100%', height: 192 }}
          resizeMode="cover"
        />

        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>{topic.title}</Text>
          <Text style={{ color: '#6b7280', marginBottom: 16 }}>{topic.description}</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
            {topic.tags.map((tag) => (
              <View
                key={tag.id}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 16,
                  marginRight: 8,
                  marginBottom: 8,
                  backgroundColor: tag.color + '20',
                }}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: tag.color }}>
                  {tag.name}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
            }}>
            <Text style={{ color: '#6b7280' }}>{topic.date}</Text>
            <Text style={{ color: '#6b7280' }}>{topic.views} vues</Text>
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Opinions</Text>
            {topic.opinions.map((opinion) => (
              <OpinionCard key={opinion.id} opinion={opinion} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
