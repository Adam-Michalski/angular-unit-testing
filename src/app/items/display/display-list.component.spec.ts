import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayListComponent} from './display-list.component';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-display-list-test',
  template: `
    <app-display-list
      (showDescription)="enableDescription($event)"
      [itemList]="itemList"
      (deleteOut)="deleteItem($event)"
    >
    </app-display-list>
  `,
})
export class DisplayListTestComponent {
  itemList = [
    {id: 1, name: 'todolist', description: 'This is todo list app'},
    {id: 2, name: 'unit test', description: 'Write unit tests'}
  ];

  enableDescription(event) {
  }

  deleteItem(event) {
  }
}


describe('DisplayListComponent', () => {
  let component: DisplayListTestComponent;
  let fixture: ComponentFixture<DisplayListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      declarations: [DisplayListComponent, DisplayListTestComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
