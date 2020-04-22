import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ngn-multi-select",
  template: `
    <div class="select">
      <div class="select__container">
        <div
          class="select__selected-items"
          *ngIf="selectedItems.length"
          (click)="deletelists()"
        >
          <span class="selected-length">
            {{
              selectedItems.length <= 1 ? firstItemSelect : selectedItems.length
            }}
            {{ selectedItems.length > 1 ? "selected" : "" }}
          </span>
          <span class="delete-icon">&#10006;</span>
        </div>

        <input
          type="text"
          name="select"
          class="select__input"
          [(ngModel)]="inputValue"
          [autocomplete]="autocomplete"
          [placeholder]="inputValuePlaceholder"
          (click)="selectItem()"
        />
      </div>

      <ul class="select__list scrollbar" *ngIf="isShown">
        <li
          *ngFor="let list of lists | filter: inputValue"
          (click)="listsuggestion(list)"
          [class.selected]="isSelected(list)"
        >
          {{ list.name }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./ngn-multi-select.component.scss"],
})
export class NgnMultiSelectComponent {
  @Input() id = "multiSelect";
  @Input() inputValue = "";
  @Input() inputValuePlaceholder = "Search by item";
  @Input() lists;
  @Input() selectedItems = [];
  @Input() autocomplete = "off";
  @Input() isShown = false;
  @Output() data = new EventEmitter();
  firstItemSelect: string;

  selectItem() {
    this.isShown = true;
  }

  isSelected(selectedItem: any) {
    return this.selectedItems.findIndex((id) => id === selectedItem.id) > -1
      ? true
      : false;
  }

  listsuggestion(selectedItem) {
    if (this.selectedItems.length === 0) {
      this.firstItemSelect = selectedItem.name;
    }
    this.selectedItems.find((id) => id === selectedItem.id)
      ? (this.selectedItems = this.selectedItems.filter(
          (id) => id !== selectedItem.id
        ))
      : this.selectedItems.push(selectedItem.id);

    this.data.emit(this.selectedItems);
  }

  deletelists() {
    this.selectedItems = [];
    this.firstItemSelect = "";
    this.data.emit(this.selectedItems);
  }
}
