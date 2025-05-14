import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

interface Subcategory {
  id: string;
  name: string;
}

interface SubcategoryListProps {
  subcategories: Subcategory[];
  onSelectSubcategory: (id: string) => void;
}

export default function SubcategoryList({ subcategories, onSelectSubcategory }: SubcategoryListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={subcategories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.subcategoryItem}
            onPress={() => onSelectSubcategory(item.id)}
          >
            <Text style={styles.subcategoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  subcategoryItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subcategoryText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
