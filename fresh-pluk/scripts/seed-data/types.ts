export interface CategoryData {
  category: Category;
  subcategories: Subcategory[];
  types: ProduceType[];
  varieties: Variety[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  iconUrl?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  image?: string;
  iconUrl?: string;
  categoryId?: string;
}

export interface ProduceType {
  id: string;
  name: string;
  slug: string;
  description?: string;
  iconUrl: string;
  tasteProfile?: string;
  commonUses?: string[];
  subcategoryID: string;
  tags?: string[];
  farmCountInApp?: number;
  farmCountInZone?: number;
  farmCountNearby?: number;
  seasonalMonths?: number[];
}

export interface Variety {
  id: string;
  name: string;
  description?: string;
  averageShelfLife?: number;
  typeId: string;
}
