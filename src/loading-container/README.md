# Loading Container

## Description

Loading container is a wrapper (higher level) component around your content. It will show a spinner after a period (right now 400ms) until the consumer declares the content loaded. Most developers needing to consume the loading container will simply wrap their existing on content in an `ign-loading-container` and let the loading container know when the content is loaded.

## API
  ### Selector
    * ign-loading-container

  ### Exported As
    * LoadingContainerComponent
    
  ### Properties
    * '@Input' loading (input): boolean
      *  Loading status, defaults to true.

## Implementation HTML
  <ign-loading-container [loading]="BOOLEAN">
  </ign-loading-container>

## Implementation TS
  None
  
## Usage

The following is a usage example demonstrating the above descriptions:

```
<div *ngIf="(legalEntities$ | async) || []; let items">
  <ign-loading-container [loading]="!loaded">
    <!-- Empty State View -->
    <ign-empty-state *ngIf="items?.length === 0">
      <ign-breadcrumbs></ign-breadcrumbs>
      <ign-empty-state-image></ign-empty-state-image>
      <ign-empty-state-title>{{ 'ACTIVATION.EMPTY_LEGAL_ENTITY' | translate }}</ign-empty-state-title>
      <ign-empty-state-description>
        {{ 'ACTIVATION.LEGAL_ENTITY_EXPLANATION' | translate }}
      </ign-empty-state-description>
      <ign-button-group>
        <button mat-button mat-raised-button color="accent" type="button" [routerLink]="['./add']">
          {{ 'COMMON.ADD' | translate }}
        </button>
      </ign-button-group>
    </ign-empty-state>

    <!-- List Content View -->
    <ign-list-content *ngIf="items?.length !== 0">
      <ign-list-selection>
        <ign-list-selection-item *ngFor="let item of items" [routerLink]="['./', item.id]" [routerLinkActive]="'active'" [key]="item.id"
          [title]="item.name">
        </ign-list-selection-item>
        <ign-list-selection-add-button tabindex="-1" [routerLink]="['./add']"></ign-list-selection-add-button>
      </ign-list-selection>
      <ign-list-content-panel>
        <ign-breadcrumbs></ign-breadcrumbs>

        <!--State for when items exist, but user hasn't selected one yet  -->
        <ign-list-content-unselected-state [hidden]="isLegalEntitySelected">
          Please select a Legal Entity
        </ign-list-content-unselected-state>

        <!--State for inspecting selected item  -->
        <ign-list-content-card [hidden]="!isLegalEntitySelected">
          <router-outlet (activate)="isLegalEntitySelected=true" (deactivate)="isLegalEntitySelected=false"></router-outlet>
        </ign-list-content-card>

      </ign-list-content-panel>
    </ign-list-content>
  </ign-loading-container>
</div>
```
