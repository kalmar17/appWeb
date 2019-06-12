import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesWeProvideComponent } from './packages-we-provide.component';

describe('PackagesWeProvideComponent', () => {
  let component: PackagesWeProvideComponent;
  let fixture: ComponentFixture<PackagesWeProvideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesWeProvideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesWeProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
