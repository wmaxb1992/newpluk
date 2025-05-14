import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface CategoryCardProps {
  title: string;
  icon: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function CategoryCard({ title, icon, isSelected, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity 
      style={[styles.card, isSelected && styles.selectedCard]} 
      onPress={onPress}
    >
      <Image 
        source={{ uri: icon }} 
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#4CAF50',
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  selectedTitle: {
    color: '#fff',
  },
});
