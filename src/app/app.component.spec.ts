import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from "@angular/core";
import { render } from '@testing-library/angular';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'labels-and',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  template: `
<ng-container *ngTemplateOutlet="spaceTemplate"></ng-container>
<strong>AND</strong>
<ng-container *ngTemplateOutlet="spaceTemplate"></ng-container>

<ng-template #spaceTemplate>
  &nbsp;
</ng-template>
`,
})
export class AndLabelComponent {}
// https://testing-library.com/docs/angular-testing-library/examples/#with-standalone-components

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stackblitz-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stackblitz-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('stackblitz-angular app is running!');
  });
});

describe('AndLabelComponent', () => {
  it('should create the component', async () => {
    const { fixture } = await render(AndLabelComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render "AND" surrounded by spaces', async () => {
    const { fixture } = await render(AndLabelComponent);

    const element = fixture.nativeElement;
    const andText = element.querySelector('strong')?.textContent;
    const spaceContainers = element.querySelectorAll('ng-container');

    expect(andText).toContain('AND');
    expect(spaceContainers.length).toBe(2);

    spaceContainers.forEach((container: Element) => {
      const spaceText = container.textContent!.trim();
      // Check that spaces are non-breaking spaces
      expect(spaceText).toBe('');
    });
  });
});
