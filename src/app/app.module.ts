import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Components
import { TimerComponent } from './timer/timer.component';
import { NumberSelectorComponent } from './number-selector/number-selector.component';
import { NumberDisplayerComponent } from './number-displayer/number-displayer.component';

// Routes
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'timer' },
  { path: '/timer', component: TimerComponent },
];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    NumberDisplayerComponent,
    NumberSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    appRouting,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
