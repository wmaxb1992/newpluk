import React, { useState, useEffect, useCallback, useRef, Fragment } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, Alert, Image, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Carousel, { TAnimationStyle } from 'react-native-reanimated-carousel';
import { interpolate } from 'react-native-reanimated';
import { styles } from '../../styles/screens/HomeScreen.styles';
import { colors } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { SubcategoryCarousel } from '../../components/SubcategoryCarousel';
import { useCategoryDataStore } from '../../store/categoryDataStore';
import { useProduceStore } from '../../store/produceStore';
import { ProduceTypeCard } from '../../components/ProduceTypeCard';
import { useCategoryStore } from '../../store/categoryStore';
import { ProduceVarietyList } from '../../components/ProduceVarietyList';
import { ProduceVariety } from '../../store/produceVarietyStore';
import ProduceVarietiesNestedList, { Variety, Farm } from '../../components/ProduceVarietiesNestedList';

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const PAGE_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { searchQuery, setSearchQuery } = useCategoryStore();
  const scrollViewRef = useRef<ScrollView>(null);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedProduceType, setSelectedProduceType] = useState<{id: string, name: string} | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);
  
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

  // Log all produce types on initial load and whenever they change
  useEffect(() => {
    console.log('All produce types loaded:', produceTypes.length);
    produceTypes.forEach(type => {
      console.log(`Type: ${type.name}, subcategoryId: ${type.subcategoryId}, icon: ${type.icon}, iconUrl: ${type.iconUrl}`);
    });
  }, [produceTypes]);

  useEffect(() => {
    // Fetch categories
    fetchCategories();
    
    // Force refetch produce types when component mounts to ensure latest data
    fetchProduceTypes();
    
    console.log('HomeScreen mounted - Fetching data');
  }, [fetchCategories, fetchProduceTypes]);

  const handleCategoryPress = (id: string) => {
    console.log('Category selected:', id);
    setSelectedCategory(id);
    setSelectedSubcategory(null); // Reset subcategory selection when category changes
    setSelectedProduceType(null); // Reset produce type selection when category changes
    setShowDetailView(false); // Reset detail view when category changes
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    console.log('Subcategory selected:', subcategoryId);
    setSelectedSubcategory(subcategoryId === selectedSubcategory ? null : subcategoryId);
    setSelectedProduceType(null); // Reset produce type selection when subcategory changes
    setShowDetailView(false); // Reset detail view when subcategory changes
  };

  const handleProduceTypeSelect = (id: string, name: string) => {
    console.log('Produce type selected:', id, name);
    
    // Create the new state object
    const newSelectedProduceType = { id, name };
    console.log('Setting new selectedProduceType:', newSelectedProduceType);
    
    // Update state
    setSelectedProduceType(newSelectedProduceType);
    // Set detail view mode to true to trigger UI changes
    setShowDetailView(true);
    
    // Scroll to top after a short delay
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }, 300);
  };

  const handleBackToCategories = () => {
    // Return to the category view
    setShowDetailView(false);
    // Keep the selected category and subcategory
    // But clear the selected produce type
    setSelectedProduceType(null);
  };

  const handleVarietyPress = (variety: ProduceVariety) => {
    navigation.navigate('Products');
    console.log('Variety pressed:', variety.name);
  };

  const handleAddVariety = (variety: ProduceVariety) => {
    Alert.alert('Add to Cart', `${variety.name} added to cart`);
    console.log('Add variety to cart:', variety.name);
  };

  const subcategories = selectedCategory ? getSubcategoriesForCategory(selectedCategory) : [];
  
  // Log subcategories whenever they change
  useEffect(() => {
    console.log('Current subcategories:', subcategories.length);
    subcategories.forEach(sub => {
      console.log(`Subcategory: ${sub.name}, id: ${sub.id}`);
    });
  }, [subcategories]);

  // Animation style for the custom carousel
  const customAnimationStyle: TAnimationStyle = (value: number) => {
    'worklet';
    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [10, 20, 10]
    );
    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-PAGE_WIDTH * 0.3, 0, PAGE_WIDTH * 0.3]
    );
    const scale = interpolate(
      value,
      [-1, 0, 1],
      [0.8, 1, 0.8]
    );
    return {
      transform: [{ translateX }, { scale }],
      zIndex,
    };
  };

  // Get the filtered produce types based on selected category and subcategory
  const filteredTypes = selectedCategory ? 
    getFilteredProduceTypes(selectedCategory, selectedSubcategory) : [];

  // Component to render varieties using NestedListView
  const renderVarietyList = () => {
    if (!showDetailView || !selectedProduceType) return null;
    
    // Mock data for varieties and farms
    const varietiesWithFarms = [
      { 
        title: 'Meyer Lemon', 
        description: 'Sweeter than regular lemons',
        shelfLife: 14,
        image: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png',
        farms: [
          { 
            title: 'Sunny Acres Farm', 
            distance: '3.2 miles away',
            rating: 4.8,
            price: '$3.99/lb',
            organic: true,
            image: 'https://cdn-icons-png.flaticon.com/512/2431/2431970.png'
          },
          { 
            title: 'Green Valley Organics', 
            distance: '5.7 miles away',
            rating: 4.5,
            price: '$4.25/lb',
            organic: true,
            image: 'https://cdn-icons-png.flaticon.com/512/2431/2431970.png'
          },
          { 
            title: 'River Road Farms', 
            distance: '8.3 miles away',
            rating: 4.2,
            price: '$3.50/lb',
            organic: false,
            image: 'https://cdn-icons-png.flaticon.com/512/2431/2431970.png'
          }
        ]
      },
      { 
        title: 'Eureka Lemon', 
        description: 'Classic tart lemon variety',
        shelfLife: 10,
        image: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png',
        farms: [
          { 
            title: 'Hillside Harvest', 
            distance: '4.5 miles away',
            rating: 4.7,
            price: '$3.75/lb',
            organic: false
          },
          { 
            title: 'Mountain View Farm', 
            distance: '7.1 miles away',
            rating: 4.9,
            price: '$4.50/lb',
            organic: true
          }
        ]
      },
      { 
        title: 'Lisbon Lemon', 
        description: 'Smooth skin with very few seeds',
        shelfLife: 12,
        image: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png',
        farms: [
          { 
            title: 'Cedar Creek Farm', 
            distance: '6.2 miles away',
            rating: 4.6,
            price: '$3.85/lb',
            organic: true
          },
          { 
            title: 'Valley Fresh Produce', 
            distance: '2.8 miles away',
            rating: 4.3,
            price: '$3.25/lb',
            organic: false
          }
        ]
      }
    ];
    
    return (
      <ProduceVarietiesNestedList
        produceTypeName={selectedProduceType.name}
        varieties={varietiesWithFarms}
        onFarmPress={(farm: Farm) => {
          Alert.alert('Farm Selected', `You selected ${farm.title}`);
        }}
        onAddFarmPress={(farm: Farm) => {
          Alert.alert('Added to Cart', `${farm.title} has been added to your cart.`);
        }}
      />
    );
  };

  // Split the rendering to avoid nested ScrollViews
  if (showDetailView && selectedProduceType) {
    // Detail view (produce type and varieties)
    return (
      <View style={styles.container}>
        <View style={styles.compactHeader}>
          <Text style={styles.title}>Pluk</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput 
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for fresh local produce..."
            style={styles.compactSearchInput}
            placeholderTextColor={colors.text.secondary}
          />
        </View>

        {/* Produce types carousel with header in detail view - reduced margins */}
        <View style={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0
        }}>
          {/* Header with title and back button */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 0,
            paddingBottom: 2,
            borderBottomWidth: 1,
            borderBottomColor: '#eeeeee'
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: colors.text.primary
            }}>
              {selectedProduceType.name} and Other {selectedSubcategory ? 'Similar Items' : 'Produce Types'}
            </Text>
            <TouchableOpacity 
              style={{
                backgroundColor: '#f0f0f0',
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 16
              }}
              onPress={handleBackToCategories}
            >
              <Text style={{color: colors.primary, fontWeight: '600'}}>← Back</Text>
            </TouchableOpacity>
          </View>

          {/* Carousel with reduced height */}
          <View style={{
            height: 70,
            marginTop: 0,
            marginBottom: 0
          }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {filteredTypes.map((item) => (
                <View 
                  key={item.id}
                  style={styles.produceCardContainer}
                >
                  <ProduceTypeCard
                    title={item.name}
                    icon={item.iconUrl}
                    id={item.id}
                    onPress={() => {
                      console.log('Direct produce type press:', item.name);
                      handleProduceTypeSelect(item.id, item.name);
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Varieties list right under the carousel with no margin */}
        {renderVarietyList()}
      </View>
    );
  }

  // Normal view (categories, subcategories, produce types)
  return (
    <ScrollView 
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.compactHeader}>
        <Text style={styles.title}>Pluk</Text>
      </View>
      
      <View style={[styles.searchContainer, { marginBottom: 0 }]}>
        <TextInput 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for fresh local produce..."
          style={styles.compactSearchInput}
          placeholderTextColor={colors.text.secondary}
        />
      </View>

      {/* Categories - reduced margins */}
      <View style={[styles.categoriesSection, { marginTop: 0, marginBottom: 0 }]}>
        {categoriesLoading ? (
          <Text style={{marginLeft: 20}}>Loading categories...</Text>
        ) : error ? (
          <Text style={{marginLeft: 20, color: 'red'}}>Error: {error}</Text>
        ) : (
          <CategoryCarousel 
            categories={categories} 
            onSelectCategory={handleCategoryPress}
            selectedCategoryId={selectedCategory}
          />
        )}
      </View>

      {/* Subcategories - reduced margins */}
      {selectedCategory && (
        <View style={[styles.subcategoriesNoTitleSection, {marginTop: 0, marginBottom: 0}]}>
          {subcategoriesLoading ? (
            <Text style={{marginLeft: 20}}>Loading subcategories...</Text>
          ) : (
            <SubcategoryCarousel 
              subcategories={subcategories}
              onSelectSubcategory={handleSubcategorySelect}
              selectedSubcategoryId={selectedSubcategory}
            />
          )}
        </View>
      )}

      {/* Produce types - reduced margins */}
      {selectedCategory && (
        <Fragment>
          <View style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0, 
            paddingBottom: 0
          }}>
            {produceLoading ? (
              <Text style={{marginLeft: 20}}>Loading produce types...</Text>
            ) : produceError ? (
              <Text style={{marginLeft: 20, color: 'red'}}>Error: {produceError}</Text>
            ) : filteredTypes.length === 0 ? (
              <Text style={styles.emptyMessage}>
                {selectedSubcategory 
                  ? 'No produce types found for this subcategory'
                  : 'Loading produce types...'}
              </Text>
            ) : (
              <View style={{
                height: 70, 
                marginTop: 0,
                marginBottom: 0
              }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.scrollContent}
                >
                  {filteredTypes.map((item) => (
                    <View 
                      key={item.id}
                      style={styles.produceCardContainer}
                    >
                      <ProduceTypeCard
                        title={item.name}
                        icon={item.iconUrl}
                        id={item.id}
                        onPress={() => {
                          console.log('Direct produce type press:', item.name);
                          handleProduceTypeSelect(item.id, item.name);
                        }}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        </Fragment>
      )}
    </ScrollView>
  );
}
