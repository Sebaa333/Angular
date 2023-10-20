import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  items: any[] = [
    { billedTo: '', payTo: '', bankAccount: '', name: '', bsb: '', accountNumber: '' }
  ];
}
