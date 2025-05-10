#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const schemaDir = path.resolve(__dirname, '../amplify/backend/api/plukecosystem/schema');

// Migration rules
const migrations = [
  // Migrate @key directive to @index
  {
    pattern: /@key\(name:\s*"([^"]+)",\s*fields:\s*\[([^\]]+)\],\s*queryField:\s*"?([^"]+)"?\)/g,
    replacement: '@index(name: "$1", queryField: "$3")'
  },
  // Simpler @key format
  {
    pattern: /@key\(name:\s*"([^"]+)",\s*fields:\s*\[([^\]]+)\]\)/g,
    replacement: '@index(name: "$1")'
  },
  // Update @connection directive
  {
    pattern: /@connection\(keyName:\s*"([^"]+)",\s*fields:\s*\[([^\]]+)\]\)/g,
    replacement: '@hasMany(indexName: "$1", fields: [$2])'
  }
];

async function migrateSchemaFile(filePath) {
  console.log(`Migrating schema file: ${filePath}`);
  
  try {
    let content = await readFile(filePath, 'utf8');
    let modified = false;
    
    // Apply each migration rule
    for (const { pattern, replacement } of migrations) {
      const originalContent = content;
      content = content.replace(pattern, replacement);
      
      if (content !== originalContent) {
        modified = true;
      }
    }
    
    if (modified) {
      await writeFile(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`ℹ️ No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

async function findGraphQLFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  const files = entries
    .filter(entry => !entry.isDirectory() && entry.name.endsWith('.graphql'))
    .map(entry => path.join(dir, entry.name));
    
  const folders = entries
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(dir, entry.name));
    
  const subFiles = await Promise.all(folders.map(folder => findGraphQLFiles(folder)));
  
  return [...files, ...subFiles.flat()];
}

async function main() {
  console.log('Starting GraphQL schema migration...');
  
  try {
    const files = await findGraphQLFiles(schemaDir);
    console.log(`Found ${files.length} GraphQL schema files to process`);
    
    // Process each file
    for (const file of files) {
      await migrateSchemaFile(file);
    }
    
    console.log('\nMigration complete! Next steps:');
    console.log('1. Review the changes to ensure they are correct');
    console.log('2. Update the directives.graphql file to remove the @key directive');
    console.log('3. Run "amplify push" to deploy the updated schema');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

main();
