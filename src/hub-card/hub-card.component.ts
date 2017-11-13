import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ign-hub-card',
  templateUrl: './hub-card.html',
  styleUrls: ['./hub-card.scss'],
})
export class HubCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() complete: boolean;
  @Input() active: boolean;
  @Input() icon: string;
  @Input() color: string;
  @Input() primaryActionText: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  colors = {
    gray: '#708A97',
    green: '#00B385',
    purple: '#8272F1',
    yellow: '#FBAC17',
    blue: '#2A67BC',
    pink: '#D26ECF',
    red: '#FF6148',
    lightBlue: '#0CB0C5',
  };

  icons = {
    checkmark: 'circle_check',
    employee: 'people',
    position: 'work',
    payroll: 'attach_money',
    workLocation: 'location_on',
    business: 'domain',
    lock: 'lock',
    legalEntity: 'account_balance',
    orgLevel: 'device_hub',
    timeOff: 'access_time',
  };

  handleClick() {
    this.onClick.emit();
  }
}
