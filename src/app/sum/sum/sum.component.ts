import { Component, OnInit } from '@angular/core';
import { SumService } from '../services/sum.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  private res : number = 0;

  get result() : string {
    return this.res.toString();
  }

  constructor(private sumService: SumService) { }

  ngOnInit(): void {
  }

  sum(number1: string, number2: string) : void {
    let n1: number;

    let n2: number;

    n1 = parseFloat(number1);

    n2 = parseFloat(number2);

    this.res = this.sumService.sum(n1, n2);
  }
}
