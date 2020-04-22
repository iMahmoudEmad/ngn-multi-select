import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgnMultiSelectComponent } from "./ngn-multi-select.component";
import { FormsModule } from "@angular/forms";
import { NgnFilterPipe } from "./ngn-filter.pipe";

@NgModule({
  declarations: [NgnMultiSelectComponent, NgnFilterPipe],
  imports: [BrowserModule, FormsModule],
  exports: [NgnMultiSelectComponent],
})
export class NgnMultiSelectModule {}
