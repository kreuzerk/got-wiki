import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotWikiComponent } from './got-wiki.component';

describe('GotWikiComponent', () => {
  let component: GotWikiComponent;
  let fixture: ComponentFixture<GotWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
