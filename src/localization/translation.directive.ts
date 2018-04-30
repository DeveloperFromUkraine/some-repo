import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Directive({
  selector: '[translateIDS]'
})
export class TranslationDirective  implements AfterViewInit {

    constructor(private element: ElementRef) {
        // Subscribe to language updates
        TranslationService.changeTranslationObservable.subscribe(translation => {
            this.updateTranslation(translation)
        })
    }

    ngAfterViewInit() {
        // set the translation of all content at start
        this.updateTranslation(TranslationService.getTranslation());
    }

    updateTranslation(translation: any) {
        let nodes: NodeList = this.element.nativeElement.childNodes;
        for (let i = 0; i < nodes.length; ++i) {
            let node: any = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                if (node.originalContent === undefined) { // we store the translation token in original content of node
                    node.originalContent = this.getContent(node);
                }

                const translateValue = this.getTranslation(node.originalContent.trim(), translation);
                this.setContent(node, translateValue);
            }
        }
    }

    getTranslation(translationKey: string, translation: any) {
        return translation[translationKey];
    }

    getContent(node: any) {
        return node.data;
    }

    setContent(node: any, value: string) {
        node.data = value;
    }
}
