import { sandboxOf } from 'angular-playground';
import { AvatarComponent } from './avatar.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

export default sandboxOf(AvatarComponent, {
    imports: [MatTooltipModule, MatIconModule],
})
    .add('Large avatar with two characters: AF', {
        template: `<ign-avatar [initials]="'AF'" [size]="'l'"></ign-avatar>`,
    })
    .add('Large avatar with three characters: XYZ', {
        template: `<ign-avatar [initials]="'XYZ'" [size]="'l'"></ign-avatar>`,
    })
    .add('Small avatar with two initials: JK', {
        template: `<ign-avatar [initials]="'JK'" [size]="'s'"></ign-avatar>`,
    })
    .add('Large avatar with two initials: DS', {
        template: `<ign-avatar [initials]="'DS'" [size]="'l'"></ign-avatar>`,
    })
    .add('Deprecated large avatar with two initials: SW', {
        template: `<ign-avatar [initials]="'SW'" [size]="'large'"></ign-avatar>`,
    })
    .add('Deprecated small avatar with two initials: GJ', {
        template: `<ign-avatar [initials]="'GJ'" [size]="'small'"></ign-avatar>`,
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
