import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsLogComponent } from './log/log.component';
import { StudentsLogViewComponent } from './log/view/view.component';

const COMPONENTS = [
  StudentsLogComponent];
const COMPONENTS_NOROUNT = [
  StudentsLogViewComponent];

@NgModule({
  imports: [
    SharedModule,
    StudentsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [
    StudentsLogComponent,
    StudentsLogViewComponent
  ]
})
export class StudentsModule { }
