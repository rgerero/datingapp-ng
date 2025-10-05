import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../../../models/member';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-detailed',
  imports: [AsyncPipe],
  templateUrl: './member-detailed.html',
  styleUrl: './member-detailed.css'
})
export class MemberDetailed implements OnInit {
  private memberService = inject(MemberService);
  private route = inject(ActivatedRoute);
  protected members$?: Observable<Member>;

  ngOnInit(): void {
    this.members$ = this.loadMember();
  }

  loadMember(){
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    return this.memberService.getMember(id);
  }

}
