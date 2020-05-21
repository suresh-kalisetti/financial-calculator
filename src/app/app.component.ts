import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  canExit = false;
  selectedIndex = 0;
  public appPages = [
    {
      title: 'EMI Calculator',
      url: '/emi-calculator'
    },
    {
      title: 'FD Calculator',
      url: '/fd-calculator'
    },
    {
      title: 'RD Calculator',
      url: '/rd-calculator'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toastController: ToastController
  ) {
    this.initializeApp();
    this.initAppExit();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  initAppExit() {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(0, () => {
        if (this.canExit) {
          navigator['app'].exitApp();
        }
        else {
          this.presentExitToast();
          this.canExit = true;
          setTimeout(() => {
            this.canExit = false;
          }, 3000);
        }
      })
    }
  }

  async presentExitToast() {
    const toast = await this.toastController.create({
      message: 'Press back again to exit',
      duration: 2000
    });
    toast.present();
  }

}
