import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BoxApi } from './api/box.api';
import { UserApi } from './api/user.api';
import { LoadingStore } from './stores/loading.store';

@NgModule({
  imports: [HttpClientModule],
  providers: [BoxApi, UserApi, LoadingStore]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
