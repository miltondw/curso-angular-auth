import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  isOpenOverlayCreateBoard = false;

  user$ = this.authService.user$;

 constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  close(event: boolean) {
    this.isOpenOverlayCreateBoard = event;
  }

  isValidToken() {
    console.log(this.tokenService.isValidToken());
  }

}
