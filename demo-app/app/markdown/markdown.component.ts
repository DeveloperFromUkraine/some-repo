import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import marked from 'marked';

@Component({
  selector: 'markdown',
  template: `
    <div [innerHTML]="markdown"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent implements OnChanges {
  @Input()
  content: string;
  @Input()
  trustedContent = false;

  markdown: string;

  constructor (private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.content) {
      const content = marked(changes.content.currentValue);
      this.markdown = this.trustedContent ? this.sanitizer.bypassSecurityTrustHtml(content) : content;
    }
  }
}
