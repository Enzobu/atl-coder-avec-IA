# 🧠 Compteur React + Express + SQLite (sous Docker)

Ce projet est une démonstration simple d’un **compteur** avec :

- Frontend : React (Vite)
- Backend : Express (Node.js)
- Base de données : SQLite (embarqué)
- Conteneurisation : Docker & Docker Compose

---

## 📦 Fonctionnalités

- `GET /counter` → retourne la valeur actuelle
- `POST /counter/increment` → incrémente le compteur
- `POST /counter/reset` → remet le compteur à zéro

---

## 🚀 Lancer le projet

### 1. Cloner le repo

```bash
git clone https://github.com/Enzobu/atl-coder-avec-IA.git
cd atl-coder-avec-IA
```

### 2. Lancer le projet avec Docker Compose

```bash
docker compose up -d --build
```

---

## Accès :

- Frontend : [http://localhost:5173](http://localhost:5173)

- Backend : [http://localhost:3001](http://localhost:3001)