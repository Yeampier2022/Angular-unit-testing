import { Component } from '@angular/core';

import { calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing-services';


  ngOnInit(){
    const Calculator = new calculator();
    const rta = Calculator.multiply(1,4)
    console.log(rta === 4);
    const rta2 = Calculator.multiply(1,4)
    console.log(rta2 === null);


  }
}
