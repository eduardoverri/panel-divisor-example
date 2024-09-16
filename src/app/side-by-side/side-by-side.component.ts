import { Component, Input, Type, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.css']
})
export class SideBySideComponent {
  @Input() leftComponent!: Type<any>;
  @Input() rightComponent!: Type<any>;

  isLeftHidden = false;
  isRightHidden = false;

  @ViewChild('leftDiv') leftDiv!: ElementRef;
  @ViewChild('rightDiv') rightDiv!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleVisibility(panel: number) {
    if (panel == 1)
      this.isLeftHidden = !this.isLeftHidden;
    else if (panel == 2)
      this.isRightHidden = !this.isRightHidden;
  }

  isResizing = false;

  onMouseDown(event: MouseEvent) {
    this.isResizing = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      // Logic to resize the divs
      const leftDiv = document.getElementById('leftDiv');
      const rightDiv = document.getElementById('rightDiv');
      if (leftDiv && rightDiv) {
        const totalWidth = leftDiv.offsetWidth + rightDiv.offsetWidth;
        const newLeftWidth = event.clientX;
        const newRightWidth = totalWidth - newLeftWidth;
        leftDiv.style.width = `${newLeftWidth}px`;
        rightDiv.style.width = `${newRightWidth}px`;
      }
    }
}
