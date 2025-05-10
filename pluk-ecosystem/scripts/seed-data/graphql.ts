// GraphQL mutations for creating data

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      role
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      farmID
      name
      description
      location {
        latitude
        longitude
        address
        city
        state
        postalCode
        country
      }
      owner
      createdAt
      updatedAt
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
      farmID
      dayOfWeek
      startTime
      endTime
      location {
        latitude
        longitude
        address
        city
        state
        postalCode
        country
      }
      notes
      owner
      createdAt
      updatedAt
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
      farmID
      varietyID
      plantingDate
      estimatedHarvestDate
      actualHarvestDate
      expirationDate
      quantity
      unit
      status
      storageConditions
      notes
      owner
      createdAt
      updatedAt
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
      farmID
      varietyID
      inventoryBatchID
      title
      description
      estimatedHarvestDate
      estimatedQuantity
      unit
      pricePerUnit
      organic
      images
      owner
      createdAt
      updatedAt
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
      preHarvestListingID
      userID
      quantity
      unit
      status
      notes
      owner
      createdAt
      updatedAt
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
      farmID
      type
      title
      content
      images
      videos
      preHarvestListingID
      owner
      createdAt
      updatedAt
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
      postID
      userID
      content
      owner
      createdAt
      updatedAt
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
      postID
      userID
      owner
      createdAt
      updatedAt
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
      farmID
      userID
      notificationPreferences
      owner
      createdAt
      updatedAt
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
      farmID
      varietyID
      inventoryBatchID
      title
      description
      pricePerUnit
      unit
      quantityAvailable
      organic
      isInstantlyAvailable
      instantDeliveryFee
      estimatedDeliveryMinutes
      harvestDate
      expirationDate
      images
      freshness
      owner
      createdAt
      updatedAt
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
      listingID
      userID
      rating
      comment
      owner
      createdAt
      updatedAt
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
      userID
      owner
      createdAt
      updatedAt
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
      cartID
      listingID
      quantity
      owner
      createdAt
      updatedAt
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
      userID
      status
      subtotal
      tax
      deliveryFee
      total
      deliveryAddress {
        latitude
        longitude
        address
        city
        state
        postalCode
        country
      }
      deliveryNotes
      owner
      createdAt
      updatedAt
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
      orderID
      listingID
      farmID
      quantity
      pricePerUnit
      subtotal
      owner
      createdAt
      updatedAt
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
      orderID
      amount
      status
      method
      transactionId
      owner
      createdAt
      updatedAt
    }
  }
`;
