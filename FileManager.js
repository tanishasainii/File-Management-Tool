const fs = require('fs');
const path = require('path');

// Create a file 
function createFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
      if (err) throw err;
      console.log(`File ${filePath} created.`);
  });
}

// Read the content of a file
function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(`Content of ${filePath}:\n${data}`);
  });
}

// Delete a file
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`File ${filePath} deleted.`);
  });
}

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('Usage: node fileManager.js <command> <path> [<content>]');
    process.exit(1);
}

const command = args[0];
const filePath = path.resolve(args[1]);
const content = args[2];

switch (command) {
    case 'create':
        createFile(filePath, content || '');
        break;
    case 'read':
        readFile(filePath);
        break;
    case 'delete':
        deleteFile(filePath);
        break;
    default:
        console.log('Unknown command.');
        break;
}
