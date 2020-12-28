import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public getWindow(): Window {
    return this.document.defaultView as Window;
  }

  public getLocation(): Location {
    return this.document.location;
  }

  public createElement(tag: string): HTMLElement {
    return this.document.createElement(tag);
  }

  public getElement(element_id: string): HTMLElement {
    return this.document.getElementById(element_id) as HTMLElement;
  }

  public getQuerySelector(class_name: string): HTMLElement {
    return this.document.querySelector(class_name) as HTMLElement;
  }
}
