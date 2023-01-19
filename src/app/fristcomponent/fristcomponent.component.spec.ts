import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristcomponentComponent } from './fristcomponent.component';

describe('FristcomponentComponent', () => {
  let component: FristcomponentComponent;
  let fixture: ComponentFixture<FristcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FristcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FristcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
