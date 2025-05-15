import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.sm,
  },
  title: {
    ...typography.title,
    color: colors.text.primary,
    fontSize: 20,
  },
  subtitle: {
    ...typography.subtitle,
    color: colors.text.secondary,
    marginTop: spacing.xs,
    fontSize: 14,
  },
  searchContainer: {
    marginTop: spacing.xs,
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  searchInput: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    height: 40,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 14,
    color: colors.text.primary,
    ...shadows.small,
  },
  sectionTitle: {
    ...typography.subtitle,
    fontSize: 14,
    color: colors.text.primary,
    marginLeft: spacing.md,
    marginBottom: spacing.xs,
  },
  categoriesSection: {
    marginTop: spacing.xs,
  },
  emptyMessage: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 14,
    marginTop: spacing.md,
    width: '100%',
    paddingHorizontal: spacing.md,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
  subcategoriesContainer: {
    marginTop: spacing.sm,
  },
  subsectionTitle: {
    ...typography.body,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: spacing.md,
    marginBottom: spacing.xs,
    color: colors.text.secondary,
  },
  produceTypesContainer: {
    marginTop: spacing.sm,
  },
  produceTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.md,
  },
  produceType: {
    ...typography.body,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: spacing.md,
    marginBottom: spacing.xs,
    color: colors.text.secondary,
  },
});
