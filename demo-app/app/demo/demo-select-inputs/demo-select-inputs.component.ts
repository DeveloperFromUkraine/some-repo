import { Component } from '@angular/core';

@Component({
    selector: 'demo-select-inputs',
    templateUrl: './demo-select-inputs.html',
})

export class DemoSelectInputsComponent {
     
  planets = [
    {value: 'vulcan-0', viewValue: 'Vulcan'},
    {value: 'romulus-1', viewValue: 'Romulus'},
    {value: 'qonos-2', viewValue: `Qo'noS`}
  ];


}


