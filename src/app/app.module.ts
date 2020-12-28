import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { EntityStoreModule } from './store/entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import {
  ErrorInterceptor,
  HttpRequestInterceptor,
  LoaderInterceptor,
  LoggerInterceptor
} from './core/interceptor';
import { GlobalErrorHandlerUtil } from './core/util';
import { HeaderModule } from './shared/header/header.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConfirmDialogModule,
    EntityStoreModule,
    HeaderModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
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
      useClass: LoaderInterceptor
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
