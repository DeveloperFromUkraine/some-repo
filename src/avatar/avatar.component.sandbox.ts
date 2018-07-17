import { sandboxOf } from 'angular-playground';
import { AvatarComponent } from './avatar.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

export default sandboxOf(AvatarComponent, {
  imports: [MatTooltipModule, MatIconModule],
})
  .add('Initals with AF', {
    template: `<ign-avatar [initials]="'AF'" [size]="'l'"></ign-avatar>`,
  })
  .add('Initials with CB', {
    template: `<ign-avatar [initials]="'CB'" [size]="'l'"></ign-avatar>`,
  })
  .add('Initials with XYZ', {
    template: `<ign-avatar [initials]="'XYZ'" [size]="'l'"></ign-avatar>`,
  })
  .add('Small avatar with initials AF', {
    template: `<ign-avatar [initials]="'AF'" [size]="'s'"></ign-avatar>`,
  })
  .add('Small avatar (image)', {
    template: `<ign-avatar [image]="'http://i.pravatar.cc/150?img=1'" [size]="'s'"></ign-avatar>`,
  })
  .add('Large avatar (image)', {
    template: `<ign-avatar [image]="'http://i.pravatar.cc/150?img=1'" [size]="'l'"></ign-avatar>`,
  })
  .add('Large avatar with placeholder', {
    template: `<ign-avatar [size]="'l'"></ign-avatar>`,
  })
  .add('Small avatar with placeholder', {
    template: `<ign-avatar [size]="'s'"></ign-avatar>`,
  });
