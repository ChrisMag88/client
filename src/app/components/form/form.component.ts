import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() finishForm = new EventEmitter<any>();

  public age: number;
  public member: any = {};
  public formPage: any;

  public flags: any = {
    name: false,
    lastname: false,
    lastnameTwo: false,
    datebirth: false,
    gender: false,
    nationality: false,
    team: false,
    ocupation: false,
    street: false,
    addressNumber: false,
    settlement: false,
    zipCode: false,
    rfc: false,
    errorRfc: false,
    pdf: false,
    finished: false
  }

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    lang: {
      next: 'Siguiente',
      previous: 'Anterior'
    },
    selected: 0,
    theme: THEME.circles,
    toolbarSettings: {
      
    }
  };

  constructor(
    private ngWizardService: NgWizardService,
  ) { }

  ngOnInit(): void {
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    this.formPage = (args.fromStep.title)
    if(!this.validateForm()) return false;
    else return true;
  }

  validateForm() {
    switch (this.formPage) {
      case 'Paso 1':
        if(!this.pageOneValidation()) {
          return false;
        } else {
          this.member.age = this.getAge();
          console.log(this.member.age)
          return true;
        };
      
      case 'Paso 2':
        if(!this.pageTwoValidation()) {
         return false;
        } else return true;

      case 'Paso 3':
        return true;

      }
  }

  pageOneValidation() {
    if(!this.member.name) {
      this.flags.name = true;
      return false;
    }

    if(!this.member.lastname) {
      this.flags.lastname = true;
      return false;
    }

    if(!this.member.lastnameTwo) {
      this.flags.lastnameTwo = true;
      return false;
    }

    if(!this.member.birthdate) {
      this.flags.birthdate = true;
      return false;
    }

    if(!this.member.gender) {
      this.flags.gender = true;
      return false;
    }

    if(!this.member.nationality) {
      this.flags.nationality = true;
      return false;
    }

    if(!this.member.team) {
      this.flags.team = true;
      return false;
    }

    if(!this.member.ocupation) {
      this.flags.ocupation = true;
      return false;
    }

    return true;
  }

  pageTwoValidation() {
    if(!this.member.street) {
      this.flags.street = true;
      return false;
    }

    if(!this.member.addressNumber) {
      this.flags.addressNumber = true;
      return false;
    }

    if(!this.member.settlement) {
      this.flags.settlement = true;
      return false;
    }

    if(!this.member.zipCode) {
      this.flags.zipCode = true;
      return false;
    }

    if(this.member.age >= 18 && !this.member.rfc) {
      this.flags.rfc = true;
      return false;
    }
    
    if(this.flags.errorRfc) {
      return false;
    }
    
    return true;
  }

  getEvent(event) {
    this.finishForm.emit();
  }

  // PRIVATE FUNCTIONS

  getAge() {
    let birthDate =this.member.birthdate;
    birthDate = new Date(birthDate);
    let today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
}
