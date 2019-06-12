import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpringbootAngularSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SpringbootAngularSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SpringbootAngularSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringbootAngularSharedModule {
  static forRoot() {
    return {
      ngModule: SpringbootAngularSharedModule
    };
  }
}
