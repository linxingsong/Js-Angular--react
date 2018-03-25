import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params }from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Client } from "../../models/Client";
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.clientService.getClient(this.id).subscribe(client => {
      if(client != null) {
        if(client.balance > 0) {
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }

  updateBalance(){
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updatred',{
      cssClass:'alert-success', timeout: 4000
    });
  }

  onDeleteClick(){
    if(confirm('are you sure?')){
      this.clientService.deleteClient(this.client);
      this.flashMessage.show('Client removed',{
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }
}
