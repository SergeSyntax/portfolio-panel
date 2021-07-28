import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColSimpleComponent } from '../col-simple/col-simple.component';
import { HostDirective } from '../host.directive';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() isSelection = true;
  @Input() isSort = true;
  columns = [
    { dataSourceKey: 'name', title: 'Name', component: ColSimpleComponent },
    { dataSourceKey: 'weight', title: 'Weight', component: ColSimpleComponent },
    { dataSourceKey: 'symbol', title: 'Symbol', component: ColSimpleComponent },
    { dataSourceKey: 'position', title: 'Position', component: ColSimpleComponent }
  ];
  displayedColumns: string[] = this.columns.map(col => col.dataSourceKey);

  getCols() {
    if (this.isSelection) return ['select', ...this.displayedColumns];
    else return this.displayedColumns;
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChildren(HostDirective) hosts!: QueryList<HostDirective>;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.hosts.forEach(item => this.loadTemplate(item));
      this.dataSource.sort = this.sort;
    }, 0);
  }

  loadTemplate(item: HostDirective) {
    const { column, element, viewContainerRef } = item;
    const ColComponent = column.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ColComponent);
    const eleRef: ComponentRef<any> = viewContainerRef.createComponent<any>(componentFactory);
    eleRef.instance.data = element[column.dataSourceKey];
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
