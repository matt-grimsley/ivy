import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { AddCardComponent } from './add-card/add-card.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BaseCardComponent,
    DragDropComponent,
    ToolbarComponent,
    CardStackComponent,
    CardDisplayComponent,
    AddCardComponent,
    RemoveCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
