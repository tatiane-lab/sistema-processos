import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faPenToSquare,
  faScaleBalanced,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from 'src/app/services/processos/consultar/consulta.service';
import { EditarProcessoService } from 'src/app/services/processos/editar/processo/editar-processo.service';
import { EditarReuService } from 'src/app/services/processos/editar/reu/editar-reu.service';
import { ExcluirService } from 'src/app/services/processos/excluir/excluir.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-processo',
  templateUrl: './consulta-processo.component.html',
  styleUrls: ['./consulta-processo.component.css'],
})
export class ConsultaProcessoComponent implements OnInit {
  faSearch = faSearch;
  faPenToSquare = faPenToSquare;
  faScaleBalanced = faScaleBalanced;
  faTrashCan = faTrashCan;
  processos: any;
  numeroProcesso: any;
  isNew = false;
  processo = {
    codeProcess: null,
    nameProcess: '',
    detailsProcess: '',
  };
  editarReu = {
    codeProcess: null,
    reuProcess: '',
  };

  constructor(
    private consultaProcesso: ConsultaService,
    private excluirProcesso: ExcluirService,
    private editReu: EditarReuService,
    private editarProcesso: EditarProcessoService
  ) {}

  ngOnInit(): void {
    this.consultarProcesso();
  }

  consultarProcesso() {
    this.consultaProcesso.buscarTodosProcessos().subscribe((res) => {
      this.processos = res;
    });
  }

  dadosReu(processo: any) {
    this.editarReu = processo;
    if (processo.reuProcess) {
      this.isNew = true;
    } else this.isNew = false;
  }

  editarAdicionarReu(reu: any) {
    this.editarProcesso.editarProcesso(reu).subscribe(() => {
      this.consultarProcesso();
      if (!this.isNew) {
        Swal.fire({
          text: `Réu adicionado com sucesso!`,
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
      } else {
        Swal.fire({
          text: `Réu alterado com sucesso!`,
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
      }
    });
  }

  dadosProcesso(processo: any) {
    this.processo = processo;
  }

  editProcesso(processo: any) {
    this.editReu.editarReu(processo).subscribe(() => {
      this.consultarProcesso();
      Swal.fire({
        text: `Processo alterado com sucesso!`,
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
  }

  removerProcesso(id: number, numeroProcesso: any) {
    Swal.fire({
      title: `Deseja apagar o processo ${numeroProcesso}?`,
      text: 'Está ação é Irreversível!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.excluirProcesso.excluirProcesso(id).subscribe(() => {
          this.consultarProcesso();
          Swal.fire('', 'Processo foi apagado com sucesso!', 'success');
        });
      }
    });
  }
}
