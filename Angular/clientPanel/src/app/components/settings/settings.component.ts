import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/Setting';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private SettingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settings = this.SettingsService.getSettings();
  }

  onSubmit(){
    this.SettingsService.changeSettings(this.settings);
    this.flashMessage.show('Setting saved.', {
      cssClass: 'alert-success', timeout: 4000
    });
  }
}
