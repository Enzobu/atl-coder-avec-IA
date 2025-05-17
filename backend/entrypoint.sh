#!/bin/sh
set -e

# S'assurer que les dépendances sont installées
npm install

# Créer dossier pour SQLite si besoin
mkdir -p ./data

# Lancer l'app
node index.js
