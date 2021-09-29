# PunchclockAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Beschreibung
Mit Punchclock können Benutzer ihre Ankunfts- und Gehzeiten erfassen.
Benutzer können auch ihre Einträge noch nachbearbeiten oder löschen.
Auf `/home` seite, wird, falls vorhanden, der aktuelle Eintrag für den Rest des Tages angezeigt.

Administratoren können Benutzer innerhalb ihrer Firma verwalten und deren Einträge dazu.

Die Benutzerverwaltung für Administratoren und Super-Administratoren ist auf `/users` verfügbar.

Die Eintragsverwaltung für alle Benutzer ist auf `/entries` verfügbar.

Super-Administratoren können zusätzlich noch Firem auf `/companies` verwalten.

*Die Pfäde sind nur für das Angular-Frontend gemeint
