import { Component, OnInit, OnChanges } from '@angular/core';
import { PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-portfolio-content-single',
  templateUrl: './portfolio-content-single.component.html',
  styleUrls: ['./portfolio-content-single.component.css'],
  providers: [PortfolioService]
})
export class PortfolioContentSingleComponent implements OnInit, OnChanges {
  private list=[];
  private activity = {};
  private total = 0;
  private typeOptions = [];
  private optionVal;

  constructor(private portfolioService: PortfolioService) {

  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    var context = this;
    this.typeOptions = this.portfolioService.getTypeOption();
    // this.typeOptions = [{id:1,value:'Consultation'},{id:2,value:'Group Consulation'},
    //   {id:3,value:'Office Work'}, {id:4,value:'PanchKarma'}];
    this.optionVal = new Map([['1',4],['2',7],['3',3],['4',4]]);
    if(localStorage.getItem('myEarnings')) {
      new Promise((resolve, reject) => {
        this.list = JSON.parse(localStorage.getItem('myEarnings'));
        resolve(this.list);
      }).then(function (res) {
        //console.log(res);
        context.calcTotal();
      });




    }

  }

  private calcTotal() {
    var context = this;
    this.total = 0;
    this.list.map(function(val) {
      context.total = context.total + (!isNaN(val.hours)?(val.hours*context.optionVal.get(val.type)) : 0);
    });
  }

  addValue() {
    let newEmployee = Object.assign({},this.activity);
    this.list.push(newEmployee);
    this.calcTotal();
  }

  updateMyList(res) {
    this.list = res;
    this.calcTotal();
  }

  save() {
    localStorage.setItem('myEarnings',JSON.stringify(this.list));
  }



}
