## Installation

Cloner ou télécharger le projet.

Après cela, télécharger les dépendances, en excécutant les commandes suivantes dans le projet :

```bash
yarn add
```

Pour tester le projet, vous aurez aussi besoin, de créer un fichier .**_env.local_** à la racine du projet.

Dans ce fichier, vous devrez rajouter les variables d'environnements suivantes :

```
NEXT_PUBLIC_FIREBASE_API_KEY= ''
NEXT_PUBLIC_AUTH_DOMAIN= ''
NEXT_PUBLIC_PROJECT_ID= ''
NEXT_PUBLIC_STORAGE_BUCKET= ''
NEXT_PUBLIC_MESSAGING_SENDER_ID= ''
NEXT_PUBLIC_APP_ID= ''
NEXT_PUBLIC_MEASUREMENT_ID= ''
```

Pour pouvoir compléter ces variables d'environnements, contactez-moi, je vous les partagerai car ce sont des données sensibles.

Enfin, lancer la projet en excécutant la commande suivante :

```bash
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Déploiement

L'application est déployé sur Vercel sous le nom de [Nexalt](https://nexalt.vercel.app/).
