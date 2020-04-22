import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class NgnFilterPipe implements PipeTransform {
  transform(items: any[], keyword: string): any {
    return items.filter(
      item => item.name.toLowerCase().indexOf(keyword) !== -1
    );
  }
}
