import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'ign-center',
  templateUrl: './center.html',
  styleUrls: ['./center.scss'],
})
export class CenterComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.warn(
      `Deprecation warning: 'ign-center' is being removed in the next release. Support for this component will be dropped soon.`
    );
  }
}
