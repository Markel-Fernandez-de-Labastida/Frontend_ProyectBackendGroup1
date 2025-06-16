# **PROYECTO BACKEND Grupo 1**

## Frontend

---

## Puesta en marcha de la app

1. Clonar el repositorio

```shell

git clone https://github.com/Markel-Fernandez-de-Labastida/Frontend_ProyectBackendGroup1.git

```

2. Duplicar .env-template y renombra a .env

3. Instalar dependencias

- Express.
- ejs.
- cors.
- dotenv.
- bcrypt.
- cookie-parser
- node-fetch (en caso de errores buscar node-fetch v2)

```shell
npm install
```

---

### Endpoints

Endpoints generales de la app:

- [GET] `/` Vista de inicio de la app
- [GET] `/dashboard` Panel de control
- [GET] `/search/:title` Vista detalle de la película
- [GET] `/search` Buscador de películas
- [GET] `/movies` Mis películas
- [POST] `/signup` Registrarse en la aplicación
- [POST] `/login` Hacer login en la aplicación
- [POST] `/logout` Salir
- [POST] `/createMovie` Crear película
- [PUT] `/editMovie/:id` Editar película
- [DELETE] `/removeMovie` Borrar película
- [GET] `/recoverpassword` Recuperar password
- [GET] `/restorepassword` Cambiar password

---

### Middlewares

Middlewares generales:

- Proteger ruta del front para que
  no se pueda acceder al
  controlador escribiendo la ruta
  manualmente.

---

### Controllers

Authentications:

- Renderizar vistas, formularios, errores

Movies:

- Renderizar vistas

---

### Rutas

Authentication:

- log in
- sing up
- log out

Movies:

- Buscar película
- Crear película
- Modificar película
- Eliminar película

---

### Views

Vistas:

- Página de inicio / login
- Registro
- Recuperar contraseña
- Cambiar contraseña
- Dashboard
- Buscador
- Detalles película
- Mis películas
- Gestión de películas
- Crear película
- Editar película

---

### Utils

Utils:

- Fetch
