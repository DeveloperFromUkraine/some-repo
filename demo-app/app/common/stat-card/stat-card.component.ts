import { Component, Input, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
    selector: 'stat-card',
    template: `
        <div #statCard class="stat-card">
            <div #titleSection class="stat-card-title">
                <p>{{ title }}</p>  
            </div>
            <div #detailSection class="stat-card-status">
                <p>{{ detail }}</p>
            </div>
        </div>
    `,
    styleUrls: [`./stat-card.scss`]
})
export class StatCardComponent implements OnInit {
    @Input() textSize: string;
    @Input() height: string;
    @Input() width: string;
    
    @Input() title: string;
    @Input() titleWidth: string;
    @Input() titleBackground: string;
    @Input() titleTextColor: string;

    @Input() detail: string;
    @Input() detailWidth: string;
    @Input() detailBackground: string;
    @Input() detailTextColor: string;

    @ViewChild('statCard') statCard: ElementRef; 
    @ViewChild('titleSection') statCardTitleSection: ElementRef;
    @ViewChild('detailSection') statCardDetailSection: ElementRef;

    ngOnInit() {
        if (this.textSize) {
            this.statCardTitleSection.nativeElement.style.fontSize = this.textSize;
            this.statCardDetailSection.nativeElement.style.fontSize = this.textSize;
        }
        if (this.height) {
            this.statCard.nativeElement.style.minHeight = this.height;
        }
        if (this.width) {
            this.statCard.nativeElement.style.width = this.width;
        }

        if (this.titleWidth) {
            this.statCardTitleSection.nativeElement.style.maxWidth = this.titleWidth;
        }
        if (this.titleBackground) {
            this.statCardTitleSection.nativeElement.style.backgroundColor = this.titleBackground;
        }
        if (this.titleTextColor) {
            this.statCardTitleSection.nativeElement.style.color = this.titleTextColor;
        }

        if (this.detailWidth) {
            this.statCardDetailSection.nativeElement.style.maxWidth = this.detailWidth;
        }
        if (this.detailBackground) {
            this.statCardDetailSection.nativeElement.style.backgroundColor = this.detailBackground;
        }
        if (this.detailTextColor) {
            this.statCardDetailSection.nativeElement.style.color = this.detailTextColor;
        }
        
    }
}