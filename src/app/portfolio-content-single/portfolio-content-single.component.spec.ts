import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContentSingleComponent } from './portfolio-content-single.component';

describe('PortfolioContentSingleComponent', () => {
  let component: PortfolioContentSingleComponent;
  let fixture: ComponentFixture<PortfolioContentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioContentSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioContentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
