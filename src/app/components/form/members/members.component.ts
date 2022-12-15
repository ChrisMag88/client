import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import { jsPDF } from 'jspdf';
import * as moment from 'moment'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public members: any = [];
  public filter: any = {};
  public search: boolean = false;

  constructor(
    private services: MasterService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.services.HTTP_GET('/get-members', this.filter).subscribe((res) => {
      this.members = res;
    })
  }

  printPDF(data: any) {
    let doc = new jsPDF();

    doc.text(this.getText(data), 10, 10);

    doc.save(`${data.id}.pdf`);
    
  }

  getText(data: any) {
    return `
      Nombre completo: ${data.fullname} \n 
      Fecha de nacimiento: ${moment(data.birthdate).format('DD-MM-YYYY')} \n
      Género: ${data.gender.nombre} \n
      Nacionalidad: ${data.nationality.nombre} \n
      Club de Fútbol: ${data.team.nombre} \n
      RFC:  ${data.rfc || 'S/D'}
   `
  }

}
