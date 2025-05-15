import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';

export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: spacing.xs,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
  },
  card: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginRight: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    ...shadows.small,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 12,
    color: colors.text.primary,
  },
  selectedText: {
    color: colors.background,
  },
});
