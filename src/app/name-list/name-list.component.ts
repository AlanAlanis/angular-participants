import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ParticipantDataService } from '../participant-data.service';
import { Participant } from '../model/participant';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
 
  @Output()outParticipant: EventEmitter<Participant> = new EventEmitter<Participant>();
  
  arrparticipant: Participant[];

  constructor(
    private participantDataService : ParticipantDataService
  ) {  }

  ngOnInit() {
    this.participantDataService.getParticipants()
    .subscribe((participantsData)=>this.arrparticipant = participantsData); 
  }

  clickParticipantHandler(participant){
    this.outParticipant.emit(participant);
  }
  
}
