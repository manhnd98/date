import {InjectionToken} from '@angular/core';
import {of} from 'rxjs';

export const ACO_SPIN_TEXTS = new InjectionToken('spin i18n texts', {
    factory: () => {
        return of(['Previous', 'Next']);
    },
});
