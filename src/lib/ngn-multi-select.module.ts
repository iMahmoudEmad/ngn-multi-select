import { NgModule } from '@angular/core';
import { NgnMultiSelectComponent } from './ngn-multi-select.component';
import { NgnFilterPipe } from './ngn-filter.pipe';

@NgModule({
	declarations: [NgnMultiSelectComponent, NgnFilterPipe],
	exports: [NgnMultiSelectComponent],
})
export class NgnMultiSelectModule {}
