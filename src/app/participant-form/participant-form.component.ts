import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant';
import { ParticipantDataService } from '../participant-data.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {

  phstrInitials: String = "Initials";
  phstrName: String = "Name";
  phstrAddress: String = "Address";
  phstrPreferredLanguage: String = "Preferred Language:";

  
  participant : Participant = new Participant('','','','');
  status: string = "";

  constructor(
    private participantDataService : ParticipantDataService
  ) { }

  ngOnInit() {  }

  newHandler(participant: Participant){
    this.participantDataService.putParticipant(participant)
      .subscribe(
        ()=> this.status = "Dato insertado en la BD"
      );
      this.status = "Insertado en la DB..."
      this.participant= new Participant('','','','');
  }
}

