import { isPlatformBrowser } from '@angular/common';

import { SessionStorageRef } from '../abstracts/session-storage.abstraction';

export function sessionStorageFactory(browserWindowRef: SessionStorageRef, platformId: object): Storage {
  return isPlatformBrowser(platformId) ? browserWindowRef.nativeSessionStorage : new Storage();
}
