import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useProduceStore } from '../../store/produce';
import type { ProduceListing } from '../../store/types/models';

export default function ProductsScreen() {
  const { listings, isLoading, fetchListings } = useProduceStore();

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const renderItem = ({ item }: { item: ProduceListing }) => (
    <TouchableOpacity style={styles.card}>
      <Image 
        source={{ uri: item.images?.[0] }} 
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.price}>${item.pricePerUnit.toFixed(2)} / {item.unitLabel}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        {item.organic && <Text style={styles.organic}>Organic</Text>}
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  organic: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
