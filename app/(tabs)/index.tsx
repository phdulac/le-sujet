import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { topics, Topic, Tag } from '../../data/topics';

const tabs = ['Feeds', 'Popular', 'Following'];

const TabsBar = ({ selected, onSelect }: { selected: string; onSelect: (tab: string) => void }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#f3f4f6',
      paddingHorizontal: 8,
      paddingVertical: 8,
      marginTop: 8,
      borderRadius: 25,
      gap: 8,
    }}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        onPress={() => onSelect(tab)}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 25,
          backgroundColor: selected === tab ? '#000' : '#f3f4f6',
          marginHorizontal: 4,
        }}>
        <Text
          style={{
            fontWeight: '600',
            color: selected === tab ? '#fff' : '#374151',
          }}>
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const FeaturedCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 24,
        marginTop: 16,
        overflow: 'hidden',
      }}>
      <Image
        source={{ uri: topic.imageUrl }}
        style={{ width: '100%', height: 176 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', marginBottom: 8, gap: 6 }}>
          {topic.tags.map((tag: Tag) => (
            <View
              key={tag.id}
              style={{
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 12,
                backgroundColor: tag.color + '18',
              }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: tag.color }}>{tag.name}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 4, color: '#111827' }}>
          {topic.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          <Text style={{ color: '#000', fontWeight: '600', fontSize: 14, marginRight: 8 }}>
            Life At
          </Text>
        </View>
        <Text style={{ color: '#6b7280', fontSize: 16 }} numberOfLines={2}>
          {topic.description}
        </Text>
      </View>
    </TouchableOpacity>
  </Link>
);

const ArticleItem = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
      }}>
      <Image
        source={{ uri: topic.imageUrl }}
        style={{ width: 64, height: 64, borderRadius: 8, marginRight: 12 }}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 4 }} numberOfLines={2}>
          {topic.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          {topic.tags[0] && (
            <Text style={{ fontSize: 12, color: '#6b7280', marginRight: 8 }}>
              {topic.tags[0].name}
            </Text>
          )}
          <Text style={{ fontSize: 12, color: '#9ca3af' }}>• {topic.date}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: '#9ca3af', marginRight: 8 }}>{topic.views} vues</Text>
          <Text style={{ fontSize: 12, color: '#9ca3af' }}>• 4 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

const TopicCard = ({ topic }: { topic: Topic }) => (
  <Link href={`/topic/${topic.id}?title=${encodeURIComponent(topic.title)}`} asChild>
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden',
        marginBottom: 16,
        width: '48%',
      }}>
      <Image
        source={{ uri: topic.imageUrl }}
        style={{ width: '100%', height: 128 }}
        resizeMode="cover"
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#111827' }}>
          {topic.title}
        </Text>
        <Text style={{ color: '#6b7280', fontSize: 14 }} numberOfLines={2}>
          {topic.description}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, gap: 4 }}>
          {topic.tags.map((tag: Tag) => (
            <View
              key={tag.id}
              style={{
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 12,
                marginRight: 4,
                marginBottom: 4,
                backgroundColor: tag.color + '18',
              }}>
              <Text style={{ fontSize: 12, color: tag.color }}>{tag.name}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Text style={{ color: '#9ca3af', fontSize: 12 }}>{topic.date}</Text>
          <Text style={{ color: '#9ca3af', fontSize: 12 }}>{topic.views} vues</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('Feeds');
  const featured = topics[0];
  const rest = topics.slice(1);
  const justForYou = rest.slice(0, 3);

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <TabsBar selected={selectedTab} onSelect={setSelectedTab} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}>
        <FeaturedCard topic={featured} />

        {/* Section Just For You */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
            marginTop: 8,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Just For You</Text>
          <TouchableOpacity>
            <Text style={{ color: '#3b82f6', fontWeight: '600', fontSize: 14 }}>See More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 24 }}>
          {justForYou.map((topic) => (
            <ArticleItem key={topic.id} topic={topic} />
          ))}
        </View>

        {/* Grille des autres topics */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {rest.slice(3).map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
