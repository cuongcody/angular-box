import { ChangeDetectorRef } from '@angular/core';

export class ControlComponent<T> {
  private _value!: T;
  private _onChanged = new Array<(value: T) => void>();
  private _onTouched = new Array<() => void>();

  get value(): T {
    return this._value;
  }

  public constructor(protected changeDetector: ChangeDetectorRef) {}

  public registerOnChange(fn: () => void): void {
    this._onChanged.push(fn);
  }

  public registerOnTouched(fn: () => void): void {
    this._onTouched.push(fn);
  }

  public writeValue(value: T): void {
    this._value = value;
    this.changeDetector.detectChanges();
  }

  public onInputBlur(): void {
    this._onTouched.forEach(it => it());
  }

  public updateValue(value: T): void {
    if (this.value !== value) {
      this._value = value;
      this._onChanged.forEach(it => it(value));
    }
  }
}
