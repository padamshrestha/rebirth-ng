import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements AfterViewInit {

  @ViewChildren('html') html: QueryList<ElementRef>;
  @ViewChildren('typescript') typescript: QueryList<ElementRef>;

  @Input() component: any;

  activeTabChange() {
    setTimeout(() => {
      hljs.highlightBlock(this.html.last.nativeElement);
    }, 0);
  }

  ngAfterViewInit(): void {
    this.html.changes.subscribe((html) => {
      hljs.highlightBlock(html.last.nativeElement);
    });

    this.typescript.changes.subscribe((typescript) => {
      hljs.highlightBlock(typescript.last.nativeElement);
    });
  }
}
