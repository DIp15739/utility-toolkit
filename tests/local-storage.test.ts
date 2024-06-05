import * as storage from '../src/local-storage'
import 'jest-localstorage-mock'

describe('LocalStorage CRUD Operations', () => {
  beforeEach(() => {
    // Clear localStorage mock before each test
    localStorage.clear()
  })

  test('setItem should store the value in localStorage', () => {
    storage.setItemLS('testKey', 'testValue')
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'))
  })

  test('getItem should retrieve the value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    const value = storage.getItemLS('testKey')
    expect(value).toBe('testValue')
  })

  test('removeItem should remove the value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    storage.removeItemLS('testKey')
    expect(localStorage.getItem('testKey')).toBeNull()
  })

  test('clear should remove all values from localStorage', () => {
    localStorage.setItem('testKey1', JSON.stringify('testValue1'))
    localStorage.setItem('testKey2', JSON.stringify('testValue2'))
    storage.clearLS()
    expect(localStorage.getItem('testKey1')).toBeNull()
    expect(localStorage.getItem('testKey2')).toBeNull()
  })

  test('setItemAsync should store the value in localStorage', async () => {
    await storage.setItemAsyncLS('testKey', 'testValue')
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'))
  })

  test('getItemAsync should retrieve the value from localStorage', async () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    const value = await storage.getItemAsyncLS('testKey')
    expect(value).toBe('testValue')
  })

  test('removeItemAsync should remove the value from localStorage', async () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'))
    await storage.removeItemAsyncLS('testKey')
    expect(localStorage.getItem('testKey')).toBeNull()
  })

  test('clearAsync should remove all values from localStorage', async () => {
    localStorage.setItem('testKey1', JSON.stringify('testValue1'))
    localStorage.setItem('testKey2', JSON.stringify('testValue2'))
    await storage.clearAsyncLS()
    expect(localStorage.getItem('testKey1')).toBeNull()
    expect(localStorage.getItem('testKey2')).toBeNull()
  })
})
