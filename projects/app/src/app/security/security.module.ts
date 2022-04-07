import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: []
})
export class SecurityModule {
  public constructor(@Optional() @SkipSelf() parentModule: SecurityModule) {
    if (parentModule) {
      throw new Error('SecurityModule is already loaded. Import it in the AppModule only');
    }
  }
}
