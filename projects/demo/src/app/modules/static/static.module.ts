import {AcoCalendarModule} from '@acomici/date';
import {NgModule} from '@angular/core';
import {StaticComponent} from './static.component';

@NgModule({
    declarations: [StaticComponent],
    exports: [StaticComponent],
    imports: [AcoCalendarModule],
})
export class StaticModule {}
