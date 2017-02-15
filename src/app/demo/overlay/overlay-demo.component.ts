import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OverlayService } from '../../exports/overlay/overlay.service';

@Component({
  selector: 're-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayDemoComponent implements OnInit {

  constructor(private  overlayService: OverlayService) {
  }

  ngOnInit() {
  }

  openOverlay() {
    this.overlayService.open({ html: `<div> <img width="200px" src="./assets/images/loading.gif"></div>` });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }

  openComponentOverlay() {
    this.overlayService.open({ component: OverlayBodyDemoComponent });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }
}

@Component({
  selector: 're-overlay-body-demo',
  template: `
    <div>
      <img width="200px" src="./assets/images/loading.gif">
      <div class="text-center">Rebirth UI overlay!</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayBodyDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

