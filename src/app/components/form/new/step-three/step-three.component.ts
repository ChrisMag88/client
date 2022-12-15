import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  @Input('member') member: any;
  @Input('flags') flags: any;
  @Output() finishForm = new EventEmitter<any>();

  constructor(
    private services: MasterService
  ) { }

  ngOnInit(): void {
  }

  saveForm() {
    Swal.fire({
      title: 'Confirmar datos',
      icon: 'info',
      text: 'Estás a punto de enviar el formulario con todos los datos. Por favor confirma que todos tus datos sean correctos. ¿Deseas enviar la información?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if(result.isConfirmed) {
        this.services.HTTP_POST('/save-form', this.member).subscribe(res =>{
          if(res.success) {
            Swal.fire({
              icon: 'success',
              title: 'Registro creado correctamente',
              text: res.data.msg
            }).then(() => {
              this.finishForm.emit();
            })
          }
        });
      }
    })
  }

}
