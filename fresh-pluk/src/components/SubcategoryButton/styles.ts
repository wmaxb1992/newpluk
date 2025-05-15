import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    borderRadius: borderRadius.round,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: spacing.xs,
  },
  text: {
    fontSize: 14,
    color: colors.text.primary,
  },
  selectedText: {
    color: colors.text.light,
  },
}); 