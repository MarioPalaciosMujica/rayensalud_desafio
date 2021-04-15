import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TutorialService } from '@core/services/tutorial.service';
import { TutorialModel } from '@shared/models/tutorial.model';
// translate
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

    public tutorialList: TutorialModel[] = [];
    private subscriptions$: Subscription[] = [];

  constructor(
      private tutorialService: TutorialService
  ) { 
      // Listar todos los tutoriales
      const findAllTutorials$: Subscription = this.tutorialService.list().subscribe(data => {
          this.tutorialList = data as TutorialModel[];
          console.log(this.tutorialList);
      });
      this.subscriptions$.push(findAllTutorials$);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions$.forEach(el => el.unsubscribe());
  }

  searchByDescription(desc: string){
      const findByDescription$: Subscription = this.tutorialService.findByDescription(desc).subscribe(data => {
          this.tutorialList = data as TutorialModel[];
          console.log(this.tutorialList);
      });
      this.subscriptions$.push(findByDescription$);
  }

  deleteAll() {
      const deleteAll$: Subscription = this.tutorialService.deleteAll().subscribe(data => {
          // show msn
      });
      this.subscriptions$.push(deleteAll$);
  }

}
