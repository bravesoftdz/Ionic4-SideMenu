import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonMenuComponent } from './ion-menu.component';

describe('IonMenuComponent', () => {
  let component: IonMenuComponent;
  let fixture: ComponentFixture<IonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
