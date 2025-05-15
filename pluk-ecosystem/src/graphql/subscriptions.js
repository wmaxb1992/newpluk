/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $userId: String
  ) {
    onCreateAddress(filter: $filter, userId: $userId) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $userId: String
  ) {
    onUpdateAddress(filter: $filter, userId: $userId) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $userId: String
  ) {
    onDeleteAddress(filter: $filter, userId: $userId) {
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
export const onCreateUserPreferences = /* GraphQL */ `
  subscription OnCreateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $userId: String
  ) {
    onCreateUserPreferences(filter: $filter, userId: $userId) {
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
export const onUpdateUserPreferences = /* GraphQL */ `
  subscription OnUpdateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $userId: String
  ) {
    onUpdateUserPreferences(filter: $filter, userId: $userId) {
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
export const onDeleteUserPreferences = /* GraphQL */ `
  subscription OnDeleteUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $userId: String
  ) {
    onDeleteUserPreferences(filter: $filter, userId: $userId) {
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
export const onCreateShoppingList = /* GraphQL */ `
  subscription OnCreateShoppingList(
    $filter: ModelSubscriptionShoppingListFilterInput
    $userId: String
  ) {
    onCreateShoppingList(filter: $filter, userId: $userId) {
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
export const onUpdateShoppingList = /* GraphQL */ `
  subscription OnUpdateShoppingList(
    $filter: ModelSubscriptionShoppingListFilterInput
    $userId: String
  ) {
    onUpdateShoppingList(filter: $filter, userId: $userId) {
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
export const onDeleteShoppingList = /* GraphQL */ `
  subscription OnDeleteShoppingList(
    $filter: ModelSubscriptionShoppingListFilterInput
    $userId: String
  ) {
    onDeleteShoppingList(filter: $filter, userId: $userId) {
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
export const onCreateShoppingListItem = /* GraphQL */ `
  subscription OnCreateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $userId: String
  ) {
    onCreateShoppingListItem(filter: $filter, userId: $userId) {
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
export const onUpdateShoppingListItem = /* GraphQL */ `
  subscription OnUpdateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $userId: String
  ) {
    onUpdateShoppingListItem(filter: $filter, userId: $userId) {
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
export const onDeleteShoppingListItem = /* GraphQL */ `
  subscription OnDeleteShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $userId: String
  ) {
    onDeleteShoppingListItem(filter: $filter, userId: $userId) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $userId: String
  ) {
    onCreateNotification(filter: $filter, userId: $userId) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $userId: String
  ) {
    onUpdateNotification(filter: $filter, userId: $userId) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $userId: String
  ) {
    onDeleteNotification(filter: $filter, userId: $userId) {
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
export const onCreateFarm = /* GraphQL */ `
  subscription OnCreateFarm(
    $filter: ModelSubscriptionFarmFilterInput
    $ownerId: String
  ) {
    onCreateFarm(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateFarm = /* GraphQL */ `
  subscription OnUpdateFarm(
    $filter: ModelSubscriptionFarmFilterInput
    $ownerId: String
  ) {
    onUpdateFarm(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteFarm = /* GraphQL */ `
  subscription OnDeleteFarm(
    $filter: ModelSubscriptionFarmFilterInput
    $ownerId: String
  ) {
    onDeleteFarm(filter: $filter, ownerId: $ownerId) {
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
export const onCreateZone = /* GraphQL */ `
  subscription OnCreateZone(
    $filter: ModelSubscriptionZoneFilterInput
    $farmOwnerId: String
  ) {
    onCreateZone(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateZone = /* GraphQL */ `
  subscription OnUpdateZone(
    $filter: ModelSubscriptionZoneFilterInput
    $farmOwnerId: String
  ) {
    onUpdateZone(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteZone = /* GraphQL */ `
  subscription OnDeleteZone(
    $filter: ModelSubscriptionZoneFilterInput
    $farmOwnerId: String
  ) {
    onDeleteZone(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreateMarketSchedule = /* GraphQL */ `
  subscription OnCreateMarketSchedule(
    $filter: ModelSubscriptionMarketScheduleFilterInput
    $farmOwnerId: String
  ) {
    onCreateMarketSchedule(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateMarketSchedule = /* GraphQL */ `
  subscription OnUpdateMarketSchedule(
    $filter: ModelSubscriptionMarketScheduleFilterInput
    $farmOwnerId: String
  ) {
    onUpdateMarketSchedule(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteMarketSchedule = /* GraphQL */ `
  subscription OnDeleteMarketSchedule(
    $filter: ModelSubscriptionMarketScheduleFilterInput
    $farmOwnerId: String
  ) {
    onDeleteMarketSchedule(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreateFarmMetrics = /* GraphQL */ `
  subscription OnCreateFarmMetrics(
    $filter: ModelSubscriptionFarmMetricsFilterInput
    $farmOwnerId: String
  ) {
    onCreateFarmMetrics(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateFarmMetrics = /* GraphQL */ `
  subscription OnUpdateFarmMetrics(
    $filter: ModelSubscriptionFarmMetricsFilterInput
    $farmOwnerId: String
  ) {
    onUpdateFarmMetrics(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteFarmMetrics = /* GraphQL */ `
  subscription OnDeleteFarmMetrics(
    $filter: ModelSubscriptionFarmMetricsFilterInput
    $farmOwnerId: String
  ) {
    onDeleteFarmMetrics(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreateProduceCategory = /* GraphQL */ `
  subscription OnCreateProduceCategory(
    $filter: ModelSubscriptionProduceCategoryFilterInput
  ) {
    onCreateProduceCategory(filter: $filter) {
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
export const onUpdateProduceCategory = /* GraphQL */ `
  subscription OnUpdateProduceCategory(
    $filter: ModelSubscriptionProduceCategoryFilterInput
  ) {
    onUpdateProduceCategory(filter: $filter) {
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
export const onDeleteProduceCategory = /* GraphQL */ `
  subscription OnDeleteProduceCategory(
    $filter: ModelSubscriptionProduceCategoryFilterInput
  ) {
    onDeleteProduceCategory(filter: $filter) {
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
export const onCreateProduceSubcategory = /* GraphQL */ `
  subscription OnCreateProduceSubcategory(
    $filter: ModelSubscriptionProduceSubcategoryFilterInput
  ) {
    onCreateProduceSubcategory(filter: $filter) {
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
export const onUpdateProduceSubcategory = /* GraphQL */ `
  subscription OnUpdateProduceSubcategory(
    $filter: ModelSubscriptionProduceSubcategoryFilterInput
  ) {
    onUpdateProduceSubcategory(filter: $filter) {
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
export const onDeleteProduceSubcategory = /* GraphQL */ `
  subscription OnDeleteProduceSubcategory(
    $filter: ModelSubscriptionProduceSubcategoryFilterInput
  ) {
    onDeleteProduceSubcategory(filter: $filter) {
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
export const onCreateProduceType = /* GraphQL */ `
  subscription OnCreateProduceType(
    $filter: ModelSubscriptionProduceTypeFilterInput
  ) {
    onCreateProduceType(filter: $filter) {
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
export const onUpdateProduceType = /* GraphQL */ `
  subscription OnUpdateProduceType(
    $filter: ModelSubscriptionProduceTypeFilterInput
  ) {
    onUpdateProduceType(filter: $filter) {
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
export const onDeleteProduceType = /* GraphQL */ `
  subscription OnDeleteProduceType(
    $filter: ModelSubscriptionProduceTypeFilterInput
  ) {
    onDeleteProduceType(filter: $filter) {
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
export const onCreateProduceVariety = /* GraphQL */ `
  subscription OnCreateProduceVariety(
    $filter: ModelSubscriptionProduceVarietyFilterInput
  ) {
    onCreateProduceVariety(filter: $filter) {
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
export const onUpdateProduceVariety = /* GraphQL */ `
  subscription OnUpdateProduceVariety(
    $filter: ModelSubscriptionProduceVarietyFilterInput
  ) {
    onUpdateProduceVariety(filter: $filter) {
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
export const onDeleteProduceVariety = /* GraphQL */ `
  subscription OnDeleteProduceVariety(
    $filter: ModelSubscriptionProduceVarietyFilterInput
  ) {
    onDeleteProduceVariety(filter: $filter) {
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
export const onCreateProduceNutrient = /* GraphQL */ `
  subscription OnCreateProduceNutrient(
    $filter: ModelSubscriptionProduceNutrientFilterInput
  ) {
    onCreateProduceNutrient(filter: $filter) {
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
export const onUpdateProduceNutrient = /* GraphQL */ `
  subscription OnUpdateProduceNutrient(
    $filter: ModelSubscriptionProduceNutrientFilterInput
  ) {
    onUpdateProduceNutrient(filter: $filter) {
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
export const onDeleteProduceNutrient = /* GraphQL */ `
  subscription OnDeleteProduceNutrient(
    $filter: ModelSubscriptionProduceNutrientFilterInput
  ) {
    onDeleteProduceNutrient(filter: $filter) {
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
export const onCreateInventoryBatch = /* GraphQL */ `
  subscription OnCreateInventoryBatch(
    $filter: ModelSubscriptionInventoryBatchFilterInput
    $farmOwnerId: String
  ) {
    onCreateInventoryBatch(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateInventoryBatch = /* GraphQL */ `
  subscription OnUpdateInventoryBatch(
    $filter: ModelSubscriptionInventoryBatchFilterInput
    $farmOwnerId: String
  ) {
    onUpdateInventoryBatch(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteInventoryBatch = /* GraphQL */ `
  subscription OnDeleteInventoryBatch(
    $filter: ModelSubscriptionInventoryBatchFilterInput
    $farmOwnerId: String
  ) {
    onDeleteInventoryBatch(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreatePreHarvestListing = /* GraphQL */ `
  subscription OnCreatePreHarvestListing(
    $filter: ModelSubscriptionPreHarvestListingFilterInput
    $farmOwnerId: String
  ) {
    onCreatePreHarvestListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdatePreHarvestListing = /* GraphQL */ `
  subscription OnUpdatePreHarvestListing(
    $filter: ModelSubscriptionPreHarvestListingFilterInput
    $farmOwnerId: String
  ) {
    onUpdatePreHarvestListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeletePreHarvestListing = /* GraphQL */ `
  subscription OnDeletePreHarvestListing(
    $filter: ModelSubscriptionPreHarvestListingFilterInput
    $farmOwnerId: String
  ) {
    onDeletePreHarvestListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreatePreHarvestReservation = /* GraphQL */ `
  subscription OnCreatePreHarvestReservation(
    $filter: ModelSubscriptionPreHarvestReservationFilterInput
    $userId: String
  ) {
    onCreatePreHarvestReservation(filter: $filter, userId: $userId) {
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
export const onUpdatePreHarvestReservation = /* GraphQL */ `
  subscription OnUpdatePreHarvestReservation(
    $filter: ModelSubscriptionPreHarvestReservationFilterInput
    $userId: String
  ) {
    onUpdatePreHarvestReservation(filter: $filter, userId: $userId) {
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
export const onDeletePreHarvestReservation = /* GraphQL */ `
  subscription OnDeletePreHarvestReservation(
    $filter: ModelSubscriptionPreHarvestReservationFilterInput
    $userId: String
  ) {
    onDeletePreHarvestReservation(filter: $filter, userId: $userId) {
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
export const onCreateFarmPost = /* GraphQL */ `
  subscription OnCreateFarmPost(
    $filter: ModelSubscriptionFarmPostFilterInput
    $farmOwnerId: String
  ) {
    onCreateFarmPost(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateFarmPost = /* GraphQL */ `
  subscription OnUpdateFarmPost(
    $filter: ModelSubscriptionFarmPostFilterInput
    $farmOwnerId: String
  ) {
    onUpdateFarmPost(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteFarmPost = /* GraphQL */ `
  subscription OnDeleteFarmPost(
    $filter: ModelSubscriptionFarmPostFilterInput
    $farmOwnerId: String
  ) {
    onDeleteFarmPost(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreatePostComment = /* GraphQL */ `
  subscription OnCreatePostComment(
    $filter: ModelSubscriptionPostCommentFilterInput
    $userId: String
  ) {
    onCreatePostComment(filter: $filter, userId: $userId) {
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
export const onUpdatePostComment = /* GraphQL */ `
  subscription OnUpdatePostComment(
    $filter: ModelSubscriptionPostCommentFilterInput
    $userId: String
  ) {
    onUpdatePostComment(filter: $filter, userId: $userId) {
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
export const onDeletePostComment = /* GraphQL */ `
  subscription OnDeletePostComment(
    $filter: ModelSubscriptionPostCommentFilterInput
    $userId: String
  ) {
    onDeletePostComment(filter: $filter, userId: $userId) {
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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike(
    $filter: ModelSubscriptionPostLikeFilterInput
    $userId: String
  ) {
    onCreatePostLike(filter: $filter, userId: $userId) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike(
    $filter: ModelSubscriptionPostLikeFilterInput
    $userId: String
  ) {
    onUpdatePostLike(filter: $filter, userId: $userId) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike(
    $filter: ModelSubscriptionPostLikeFilterInput
    $userId: String
  ) {
    onDeletePostLike(filter: $filter, userId: $userId) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFarmFollow = /* GraphQL */ `
  subscription OnCreateFarmFollow(
    $filter: ModelSubscriptionFarmFollowFilterInput
    $userId: String
  ) {
    onCreateFarmFollow(filter: $filter, userId: $userId) {
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
export const onUpdateFarmFollow = /* GraphQL */ `
  subscription OnUpdateFarmFollow(
    $filter: ModelSubscriptionFarmFollowFilterInput
    $userId: String
  ) {
    onUpdateFarmFollow(filter: $filter, userId: $userId) {
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
export const onDeleteFarmFollow = /* GraphQL */ `
  subscription OnDeleteFarmFollow(
    $filter: ModelSubscriptionFarmFollowFilterInput
    $userId: String
  ) {
    onDeleteFarmFollow(filter: $filter, userId: $userId) {
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
export const onCreateProduceListing = /* GraphQL */ `
  subscription OnCreateProduceListing(
    $filter: ModelSubscriptionProduceListingFilterInput
    $farmOwnerId: String
  ) {
    onCreateProduceListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onUpdateProduceListing = /* GraphQL */ `
  subscription OnUpdateProduceListing(
    $filter: ModelSubscriptionProduceListingFilterInput
    $farmOwnerId: String
  ) {
    onUpdateProduceListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onDeleteProduceListing = /* GraphQL */ `
  subscription OnDeleteProduceListing(
    $filter: ModelSubscriptionProduceListingFilterInput
    $farmOwnerId: String
  ) {
    onDeleteProduceListing(filter: $filter, farmOwnerId: $farmOwnerId) {
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
export const onCreateListingReview = /* GraphQL */ `
  subscription OnCreateListingReview(
    $filter: ModelSubscriptionListingReviewFilterInput
    $userId: String
  ) {
    onCreateListingReview(filter: $filter, userId: $userId) {
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
export const onUpdateListingReview = /* GraphQL */ `
  subscription OnUpdateListingReview(
    $filter: ModelSubscriptionListingReviewFilterInput
    $userId: String
  ) {
    onUpdateListingReview(filter: $filter, userId: $userId) {
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
export const onDeleteListingReview = /* GraphQL */ `
  subscription OnDeleteListingReview(
    $filter: ModelSubscriptionListingReviewFilterInput
    $userId: String
  ) {
    onDeleteListingReview(filter: $filter, userId: $userId) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart(
    $filter: ModelSubscriptionCartFilterInput
    $userId: String
  ) {
    onCreateCart(filter: $filter, userId: $userId) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart(
    $filter: ModelSubscriptionCartFilterInput
    $userId: String
  ) {
    onUpdateCart(filter: $filter, userId: $userId) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart(
    $filter: ModelSubscriptionCartFilterInput
    $userId: String
  ) {
    onDeleteCart(filter: $filter, userId: $userId) {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $userId: String
  ) {
    onCreateCartItem(filter: $filter, userId: $userId) {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $userId: String
  ) {
    onUpdateCartItem(filter: $filter, userId: $userId) {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $userId: String
  ) {
    onDeleteCartItem(filter: $filter, userId: $userId) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $userId: String
  ) {
    onCreateOrder(filter: $filter, userId: $userId) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $userId: String
  ) {
    onUpdateOrder(filter: $filter, userId: $userId) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $userId: String
  ) {
    onDeleteOrder(filter: $filter, userId: $userId) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $userId: String
  ) {
    onCreateOrderItem(filter: $filter, userId: $userId) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $userId: String
  ) {
    onUpdateOrderItem(filter: $filter, userId: $userId) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $userId: String
  ) {
    onDeleteOrderItem(filter: $filter, userId: $userId) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $userId: String
  ) {
    onCreatePayment(filter: $filter, userId: $userId) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $userId: String
  ) {
    onUpdatePayment(filter: $filter, userId: $userId) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $userId: String
  ) {
    onDeletePayment(filter: $filter, userId: $userId) {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $userId: String
  ) {
    onCreateDriver(filter: $filter, userId: $userId) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $userId: String
  ) {
    onUpdateDriver(filter: $filter, userId: $userId) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $userId: String
  ) {
    onDeleteDriver(filter: $filter, userId: $userId) {
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
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery(
    $filter: ModelSubscriptionDeliveryFilterInput
    $userId: String
  ) {
    onCreateDelivery(filter: $filter, userId: $userId) {
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
export const onUpdateDelivery = /* GraphQL */ `
  subscription OnUpdateDelivery(
    $filter: ModelSubscriptionDeliveryFilterInput
    $userId: String
  ) {
    onUpdateDelivery(filter: $filter, userId: $userId) {
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
export const onDeleteDelivery = /* GraphQL */ `
  subscription OnDeleteDelivery(
    $filter: ModelSubscriptionDeliveryFilterInput
    $userId: String
  ) {
    onDeleteDelivery(filter: $filter, userId: $userId) {
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
export const onCreateDeliveryRoute = /* GraphQL */ `
  subscription OnCreateDeliveryRoute(
    $filter: ModelSubscriptionDeliveryRouteFilterInput
    $driverId: String
  ) {
    onCreateDeliveryRoute(filter: $filter, driverId: $driverId) {
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
export const onUpdateDeliveryRoute = /* GraphQL */ `
  subscription OnUpdateDeliveryRoute(
    $filter: ModelSubscriptionDeliveryRouteFilterInput
    $driverId: String
  ) {
    onUpdateDeliveryRoute(filter: $filter, driverId: $driverId) {
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
export const onDeleteDeliveryRoute = /* GraphQL */ `
  subscription OnDeleteDeliveryRoute(
    $filter: ModelSubscriptionDeliveryRouteFilterInput
    $driverId: String
  ) {
    onDeleteDeliveryRoute(filter: $filter, driverId: $driverId) {
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
export const onCreateDeliveryRating = /* GraphQL */ `
  subscription OnCreateDeliveryRating(
    $filter: ModelSubscriptionDeliveryRatingFilterInput
    $userId: String
  ) {
    onCreateDeliveryRating(filter: $filter, userId: $userId) {
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
export const onUpdateDeliveryRating = /* GraphQL */ `
  subscription OnUpdateDeliveryRating(
    $filter: ModelSubscriptionDeliveryRatingFilterInput
    $userId: String
  ) {
    onUpdateDeliveryRating(filter: $filter, userId: $userId) {
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
export const onDeleteDeliveryRating = /* GraphQL */ `
  subscription OnDeleteDeliveryRating(
    $filter: ModelSubscriptionDeliveryRatingFilterInput
    $userId: String
  ) {
    onDeleteDeliveryRating(filter: $filter, userId: $userId) {
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
export const onCreateDriverLocation = /* GraphQL */ `
  subscription OnCreateDriverLocation(
    $filter: ModelSubscriptionDriverLocationFilterInput
    $driverId: String
  ) {
    onCreateDriverLocation(filter: $filter, driverId: $driverId) {
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
export const onUpdateDriverLocation = /* GraphQL */ `
  subscription OnUpdateDriverLocation(
    $filter: ModelSubscriptionDriverLocationFilterInput
    $driverId: String
  ) {
    onUpdateDriverLocation(filter: $filter, driverId: $driverId) {
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
export const onDeleteDriverLocation = /* GraphQL */ `
  subscription OnDeleteDriverLocation(
    $filter: ModelSubscriptionDriverLocationFilterInput
    $driverId: String
  ) {
    onDeleteDriverLocation(filter: $filter, driverId: $driverId) {
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
