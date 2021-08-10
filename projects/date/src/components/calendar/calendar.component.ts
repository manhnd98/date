import {ChangeDetectionStrategy, Component} from '@angular/core';
@Component({
    selector: 'aco-calendar',
    templateUrl: 'calendar.template.html',
    styleUrls: ['./calendar.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcoCalendarComponent {
    constructor() {}
}
