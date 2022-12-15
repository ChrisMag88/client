import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generos } from '../../../../data/generos';
import { clubes } from '../../../../data/clubes';
import { nacionalidades } from '../../../../data/nacionalidades';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  @Input('member') member: any;
  @Input('flags') flags: any;
  @Output() changeAge = new EventEmitter<any>();

  model: NgbDateStruct;
	date: { year: number; month: number };

  public GENDERS = generos;
  public TEAMS = clubes;
  public NATIONALITIES = nacionalidades;

  constructor() { }

  ngOnInit(): void {
  }

}
