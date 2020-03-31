import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should contain `Toggle Footer`', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    spyOn(component, 'toggleFooter');
    button.click();
    expect(component.toggleFooter).toHaveBeenCalled();
  });

  it('`Toggle Footer` should call toggleFooter and emit !showFooter', () => {
    const valueBeforeChange = component.showFooter;
    const button = fixture.debugElement.nativeElement.querySelector('button');
    spyOn(component.toggleFooterEvt, 'emit');
    button.click();
    expect(component.toggleFooterEvt.emit).toHaveBeenCalledWith(!valueBeforeChange);
  });
});

