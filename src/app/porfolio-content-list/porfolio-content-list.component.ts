import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-porfolio-content-list',
  templateUrl: './porfolio-content-list.component.html',
  styleUrls: ['./porfolio-content-list.component.css'],
  providers: [PortfolioService]
})
export class PorfolioContentListComponent implements OnInit, OnChanges {

  private typeOptions;

  constructor(private porfolioService: PortfolioService) { }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    this.typeOptions = this.porfolioService.getTypeOption();
  }

  getOptionName(index) {
    return this.typeOptions.filter(function (test) {
      return test.id.toString() === index.toString();
    })[0].value;
  }

  @Output() updateList = new EventEmitter();

  removeMe(index) {
    this.list.splice(index, 1);
    this.updateList.emit(this.list);
  }

  @Input() list;

}
