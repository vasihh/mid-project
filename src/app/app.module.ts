import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BagComponent } from './bag/bag.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


const appRouting : Routes = [
{path: "",component: HomeComponent},
{path:"women", component:WomenComponent},
{path:'men',component:MenComponent},
{path: "bag",component: BagComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    BagComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
