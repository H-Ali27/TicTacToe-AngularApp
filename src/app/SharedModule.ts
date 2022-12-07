import { NgModule } from "@angular/core";
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';

@NgModule({
    imports:[
        ButtonModule,
        MenuModule 
    ],
    exports:[ButtonModule]
})
export class sharedModule{

}