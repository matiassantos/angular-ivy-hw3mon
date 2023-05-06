import { ThreeVector3 } from '@angular-three/core';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  VERSION,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'my-app',
  template: `
    <ngt-canvas [camera]="{ position: [5, 5, 5] }">
      <ngt-stats></ngt-stats>
      <ngt-orbit-controls></ngt-orbit-controls>

      <ngt-group o3d (animateReady)="onGroupAnimate($event.animateObject)">
        <cube *ngFor="let position of positions" [position]="position"></cube>
      </ngt-group>
    </ngt-canvas>
  `,
})
export class AppComponent {
  positions = [
    [2, 0, 0],
    [-2, 0, 0],
    [0, 2, 0],
    [0, -2, 0],
    [2, 2, 0],
    [-2, -2, 0],
    [-2, 2, 0],
    [2, -2, 0],
  ];

  onGroupAnimate(group: THREE.Group) {
    group.rotation.x += 0.001;
    //group.rotation.y += 0.001;
  }
}

@Component({
  selector: 'cube',
  template: `
    <ngt-mesh
      o3d
      [position]="position"
      [scale]="active ? [1.5, 1.5, 1.5] : [1, 1, 1]"
      (animateReady)="onCubeAnimate($event.animateObject)"
      (click)="active = !active"
      (pointerover)="hovered = true"
      (pointerout)="hovered = false"
    >
      <ngt-box-geometry></ngt-box-geometry>
      <ngt-mesh-basic-material
        [parameters]="{ color: hovered ? 'orange' : 'hotpink' }"
      ></ngt-mesh-basic-material>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubeComponent {
  @Input() position: ThreeVector3; // [x, y, z]

  hovered = false;
  active = false;

  onCubeAnimate(cube: THREE.Mesh) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}
