import { sandboxOf } from 'angular-playground';
import { AvatarGroupComponent } from './avatar-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule, MatIconModule } from '@angular/material';
import { AvatarComponent } from '../avatar/avatar.component';

import { RouterModule, Routes } from '@angular/router';

import { Avatar } from './avatar-group.types';

const appRoutes: Routes = [{ path: 'UI/part1/Details', component: AvatarComponent }];

let avatars: Avatar[] = [
  {
    person: {
      firstName: 'Scott',
      lastName: 'Brooks',
      preferredFirstName: 'Scottie B',
    },
    image: 'http://i.pravatar.cc/150?img=6',
    tooltip: 'Ahhh!',
  },
  {
    person: {
      firstName: 'Michelle',
      lastName: 'Beadle',
      preferredFirstName: 'Melly Mel',
    },
    image: 'http://i.pravatar.cc/150?img=5',
  },
  {
    person: {
      firstName: 'Main',
      lastName: 'Man',
      preferredFirstName: 'Da Boss',
    },
    image: 'http://i.pravatar.cc/150?img=54',
    tooltip: 'Ahhh!',
  },
  {
    person: {
      firstName: 'Shy',
      lastName: 'Guy',
    },
  },
];

export default sandboxOf(AvatarGroupComponent, {
  imports: [
    MatTooltipModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  declarations: [AvatarComponent],
}).add('Display 4 avatars in a group: 3 with images 1 with initials', {
  template: `
    <ign-avatar-group
      [avatars]="avatars"
      [cap]="5"
      [counterAriaLabel]="'2 more in the org chart.'">
    </ign-avatar-group>
`,
  context: {
    avatars,
  },
});
