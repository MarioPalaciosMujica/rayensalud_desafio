import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TutorialRoutingModule } from '@modules/tutorial/tutorial-routing.module';
import { ListaComponent } from '@modules/tutorial/lista/lista.component';
import { CrearComponent } from '@modules/tutorial/crear/crear.component';
import { EditarComponent } from '@modules/tutorial/editar/editar.component';

@NgModule({
    declarations: [ 
         ListaComponent,
         CrearComponent,
         EditarComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TutorialRoutingModule
    ]
})
export class TutorialModule {}
