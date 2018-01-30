import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableContainerComponent } from './data-table-container.component';
import { ComponentTest } from '../../test/test-bed/component';
import { DataTableContainerModule } from './data-table-container.module';
import { MatTableDataSource } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

fdescribe('DataTableContainerComponent', () => {
    let fixture: ComponentFixture<DataTableContainerComponent>;
    let component: DataTableContainerComponent;
    let matTableDataSource: MatTableDataSource<any> = new MatTableDataSource();
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([DataTableContainerModule]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableContainerComponent);
        component = fixture.componentInstance;
        component.dataSource = matTableDataSource;

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('mat-paginator'));
    });

    it('should set pageSize to given pageSize', () => {
        let pageSizeGiven = 25;
        component.pageSize = pageSizeGiven;
        ne = de.nativeElement;

        fixture.detectChanges();
        let pageSize = ne.getAttribute('ng-reflect-page-size');

        expect(pageSize).toBe(pageSizeGiven.toString());
    });

    it('should set pageSize to default pageSize', () => {
        let pageSizeDefault = 10;
        component.pageSize = null;
        ne = de.nativeElement;

        fixture.detectChanges();
        let pageSize = ne.getAttribute('ng-reflect-page-size');

        expect(pageSize).toBe(pageSizeDefault.toString());
    });

    it('should set pageSizeOptions to given options', () => {
        let pageSizeOptionsGiven = [1, 2, 3];
        component.pageSizeOptions = pageSizeOptionsGiven;
        ne = de.nativeElement;

        fixture.detectChanges();
        let pageSizeOptions = ne.getAttribute('ng-reflect-page-size-options');

        expect(pageSizeOptions).toBe(pageSizeOptionsGiven.toString());
    });

    it('should set pageSizeOptions to default page size options', () => {
        let pageSizeOptionsDefault = [5, 10, 15, 20, 50];
        component.pageSizeOptions = null;
        ne = de.nativeElement;

        fixture.detectChanges();
        let pageSizeOptions = ne.getAttribute('ng-reflect-page-size-options');

        expect(pageSizeOptions).toBe(pageSizeOptionsDefault.toString());
    });

    it('should call emitPageEvents if page event is triggered', () => {
        jest.spyOn(component, 'emitPageEvents');

        de.triggerEventHandler('page', null);

        expect(component.emitPageEvents).toHaveBeenCalledTimes(1);
    });

    it('should emit paginatorEvent if page event is triggered', () => {
        let spy = jest.fn();

        component.paginatorEvents$.subscribe(spy);
        de.triggerEventHandler('page', null);

        expect(spy).toHaveBeenCalled();
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});
