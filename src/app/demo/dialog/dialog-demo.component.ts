import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DialogService } from '../../exports';

@Component({
  selector: 're-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DialogDemoComponent {

  constructor(private dialogService: DialogService) {
  }

  alert() {
    this.dialogService.alert({
      title: 'I\'m a rebirth alert!',
      content: 'This is <strong>rebirth alert</strong> content.',
      // yes: '确定',
      icon: 'icon-success',
      html: true
    })
      .subscribe(
        data => console.log('Rebirth alert get yes result:', data),
        error => console.error('Rebirth alert get no result:', error)
      );
  }

  confirm() {
    this.dialogService.confirm({
      title: 'I\'m a rebirth confirm!',
      content: 'This is <strong>rebirth confirm</strong> content.',
      html: true,
      // icon: 'icon-success',
      // yes: '确定',
      // no: '取消',
      // rootContainer: this.viewContainerRef
    })
      .subscribe(
        data => console.log('Rebirth confirm get yes result:', data),
        error => console.error('Rebirth confirm get no result:', error)
      );
  }
}
