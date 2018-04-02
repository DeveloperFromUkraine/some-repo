import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
} from '@angular/material';

import { AccessibilityGuidelinesComponent } from './components/a11y-guidelines/a11y-guidelines.component';
import { SkipNavGuidelinesComponent } from './components/page-level-guidelines/skip-nav-guidelines.component';
import { RolesGuidelinesComponent } from './components/page-level-guidelines/roles-guidelines.component';
import { AccessibilityRoutesGuidelinesComponent } from './components/page-level-guidelines/routes-guidelines.component';

const routes: Routes = [
    { path: 'a11y-guidelines', component: AccessibilityGuidelinesComponent },
    { path: 'skip-nav-guidelines', component:SkipNavGuidelinesComponent },
    { path: 'roles-guidelines', component:RolesGuidelinesComponent },
    { path: 'routes-guidelines', component: AccessibilityRoutesGuidelinesComponent }
];

@NgModule({
    declarations: [
        AccessibilityGuidelinesComponent,
        SkipNavGuidelinesComponent,
        RolesGuidelinesComponent,
        AccessibilityRoutesGuidelinesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule
    ]
})
export class AccessibilityModule {}
