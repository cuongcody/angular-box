import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from '../../user.service';

const ORIGINAL_STYLE = style({ opacity: 0, right: '10px' });
const TARGET_STYLE = style({ opacity: 1, right: 0 });

@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('navigation', [
      transition(':enter', [ORIGINAL_STYLE, animate(400, TARGET_STYLE)]),
      transition(':leave', [animate(400, ORIGINAL_STYLE)])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @HostBinding('@navigation') public readonly open = true;

  public links = [{ path: '/table', text: 'Boxes' }];

  public constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.userService.authentication().valueChanges.subscribe();
  }
}
