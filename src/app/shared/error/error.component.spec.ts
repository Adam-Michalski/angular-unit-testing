import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorComponent} from './error.component';
import {Component} from '@angular/core';
import {ErrorMessageComponent} from './error-message.component';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'app-test-error',
  template: '<app-error><app-error-message message="There are no items in the list"></app-error-message></app-error>',
})
export class ErrorTestComponent {
}


describe('ErrorComponent', () => {
  let component: ErrorTestComponent;
  let fixture: ComponentFixture<ErrorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorTestComponent, ErrorComponent, ErrorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('app-error should contain app-error-message', () => {
    expect(fixture.debugElement.query(By.css('app-error'))).toBeTruthy();
  });

  it('app-error should contain app-error-message', () => {
    expect(
      fixture.debugElement.query(By.css('app-error')).query(By.css('app-error-message'))
    ).toBeTruthy();
  });

  it('app-error-message should contain message `THERE ARE NO ITEMS IN THE LIST', () => {
    expect(
      fixture.debugElement
        .query(By.css('app-error'))
        .query(By.css('app-error-message'))
        .query(By.css('p'))
        .nativeElement.innerHTML
    ).toContain('THERE ARE NO ITEMS IN THE LIST');
  });
});
