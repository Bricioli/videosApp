import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    titulo = 'Videos App';
    listaVideos: IFilme[] = [
      {
        nome:'Spider Man - No way home',
        lancamento: '16/12/2021',
        duracao: '2h 28m',
        classificacao: 84,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
      },
      {
        nome:'Encanto',
        lancamento: '24/11/2021',
        duracao: '1h 42m',
        classificacao: 74,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'
      },
      {
        nome:'Alerta Vermelho',
        lancamento: '05/11/2021',
        duracao: '1h 57m',
        classificacao: 68,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg'
      }
    ];

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente <strong>favoritar</strong> o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      position: 'top',
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
