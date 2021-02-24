import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculadora';
  number = 0;
  firstNumber: string = '';
  secondNumber: string = '';
  operator: string = '';

  public clear() {
    this.number = 0;
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
  }

  setNumber(n: string): void {
    this.operator === '' ? (this.firstNumber += n) : (this.secondNumber += n);
    this.number =
      this.operator === ''
        ? parseInt(this.firstNumber)
        : parseInt(this.secondNumber);
  }

  setOperator(operator: string) {
    this.operator = operator;
  }

  concatOps() {
    this.firstNumber = this.number + '';
    this.secondNumber = '';
    this.operator = '';
  }

  doMath(): void {
    let first = parseInt(this.firstNumber);
    let second = parseInt(this.secondNumber);

    if (this.operator == '') this.number = first;

    switch (this.operator) {
      case '+':
        this.number = first += second;
        this.concatOps();
        return;
      case '-':
        this.number = first -= second;
        this.concatOps();
        return;
      case '*':
        this.number = first *= second;
        this.concatOps();
        return;
      case '/':
        this.number = first /= second;
        this.concatOps();
        return;
      default:
        return;
    }
  }
}
