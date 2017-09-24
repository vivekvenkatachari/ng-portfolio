import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioContentListComponent } from './porfolio-content-list.component';

describe('PorfolioContentListComponent', () => {
  let component: PorfolioContentListComponent;
  let fixture: ComponentFixture<PorfolioContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
