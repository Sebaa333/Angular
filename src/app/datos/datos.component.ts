import { Component } from '@angular/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  items: any[] = [
    { billedTo: '', payTo: '', bankAccount: '', name: '', bsb: '', accountNumber: '' }
  ];
  
}
