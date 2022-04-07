import { isPlatformBrowser } from '@angular/common';

import { WindowRef } from '../abstracts/window.abstraction';

export function windowFactory(browserWindowRef: WindowRef, platformId: object): Window | object {
  return isPlatformBrowser(platformId) ? browserWindowRef.nativeWindow : {};
}
