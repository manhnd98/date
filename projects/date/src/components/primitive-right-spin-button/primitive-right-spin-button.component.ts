import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import {AbstractTuiInteractive, isNativeFocused, tuiDefaultProp} from '@taiga-ui/cdk';
@Component({
    selector: 'aco-primitive-right-spin-button ',
    templateUrl: './primitive-right-spin-button.html',
    styleUrls: ['./primitive-right-spin-button.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcoPrimitiveRightSpinComponent extends AbstractTuiInteractive {
    @ViewChild('wrapper') private readonly wrapper?: ElementRef<HTMLElement>;

    @Input() @tuiDefaultProp() disabled = false;

    constructor() {
        super();
    }

    get focused() {
        return !!this.wrapper && isNativeFocused(this.wrapper.nativeElement);
    }
}
