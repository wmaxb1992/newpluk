import { faker } from '@faker-js/faker';
import { 
  executeGraphQL, 
  randomPostType, 
  randomBoolean, 
  randomFarmImage,
  randomProduceImage
} from '../utils';
import { 
  createFarmPost, 
  createPostComment, 
  createPostLike, 
  createFarmFollow 
} from '../graphql';
import { seedConfig } from '../config';
import {
  Farm,
  User,
  PreHarvestListing,
  FarmPost,
  PostComment,
  PostLike,
  FarmFollow,
  CreateFarmPostResponse,
  CreatePostCommentResponse,
  CreatePostLikeResponse,
  CreateFarmFollowResponse
} from '../types';

// Generate farm posts
export const generateFarmPosts = async (
  farms: Farm[],
  preHarvestListings: PreHarvestListing[],
  count: number = seedConfig.farmPostCount
) => {
  console.log(`Generating farm posts for ${farms.length} farms...`);
  
  const posts: FarmPost[] = [];
  const preHarvestListingsByFarm: Record<string, PreHarvestListing[]> = preHarvestListings.reduce((acc: Record<string, PreHarvestListing[]>, listing) => {
    if (!acc[listing.farmID]) {
      acc[listing.farmID] = [];
    }
    acc[listing.farmID].push(listing);
    return acc;
  }, {});
  
  for (const farm of farms) {
    // Generate posts for each farm
    for (let i = 0; i < count; i++) {
      const postType = randomPostType();
      
      // For harvest announcements, try to link to a pre-harvest listing
      let preHarvestListingID = null;
      if (postType === 'HARVEST_ANNOUNCEMENT' && 
          preHarvestListingsByFarm[farm.id] && 
          preHarvestListingsByFarm[farm.id].length > 0) {
        const listing: PreHarvestListing = faker.helpers.arrayElement(preHarvestListingsByFarm[farm.id]);
        preHarvestListingID = listing.id;
      }
      
      const postData = {
        farmId: farm.id,
        type: postType,
        title: generatePostTitle(postType),
        content: faker.lorem.paragraphs(2),
        images: [randomFarmImage(), randomProduceImage()],
        videos: randomBoolean(0.3) ? ['https://example.com/farm-video.mp4'] : [],
        preHarvestListingId: preHarvestListingID,
        ownerId: farm.ownerId
      };
      
      try {
        const response = await executeGraphQL<CreateFarmPostResponse>(createFarmPost, {
          input: postData
        });
        
        const post = response.data.createFarmPost;
        posts.push(post);
        console.log(`Created farm post: ${post.title} (${post.id}) for farm ${farm.name}`);
      } catch (error) {
        console.error(`Failed to create farm post for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${posts.length} farm posts`);
  return posts;
};

// Helper function to generate post titles based on post type
const generatePostTitle = (postType: string): string => {
  switch (postType) {
    case 'GENERAL':
      return faker.helpers.arrayElement([
        'Farm update for the week',
        'Meet our team!',
        'Thank you for your support',
        'New equipment on the farm',
        'Weather update from the fields'
      ]);
    case 'GROWING_UPDATE':
      return faker.helpers.arrayElement([
        'Seedlings are sprouting!',
        'Growth progress update',
        'Field rotation this week',
        'New planting underway',
        'Irrigation improvements'
      ]);
    case 'HARVEST_ANNOUNCEMENT':
      return faker.helpers.arrayElement([
        'Harvest coming next week!',
        'First harvest of the season',
        'Special variety now ready',
        'Limited quantity harvest alert',
        'Pre-order our upcoming harvest'
      ]);
    case 'EDUCATIONAL':
      return faker.helpers.arrayElement([
        'How we practice sustainable farming',
        'Understanding organic certification',
        'Seasonal growing guide',
        'Cooking tips for fresh produce',
        'Storing your produce for maximum freshness'
      ]);
    default:
      return 'Farm update';
  }
};

// Generate post comments
export const generatePostComments = async (
  posts: FarmPost[],
  users: User[]
) => {
  console.log(`Generating comments for ${posts.length} posts...`);
  
  const comments: PostComment[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for post comments');
    return comments;
  }
  
  for (const post of posts) {
    // Determine if this post will have comments based on probability
    if (!randomBoolean(seedConfig.commentProbability)) {
      continue;
    }
    
    // Generate 1-5 comments per post
    const commentCount = faker.number.int({ min: 1, max: 5 });
    
    // Select random users for comments
    const selectedUsers = faker.helpers.arrayElements(consumerUsers, commentCount);
    
    for (const user of selectedUsers) {
      const commentData = {
        postID: post.id,
        userID: user.id,
        content: generateCommentContent(post.type),
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreatePostCommentResponse>(createPostComment, {
          input: commentData
        });
        
        const comment = response.data.createPostComment;
        comments.push(comment);
        console.log(`Created comment: ${comment.id} for post ${post.id} by user ${user.name}`);
      } catch (error) {
        console.error(`Failed to create comment for post ${post.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${comments.length} post comments`);
  return comments;
};

// Helper function to generate comment content based on post type
const generateCommentContent = (postType: string): string => {
  switch (postType) {
    case 'GENERAL':
      return faker.helpers.arrayElement([
        'Love seeing updates from the farm!',
        'Thanks for sharing this with us.',
        'Looking forward to visiting soon!',
        'Great to see what you\'re up to.',
        'Keep up the great work!'
      ]);
    case 'GROWING_UPDATE':
      return faker.helpers.arrayElement([
        'The plants look so healthy!',
        'Can\'t wait to taste these when they\'re ready.',
        'What variety is that? It looks amazing!',
        'How long until harvest?',
        'Your growing methods are impressive.'
      ]);
    case 'HARVEST_ANNOUNCEMENT':
      return faker.helpers.arrayElement([
        'Just placed my pre-order!',
        'Can\'t wait for this harvest.',
        'Will you be at the farmers market with these?',
        'Looks delicious! Saving the date.',
        'How do I reserve some of this harvest?'
      ]);
    case 'EDUCATIONAL':
      return faker.helpers.arrayElement([
        'Thanks for the information, very helpful!',
        'I learned something new today.',
        'Will definitely try these tips.',
        'Do you have more resources on this topic?',
        'This explains a lot about the quality of your produce.'
      ]);
    default:
      return 'Great post!';
  }
};

// Generate post likes
export const generatePostLikes = async (
  posts: FarmPost[],
  users: User[]
) => {
  console.log(`Generating likes for ${posts.length} posts...`);
  
  const likes: PostLike[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for post likes');
    return likes;
  }
  
  for (const post of posts) {
    // Determine how many users will like this post (0-30% of users)
    const likeCount = Math.floor(consumerUsers.length * Math.random() * 0.3);
    
    // Select random users for likes
    const selectedUsers = faker.helpers.arrayElements(consumerUsers, likeCount);
    
    for (const user of selectedUsers) {
      const likeData = {
        postID: post.id,
        userID: user.id,
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreatePostLikeResponse>(createPostLike, {
          input: likeData
        });
        
        const like = response.data.createPostLike;
        likes.push(like);
        console.log(`Created like: ${like.id} for post ${post.id} by user ${user.name}`);
      } catch (error) {
        console.error(`Failed to create like for post ${post.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${likes.length} post likes`);
  return likes;
};

// Generate farm follows
export const generateFarmFollows = async (
  farms: Farm[],
  users: User[]
) => {
  console.log(`Generating follows for ${farms.length} farms...`);
  
  const follows: FarmFollow[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for farm follows');
    return follows;
  }
  
  for (const farm of farms) {
    // Determine how many users will follow this farm (0-30% of users)
    const followCount = Math.floor(consumerUsers.length * Math.random() * 0.3);
    
    // Select random users for follows
    const selectedUsers = faker.helpers.arrayElements(consumerUsers, followCount);
    
    for (const user of selectedUsers) {
      const followData = {
        farmID: farm.id,
        userID: user.id,
        notificationPreferences: JSON.stringify({
          harvestAnnouncements: randomBoolean(0.8),
          marketSchedules: randomBoolean(0.6),
          specialOffers: randomBoolean(0.7)
        }),
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreateFarmFollowResponse>(createFarmFollow, {
          input: followData
        });
        
        const follow = response.data.createFarmFollow;
        follows.push(follow);
        console.log(`Created follow: ${follow.id} for farm ${farm.name} by user ${user.name}`);
      } catch (error) {
        console.error(`Failed to create follow for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${follows.length} farm follows`);
  return follows;
};
