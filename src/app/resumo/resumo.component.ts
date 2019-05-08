import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumoService } from './resumo.service';
@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumo ;
 
  constructor(private resumoService: ResumoService) {   }

  ngOnInit() {
   this.resumoService.getResumo()
   .subscribe(dados => this.resumo = dados);

  }

}
