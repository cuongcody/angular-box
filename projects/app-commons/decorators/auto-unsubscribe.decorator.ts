export function AutoUnsubscribe(): ClassDecorator {
  return (constructor: any) => {
    const originNgOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function(...args: any) {
      if (originNgOnDestroy) {
        originNgOnDestroy.apply(this, args);
      }

      this.complete$.next();
      this.complete$.complete();
    };
  };
}
