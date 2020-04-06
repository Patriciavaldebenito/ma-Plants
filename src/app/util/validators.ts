import { AbstractControl } from '@angular/forms';

export class MyValidator {

    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        if (value > 20000) {
            return { price_invalid: true };
        }
        return null;
    }
}
