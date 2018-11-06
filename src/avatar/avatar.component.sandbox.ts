import { sandboxOf } from 'angular-playground';
import { AvatarComponent } from './avatar.component';
import { MatTooltipModule, MatIconModule, MatCardModule } from '@angular/material';

export default sandboxOf(AvatarComponent, {
  imports: [MatTooltipModule, MatIconModule, MatCardModule],
}).add('Avatar configurations', {
  template: `
    <div>
      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Small avatar with placeholder</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [size]="'s'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Small avatar with two characters</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [initials]="'JK'" [size]="'s'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Small avatar image</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
        <ign-avatar [image]="'http://i.pravatar.cc/150?img=4'" [size]="'s'"></ign-avatar>
        </mat-card-content>
      </mat-card>
    </div>

    <div>
      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Medium avatar with placeholder</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [size]="'m'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Medium avatar with two characters</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [initials]="'JK'" [size]="'m'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Medium avatar image</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
        <ign-avatar [image]="'http://i.pravatar.cc/150?img=8'" [size]="'m'"></ign-avatar>
        </mat-card-content>
      </mat-card>
    </div>

    <div>
      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Large avatar with two characters</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [size]="'l'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Large avatar with placeholder</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [initials]="'AF'" [size]="'l'"></ign-avatar>
        </mat-card-content>
      </mat-card>

      <mat-card class='sandbox--300x150'>
        <mat-card-header>
          <mat-card-title>ign-avatar</mat-card-title>
          <mat-card-subtitle>Large avatar image</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <ign-avatar [image]="'http://i.pravatar.cc/150?img=1'" [size]="'l'"></ign-avatar>
        </mat-card-content>
      </mat-card>
    </div>
    `,
});
