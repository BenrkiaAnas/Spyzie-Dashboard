import { TumblrComponent } from './donnees/ApplicationSocial/tumblr/tumblr.component';
import { FacebookLiteComponent } from './donnees/ApplicationSocial/facebook-lite/facebook-lite.component';
import { MessengerLiteComponent } from './donnees/ApplicationSocial/messenger-lite/messenger-lite.component';
import { TelegramComponent } from './donnees/ApplicationSocial/telegram/telegram.component';
import { HangoutsComponent } from './donnees/ApplicationSocial/hangouts/hangouts.component';
import { QQComponent } from './donnees/ApplicationSocial/qq/qq.component';
import { WeChatComponent } from './donnees/ApplicationSocial/we-chat/we-chat.component';
import { TinderComponent } from './donnees/ApplicationSocial/tinder/tinder.component';
import { KikComponent } from './donnees/ApplicationSocial/kik/kik.component';
import { ViberComponent } from './donnees/ApplicationSocial/viber/viber.component';
import { InstagramComponent } from './donnees/ApplicationSocial/instagram/instagram.component';
import { LINEComponent } from './donnees/ApplicationSocial/line/line.component';
import { SkypeComponent } from './donnees/ApplicationSocial/skype/skype.component';
import { SnapchatComponent } from './donnees/ApplicationSocial/snapchat/snapchat.component';
import { MessengerComponent } from './donnees/ApplicationSocial/messenger/messenger.component';
import { FacebookComponent } from './donnees/ApplicationSocial/facebook/facebook.component';
import { EnregistreurDeFrappeComponent } from './donnees/enregistreur-de-frappe/enregistreur-de-frappe.component';
import { CalendriersComponent } from './donnees/calendriers/calendriers.component';
import { MessagesComponent } from './donnees/messages/messages.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingCompenents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { AlerteComponent } from './alerte/alerte.component';
import { CompteComponent } from './compte/compte.component';
import { AppelsComponent } from './Donnees/appels/appels.component';
import { PositionsComponent } from './Donnees/positions/positions.component';
import { GeofencingComponent } from './Donnees/geofencing/geofencing.component';
import { PrendreCapEcranComponent } from './Donnees/prendre-cap-ecran/prendre-cap-ecran.component';
import { CaptureIntelligenteComponent } from './Donnees/capture-intelligente/capture-intelligente.component';
import { PhotosComponent } from './Donnees/photos/photos.component';
import { ApercuVideoComponent } from './Donnees/apercu-video/apercu-video.component';
import { VoixComponent } from './Donnees/voix/voix.component';
import { DocumentsComponent } from './Donnees/documents/documents.component';
import { EmailComponent } from './Donnees/email/email.component';
import { ContactsComponent } from './Donnees/contacts/contacts.component';
import { HistoriqueComponent } from './Donnees/historique/historique.component';
import { PressePapiersComponent } from './Donnees/presse-papiers/presse-papiers.component';
import { EnregistreurWifiComponent } from './Donnees/enregistreur-wifi/enregistreur-wifi.component';
import { AppBlockComponent } from './Donnees/app-block/app-block.component';
import { TempsDarretComponent } from './Donnees/temps-darret/temps-darret.component';
import { ActiviteDapplicationComponent } from './Donnees/activite-dapplication/activite-dapplication.component';
import { ApplicationSocialComponent } from './Donnees/application-social/application-social.component';
import { WhatsappComponent } from './Donnees/ApplicationSocial/whatsapp/whatsapp.component';
import { FichiersDeWhatsappComponent } from './Donnees/ApplicationSocial/fichiers-de-whatsapp/fichiers-de-whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingCompenents,
    DashbordComponent,
    CalendrierComponent,
    AlerteComponent,
    CompteComponent,
    AppelsComponent,
    PositionsComponent,
    GeofencingComponent,
    PrendreCapEcranComponent,
    CaptureIntelligenteComponent,
    PhotosComponent,
    ApercuVideoComponent,
    VoixComponent,
    DocumentsComponent,
    EmailComponent,
    ContactsComponent,
    HistoriqueComponent,
    PressePapiersComponent,
    EnregistreurWifiComponent,
    AppBlockComponent,
    TempsDarretComponent,
    CalendriersComponent,
    EnregistreurDeFrappeComponent,
    ActiviteDapplicationComponent,
    ApplicationSocialComponent,
    WhatsappComponent,
    FichiersDeWhatsappComponent,
    FacebookComponent,
    MessengerComponent,
    SnapchatComponent,
    SkypeComponent,
    LINEComponent,
    InstagramComponent,
    ViberComponent,
    KikComponent,
    TinderComponent,
    WeChatComponent,
    QQComponent,
    HangoutsComponent,
    TelegramComponent,
    MessengerLiteComponent,
    FacebookLiteComponent,
    TumblrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Messages', component: MessagesComponent },
      { path: 'Dashbord', component: DashbordComponent },
      { path: '', component: DashbordComponent },
      { path: 'Whatsapp', component: WhatsappComponent },
      { path: 'Fichiers-de-Whatsapp', component: FichiersDeWhatsappComponent },
      { path: 'Facebook', component: FacebookComponent },
      { path: 'Messenger', component: MessengerComponent },
      { path: 'Snapchat', component: SnapchatComponent },
      { path: 'Skype', component: SkypeComponent },
      { path: 'LINE', component: LINEComponent },
      { path: 'Instagram', component: InstagramComponent },
      { path: 'Viber', component: ViberComponent },
      { path: 'Kik', component: KikComponent },
      { path: 'Tinder', component: TinderComponent },
      { path: 'WeChat', component: WeChatComponent },
      { path: 'QQ', component: QQComponent },
      { path: 'Hangouts', component: HangoutsComponent },
      { path: 'Telegram', component: TelegramComponent },
      { path: 'Messenger-Lite', component: MessengerLiteComponent },
      { path: 'Facebook-Lite', component: FacebookLiteComponent },
      { path: 'Tumblr', component: TumblrComponent },
      { path: 'Calendrier', component: CalendrierComponent },
      { path: 'Alerte', component: AlerteComponent },
      { path: 'Compte', component: CompteComponent },
      { path: 'Appels', component: AppelsComponent },
      { path: 'Positions', component: PositionsComponent },
      { path: 'Geofencing', component: GeofencingComponent },
      { path: 'Enregistreur-de-frappe', component: EnregistreurDeFrappeComponent },
      { path: 'Prend-les-captures-d\'ecrans', component: PrendreCapEcranComponent },
      { path: 'Photos', component: PhotosComponent },
      { path: 'Apercu-de-la-video', component: ApercuVideoComponent },
      { path: 'Voix', component: VoixComponent },
      { path: 'Document', component: DocumentsComponent },
      { path: 'E-mail', component: EmailComponent },
      { path: 'Contacts', component: ContactsComponent },
      { path: 'Historique-du-navigateur', component: HistoriqueComponent },
      { path: 'Calendriers', component: CalendriersComponent },
      { path: 'Presse-papiers', component: PressePapiersComponent },
      { path: 'Enregisteur-de-WIFI', component: EnregistreurWifiComponent },
      { path: 'App-Block', component: AppBlockComponent },
      { path: 'Temps-d\'arret', component: TempsDarretComponent },
      { path: 'Activité-de-l\'application', component: ActiviteDapplicationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
