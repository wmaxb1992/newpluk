/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      phoneNumber
      avatar
      role
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        phoneNumber
        avatar
        role
        bio
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      userId
      street
      city
      state
      postalCode
      country
      isDefault
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        street
        city
        state
        postalCode
        country
        isDefault
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addressesByUserId = /* GraphQL */ `
  query AddressesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        street
        city
        state
        postalCode
        country
        isDefault
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserPreferences = /* GraphQL */ `
  query GetUserPreferences($id: ID!) {
    getUserPreferences(id: $id) {
      id
      userId
      preferredPaymentMethod
      pushNotificationsEnabled
      emailNotificationsEnabled
      smsNotificationsEnabled
      orderUpdates
      farmUpdates
      marketingCommunications
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserPreferences = /* GraphQL */ `
  query ListUserPreferences(
    $filter: ModelUserPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        preferredPaymentMethod
        pushNotificationsEnabled
        emailNotificationsEnabled
        smsNotificationsEnabled
        orderUpdates
        farmUpdates
        marketingCommunications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userPreferencesByUserId = /* GraphQL */ `
  query UserPreferencesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPreferencesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        preferredPaymentMethod
        pushNotificationsEnabled
        emailNotificationsEnabled
        smsNotificationsEnabled
        orderUpdates
        farmUpdates
        marketingCommunications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getShoppingList = /* GraphQL */ `
  query GetShoppingList($id: ID!) {
    getShoppingList(id: $id) {
      id
      userId
      name
      description
      isDefault
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listShoppingLists = /* GraphQL */ `
  query ListShoppingLists(
    $filter: ModelShoppingListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        description
        isDefault
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shoppingListsByUserId = /* GraphQL */ `
  query ShoppingListsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShoppingListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shoppingListsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        name
        description
        isDefault
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getShoppingListItem = /* GraphQL */ `
  query GetShoppingListItem($id: ID!) {
    getShoppingListItem(id: $id) {
      id
      shoppingListId
      userId
      produceVarietyId
      quantity
      unit
      notes
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listShoppingListItems = /* GraphQL */ `
  query ListShoppingListItems(
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shoppingListId
        userId
        produceVarietyId
        quantity
        unit
        notes
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shoppingListItemsByShoppingListId = /* GraphQL */ `
  query ShoppingListItemsByShoppingListId(
    $shoppingListId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shoppingListItemsByShoppingListId(
      shoppingListId: $shoppingListId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shoppingListId
        userId
        produceVarietyId
        quantity
        unit
        notes
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shoppingListItemsByUserId = /* GraphQL */ `
  query ShoppingListItemsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shoppingListItemsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shoppingListId
        userId
        produceVarietyId
        quantity
        unit
        notes
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shoppingListItemsByProduceVarietyId = /* GraphQL */ `
  query ShoppingListItemsByProduceVarietyId(
    $produceVarietyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shoppingListItemsByProduceVarietyId(
      produceVarietyId: $produceVarietyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        shoppingListId
        userId
        produceVarietyId
        quantity
        unit
        notes
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      userId
      title
      message
      read
      actionLink
      imageLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        message
        read
        actionLink
        imageLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notificationsByUserId = /* GraphQL */ `
  query NotificationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        title
        message
        read
        actionLink
        imageLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFarm = /* GraphQL */ `
  query GetFarm($id: ID!) {
    getFarm(id: $id) {
      id
      ownerId
      name
      description
      location
      website
      phone
      email
      address
      city
      state
      zipCode
      profileImage
      coverImage
      active
      certified
      certifications
      yearEstablished
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFarms = /* GraphQL */ `
  query ListFarms(
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerId
        name
        description
        location
        website
        phone
        email
        address
        city
        state
        zipCode
        profileImage
        coverImage
        active
        certified
        certifications
        yearEstablished
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmsByOwnerId = /* GraphQL */ `
  query FarmsByOwnerId(
    $ownerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmsByOwnerId(
      ownerId: $ownerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ownerId
        name
        description
        location
        website
        phone
        email
        address
        city
        state
        zipCode
        profileImage
        coverImage
        active
        certified
        certifications
        yearEstablished
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getZone = /* GraphQL */ `
  query GetZone($id: ID!) {
    getZone(id: $id) {
      id
      farmId
      farmOwnerId
      name
      description
      location
      size
      sizeUnit
      active
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listZones = /* GraphQL */ `
  query ListZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        farmOwnerId
        name
        description
        location
        size
        sizeUnit
        active
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const zonesByFarmId = /* GraphQL */ `
  query ZonesByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    zonesByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        name
        description
        location
        size
        sizeUnit
        active
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMarketSchedule = /* GraphQL */ `
  query GetMarketSchedule($id: ID!) {
    getMarketSchedule(id: $id) {
      id
      farmId
      farmOwnerId
      marketName
      address
      city
      state
      zipCode
      dayOfWeek
      startTime
      endTime
      active
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMarketSchedules = /* GraphQL */ `
  query ListMarketSchedules(
    $filter: ModelMarketScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        farmOwnerId
        marketName
        address
        city
        state
        zipCode
        dayOfWeek
        startTime
        endTime
        active
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const marketSchedulesByFarmId = /* GraphQL */ `
  query MarketSchedulesByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMarketScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketSchedulesByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        marketName
        address
        city
        state
        zipCode
        dayOfWeek
        startTime
        endTime
        active
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFarmMetrics = /* GraphQL */ `
  query GetFarmMetrics($id: ID!) {
    getFarmMetrics(id: $id) {
      id
      farmId
      farmOwnerId
      totalOrders
      totalSales
      totalCustomers
      averageOrderValue
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFarmMetrics = /* GraphQL */ `
  query ListFarmMetrics(
    $filter: ModelFarmMetricsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarmMetrics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        farmOwnerId
        totalOrders
        totalSales
        totalCustomers
        averageOrderValue
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmMetricsByFarmId = /* GraphQL */ `
  query FarmMetricsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmMetricsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmMetricsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        totalOrders
        totalSales
        totalCustomers
        averageOrderValue
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceCategory = /* GraphQL */ `
  query GetProduceCategory($id: ID!) {
    getProduceCategory(id: $id) {
      id
      name
      description
      image
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProduceCategories = /* GraphQL */ `
  query ListProduceCategories(
    $filter: ModelProduceCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        icon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceSubcategory = /* GraphQL */ `
  query GetProduceSubcategory($id: ID!) {
    getProduceSubcategory(id: $id) {
      id
      categoryId
      name
      description
      image
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProduceSubcategories = /* GraphQL */ `
  query ListProduceSubcategories(
    $filter: ModelProduceSubcategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceSubcategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        name
        description
        image
        icon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceSubcategoriesByCategoryId = /* GraphQL */ `
  query ProduceSubcategoriesByCategoryId(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceSubcategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceSubcategoriesByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        name
        description
        image
        icon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceType = /* GraphQL */ `
  query GetProduceType($id: ID!) {
    getProduceType(id: $id) {
      id
      subcategoryID
      name
      description
      image
      icon
      slug
      iconUrl
      tasteProfile
      commonUses
      tags
      farmCountInApp
      farmCountInZone
      farmCountNearby
      seasonalMonths
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProduceTypes = /* GraphQL */ `
  query ListProduceTypes(
    $filter: ModelProduceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subcategoryID
        name
        description
        image
        icon
        slug
        iconUrl
        tasteProfile
        commonUses
        tags
        farmCountInApp
        farmCountInZone
        farmCountNearby
        seasonalMonths
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceTypesBySubcategoryID = /* GraphQL */ `
  query ProduceTypesBySubcategoryID(
    $subcategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceTypesBySubcategoryID(
      subcategoryID: $subcategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subcategoryID
        name
        description
        image
        icon
        slug
        iconUrl
        tasteProfile
        commonUses
        tags
        farmCountInApp
        farmCountInZone
        farmCountNearby
        seasonalMonths
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceVariety = /* GraphQL */ `
  query GetProduceVariety($id: ID!) {
    getProduceVariety(id: $id) {
      id
      typeId
      name
      description
      image
      icon
      season
      harvestInstructions
      storageInstructions
      averageShelfLife
      averageWeight
      weightUnit
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProduceVarieties = /* GraphQL */ `
  query ListProduceVarieties(
    $filter: ModelProduceVarietyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceVarieties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typeId
        name
        description
        image
        icon
        season
        harvestInstructions
        storageInstructions
        averageShelfLife
        averageWeight
        weightUnit
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceVarietiesByTypeId = /* GraphQL */ `
  query ProduceVarietiesByTypeId(
    $typeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceVarietyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceVarietiesByTypeId(
      typeId: $typeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typeId
        name
        description
        image
        icon
        season
        harvestInstructions
        storageInstructions
        averageShelfLife
        averageWeight
        weightUnit
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceNutrient = /* GraphQL */ `
  query GetProduceNutrient($id: ID!) {
    getProduceNutrient(id: $id) {
      id
      varietyId
      name
      amount
      unit
      dailyValue
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProduceNutrients = /* GraphQL */ `
  query ListProduceNutrients(
    $filter: ModelProduceNutrientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduceNutrients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        varietyId
        name
        amount
        unit
        dailyValue
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceNutrientsByVarietyId = /* GraphQL */ `
  query ProduceNutrientsByVarietyId(
    $varietyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceNutrientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceNutrientsByVarietyId(
      varietyId: $varietyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        varietyId
        name
        amount
        unit
        dailyValue
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInventoryBatch = /* GraphQL */ `
  query GetInventoryBatch($id: ID!) {
    getInventoryBatch(id: $id) {
      id
      farmId
      farmOwnerId
      zoneId
      produceVarietyId
      status
      plantingDate
      harvestDate
      estimatedHarvestDate
      estimatedQuantity
      actualQuantity
      quantityUnit
      remainingQuantity
      isOrganic
      price
      priceUnit
      storageLocation
      storageConditions
      notes
      expirationDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInventoryBatches = /* GraphQL */ `
  query ListInventoryBatches(
    $filter: ModelInventoryBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryBatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        zoneId
        produceVarietyId
        status
        plantingDate
        harvestDate
        estimatedHarvestDate
        estimatedQuantity
        actualQuantity
        quantityUnit
        remainingQuantity
        isOrganic
        price
        priceUnit
        storageLocation
        storageConditions
        notes
        expirationDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inventoryBatchesByFarmId = /* GraphQL */ `
  query InventoryBatchesByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryBatchesByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        zoneId
        produceVarietyId
        status
        plantingDate
        harvestDate
        estimatedHarvestDate
        estimatedQuantity
        actualQuantity
        quantityUnit
        remainingQuantity
        isOrganic
        price
        priceUnit
        storageLocation
        storageConditions
        notes
        expirationDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inventoryBatchesByZoneId = /* GraphQL */ `
  query InventoryBatchesByZoneId(
    $zoneId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryBatchesByZoneId(
      zoneId: $zoneId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        zoneId
        produceVarietyId
        status
        plantingDate
        harvestDate
        estimatedHarvestDate
        estimatedQuantity
        actualQuantity
        quantityUnit
        remainingQuantity
        isOrganic
        price
        priceUnit
        storageLocation
        storageConditions
        notes
        expirationDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inventoryBatchesByProduceVarietyId = /* GraphQL */ `
  query InventoryBatchesByProduceVarietyId(
    $produceVarietyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryBatchesByProduceVarietyId(
      produceVarietyId: $produceVarietyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        zoneId
        produceVarietyId
        status
        plantingDate
        harvestDate
        estimatedHarvestDate
        estimatedQuantity
        actualQuantity
        quantityUnit
        remainingQuantity
        isOrganic
        price
        priceUnit
        storageLocation
        storageConditions
        notes
        expirationDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPreHarvestListing = /* GraphQL */ `
  query GetPreHarvestListing($id: ID!) {
    getPreHarvestListing(id: $id) {
      id
      farmId
      farmOwnerId
      inventoryBatchId
      produceVarietyId
      title
      description
      image
      estimatedHarvestDate
      estimatedQuantity
      quantityUnit
      isOrganic
      price
      priceUnit
      availableForReservation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPreHarvestListings = /* GraphQL */ `
  query ListPreHarvestListings(
    $filter: ModelPreHarvestListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreHarvestListings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        inventoryBatchId
        produceVarietyId
        title
        description
        image
        estimatedHarvestDate
        estimatedQuantity
        quantityUnit
        isOrganic
        price
        priceUnit
        availableForReservation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestListingsByFarmId = /* GraphQL */ `
  query PreHarvestListingsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestListingsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        inventoryBatchId
        produceVarietyId
        title
        description
        image
        estimatedHarvestDate
        estimatedQuantity
        quantityUnit
        isOrganic
        price
        priceUnit
        availableForReservation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestListingsByInventoryBatchId = /* GraphQL */ `
  query PreHarvestListingsByInventoryBatchId(
    $inventoryBatchId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestListingsByInventoryBatchId(
      inventoryBatchId: $inventoryBatchId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        inventoryBatchId
        produceVarietyId
        title
        description
        image
        estimatedHarvestDate
        estimatedQuantity
        quantityUnit
        isOrganic
        price
        priceUnit
        availableForReservation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestListingsByProduceVarietyId = /* GraphQL */ `
  query PreHarvestListingsByProduceVarietyId(
    $produceVarietyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestListingsByProduceVarietyId(
      produceVarietyId: $produceVarietyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        inventoryBatchId
        produceVarietyId
        title
        description
        image
        estimatedHarvestDate
        estimatedQuantity
        quantityUnit
        isOrganic
        price
        priceUnit
        availableForReservation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPreHarvestReservation = /* GraphQL */ `
  query GetPreHarvestReservation($id: ID!) {
    getPreHarvestReservation(id: $id) {
      id
      userId
      preHarvestListingId
      farmId
      quantity
      quantityUnit
      status
      requestedPickupDate
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPreHarvestReservations = /* GraphQL */ `
  query ListPreHarvestReservations(
    $filter: ModelPreHarvestReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreHarvestReservations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        preHarvestListingId
        farmId
        quantity
        quantityUnit
        status
        requestedPickupDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestReservationsByUserId = /* GraphQL */ `
  query PreHarvestReservationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestReservationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        preHarvestListingId
        farmId
        quantity
        quantityUnit
        status
        requestedPickupDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestReservationsByPreHarvestListingId = /* GraphQL */ `
  query PreHarvestReservationsByPreHarvestListingId(
    $preHarvestListingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestReservationsByPreHarvestListingId(
      preHarvestListingId: $preHarvestListingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        preHarvestListingId
        farmId
        quantity
        quantityUnit
        status
        requestedPickupDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const preHarvestReservationsByFarmId = /* GraphQL */ `
  query PreHarvestReservationsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPreHarvestReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preHarvestReservationsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        preHarvestListingId
        farmId
        quantity
        quantityUnit
        status
        requestedPickupDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFarmPost = /* GraphQL */ `
  query GetFarmPost($id: ID!) {
    getFarmPost(id: $id) {
      id
      farmId
      farmOwnerId
      type
      title
      content
      images
      videos
      preHarvestListingId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFarmPosts = /* GraphQL */ `
  query ListFarmPosts(
    $filter: ModelFarmPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarmPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        farmOwnerId
        type
        title
        content
        images
        videos
        preHarvestListingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmPostsByFarmId = /* GraphQL */ `
  query FarmPostsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmPostsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        type
        title
        content
        images
        videos
        preHarvestListingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmPostsByPreHarvestListingId = /* GraphQL */ `
  query FarmPostsByPreHarvestListingId(
    $preHarvestListingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmPostsByPreHarvestListingId(
      preHarvestListingId: $preHarvestListingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        farmOwnerId
        type
        title
        content
        images
        videos
        preHarvestListingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPostComment = /* GraphQL */ `
  query GetPostComment($id: ID!) {
    getPostComment(id: $id) {
      id
      farmPostId
      userId
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPostComments = /* GraphQL */ `
  query ListPostComments(
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmPostId
        userId
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postCommentsByFarmPostId = /* GraphQL */ `
  query PostCommentsByFarmPostId(
    $farmPostId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postCommentsByFarmPostId(
      farmPostId: $farmPostId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmPostId
        userId
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postCommentsByUserId = /* GraphQL */ `
  query PostCommentsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postCommentsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmPostId
        userId
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmPostId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postLikesByFarmPostId = /* GraphQL */ `
  query PostLikesByFarmPostId(
    $farmPostId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postLikesByFarmPostId(
      farmPostId: $farmPostId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmPostId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postLikesByUserId = /* GraphQL */ `
  query PostLikesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postLikesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmPostId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFarmFollow = /* GraphQL */ `
  query GetFarmFollow($id: ID!) {
    getFarmFollow(id: $id) {
      id
      farmId
      userId
      receiveNotifications
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFarmFollows = /* GraphQL */ `
  query ListFarmFollows(
    $filter: ModelFarmFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarmFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmId
        userId
        receiveNotifications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmFollowsByFarmId = /* GraphQL */ `
  query FarmFollowsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmFollowsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        userId
        receiveNotifications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const farmFollowsByUserId = /* GraphQL */ `
  query FarmFollowsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFarmFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    farmFollowsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        farmId
        userId
        receiveNotifications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduceListing = /* GraphQL */ `
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
      __typename
    }
  }
`;
export const listProduceListings = /* GraphQL */ `
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceListingsByFarmId = /* GraphQL */ `
  query ProduceListingsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceListingsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceListingsByInventoryBatchId = /* GraphQL */ `
  query ProduceListingsByInventoryBatchId(
    $inventoryBatchId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceListingsByInventoryBatchId(
      inventoryBatchId: $inventoryBatchId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produceListingsByProduceVarietyId = /* GraphQL */ `
  query ProduceListingsByProduceVarietyId(
    $produceVarietyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduceListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produceListingsByProduceVarietyId(
      produceVarietyId: $produceVarietyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListingReview = /* GraphQL */ `
  query GetListingReview($id: ID!) {
    getListingReview(id: $id) {
      id
      produceListingId
      userId
      rating
      comment
      images
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listListingReviews = /* GraphQL */ `
  query ListListingReviews(
    $filter: ModelListingReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListingReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        produceListingId
        userId
        rating
        comment
        images
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listingReviewsByProduceListingId = /* GraphQL */ `
  query ListingReviewsByProduceListingId(
    $produceListingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListingReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listingReviewsByProduceListingId(
      produceListingId: $produceListingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        produceListingId
        userId
        rating
        comment
        images
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listingReviewsByUserId = /* GraphQL */ `
  query ListingReviewsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListingReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listingReviewsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        produceListingId
        userId
        rating
        comment
        images
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      userId
      active
      subtotal
      tax
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        active
        subtotal
        tax
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartsByUserId = /* GraphQL */ `
  query CartsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        active
        subtotal
        tax
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      cartId
      userId
      produceListingId
      quantity
      price
      subtotal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartId
        userId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartItemsByCartId = /* GraphQL */ `
  query CartItemsByCartId(
    $cartId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByCartId(
      cartId: $cartId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartItemsByUserId = /* GraphQL */ `
  query CartItemsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartItemsByProduceListingId = /* GraphQL */ `
  query CartItemsByProduceListingId(
    $produceListingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByProduceListingId(
      produceListingId: $produceListingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userId
      status
      subtotal
      tax
      total
      deliveryFee
      deliveryAddressId
      deliveryNotes
      requestedDeliveryDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        status
        subtotal
        tax
        total
        deliveryFee
        deliveryAddressId
        deliveryNotes
        requestedDeliveryDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserId = /* GraphQL */ `
  query OrdersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        status
        subtotal
        tax
        total
        deliveryFee
        deliveryAddressId
        deliveryNotes
        requestedDeliveryDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByStatus = /* GraphQL */ `
  query OrdersByStatus(
    $status: OrderStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        status
        subtotal
        tax
        total
        deliveryFee
        deliveryAddressId
        deliveryNotes
        requestedDeliveryDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      orderId
      userId
      farmId
      produceListingId
      quantity
      price
      subtotal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        userId
        farmId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByOrderId = /* GraphQL */ `
  query OrderItemsByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        farmId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByUserId = /* GraphQL */ `
  query OrderItemsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        farmId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByFarmId = /* GraphQL */ `
  query OrderItemsByFarmId(
    $farmId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByFarmId(
      farmId: $farmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        farmId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByProduceListingId = /* GraphQL */ `
  query OrderItemsByProduceListingId(
    $produceListingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByProduceListingId(
      produceListingId: $produceListingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        farmId
        produceListingId
        quantity
        price
        subtotal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      orderId
      userId
      amount
      status
      method
      transactionId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        userId
        amount
        status
        method
        transactionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentsByOrderId = /* GraphQL */ `
  query PaymentsByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        amount
        status
        method
        transactionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentsByUserId = /* GraphQL */ `
  query PaymentsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        amount
        status
        method
        transactionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentsByStatus = /* GraphQL */ `
  query PaymentsByStatus(
    $status: PaymentStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        amount
        status
        method
        transactionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
      id
      userId
      firstName
      lastName
      phoneNumber
      email
      avatar
      licenseNumber
      licenseExpiry
      vehicleMake
      vehicleModel
      vehicleYear
      vehicleColor
      vehicleLicensePlate
      active
      currentLocationLat
      currentLocationLng
      lastLocationUpdateTime
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        firstName
        lastName
        phoneNumber
        email
        avatar
        licenseNumber
        licenseExpiry
        vehicleMake
        vehicleModel
        vehicleYear
        vehicleColor
        vehicleLicensePlate
        active
        currentLocationLat
        currentLocationLng
        lastLocationUpdateTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const driversByUserId = /* GraphQL */ `
  query DriversByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    driversByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        firstName
        lastName
        phoneNumber
        email
        avatar
        licenseNumber
        licenseExpiry
        vehicleMake
        vehicleModel
        vehicleYear
        vehicleColor
        vehicleLicensePlate
        active
        currentLocationLat
        currentLocationLng
        lastLocationUpdateTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDelivery = /* GraphQL */ `
  query GetDelivery($id: ID!) {
    getDelivery(id: $id) {
      id
      orderId
      userId
      driverId
      status
      pickupLocationLat
      pickupLocationLng
      pickupAddress
      dropoffLocationLat
      dropoffLocationLng
      dropoffAddress
      pickupTime
      deliveryTime
      estimatedDeliveryTime
      actualDeliveryTime
      deliveryRouteId
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDeliveries = /* GraphQL */ `
  query ListDeliveries(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveriesByOrderId = /* GraphQL */ `
  query DeliveriesByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveriesByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveriesByUserId = /* GraphQL */ `
  query DeliveriesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveriesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveriesByDriverId = /* GraphQL */ `
  query DeliveriesByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveriesByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveriesByStatus = /* GraphQL */ `
  query DeliveriesByStatus(
    $status: DeliveryStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveriesByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveriesByDeliveryRouteId = /* GraphQL */ `
  query DeliveriesByDeliveryRouteId(
    $deliveryRouteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveriesByDeliveryRouteId(
      deliveryRouteId: $deliveryRouteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        driverId
        status
        pickupLocationLat
        pickupLocationLng
        pickupAddress
        dropoffLocationLat
        dropoffLocationLng
        dropoffAddress
        pickupTime
        deliveryTime
        estimatedDeliveryTime
        actualDeliveryTime
        deliveryRouteId
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDeliveryRoute = /* GraphQL */ `
  query GetDeliveryRoute($id: ID!) {
    getDeliveryRoute(id: $id) {
      id
      driverId
      startTime
      endTime
      estimatedDuration
      actualDuration
      estimatedDistance
      actualDistance
      startLocationLat
      startLocationLng
      endLocationLat
      endLocationLng
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDeliveryRoutes = /* GraphQL */ `
  query ListDeliveryRoutes(
    $filter: ModelDeliveryRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveryRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driverId
        startTime
        endTime
        estimatedDuration
        actualDuration
        estimatedDistance
        actualDistance
        startLocationLat
        startLocationLng
        endLocationLat
        endLocationLng
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveryRoutesByDriverId = /* GraphQL */ `
  query DeliveryRoutesByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveryRoutesByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        startTime
        endTime
        estimatedDuration
        actualDuration
        estimatedDistance
        actualDistance
        startLocationLat
        startLocationLng
        endLocationLat
        endLocationLng
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDeliveryRating = /* GraphQL */ `
  query GetDeliveryRating($id: ID!) {
    getDeliveryRating(id: $id) {
      id
      deliveryId
      userId
      driverId
      rating
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDeliveryRatings = /* GraphQL */ `
  query ListDeliveryRatings(
    $filter: ModelDeliveryRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveryRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deliveryId
        userId
        driverId
        rating
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveryRatingsByDeliveryId = /* GraphQL */ `
  query DeliveryRatingsByDeliveryId(
    $deliveryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveryRatingsByDeliveryId(
      deliveryId: $deliveryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        deliveryId
        userId
        driverId
        rating
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveryRatingsByUserId = /* GraphQL */ `
  query DeliveryRatingsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveryRatingsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        deliveryId
        userId
        driverId
        rating
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const deliveryRatingsByDriverId = /* GraphQL */ `
  query DeliveryRatingsByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliveryRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deliveryRatingsByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        deliveryId
        userId
        driverId
        rating
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDriverLocation = /* GraphQL */ `
  query GetDriverLocation($id: ID!) {
    getDriverLocation(id: $id) {
      id
      driverId
      lat
      lng
      heading
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDriverLocations = /* GraphQL */ `
  query ListDriverLocations(
    $filter: ModelDriverLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driverId
        lat
        lng
        heading
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const driverLocationsByDriverId = /* GraphQL */ `
  query DriverLocationsByDriverId(
    $driverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDriverLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    driverLocationsByDriverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        driverId
        lat
        lng
        heading
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
