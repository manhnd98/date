import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {AcoPrimitiveRightSpinComponent} from './primitive-right-spin-button.component';

@NgModule({
    imports: [TuiLetModule],
    exports: [AcoPrimitiveRightSpinComponent],
    declarations: [AcoPrimitiveRightSpinComponent],
    providers: [],
})
export class AcoPrimitiveRightSpinModule {}
