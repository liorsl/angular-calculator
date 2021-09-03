import { Component } from '@angular/core';
import { evaluate } from 'mathjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css']
})
export class AppComponent {
  displayValue = '';

  handleNumberPress(num: number) {
    this.append(num);

  }

  handlePress(exp: string) {
    this.append(exp);

  }

  handleDelete() {
    if (!this.displayValue.length)
      return;

    this.displayValue = this.displayValue.substr(0, this.displayValue.length - 1);

  }

  handleClear() {
    this.displayValue = '';
  }

  evaluateExpression() {
    this.displayValue = String(evaluate(this.displayValue));
  }

  private append(exp: any) {
    this.displayValue += exp;

  }

}
