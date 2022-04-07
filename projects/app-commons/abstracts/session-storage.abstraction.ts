export abstract class SessionStorageRef {
  get nativeSessionStorage(): Storage {
    throw new Error('Not implemented.');
  }
}
