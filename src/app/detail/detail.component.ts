import { Component, OnInit,Input  } from '@angular/core';
import { Participant } from '../model/participant';
import { ParticipantDataService } from '../participant-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()InParticipant : Participant;
  constructor(
    private participantDataService : ParticipantDataService
  ) { }
    
  
  participant : Participant = new Participant('','','','');
  status = "";
  ngOnInit() {
  }

  
  deleteHandler(participant1: string){
    this.status = "Eliminando registro";
    console.log(participant1);
    this.participantDataService.deleteParticipants(participant1)
      .subscribe(
        ()=> this.status = "Registro eliminado de la BD"
      );
      this.participant = new Participant('','','','');
  }
}