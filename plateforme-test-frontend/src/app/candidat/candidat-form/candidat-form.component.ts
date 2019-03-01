import {
  Component,
  OnInit
} from '@angular/core';
import * as core from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {
  title = 'Consulter une évaluation';
  state: string;
  form: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.state = this._route.routeConfig.path;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this._formBuilder.group({
      nom: '',
      prenom: '',
      commentaire: ''
    });
  }

  onSubmit(): void {}
}
