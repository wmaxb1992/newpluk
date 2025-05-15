export { fruitsData } from './categories/01-fruits';
export { vegetablesData } from './categories/02-vegetables';
export { leafyGreensData } from './categories/03-leafy-greens';
export { rootVegetablesData } from './categories/04-root-vegetables';
export { herbsAromaticsData } from './categories/05-herbs-aromatics';
export { mushroomsFungiData } from './categories/06-mushrooms-fungi';
export { nutsSeedsData } from './categories/07-nuts-seeds';
export { legumesPulsesData } from './categories/08-legumes-pulses';
export { edibleFlowersData } from './categories/09-edible-flowers';
export { microgreensData } from './categories/10-microgreens-sprouts';

export const allCategories = [
  'fruits',
  'vegetables',
  'leafy-greens',
  'root-vegetables',
  'herbs-aromatics',
  'mushrooms-fungi',
  'nuts-seeds',
  'legumes-pulses',
  'edible-flowers',
  'microgreens-sprouts'
] as const;

// Helper type for category slugs
export type CategorySlug = typeof allCategories[number];
