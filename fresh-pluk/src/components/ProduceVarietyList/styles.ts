import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginLeft: spacing.md,
    marginBottom: spacing.xs,
  },
  varietyContainer: {
    backgroundColor: colors.background,
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs / 2,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small
  },
  infoContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  varietyName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 2,
  },
  varietyDescription: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  farmCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  farmCount: {
    fontSize: 12,
    color: colors.text.light,
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: colors.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: colors.text.inverse,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  empty: {
    textAlign: 'center',
    color: colors.text.secondary,
    marginVertical: spacing.md,
    fontSize: 14,
  },
  loading: {
    textAlign: 'center',
    marginVertical: spacing.md,
  }
}); 