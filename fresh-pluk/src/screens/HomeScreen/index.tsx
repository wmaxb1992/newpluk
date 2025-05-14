import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CategoryCard from '../../components/CategoryCard';
import SubcategoryList from '../../components/SubcategoryList';

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Temporary mock data
const categories = [
  { id: '1', title: 'Vegetables', icon: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png' },
  { id: '2', title: 'Fruits', icon: 'https://cdn-icons-png.flaticon.com/512/1625/1625099.png' },
  { id: '3', title: 'Grains', icon: 'https://cdn-icons-png.flaticon.com/512/3982/3982124.png' },
  { id: '4', title: 'Root Vegetables', icon: 'https://cdn-icons-png.flaticon.com/512/1135/1135448.png' },
  { id: '5', title: 'Citrus Fruits', icon: 'https://cdn-icons-png.flaticon.com/512/6866/6866522.png' },
];

interface Subcategory {
  id: string;
  name: string;
}

type SubcategoryMap = {
  [key: string]: Subcategory[];
};

const subcategories: SubcategoryMap = {
  '1': [
    { id: '1-1', name: 'Leafy Greens' },
    { id: '1-2', name: 'Tomatoes' },
    { id: '1-3', name: 'Peppers' },
    { id: '1-4', name: 'Squash' },
  ],
  '2': [
    { id: '2-1', name: 'Apples' },
    { id: '2-2', name: 'Berries' },
    { id: '2-3', name: 'Stone Fruits' },
    { id: '2-4', name: 'Tropical Fruits' },
  ],
  '3': [
    { id: '3-1', name: 'Rice' },
    { id: '3-2', name: 'Wheat' },
    { id: '3-3', name: 'Corn' },
    { id: '3-4', name: 'Quinoa' },
  ],
  '4': [
    { id: '4-1', name: 'Potatoes' },
    { id: '4-2', name: 'Carrots' },
    { id: '4-3', name: 'Sweet Potatoes' },
    { id: '4-4', name: 'Beets' },
  ],
  '5': [
    { id: '5-1', name: 'Lemons' },
    { id: '5-2', name: 'Oranges' },
    { id: '5-3', name: 'Limes' },
    { id: '5-4', name: 'Grapefruits' },
  ],
};

import { useCategoryStore } from '../../store/categoryStore';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { 
    selectedCategory, 
    searchQuery, 
    setSelectedCategory, 
    setSearchQuery 
  } = useCategoryStore();

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    navigation.navigate('Products');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community Farm Delivery</Text>
        <Text style={styles.subtitle}>Bringing fresh produce to your door</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Produce & Farms"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            isSelected={category.id === selectedCategory}
            onPress={() => handleCategoryPress(category.id)}
          />
        ))}
      </ScrollView>

      {selectedCategory && subcategories[selectedCategory] && (
        <SubcategoryList
          subcategories={subcategories[selectedCategory]}
          onSelectSubcategory={handleSubcategorySelect}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 12,
  },
  categoryContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
