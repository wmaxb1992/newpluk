import { StyleSheet } from 'react-native';
import theme from '../theme';

export const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 70,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  iconContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  icon: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },
  title: {
    fontSize: 9,
    fontWeight: '500',
    color: theme.colors.text.primary,
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 2,
  },
  selectedTitle: {
    color: theme.colors.background,
  },
});
