import { StyleSheet } from 'react-native';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginHorizontal: spacing.sm,
    marginVertical: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.small,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 12,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
