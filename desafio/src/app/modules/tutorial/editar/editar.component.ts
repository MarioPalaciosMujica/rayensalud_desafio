import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TutorialService } from '@core/services/tutorial.service';
import { TutorialModel } from '@shared/models/tutorial.model';
import { Router, ActivatedRoute } from '@angular/router';
// translate
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit, OnDestroy {

    public tutorialModel: TutorialModel = {};
    private subscriptions$: Subscription[] = [];

  constructor(
      private tutorialService: TutorialService,
      private router: Router,
      private route: ActivatedRoute
  ) { 
      this.route.paramMap.subscribe(paramMap => {
          if(paramMap.has('id')){
              const findTutorial$: Subscription = this.tutorialService.findById(Number(paramMap.get('id'))).subscribe(data => {
                  this.tutorialModel = data as TutorialModel;
                  console.log(this.tutorialModel);
              });
              this.subscriptions$.push(findTutorial$);
          }
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions$.forEach(el => el.unsubscribe());
  }

  deleteById(id: number){
      const deleteById$: Subscription = this.tutorialService.deleteById(id).subscribe(data => {
          // TODO: redireccionar a pagina de inicio 
      });
      this.subscriptions$.push(deleteById$);
  }

}
