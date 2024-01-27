import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchTabComponent } from './ng-switch-tab.component';

describe('NgSwitchTabComponent', () => {
  let component: NgSwitchTabComponent;
  let fixture: ComponentFixture<NgSwitchTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
