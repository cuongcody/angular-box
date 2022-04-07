import { AbstractControl, ValidationErrors } from '@angular/forms';

import { ControlComponent } from './base-control.component';

export class ControlValidatorComponent<T> extends ControlComponent<T> {
  private _onValidatorChanged = new Array<() => void>();

  public registerOnValidatorChange(fn: () => void): void {
    this._onValidatorChanged.push(fn);
  }

  public validate(control: AbstractControl): ValidationErrors | null | undefined {
    return control.valid ? undefined : control.errors;
  }
}
