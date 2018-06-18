import { Component, OnInit } from '@angular/core';
import { NameListComponent } from '../name-list/name-list.component';
import { DetailComponent } from '../detail/detail.component';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  fromChildParticipant : Participant;

  constructor() { 
    this.fromChildParticipant =  new Participant('','','','');
  }

  fromChildParticipantHandler(event){
    this.fromChildParticipant = event;
  }
  ngOnInit() {
  }

}
