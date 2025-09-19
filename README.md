

## 🔗 Table of Contents
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#-installation)

---

## 📍 Overview

## 📁 Project Structure

```sh
└── my-docker/
    ├── .github
    │   └── workflows
    ├── dev_first
    │   ├── .gitignore
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── jsconfig.json
    │   ├── next.config.mjs
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   └── src
    ├── docker-compose.yml
    └── service2
        ├── .gitignore
        ├── Dockerfile
        ├── index.js
        ├── package-lock.json
        └── package.json
```

### ⚙️ Installation

Install my-docker using one of the following methods:

**Build from source:**

1. Mkdir Docker on you local machine:


2. Navigate to the project directory:
```sh
❯ touch docker-compose.yml
```
3. Inside docker-compose.yml add below code:
```sh
❯  services:
  frontend:
    image: sssirius/dev_first:latest
    platform: linux/amd64
    container_name: dev_first_frontend
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_API_BASE: http://service2:5001
    depends_on:
      - service2

  service2:
    image: sssirius/service2:latest
    platform: linux/amd64
    container_name: dev_first_service2
    ports:
      - "5001:5001"
    environment:
      NODE_ENV: production
      PORT: 5001
```

2. Navigate to terminal and Run below cmd:
```sh
❯  docker compose up --build
```
