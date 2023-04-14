import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageVarientComponent } from './package-varient.component';

describe('PackageVarientComponent', () => {
  let component: PackageVarientComponent;
  let fixture: ComponentFixture<PackageVarientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageVarientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
