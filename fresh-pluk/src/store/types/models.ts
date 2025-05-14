// Core model types for the Pluk ecosystem
export interface ProduceCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
  subcategories?: ProduceSubcategory[];
}

export interface ProduceSubcategory {
  id: string;
  categoryID: string;
  name: string;
  description?: string;
  image?: string;
  types?: ProduceType[];
}

export interface ProduceType {
  id: string;
  subcategoryID: string;
  name: string;
  description?: string;
  image?: string;
  varieties?: ProduceVariety[];
}

export interface ProduceVariety {
  id: string;
  typeID: string;
  name: string;
  description?: string;
  image?: string;
  nutrients?: ProduceNutrient[];
  listings?: ProduceListing[];
}

export interface ProduceNutrient {
  id: string;
  varietyID: string;
  name: string;
  amount: number;
  unit: string;
}

export interface ProduceListing {
  id: string;
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  preHarvestListingID?: string;
  title: string;
  description?: string;
  pricePerUnit: number;
  unitLabel: string;
  quantityAvailable: number;
  datePicked: string;
  daysSinceHarvested?: number;
  freshness?: number;
  organic: boolean;
  isPreparedDish: boolean;
  images?: string[];
  isInstantlyAvailable?: boolean;
  instantDeliveryFee?: number;
  estimatedDeliveryMinutes?: number;
}
