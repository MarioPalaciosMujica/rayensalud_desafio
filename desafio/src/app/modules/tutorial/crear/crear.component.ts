import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorialModel } from '@shared/models/tutorial.model';
import { TutorialService } from '@core/services/tutorial.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit, OnDestroy {

    public tutorialForm: FormGroup;
    public model: TutorialModel = {};
    private subscriptions$: Subscription[] = [];

  constructor(
    private tutorialService: TutorialService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
      this.tutorialForm = this.fb.group({
      nombre: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      profesor: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      materia: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      fecha: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions$.forEach(el => el.unsubscribe());
  }

  onSubmit(){
    this.toModel();
    this.tutorialService.create(this.model).subscribe(data => {
        this.router.navigate(['/inicio']);
    });
  }

  toModel(){
    this.model.nombre = this.getNombre.value;
    this.model.profesor = this.getProfesor.value;
    this.model.materia = this.getMateria.value;
    this.model.fecha = this.getFecha.value;
  }

  // toForm(){
  //   this.setNombre = this.model.nombre;
  //   this.setProfesor = this.model.profesor;
  //   this.setMateria = this.model.materia;
  //   this.setFecha = this.model.fecha;
  // }

  get getNombre(){ return this.tutorialForm.get('nombre'); }
  get getProfesor(){ return this.tutorialForm.get('profesor'); }
  get getMateria(){ return this.tutorialForm.get('materia'); }
  get getFecha(){ return this.tutorialForm.get('fecha'); }

  // set setNombre(value: string){ this.tutorialForm.get('nombre').setValue(value); }
  // set setProfesor(value: string){ this.tutorialForm.get('profesor').setValue(value); }
  // set setMateria(value: string){ this.tutorialForm.get('materia').setValue(value); }
  // set setFecha(value: string){ this.tutorialForm.get('fecha').setValue(value); }


}
