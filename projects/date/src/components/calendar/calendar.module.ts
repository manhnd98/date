import {NgModule} from '@angular/core';
import {AcoCalendarComponent} from './calendar.component';

import {TuiPrimitiveSpinButtonModule} from '@taiga-ui/core';

@NgModule({
    imports: [TuiPrimitiveSpinButtonModule],
    exports: [AcoCalendarComponent],
    declarations: [AcoCalendarComponent],
    providers: [],
})
export class AcoCalendarModule {}
