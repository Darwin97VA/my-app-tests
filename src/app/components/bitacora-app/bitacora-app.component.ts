import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/interfaces/bitacora';
import { BitacoraService } from 'src/app/services/bitacora.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora-app.component.html',
  styleUrls: ['./bitacora-app.component.css']
})
export class BitacoraAppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Bitacora[]

  constructor( bitacoraService: BitacoraService ) { 
      this.dataSource = bitacoraService.getBitacoras();
  }

  ngOnInit(): void {
  }

}
