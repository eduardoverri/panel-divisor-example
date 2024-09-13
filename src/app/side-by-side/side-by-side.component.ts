import { Component, Input, Type, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    console.log(event.pageX+', '+this.leftDiv.nativeElement.offsetWidth+', '+this.rightDiv.nativeElement.offsetWidth);
    const startX = event.pageX;
    const startLeftWidth = this.leftDiv.nativeElement.offsetWidth;
    const startRightWidth = this.rightDiv.nativeElement.offsetWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - startX;
      this.renderer.setStyle(this.leftDiv.nativeElement, 'width', `${startLeftWidth + deltaX}px`);
      this.renderer.setStyle(this.rightDiv.nativeElement, 'width', `${startRightWidth - deltaX}px`);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
