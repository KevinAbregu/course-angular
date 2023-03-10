import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { LoggingService } from "./logging.service";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

@NgModule({
    providers: [
        RecipesResolverService,
        AuthService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        LoggingService
    ]
})
export class CoreModule { }