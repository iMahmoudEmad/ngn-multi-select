<a href="https://github.com/imahmoudemad/ngn-multi-select">
    <h1 align="center">ngn-multi-select</h1>
</a>

Multi select component without any dependencies or third party libraries

<img src="./../../src/assets/1.png" alt="NgnMultiSelect Picture" width="500"/>
<img src="./../../src/assets/2.png" alt="NgnMultiSelect Picture" width="500"/>
<img src="./../../src/assets/3.png" alt="NgnMultiSelect Picture" width="500"/>

## Installation

install `ngn-multi-select` from `npm`

```bash
npm i ngn-multi-select --save
```

## Usage

Add the package to NgModule imports:

```python
import { NgnMultiSelectModule } from 'ngn-multi-select'

@NgModule({
  ...
  imports: [NgnMultiSelectModule]
  ...
});
```

Add component to your page:

```html
<ngn-multi-select
    (data)="outputData = $event" //return the selected array of Ids
    [id]="'your id'" //has default id "multiSelect"
    [inputValue]="'input search value'" //has default value ""
    [inputValuePlaceholder]="'input placeholder value'" //has default "Search by item"
    [selectedItems]="[your, array, of, ids, here]" //has default value []
    [autocomplete]="'off'" //has default value "off"
    [isShown]="false" //has default value "false"
    [lists]="lists">
</ngn-multi-select>
```
