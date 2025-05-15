import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export const styles = StyleSheet.create({
  farmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9e9e9', // Grey background for farm rows
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 6,
    paddingHorizontal: 0,
    paddingLeft: 16, // 2 spaces from left edge
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    height: 36,
    width: '100%'
  },
  farmIcon: {
    width: 18, 
    height: 18, 
    marginLeft: 0, 
    marginRight: 8
  },
  farmContent: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingRight: 16
  },
  farmInfoContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  farmName: {
    fontWeight: '500', 
    fontSize: 13
  },
  organicBadge: {
    backgroundColor: '#e6f7e8', 
    paddingHorizontal: 4, 
    paddingVertical: 1, 
    borderRadius: 3,
    marginLeft: 4
  },
  organicText: {
    color: '#4CAF50', 
    fontSize: 8
  },
  farmDistance: {
    color: '#666', 
    fontSize: 12, 
    marginLeft: 6
  },
  farmRating: {
    color: '#666', 
    fontSize: 12, 
    marginLeft: 6
  },
  farmActions: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  farmPrice: {
    fontWeight: 'bold', 
    fontSize: 13, 
    marginRight: 8
  },
  addButton: {
    backgroundColor: colors.primary || '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white', 
    fontSize: 10, 
    fontWeight: 'bold'
  }
}); 