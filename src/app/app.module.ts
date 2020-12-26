import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EntityStoreModule } from './store/entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor, HttpRequestInterceptor, LoggerInterceptor } from './core/interceptor';
import { GlobalErrorHandlerUtil } from './core/util';
import { HeaderModule } from './shared/header/header.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EntityStoreModule,
    HeaderModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    MessageService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerUtil
    }
  ]
})
export class AppModule {}
