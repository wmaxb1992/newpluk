export const CREATE_PRODUCE_CATEGORY = /* GraphQL */ `
  mutation CreateProduceCategory($input: CreateProduceCategoryInput!) {
    createProduceCategory(input: $input) {
      id
      name
      description
      image
      icon
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_PRODUCE_SUBCATEGORY = /* GraphQL */ `
  mutation CreateProduceSubcategory($input: CreateProduceSubcategoryInput!) {
    createProduceSubcategory(input: $input) {
      id
      name
      image
      icon
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation CreateProduceType($input: CreateProduceTypeInput!) {
    createProduceType(input: $input) {
      id
      name
      slug
      iconUrl
      description
      tasteProfile
      commonUses
      subcategoryID
      tags
      farmCountInApp
      farmCountInZone
      farmCountNearby
      seasonalMonths
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_PRODUCE_VARIETY = /* GraphQL */ `
  mutation CreateProduceVariety($input: CreateProduceVarietyInput!) {
    createProduceVariety(input: $input) {
      id
      name
      iconUrl
      alternateNames
      originCountry
      yearBred
      tasteProfile
      skinColor
      fleshColor
      shelfLifeDays
      storageTips
      seasonalMonths
      flavorNotes
      nutritionFacts
      climateZones
      aiTags
      rarityScore
      isGeneric
      typeID
      farmCountInApp
      farmCountInZone
      farmCountNearby
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation UpdateProduceType($input: UpdateProduceTypeInput!) {
    updateProduceType(input: $input) {
      id
      name
      slug
      iconUrl
      description
      tasteProfile
      commonUses
      subcategoryID
      tags
      farmCountInApp
      farmCountInZone
      farmCountNearby
      seasonalMonths
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PRODUCE_CATEGORY = /* GraphQL */ `
  mutation DeleteProduceCategory($input: DeleteProduceCategoryInput!) {
    deleteProduceCategory(input: $input) {
      id
      name
    }
  }
`;
