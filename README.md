# Local Storage Wrapper

A simple and lightweight JavaScript wrapper for the Web's localStorage API, making it easier to store, retrieve, and manage data in the browser's localStorage with added functionality such as support for objects and automatic serialization.

## Installation

You can install this package via npm:

```bash
npm install b-local-storage-wrapper
```

## Usage

### Storing and Retrieving a String

```javascript
const storage = require('local-storage-wrapper');

storage.setItem('username', 'JohnDoe');

console.log(storage.getItem('username')); // Output: 'JohnDoe'
```

### Storing and Retrieving an Object

```javascript
const storage = require('local-storage-wrapper');

const user = { name: 'Alice', age: 30 };
storage.setItem('user', user);

console.log(storage.getItem('user')); // Output: { name: 'Alice', age: 30 }
```

### Removing an Item

```javascript
const storage = require('local-storage-wrapper');

storage.removeItem('username');

console.log(storage.getItem('username')); // Output: null
```

### Clearing All Items

```javascript
const storage = require('local-storage-wrapper');

storage.setItem('key1', 'value1');
storage.setItem('key2', 'value2');

storage.clear();

console.log(storage.getItem('key1')); // Output: null
console.log(storage.getItem('key2')); // Output: null
```

### Retrieving All Items

```javascript
const storage = require('local-storage-wrapper');

storage.setItem('key1', 'value1');
storage.setItem('key2', 'value2');

console.log(storage.getAll()); // Output: { key1: 'value1', key2: 'value2' }
```