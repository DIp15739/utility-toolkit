# utility-toolkit

utility-toolkit is library for JavaScript and TypeScript that provides a set of useful functions for various tasks.

## Features

- **TypeScript Support**: utility-toolkit is written in TypeScript and provides full type definitions.
- **CRUD Operations on Local Storage**: Easily manage data in the browser's local storage with both synchronous and asynchronous support and error handling.

## Installation

You can install utility-toolkit via npm:

```bash
npm install utility-toolkit
```

## Usage

### Importing utility-toolkit

using **`require`**
```javascript
const { setItemLS, getItemLS, removeItemLS, clearLS, setItemAsyncLS, getItemAsyncLS, removeItemAsyncLS, clearAsyncLS } = require('utility-toolkit');
```
Using **`from`**
```javascript
import { setItemLS, getItemLS, removeItemLS, clearLS, setItemAsyncLS, getItemAsyncLS, removeItemAsyncLS, clearAsyncLS } from 'utility-toolkit';
```

## CRUD Operations on Local Storage
utility-toolkit provides functions to create, read, update, and delete data in the local storage, with both synchronous and asynchronous methods.

#### Example
Here's a full example demonstrating the CRUD operations:

```javascript
import { setItemLS, getItemLS, removeItemLS, clearLS, setItemAsyncLS, getItemAsyncLS, removeItemAsyncLS, clearAsyncLS } from 'utility-toolkit';

const user = {
  username: 'john_doe',
  email: 'john@example.com',
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

// Synchronous operations
setLS('user', user);
console.log(getLS('user')); // Outputs: { username: 'john_doe', email: 'john@example.com', preferences: { theme: 'dark', notifications: true } }
removeLS('user');
clearLS();

// Asynchronous operations
await setAsyncLS('user', anotherUser);
console.log(await getAsyncLS('user')); // Outputs: { username: 'jane_doe', email: 'jane@example.com', preferences: { theme: 'light', notifications: false } }
await removeAsyncLS('user');
await clearAsyncLS();
```
