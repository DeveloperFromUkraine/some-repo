import { sandboxOf } from 'angular-playground';
import { AvatarGroupComponent } from './avatar-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { AvatarComponent } from '../avatar/avatar.component';

import { RouterModule, Routes } from '@angular/router';

import { Avatar } from './avatar-group.types';
import { TranslationModule } from '../localization/translation.module';

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
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TranslationModule,
    MatCardModule,
  ],
  declarations: [AvatarComponent],
}).add('Display 4 avatars in a group: 3 with images 1 with initials', {
  template: `
      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar-group</mat-card-title>
          <mat-card-subtitle>Avatar group avatar: 3 images, 1 with initials</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content class="sandbox__content--centered">
          <ign-avatar-group [avatars]="avatars" [cap]="4"></ign-avatar-group>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar-group</mat-card-title>
          <mat-card-subtitle>Avatar group avatar: 3 images, 1 with initials</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content class="sandbox__content--centered">
          <ign-avatar-group
            [avatars]="avatars"
            [cap]="3"
            [counterAriaLabel]="'2 more in the org chart.'">
          </ign-avatar-group>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar-group</mat-card-title>
          <mat-card-subtitle>Avatar group avatar: 3 images, 1 with initials</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content class="sandbox__content--centered">
          <ign-avatar-group
            [avatars]="avatars"
            [cap]="3"
            [counterAriaLabel]="'2 more in the org chart.'"
            [showContext]="true"
            [viewAllAriaLabel]="'view all 5'"
            [viewAllLink]="'#'">
          </ign-avatar-group>
        </mat-card-content>
      </mat-card>
    `,
  context: {
    avatars,
  },
});
