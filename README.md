# Utilkit

Utilkit is a utility library for JavaScript and TypeScript that provides a set of useful functions for various tasks.

## Features

- **TypeScript Support**: Utilkit is written in TypeScript and provides full type definitions.
- **CRUD Operations on Local Storage**: Easily manage data in the browser's local storage with both synchronous and asynchronous support and error handling.

## Installation

You can install Utilkit via npm:

```bash
npm install utilkit
```

## Usage

### Importing Utilkit

using **`require`**
```javascript
const { setItemSync, getItemSync, removeItemSync, clearSync, setItemAsync, getItemAsync, removeItemAsync, clearAsync } = require('utilkit');
```
Using **`from`**
```javascript
import { setItemSync, getItemSync, removeItemSync, clearSync, setItemAsync, getItemAsync, removeItemAsync, clearAsync } from 'utilkit';
```

## CRUD Operations on Local Storage
Utilkit provides functions to create, read, update, and delete data in the local storage, with both synchronous and asynchronous methods.

#### Example
Here's a full example demonstrating the CRUD operations:

```javascript
import { setItemSync, getItemSync, removeItemSync, clearSync, setItemAsync, getItemAsync, removeItemAsync, clearAsync } from 'utilkit';

// Synchronous operations
setItemSync('username', 'john_doe');
console.log(getItemSync('username')); // Outputs: 'john_doe'
removeItemSync('username');
clearSync();

// Asynchronous operations
await setItemAsync('username', 'jane_doe');
console.log(await getItemAsync('username')); // Outputs: 'jane_doe'
await removeItemAsync('username');
await clearAsync();
```