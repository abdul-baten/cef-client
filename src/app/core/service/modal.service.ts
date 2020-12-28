import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Injectable } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/container/loader.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialogRef: DynamicDialogRef = new DynamicDialogRef();
  private counter = 0;

  constructor(private readonly dialogService: DialogService) { }

  public openLoader(): Observable<DynamicDialogRef> {
    this.counter += 1;

    if (this.counter === 1) {
      this.dialogRef = this.dialogService.open(LoaderComponent, {
        autoZIndex: true,
        baseZIndex: 10001,
        closable: false,
        contentStyle: { padding: '1.25rem' },
        dismissableMask: false,
        showHeader: false,
        style: { 'box-shadow': 'none' }
      });
    }

    return of(this.dialogRef);
  }

  public closeLoader(dialog: DynamicDialogRef): void {
    this.counter -= 1;

    if (this.counter === 0) {
      dialog.destroy();
    }
  }
}
