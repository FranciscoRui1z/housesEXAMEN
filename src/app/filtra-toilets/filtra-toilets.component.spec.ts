import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraToiletsComponent } from './filtra-toilets.component';

describe('FiltraToiletsComponent', () => {
  let component: FiltraToiletsComponent;
  let fixture: ComponentFixture<FiltraToiletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltraToiletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltraToiletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
