import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  varietyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Pure white background for variety rows
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    padding: 8,
    paddingHorizontal: 0,
    paddingLeft: 0, // Flush with left edge
    marginBottom: 0,
    height: 40,
    width: '100%'
  },
  varietyIcon: {
    width: 24,
    height: 24,
    marginLeft: 0,
    marginRight: 8
  },
  varietyContent: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingRight: 16
  },
  varietyName: {
    fontWeight: 'bold', 
    fontSize: 14
  },
  farmCount: {
    color: '#888', 
    fontSize: 12
  }
}); 