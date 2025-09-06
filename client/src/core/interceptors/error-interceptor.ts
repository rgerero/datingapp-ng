import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastService } from '../services/toast-service';
import { NavigationExtras, Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const route = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error) {
        switch (error.status) {
          case 400:
            toast.error(error.error.errors ? Object.values(error.error.errors).flat().join(' ') : error.error);
            break;
          case 401:
            toast.error('Unauthorized');
            break;
          case 404:
            route.navigateByUrl('/not-found');  
            break;
          case 500:
            toast.error('Server error');
            const navigationExtras: NavigationExtras = { state: { error: error.error } };
            route.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            toast.error('Something unexpected went wrong');
            break;
        }
      }
      throw error;
    }
  ));
};
