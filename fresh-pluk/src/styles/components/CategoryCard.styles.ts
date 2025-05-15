import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    marginHorizontal: spacing.xs,
    padding: spacing.xs,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.small,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selected: {
    backgroundColor: colors.primary,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 11,
    color: colors.text.primary,
    textAlign: 'center',
    paddingHorizontal: spacing.xs,
  },
  selectedTitle: {
    color: colors.background,
  },
});
