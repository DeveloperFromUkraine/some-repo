import { sandboxOf } from 'angular-playground';
import { ListItemComponent, ListItemContentComponent } from './list-item.component';

export default sandboxOf(ListItemComponent, {
  declarations: [ListItemContentComponent],
}).add('List item within list container', {
  template: `
                <ign-list-container>
                  <ign-list-item>
                    <ign-list-item-content>
                      <ign-list-item-primary-text>Desserts</ign-list-item-primary-text>
                      <ign-list-item-secondary-text>2 Desserts</ign-list-item-secondary-text>
                    </ign-list-item-content>
                    <mat-menu #listMenu="matMenu">
                      <button mat-meign-item>
                        <mat-icon>edit</mat-icon>
                        <span>Edit</span>
                      </button>
                      <ign-divider></ign-divider>
                      <button mat-meign-item>
                        <mat-icon>delete</mat-icon>
                        <span>Delete</span>
                      </button>
                    </mat-menu>
                    <button mat-icon-button [matMenuTriggerFor]="listMenu">
                      <mat-icon class="mat-24 menu">more_vert</mat-icon>
                    </button>
                  </ign-list-item>
                  <ign-list-item>
                    <ign-list-item-content>
                      <ign-list-item-primary-text>Appetizers</ign-list-item-primary-text>
                      <ign-list-item-secondary-text>0 Appetizers - Get Desserts Instead!</ign-list-item-secondary-text>
                    </ign-list-item-content>
                    <mat-menu #listMenu="matMenu">
                      <button mat-meign-item>
                        <mat-icon>edit</mat-icon>
                        <span>Edit</span>
                      </button>
                      <ign-divider></ign-divider>
                      <button mat-meign-item>
                        <mat-icon>delete</mat-icon>
                        <span>Delete</span>
                      </button>
                    </mat-menu>
                    <button mat-icon-button [matMenuTriggerFor]="listMenu">
                      <mat-icon class="mat-24 menu">more_vert</mat-icon>
                    </button>
                  </ign-list-item>
                </ign-list-container>
              `,
});
