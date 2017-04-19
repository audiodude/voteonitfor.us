import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
  pollId: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.pollId = params['pollId'];
    })
  }
  
  ngOnInit() {
  }

}
