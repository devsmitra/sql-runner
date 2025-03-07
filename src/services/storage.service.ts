/**
 * StorageService class to handle localStorage operations with a prefix.
 */
export class StorageService {
  // Prefix for all keys stored by this service
  static PREFIX = "qr";

  /**
   * Set an item in localStorage with a prefixed key.
   * @param {string} key - The key for the item.
   * @param {T} value - The value to store.
   */
  static setItem<T>(key: string, value: T) {
    const keys = StorageService.getKeys().filter((key) =>
      key.startsWith(StorageService.PREFIX)
    );

    // Remove the oldest key if there are more than 20 items to avoid storage issues for demo purposes
    if (keys.length > 20) {
      const oldestKey = keys.sort()[0];
      StorageService.removeItem(oldestKey);
    }

    const uniqueKey = StorageService._prefixKey(key);
    localStorage.setItem(
      uniqueKey,
      JSON.stringify({
        id: uniqueKey,
        ...value,
      })
    );
  }

  /**
   * Prefix a key with the service's prefix and a timestamp.
   * @param {string} key - The key to prefix.
   * @returns {string} The prefixed key.
   */
  static _prefixKey(key: string) {
    return `${StorageService.PREFIX}_${Date.now()}_${key}`;
  }

  /**
   * Get an item from localStorage.
   * @param {string} key - The key of the item to retrieve.
   * @returns {any} The retrieved item.
   */
  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || "null");
  }

  /**
   * Get all keys from localStorage.
   * @returns {string[]} The list of keys.
   */
  static getKeys() {
    return Object.keys(localStorage);
  }

  /**
   * Remove an item from localStorage.
   * @param {string} key - The key of the item to remove.
   */
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * Clear all items from localStorage.
   */
  static clear() {
    localStorage.clear();
  }
}
