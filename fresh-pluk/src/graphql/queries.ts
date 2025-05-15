export const LIST_PRODUCE_SUBCATEGORIES = /* GraphQL */ `
  query ListProduceSubcategories($filter: ModelProduceSubcategoryFilterInput, $limit: Int, $nextToken: String) {
    listProduceSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoryId
      }
      nextToken
    }
  }
`;

export const LIST_PRODUCE_CATEGORIES = /* GraphQL */ `
  query ListProduceCategories($filter: ModelProduceCategoryFilterInput, $limit: Int, $nextToken: String) {
    listProduceCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;

export const LIST_PRODUCE_TYPES = /* GraphQL */ `
  query ListProduceTypes($filter: ModelProduceTypeFilterInput, $limit: Int, $nextToken: String) {
    listProduceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subcategoryId
      }
      nextToken
    }
  }
`;

export const LIST_PRODUCE_LISTINGS = /* GraphQL */ `
  query ListProduceListings(
    $filter: ModelProduceListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        farmOwnerId
        inventoryBatchId
        produceVarietyId
        title
        description
        images
        price
        priceUnit
        quantity
        quantityUnit
        availableQuantity
        isOrganic
        harvestDate
        expirationDate
        daysToExpiration
        freshness
        active
        isInstantlyAvailable
        instantDeliveryFee
        estimatedDeliveryMinutes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const GET_PRODUCE_LISTING = /* GraphQL */ `
  query GetProduceListing($id: ID!) {
    getProduceListing(id: $id) {
      id
      farmId
      farmOwnerId
      inventoryBatchId
      produceVarietyId
      title
      description
      images
      price
      priceUnit
      quantity
      quantityUnit
      availableQuantity
      isOrganic
      harvestDate
      expirationDate
      daysToExpiration
      freshness
      active
      isInstantlyAvailable
      instantDeliveryFee
      estimatedDeliveryMinutes
      createdAt
      updatedAt
    }
  }
`;
