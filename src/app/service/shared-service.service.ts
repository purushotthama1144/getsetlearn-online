import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private navigationUrlSource = new BehaviorSubject<string>('');
  currentNavigationUrl = this.navigationUrlSource.asObservable();

  private navigationMenuName = new BehaviorSubject<string>('');
  currentNavigationMenu = this.navigationMenuName.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const initialUrl = localStorage.getItem('navigationUrl') || '';
      const initialName = localStorage.getItem('navigationName') || '';
      this.navigationUrlSource.next(initialUrl);
      this.navigationMenuName.next(initialName);
    }
  } 

  setNavigationUrl(url: string) {
    this.navigationUrlSource.next(url);
    localStorage.setItem('navigationUrl', url); // Persist to localStorage
  }

  setNavigationName(name: string) {
    this.navigationMenuName.next(name);
    localStorage.setItem('navigationName', name); // Persist to localStorage
  }
}