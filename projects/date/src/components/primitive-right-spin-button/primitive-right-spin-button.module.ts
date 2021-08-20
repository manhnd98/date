import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiLetModule, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {AcoPrimitiveRightSpinComponent} from './primitive-right-spin-button.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiPreventDefaultModule,
        TuiFocusableModule,
        TuiButtonModule,
    ],
    exports: [AcoPrimitiveRightSpinComponent],
    declarations: [AcoPrimitiveRightSpinComponent],
    providers: [],
})
export class AcoPrimitiveRightSpinModule {}
