import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdown } from 'src/app/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-list',
  styleUrls: ['./item-list.component.scss'],
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  public color: IDropdown[];
  public detailsForm: FormGroup;
  public formClicked = false;
  public size: IDropdown[];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      console.error(param.get('id'));
    });

    this.detailsForm = this.buildDetailsForm();

    this.color = [
      {
        name: 'White',
        value: 'white'
      }
    ];

    this.size = [
      {
        name: 'Medium',
        value: 'medium'
      },
      {
        name: 'Large',
        value: 'large'
      }
    ];
  }

  private buildDetailsForm(): FormGroup {
    return this.formBuilder.group({
      color: ['', Validators.required],
      quantity: [1, Validators.required],
      size: ['', Validators.required]
    });
  }

  public addCart(): void {
    const { color, quantity, size } = this.detailsForm.value;

    console.error(color, quantity, size);
  }
}
