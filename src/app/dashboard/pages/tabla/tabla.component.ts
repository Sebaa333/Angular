import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  items: any[] = [
    { description: '', rate: '', hours: '', amount: '' },
    // POedes agregar más objetos si necesitas más filas iniciales
  ];
}