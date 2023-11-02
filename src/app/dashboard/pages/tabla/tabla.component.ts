import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  displayedColumns: string[] = ['description', 'rate', 'hours', 'amount'];

  data: any[] = [
    { description: '', rate: '', hours: '', amount: '' },
    { description: '', rate: '', hours: '', amount: '' },
    // Agrega más filas según sea necesario
  ];

  calculateAmount(item: any) {
    item.amount = item.rate * item.hours;
  }
}