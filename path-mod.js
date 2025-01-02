// 'path' module - A built-in module in Node.js for handling and manipulating file and directory paths
// It can be imported using the 'node' protocol (node:path), or without it as 'require("path")'. 
// Using the 'node:' prefix is optional but recommended due to certain benefits it provides.
const path = require("node:path"); // Importing 'path' module from Node.js

// __filename gives the full file path of the current module (this script).
// __dirname gives the directory path of the current module.
console.log(__filename); // Logs the absolute file path of the current file.
console.log(__dirname); // Logs the directory name of the current file.

// --------------------------------------------------
// Path Module Utilities
// --------------------------------------------------

// 'basename' returns the last portion of a path (e.g., file name with extension).
console.log(path.basename(__filename)); // Outputs the name of the current file (including extension).
console.log(path.basename(__dirname)); // Outputs the last directory name in the path (current directory).

// 'extname' returns the extension of the file path.
console.log(path.extname(__filename)); // Outputs the file extension of the current file (e.g., '.js').
console.log(path.extname(__dirname)); // Outputs an empty string because directory paths don't have extensions.

// 'parse' method parses the given path into an object with various properties like root, dir, base, ext, and name.
console.log(path.parse(__filename)); // Outputs an object with the parsed components of the current file path.
// Example of output: { root: '/', dir: '/home/user/', base: 'file.js', ext: '.js', name: 'file' }

// 'format' takes a parsed path object and reconstructs it back into the original path.
console.log(path.format(path.parse(__filename))); // Reconstructs the path from the parsed object.

// 'isAbsolute' checks if the given path is absolute (i.e., starts from the root of the file system).
console.log(path.isAbsolute(__filename)); // Returns true as __filename is an absolute path.
console.log(path.isAbsolute(__dirname)); // Returns true as __dirname is an absolute path.
console.log(path.isAbsolute("./json-data.js")); // Returns false as it's a relative path (doesn't start from the root).

// The 'join' method is used to concatenate multiple path segments into a single path.
// It also normalizes the path by handling redundant slashes and resolves relative paths (like '..').
/* Example (commented out for now):
console.log(path.join("folder1", "folder2", "index.html"));   // Joins folder1, folder2, and index.html into a normalized path.
console.log(path.join("/folder1", "folder2", "index.html"));  // Joins and normalizes paths.
console.log(path.join("/folder1", "//folder2", "index.html")); // Normalizes redundant slashes.
console.log(path.join("/folder1", "//folder2", "../index.html")); // Resolves '..' to go up a directory.
*/

// The 'resolve' method resolves a sequence of paths into an absolute path.
// It processes relative paths based on the current working directory and returns an absolute path.
console.log(path.resolve("folder1", "folder2", "index.html")); // Resolves relative paths into an absolute path.
console.log(path.resolve("/folder1", "folder2", "index.html")); // Resolves starting from an absolute path.
console.log(path.resolve("/folder1", "//folder2", "index.html")); // Resolves with redundant slashes.
console.log(path.resolve("/folder1", "//folder2", "../index.html")); // Resolves relative paths and handles '..' to go up one level.