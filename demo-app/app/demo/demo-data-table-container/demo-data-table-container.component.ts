import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const NOTES: string = require('raw-loader!./demo-data-table-container.md');

@Component({
    selector: 'demo-data-table-container',
    templateUrl: './demo-data-table-container.html',
})
export class DemoDataTableContainerComponent {
    notes = NOTES;
    displayedColumns = ['name', 'position', 'type'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA); 
}

export interface Element {
    name: string;
    position: string;
    type: string;
}

let ELEMENT_DATA: Element[] = [
    {name: 'Maham Boghani', position: 'Software Engineer', type: 'Human'},
    {name: 'Watson', position: 'Artificial Intelligence', type: 'Computer'},
    {name: 'Andy Avalos', position: 'Electrical Engineer', type: 'Human'},
    {name: 'Jensen', position: 'Director of Sleep', type: 'House Cat'},
    {name: 'Mariah Avalos', position: 'Software Engineer', type: 'Introvert'},
    {name: 'Emma Bear', position: 'Destroyer Of String', type: 'House Cat'},
    {name: 'Uchenna Ohaeto', position: 'Software Engineer', type: 'Human'},
    {name: 'Dennis', position: 'Being Repressed', type: 'Human'},
    {name: 'Sophia', position: 'Home Security', type: 'Dog'},
    {name: 'Brian Mahecha', position: 'Software Test Engineer', type: 'Human'},
    {name: 'Spock', position: 'First Officer, USS Enterprise', type: 'Vulcan'},
    {name: 'Daniel Weisberg', position: 'Software Engineer', type: 'Human'},
    {name: 'Inigo Montoya', position: 'Seeking Revenge', type: 'Human'},
    {name: 'Miguel Conde', position: 'Software Engineer', type: 'Human'},
    {name: 'Nikola Tesla', position: 'Inventor', type: 'Human'},
  
];