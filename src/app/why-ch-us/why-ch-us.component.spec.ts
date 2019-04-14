import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChUsComponent } from './why-ch-us.component';

describe('WhyChUsComponent', () => {
  let component: WhyChUsComponent;
  let fixture: ComponentFixture<WhyChUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyChUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
