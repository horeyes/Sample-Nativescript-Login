import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";

@Component({
    selector: "test",
    template: `<Label text="Prescription" class = "text" textWrap="true"></Label>`,
  
})
export class AccordionComponent {
  
}
@NgModule({
    declarations: [
        AccordionComponent,
    
    ],
    exports: [
        AccordionComponent,
       
    ]
})
export class AccordionModule { }
