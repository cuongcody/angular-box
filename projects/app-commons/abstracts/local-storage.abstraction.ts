export abstract class LocalStorageRef {
  get nativeLocalStorage(): Storage {
    throw new Error('Not implemented.');
  }
}
