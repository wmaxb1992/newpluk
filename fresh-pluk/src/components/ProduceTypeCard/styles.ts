import { StyleSheet } from 'react-native';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';

export const styles = StyleSheet.create({
  produceTypeContainer: {
    width: 65,
    height: 65,
    marginHorizontal: 2,
    marginVertical: 0,
    padding: 2,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 2,
  },
  title: {
    fontSize: 9,
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 0,
    paddingHorizontal: 2,
  },
});
