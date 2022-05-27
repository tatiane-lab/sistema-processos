import { Component, OnInit } from '@angular/core';
import { CadastoProcessoService } from 'src/app/services/processos/cadastrar/cadasto-processo.service';
import { ConsultaService } from 'src/app/services/processos/consultar/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-processo',
  templateUrl: './cadastrar-processo.component.html',
  styleUrls: ['./cadastrar-processo.component.css'],
})
export class CadastrarProcessoComponent implements OnInit {
  todosProcessos: any;
  processoValido = false;
  processo = {
    codeProcess: '',
    nameProcess: '',
    detailsProcess: '',
    reuProcess: '',
  };
  enviar = false;

  constructor(
    private cadastoProcesso: CadastoProcessoService,
    private consultaProcesso: ConsultaService
  ) {}

  ngOnInit(): void {
    this.validarProcesso();
  }

  validarProcesso(): any {
    this.consultaProcesso.buscarTodosProcessos().subscribe((res) => {
      this.todosProcessos = res;
    });
  }

  cadastarProcesso(processo: any) {
    console.log(this.todosProcessos);
    if (this.todosProcessos.length) {
      this.todosProcessos.filter((itens: any) => {
        console.log(
          processo.codeProcess == itens.codeProcess,
          processo.codeProcess,
          itens.codeProcess
        );
        if (processo.codeProcess == itens.codeProcess) {
          this.processoValido = false;
        } else {
          this.processoValido = true;
        }
      });
      console.log('caiu if');
    } else {
      console.log('caiu else');
      this.processoValido = true;
    }
    if (this.processoValido) {
      this.cadastoProcesso.cadastrarProcesso(processo).subscribe(() => {
        Swal.fire({
          text: `Processo criado com sucesso!`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
    } else {
      Swal.fire(
        '',
        'O processo já existe favor verificar o número do processo!',
        'error'
      );
    }
  }
}
