import { sandboxOf } from 'angular-playground';
import { ExpandableFabComponent } from './expandable-fab.component';
import { ExpandableFabItemComponent } from './expandable-fab-item.component';

export default sandboxOf([ExpandableFabComponent]).add('expandable fab common use case', {
  template: `
    <ign-expandable-fab>
      <ign-expandable-fab-item tooltipText="Meow" icon="add">
      </ign-expandable-fab-item >
      <ign-expandable-fab-item tooltipText="Meow meow" icon="lock">
      </ign-expandable-fab-item >
      <ign-expandable-fab-item tooltipText="meeeowww" icon="grade">
      </ign-expandable-fab-item >
    </ign-expandable-fab>
  `,
});
