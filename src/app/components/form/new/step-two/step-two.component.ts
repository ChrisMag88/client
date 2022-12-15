import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  @Input('member') member: any;
  @Input('flags') flags: any;

  constructor() { }

  ngOnInit(): void {

  }

  onlyNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
      }
  }

  validateRFC() {
    const regex = new RegExp("^([A-ZÑ]{4})([0-9]{6})([0-9A-Z]{3})$");
    let rfc = this.member.rfc.toUpperCase();
    if(!regex.test(rfc)) {
      this.flags.errorRfc = true;
    } else this.flags.errorRfc = false;
  }

}
