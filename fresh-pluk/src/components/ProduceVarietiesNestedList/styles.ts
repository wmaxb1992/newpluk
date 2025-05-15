import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    width: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#333',
    textAlign: 'center'
  },
  listWrapper: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    width: '100%',
    backgroundColor: 'transparent'
  },
  nodeContainer: {
    width: '100%',
  },
  varietyContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  farmContainer: {
    backgroundColor: '#e9e9e9',
    paddingLeft: 16, // 2 spaces indentation
    width: '100%',
  },
  expandIndicator: {
    fontSize: 12,
    color: '#999',
    paddingLeft: 4,
    paddingRight: 8
  }
}); 