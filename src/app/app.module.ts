import { ThreeCoreModule } from '@angular-three/core';
import { ThreeBoxBufferGeometryModule } from '@angular-three/core/geometries';
import { ThreeGroupModule } from '@angular-three/core/group';
import { ThreeMeshBasicMaterialModule } from '@angular-three/core/materials';
import { ThreeMeshModule } from '@angular-three/core/meshes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeOrbitControlsModule } from '@angular-three/controls/orbit-controls';

import { AppComponent, CubeComponent } from './app.component';
import { ThreeStatsModule } from '@angular-three/core/stats';

@NgModule({
  imports: [
    BrowserModule,
    ThreeCoreModule,
    ThreeMeshModule,
    ThreeMeshBasicMaterialModule,
    ThreeBoxBufferGeometryModule,
    ThreeGroupModule,
    ThreeOrbitControlsModule,
    ThreeStatsModule
  ],
  declarations: [AppComponent, CubeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
