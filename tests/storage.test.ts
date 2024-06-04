import * as storage from '../src/storage'; // Adjust the path as per your project structure
import 'jest-localstorage-mock'; // Import jest-localstorage-mock to mock localStorage

describe('LocalStorage CRUD Operations', () => {
  beforeEach(() => {
    // Clear localStorage mock before each test
    localStorage.clear();
  });

  test('setItemSync should store the value in localStorage', () => {
    storage.setItemSync('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
  });

  test('getItemSync should retrieve the value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    const value = storage.getItemSync('testKey');
    expect(value).toBe('testValue');
  });

  test('removeItemSync should remove the value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    storage.removeItemSync('testKey');
    expect(localStorage.getItem('testKey')).toBeNull();
  });

  test('clearSync should remove all values from localStorage', () => {
    localStorage.setItem('testKey1', JSON.stringify('testValue1'));
    localStorage.setItem('testKey2', JSON.stringify('testValue2'));
    storage.clearSync();
    expect(localStorage.getItem('testKey1')).toBeNull();
    expect(localStorage.getItem('testKey2')).toBeNull();
  });

  test('setItemAsync should store the value in localStorage', async () => {
    await storage.setItemAsync('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
  });

  test('getItemAsync should retrieve the value from localStorage', async () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    const value = await storage.getItemAsync('testKey');
    expect(value).toBe('testValue');
  });

  test('removeItemAsync should remove the value from localStorage', async () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    await storage.removeItemAsync('testKey');
    expect(localStorage.getItem('testKey')).toBeNull();
  });

  test('clearAsync should remove all values from localStorage', async () => {
    localStorage.setItem('testKey1', JSON.stringify('testValue1'));
    localStorage.setItem('testKey2', JSON.stringify('testValue2'));
    await storage.clearAsync();
    expect(localStorage.getItem('testKey1')).toBeNull();
    expect(localStorage.getItem('testKey2')).toBeNull();
  });
});
