# PWA = Progressive Web App

Progressive veut dire qu'on affiche rapidement la structure et ensuite on va enrichir la structure avec les données

Le but est de faire des applications basé sur la technologie Web. Pour l'utilisateur ça va vraiment ressembler a une app native. Mais c'est que de l'html css js.

L'objectif est que l'application est installable. Quand on va être sur le site, on va proposer d'installer l'application. On ne verra plus l'URL mais ce sera un site web.

# Inspecteur d'élément
On va beaucoup utiliser l'onglet "Application".

## WebView

On va la démarrer dans le webView du navigateur mais sans être dans le navigateur (/!\ il y a quand même les contraintes du navigateur /!\)

On peut accéder aux différentes ressources du téléphone (accéléromètre, batterie, ....) via des api JS 

## Cache
On peut utiliser le cache du navigateur pour stocker des données en cache et donc avoir les ressources nécessaires pour faire tourner l'App sans internet

## Notification
On peut recevoir des notifications. Il y a en de 2 types :

### Locales
C'est l'app Js où par exemple, si on a un timer qui arrive à 0, on ferme l'app et quand le timer arrive à 0, une notification nous prévients. L'app DOIT être ouverte pour recevoir les notifications

### distantes (Push)
Il faut utiliser un provider de notifications. C'est pas le serveur de l'App qui envoit la notification mais un intermédiaire (le provider) qui envoit une notification a ses clients. Et donc l'app ne DOIT PAS être ouverte pour recevoir les notifications

## Actualisation en arrière-plan
C'est de l'actualisation en arrière-plan qui est asynchrone ou bien l'app est fermée mais on pourrait la mettre à jour, même si on ne l'ouvre pas.

# Etapes

1) Rendre notre app installable
2) Ajouter un bouton pour l'installer
3) Rendre notre App accessible Offline
4) Préparer l'app pour les notifications
 4.1) Utiliser les notifications locales
 4.2) Utiliser les notifications Pushs 

# Rendre l'app installable

Il faut créer un manifest.json