import {NgModule} from '@angular/core';
import {TuiRootModule} from '@taiga-ui/core';
import {AcoPrimitiveRightSpinModule} from './../primitive-right-spin-button/primitive-right-spin-button.module';
import {AcoCalendarComponent} from './calendar.component';

@NgModule({
    imports: [AcoPrimitiveRightSpinModule, TuiRootModule],
    exports: [AcoCalendarComponent],
    declarations: [AcoCalendarComponent],
    providers: [],
})
export class AcoCalendarModule {}
