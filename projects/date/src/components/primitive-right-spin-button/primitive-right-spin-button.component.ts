import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {AbstractTuiInteractive, isNativeFocused, tuiDefaultProp} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {ACO_SPIN_TEXTS} from './../../tokens/i18n';

@Component({
    selector: 'aco-primitive-right-spin-button',
    templateUrl: './primitive-right-spin-button.template.html',
    styleUrls: ['./primitive-right-spin-button.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcoPrimitiveRightSpinComponent extends AbstractTuiInteractive {
    @ViewChild('wrapper') private readonly wrapper?: ElementRef<HTMLElement>;

    @Input() @tuiDefaultProp() disabled = false;

    constructor(
        @Inject(ACO_SPIN_TEXTS) readonly spinTexts$: Observable<[string, string]>,
    ) {
        super();
    }

    get focused() {
        return !!this.wrapper && isNativeFocused(this.wrapper.nativeElement);
    }

    onUpClick() {}

    onDownClick() {}

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean) {
        this.updateFocusVisible(focusVisible);
    }
}
