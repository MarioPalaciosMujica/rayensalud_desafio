import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from '@modules/tutorial/lista/lista.component';
import { CrearComponent } from '@modules/tutorial/crear/crear.component';
import { EditarComponent } from '@modules/tutorial/editar/editar.component';

const routes: Routes = [
    { 
        path: 'inicio',
        pathMatch: 'full',
        component: ListaComponent
    },
    // {
    //     path: 'inicio/:input',
    //     pathMatch: 'full',
    //     component: ListaComponent
    // },
    {
        path: 'crear',
        pathMatch: 'full',
        component: CrearComponent
    },
    {
        path: 'editar/:id',
        pathMatch: 'full',
        component: EditarComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TutorialRoutingModule {}
