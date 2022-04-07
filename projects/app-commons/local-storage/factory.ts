import { isPlatformBrowser } from '@angular/common';

import { LocalStorageRef } from '../abstracts/local-storage.abstraction';

export function localStorageFactory(browserWindowRef: LocalStorageRef, platformId: object): Storage {
  return isPlatformBrowser(platformId) ? browserWindowRef.nativeLocalStorage : new Storage();
}
