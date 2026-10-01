# Sistema de Gestión de Tareas (To-Do App) - DevOps

Aplicación web simple de gestión de tareas desarrollada como evidencia de implementación de prácticas DevOps: control de versiones, integración continua, contenedores, infraestructura como código y entrega continua.

## Tecnologías

- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL
- **Contenedores:** Docker
- **CI/CD:** GitHub Actions
- **Cloud + IaC:** Render.com (render.yaml)

## Estructura del proyecto

- `.github/workflows/` → Pipeline CI/CD
- `src/` → Código fuente de la aplicación
- `src/public/` → Frontend (HTML, CSS, JS)
- `tests/` → Pruebas automatizadas
- `Dockerfile` → Definición de la imagen del contenedor
- `docker-compose.yml` → Orquestación local
- `render.yaml` → Infraestructura como Código
- `package.json` → Dependencias del proyecto

## Ejecución local

```bash
 npm install
 npm start