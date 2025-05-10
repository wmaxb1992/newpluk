/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createUserPreferences = /* GraphQL */ `
  mutation CreateUserPreferences(
    $input: CreateUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    createUserPreferences(input: $input, condition: $condition) {
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
export const updateUserPreferences = /* GraphQL */ `
  mutation UpdateUserPreferences(
    $input: UpdateUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    updateUserPreferences(input: $input, condition: $condition) {
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
export const deleteUserPreferences = /* GraphQL */ `
  mutation DeleteUserPreferences(
    $input: DeleteUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    deleteUserPreferences(input: $input, condition: $condition) {
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
export const createShoppingList = /* GraphQL */ `
  mutation CreateShoppingList(
    $input: CreateShoppingListInput!
    $condition: ModelShoppingListConditionInput
  ) {
    createShoppingList(input: $input, condition: $condition) {
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
export const updateShoppingList = /* GraphQL */ `
  mutation UpdateShoppingList(
    $input: UpdateShoppingListInput!
    $condition: ModelShoppingListConditionInput
  ) {
    updateShoppingList(input: $input, condition: $condition) {
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
export const deleteShoppingList = /* GraphQL */ `
  mutation DeleteShoppingList(
    $input: DeleteShoppingListInput!
    $condition: ModelShoppingListConditionInput
  ) {
    deleteShoppingList(input: $input, condition: $condition) {
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
export const createShoppingListItem = /* GraphQL */ `
  mutation CreateShoppingListItem(
    $input: CreateShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    createShoppingListItem(input: $input, condition: $condition) {
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
export const updateShoppingListItem = /* GraphQL */ `
  mutation UpdateShoppingListItem(
    $input: UpdateShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    updateShoppingListItem(input: $input, condition: $condition) {
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
export const deleteShoppingListItem = /* GraphQL */ `
  mutation DeleteShoppingListItem(
    $input: DeleteShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    deleteShoppingListItem(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createFarm = /* GraphQL */ `
  mutation CreateFarm(
    $input: CreateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    createFarm(input: $input, condition: $condition) {
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
export const updateFarm = /* GraphQL */ `
  mutation UpdateFarm(
    $input: UpdateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = /* GraphQL */ `
  mutation DeleteFarm(
    $input: DeleteFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    deleteFarm(input: $input, condition: $condition) {
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
export const createZone = /* GraphQL */ `
  mutation CreateZone(
    $input: CreateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    createZone(input: $input, condition: $condition) {
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
export const updateZone = /* GraphQL */ `
  mutation UpdateZone(
    $input: UpdateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    updateZone(input: $input, condition: $condition) {
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
export const deleteZone = /* GraphQL */ `
  mutation DeleteZone(
    $input: DeleteZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    deleteZone(input: $input, condition: $condition) {
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
export const createMarketSchedule = /* GraphQL */ `
  mutation CreateMarketSchedule(
    $input: CreateMarketScheduleInput!
    $condition: ModelMarketScheduleConditionInput
  ) {
    createMarketSchedule(input: $input, condition: $condition) {
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
export const updateMarketSchedule = /* GraphQL */ `
  mutation UpdateMarketSchedule(
    $input: UpdateMarketScheduleInput!
    $condition: ModelMarketScheduleConditionInput
  ) {
    updateMarketSchedule(input: $input, condition: $condition) {
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
export const deleteMarketSchedule = /* GraphQL */ `
  mutation DeleteMarketSchedule(
    $input: DeleteMarketScheduleInput!
    $condition: ModelMarketScheduleConditionInput
  ) {
    deleteMarketSchedule(input: $input, condition: $condition) {
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
export const createFarmMetrics = /* GraphQL */ `
  mutation CreateFarmMetrics(
    $input: CreateFarmMetricsInput!
    $condition: ModelFarmMetricsConditionInput
  ) {
    createFarmMetrics(input: $input, condition: $condition) {
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
export const updateFarmMetrics = /* GraphQL */ `
  mutation UpdateFarmMetrics(
    $input: UpdateFarmMetricsInput!
    $condition: ModelFarmMetricsConditionInput
  ) {
    updateFarmMetrics(input: $input, condition: $condition) {
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
export const deleteFarmMetrics = /* GraphQL */ `
  mutation DeleteFarmMetrics(
    $input: DeleteFarmMetricsInput!
    $condition: ModelFarmMetricsConditionInput
  ) {
    deleteFarmMetrics(input: $input, condition: $condition) {
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
export const createProduceCategory = /* GraphQL */ `
  mutation CreateProduceCategory(
    $input: CreateProduceCategoryInput!
    $condition: ModelProduceCategoryConditionInput
  ) {
    createProduceCategory(input: $input, condition: $condition) {
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
export const updateProduceCategory = /* GraphQL */ `
  mutation UpdateProduceCategory(
    $input: UpdateProduceCategoryInput!
    $condition: ModelProduceCategoryConditionInput
  ) {
    updateProduceCategory(input: $input, condition: $condition) {
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
export const deleteProduceCategory = /* GraphQL */ `
  mutation DeleteProduceCategory(
    $input: DeleteProduceCategoryInput!
    $condition: ModelProduceCategoryConditionInput
  ) {
    deleteProduceCategory(input: $input, condition: $condition) {
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
export const createProduceSubcategory = /* GraphQL */ `
  mutation CreateProduceSubcategory(
    $input: CreateProduceSubcategoryInput!
    $condition: ModelProduceSubcategoryConditionInput
  ) {
    createProduceSubcategory(input: $input, condition: $condition) {
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
export const updateProduceSubcategory = /* GraphQL */ `
  mutation UpdateProduceSubcategory(
    $input: UpdateProduceSubcategoryInput!
    $condition: ModelProduceSubcategoryConditionInput
  ) {
    updateProduceSubcategory(input: $input, condition: $condition) {
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
export const deleteProduceSubcategory = /* GraphQL */ `
  mutation DeleteProduceSubcategory(
    $input: DeleteProduceSubcategoryInput!
    $condition: ModelProduceSubcategoryConditionInput
  ) {
    deleteProduceSubcategory(input: $input, condition: $condition) {
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
export const createProduceType = /* GraphQL */ `
  mutation CreateProduceType(
    $input: CreateProduceTypeInput!
    $condition: ModelProduceTypeConditionInput
  ) {
    createProduceType(input: $input, condition: $condition) {
      id
      subcategoryId
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
export const updateProduceType = /* GraphQL */ `
  mutation UpdateProduceType(
    $input: UpdateProduceTypeInput!
    $condition: ModelProduceTypeConditionInput
  ) {
    updateProduceType(input: $input, condition: $condition) {
      id
      subcategoryId
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
export const deleteProduceType = /* GraphQL */ `
  mutation DeleteProduceType(
    $input: DeleteProduceTypeInput!
    $condition: ModelProduceTypeConditionInput
  ) {
    deleteProduceType(input: $input, condition: $condition) {
      id
      subcategoryId
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
export const createProduceVariety = /* GraphQL */ `
  mutation CreateProduceVariety(
    $input: CreateProduceVarietyInput!
    $condition: ModelProduceVarietyConditionInput
  ) {
    createProduceVariety(input: $input, condition: $condition) {
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
export const updateProduceVariety = /* GraphQL */ `
  mutation UpdateProduceVariety(
    $input: UpdateProduceVarietyInput!
    $condition: ModelProduceVarietyConditionInput
  ) {
    updateProduceVariety(input: $input, condition: $condition) {
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
export const deleteProduceVariety = /* GraphQL */ `
  mutation DeleteProduceVariety(
    $input: DeleteProduceVarietyInput!
    $condition: ModelProduceVarietyConditionInput
  ) {
    deleteProduceVariety(input: $input, condition: $condition) {
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
export const createProduceNutrient = /* GraphQL */ `
  mutation CreateProduceNutrient(
    $input: CreateProduceNutrientInput!
    $condition: ModelProduceNutrientConditionInput
  ) {
    createProduceNutrient(input: $input, condition: $condition) {
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
export const updateProduceNutrient = /* GraphQL */ `
  mutation UpdateProduceNutrient(
    $input: UpdateProduceNutrientInput!
    $condition: ModelProduceNutrientConditionInput
  ) {
    updateProduceNutrient(input: $input, condition: $condition) {
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
export const deleteProduceNutrient = /* GraphQL */ `
  mutation DeleteProduceNutrient(
    $input: DeleteProduceNutrientInput!
    $condition: ModelProduceNutrientConditionInput
  ) {
    deleteProduceNutrient(input: $input, condition: $condition) {
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
export const createInventoryBatch = /* GraphQL */ `
  mutation CreateInventoryBatch(
    $input: CreateInventoryBatchInput!
    $condition: ModelInventoryBatchConditionInput
  ) {
    createInventoryBatch(input: $input, condition: $condition) {
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
export const updateInventoryBatch = /* GraphQL */ `
  mutation UpdateInventoryBatch(
    $input: UpdateInventoryBatchInput!
    $condition: ModelInventoryBatchConditionInput
  ) {
    updateInventoryBatch(input: $input, condition: $condition) {
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
export const deleteInventoryBatch = /* GraphQL */ `
  mutation DeleteInventoryBatch(
    $input: DeleteInventoryBatchInput!
    $condition: ModelInventoryBatchConditionInput
  ) {
    deleteInventoryBatch(input: $input, condition: $condition) {
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
export const createPreHarvestListing = /* GraphQL */ `
  mutation CreatePreHarvestListing(
    $input: CreatePreHarvestListingInput!
    $condition: ModelPreHarvestListingConditionInput
  ) {
    createPreHarvestListing(input: $input, condition: $condition) {
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
export const updatePreHarvestListing = /* GraphQL */ `
  mutation UpdatePreHarvestListing(
    $input: UpdatePreHarvestListingInput!
    $condition: ModelPreHarvestListingConditionInput
  ) {
    updatePreHarvestListing(input: $input, condition: $condition) {
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
export const deletePreHarvestListing = /* GraphQL */ `
  mutation DeletePreHarvestListing(
    $input: DeletePreHarvestListingInput!
    $condition: ModelPreHarvestListingConditionInput
  ) {
    deletePreHarvestListing(input: $input, condition: $condition) {
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
export const createPreHarvestReservation = /* GraphQL */ `
  mutation CreatePreHarvestReservation(
    $input: CreatePreHarvestReservationInput!
    $condition: ModelPreHarvestReservationConditionInput
  ) {
    createPreHarvestReservation(input: $input, condition: $condition) {
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
export const updatePreHarvestReservation = /* GraphQL */ `
  mutation UpdatePreHarvestReservation(
    $input: UpdatePreHarvestReservationInput!
    $condition: ModelPreHarvestReservationConditionInput
  ) {
    updatePreHarvestReservation(input: $input, condition: $condition) {
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
export const deletePreHarvestReservation = /* GraphQL */ `
  mutation DeletePreHarvestReservation(
    $input: DeletePreHarvestReservationInput!
    $condition: ModelPreHarvestReservationConditionInput
  ) {
    deletePreHarvestReservation(input: $input, condition: $condition) {
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
export const createFarmPost = /* GraphQL */ `
  mutation CreateFarmPost(
    $input: CreateFarmPostInput!
    $condition: ModelFarmPostConditionInput
  ) {
    createFarmPost(input: $input, condition: $condition) {
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
export const updateFarmPost = /* GraphQL */ `
  mutation UpdateFarmPost(
    $input: UpdateFarmPostInput!
    $condition: ModelFarmPostConditionInput
  ) {
    updateFarmPost(input: $input, condition: $condition) {
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
export const deleteFarmPost = /* GraphQL */ `
  mutation DeleteFarmPost(
    $input: DeleteFarmPostInput!
    $condition: ModelFarmPostConditionInput
  ) {
    deleteFarmPost(input: $input, condition: $condition) {
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
export const createPostComment = /* GraphQL */ `
  mutation CreatePostComment(
    $input: CreatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    createPostComment(input: $input, condition: $condition) {
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
export const updatePostComment = /* GraphQL */ `
  mutation UpdatePostComment(
    $input: UpdatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    updatePostComment(input: $input, condition: $condition) {
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
export const deletePostComment = /* GraphQL */ `
  mutation DeletePostComment(
    $input: DeletePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    deletePostComment(input: $input, condition: $condition) {
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
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
      id
      farmPostId
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFarmFollow = /* GraphQL */ `
  mutation CreateFarmFollow(
    $input: CreateFarmFollowInput!
    $condition: ModelFarmFollowConditionInput
  ) {
    createFarmFollow(input: $input, condition: $condition) {
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
export const updateFarmFollow = /* GraphQL */ `
  mutation UpdateFarmFollow(
    $input: UpdateFarmFollowInput!
    $condition: ModelFarmFollowConditionInput
  ) {
    updateFarmFollow(input: $input, condition: $condition) {
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
export const deleteFarmFollow = /* GraphQL */ `
  mutation DeleteFarmFollow(
    $input: DeleteFarmFollowInput!
    $condition: ModelFarmFollowConditionInput
  ) {
    deleteFarmFollow(input: $input, condition: $condition) {
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
export const createProduceListing = /* GraphQL */ `
  mutation CreateProduceListing(
    $input: CreateProduceListingInput!
    $condition: ModelProduceListingConditionInput
  ) {
    createProduceListing(input: $input, condition: $condition) {
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
export const updateProduceListing = /* GraphQL */ `
  mutation UpdateProduceListing(
    $input: UpdateProduceListingInput!
    $condition: ModelProduceListingConditionInput
  ) {
    updateProduceListing(input: $input, condition: $condition) {
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
export const deleteProduceListing = /* GraphQL */ `
  mutation DeleteProduceListing(
    $input: DeleteProduceListingInput!
    $condition: ModelProduceListingConditionInput
  ) {
    deleteProduceListing(input: $input, condition: $condition) {
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
export const createListingReview = /* GraphQL */ `
  mutation CreateListingReview(
    $input: CreateListingReviewInput!
    $condition: ModelListingReviewConditionInput
  ) {
    createListingReview(input: $input, condition: $condition) {
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
export const updateListingReview = /* GraphQL */ `
  mutation UpdateListingReview(
    $input: UpdateListingReviewInput!
    $condition: ModelListingReviewConditionInput
  ) {
    updateListingReview(input: $input, condition: $condition) {
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
export const deleteListingReview = /* GraphQL */ `
  mutation DeleteListingReview(
    $input: DeleteListingReviewInput!
    $condition: ModelListingReviewConditionInput
  ) {
    deleteListingReview(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createDelivery = /* GraphQL */ `
  mutation CreateDelivery(
    $input: CreateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    createDelivery(input: $input, condition: $condition) {
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
export const updateDelivery = /* GraphQL */ `
  mutation UpdateDelivery(
    $input: UpdateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    updateDelivery(input: $input, condition: $condition) {
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
export const deleteDelivery = /* GraphQL */ `
  mutation DeleteDelivery(
    $input: DeleteDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    deleteDelivery(input: $input, condition: $condition) {
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
export const createDeliveryRoute = /* GraphQL */ `
  mutation CreateDeliveryRoute(
    $input: CreateDeliveryRouteInput!
    $condition: ModelDeliveryRouteConditionInput
  ) {
    createDeliveryRoute(input: $input, condition: $condition) {
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
export const updateDeliveryRoute = /* GraphQL */ `
  mutation UpdateDeliveryRoute(
    $input: UpdateDeliveryRouteInput!
    $condition: ModelDeliveryRouteConditionInput
  ) {
    updateDeliveryRoute(input: $input, condition: $condition) {
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
export const deleteDeliveryRoute = /* GraphQL */ `
  mutation DeleteDeliveryRoute(
    $input: DeleteDeliveryRouteInput!
    $condition: ModelDeliveryRouteConditionInput
  ) {
    deleteDeliveryRoute(input: $input, condition: $condition) {
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
export const createDeliveryRating = /* GraphQL */ `
  mutation CreateDeliveryRating(
    $input: CreateDeliveryRatingInput!
    $condition: ModelDeliveryRatingConditionInput
  ) {
    createDeliveryRating(input: $input, condition: $condition) {
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
export const updateDeliveryRating = /* GraphQL */ `
  mutation UpdateDeliveryRating(
    $input: UpdateDeliveryRatingInput!
    $condition: ModelDeliveryRatingConditionInput
  ) {
    updateDeliveryRating(input: $input, condition: $condition) {
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
export const deleteDeliveryRating = /* GraphQL */ `
  mutation DeleteDeliveryRating(
    $input: DeleteDeliveryRatingInput!
    $condition: ModelDeliveryRatingConditionInput
  ) {
    deleteDeliveryRating(input: $input, condition: $condition) {
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
export const createDriverLocation = /* GraphQL */ `
  mutation CreateDriverLocation(
    $input: CreateDriverLocationInput!
    $condition: ModelDriverLocationConditionInput
  ) {
    createDriverLocation(input: $input, condition: $condition) {
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
export const updateDriverLocation = /* GraphQL */ `
  mutation UpdateDriverLocation(
    $input: UpdateDriverLocationInput!
    $condition: ModelDriverLocationConditionInput
  ) {
    updateDriverLocation(input: $input, condition: $condition) {
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
export const deleteDriverLocation = /* GraphQL */ `
  mutation DeleteDriverLocation(
    $input: DeleteDriverLocationInput!
    $condition: ModelDriverLocationConditionInput
  ) {
    deleteDriverLocation(input: $input, condition: $condition) {
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
