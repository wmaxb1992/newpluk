import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { styles } from '../../styles/screens/HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { SubcategoryCarousel } from '../../components/SubcategoryCarousel';
import { useCategoryDataStore } from '../../store/categoryDataStore';
import { useProduceStore } from '../../store/produceStore';
import { ProduceTypeCard } from '../../components/ProduceTypeCard';
import { useCategoryStore } from '../../store/categoryStore';

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { searchQuery, setSearchQuery } = useCategoryStore();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const { 
    categories, 
    categoriesLoading, 
    subcategoriesLoading,
    error, 
    fetchCategories, 
    getSubcategoriesForCategory 
  } = useCategoryDataStore();

  const {
    produceTypes,
    loading: produceLoading,
    error: produceError,
    fetchProduceTypes,
    getFilteredProduceTypes
  } = useProduceStore();

  useEffect(() => {
    fetchCategories();
    fetchProduceTypes();
  }, [fetchCategories, fetchProduceTypes]);

  const handleCategoryPress = (id: string) => {
    setSelectedCategory(id);
    setSelectedSubcategory(null); // Reset subcategory selection when category changes
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId === selectedSubcategory ? null : subcategoryId);
  };

  const subcategories = selectedCategory ? getSubcategoriesForCategory(selectedCategory) : [];

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

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>

        {categoriesLoading && <Text style={{marginLeft: 20}}>Loading categories...</Text>}
        {error && <Text style={{marginLeft: 20, color: 'red'}}>Error: {error}</Text>}
        {!categoriesLoading && !error && (
          <CategoryCarousel
            categories={categories}
            selectedCategoryId={selectedCategory}
            onSelectCategory={handleCategoryPress}
          />
        )}

        {selectedCategory && (
          <View style={styles.subcategoriesContainer}>
            {subcategoriesLoading ? (
              <Text style={{marginLeft: 20, marginTop: 10}}>Loading subcategories...</Text>
            ) : (
              <SubcategoryCarousel
                subcategories={subcategories}
                onSelectSubcategory={handleSubcategorySelect}
                selectedSubcategoryId={selectedSubcategory}
              />
            )}
          </View>
        )}

        {selectedCategory && (
          <View style={styles.produceTypesContainer}>
            <Text style={styles.sectionTitle}>Available Produce</Text>
            {produceLoading ? (
              <Text style={{marginLeft: 20}}>Loading produce types...</Text>
            ) : produceError ? (
              <Text style={{marginLeft: 20, color: 'red'}}>Error: {produceError}</Text>
            ) : (
              <ScrollView 
                contentContainerStyle={styles.produceTypeGrid}
                showsVerticalScrollIndicator={false}
              >
                {(() => {
                  const filteredTypes = getFilteredProduceTypes(selectedCategory, selectedSubcategory);
                  if (filteredTypes.length === 0) {
                    return (
                      <Text style={styles.emptyMessage}>
                        {selectedSubcategory 
                          ? 'No produce types found for this subcategory'
                          : 'Loading produce types...'}
                      </Text>
                    );
                  }
                  return filteredTypes.map((produceType) => (
                    <ProduceTypeCard
                      key={produceType.id}
                      title={produceType.name}
                      icon={produceType.iconUrl}
                      onPress={() => navigation.navigate('Products')}
                    />
                  ));
                })()}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
