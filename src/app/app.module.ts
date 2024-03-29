import { AuthGuard } from './core/auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
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
//import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, RoutingCompenents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { AlerteComponent } from './alerte/alerte.component';
import { CompteComponent } from './compte/compte.component';
import { AppelsComponent } from './donnees/appels/appels.component';
import { PositionsComponent } from './donnees/positions/positions.component';
import { GeofencingComponent } from './donnees/geofencing/geofencing.component';
import { PrendreCapEcranComponent } from './donnees/prendre-cap-ecran/prendre-cap-ecran.component';
import { CaptureIntelligenteComponent } from './donnees/capture-intelligente/capture-intelligente.component';
import { PhotosComponent } from './donnees/photos/photos.component';
import { ApercuVideoComponent } from './donnees/apercu-video/apercu-video.component';
import { VoixComponent } from './donnees/voix/voix.component';
import { DocumentsComponent } from './donnees/documents/documents.component';
import { EmailComponent } from './donnees/email/email.component';
import { ContactsComponent } from './donnees/contacts/contacts.component';
import { HistoriqueComponent } from './donnees/historique/historique.component';
import { PressePapiersComponent } from './donnees/presse-papiers/presse-papiers.component';
import { EnregistreurWifiComponent } from './donnees/enregistreur-wifi/enregistreur-wifi.component';
import { AppBlockComponent } from './donnees/app-block/app-block.component';
import { TempsDarretComponent } from './donnees/temps-darret/temps-darret.component';
import { ActiviteDapplicationComponent } from './donnees/activite-dapplication/activite-dapplication.component';
import { WhatsappComponent } from './donnees/ApplicationSocial/whatsapp/whatsapp.component';
import { FichiersDeWhatsappComponent } from './donnees/ApplicationSocial/fichiers-de-whatsapp/fichiers-de-whatsapp.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

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
    TumblrComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Messages', component: MessagesComponent },
      { path: 'Dashbord', component: DashbordComponent },
      { path: 'login', component: LoginComponent },
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
      { path: 'Activité-de-l\'application', component: ActiviteDapplicationComponent },
      { path: 'user', component: UserComponent, resolve: { data: UserResolver } }
    ])
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
