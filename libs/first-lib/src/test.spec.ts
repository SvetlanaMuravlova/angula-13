import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

@Component({
  selector: 'accordion-test',
  template: ''
})
class TestAccordionComponent {
  oneAtATime = true;

  changeOneAtATime() {
    this.oneAtATime = false;
  }
}

describe('Component: Accordion', () => {
  let fixture: ComponentFixture<TestAccordionComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let context: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let element: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAccordionComponent],
    });
    fixture = TestBed.createComponent(TestAccordionComponent);
    context = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('check test', () => {
    context.changeOneAtATime();
    fixture.detectChanges();
    const result = context.oneAtATime;
    expect(result).not.toBeTruthy();
  });

});
