# 🎬 Movie App

Aplicación móvil desarrollada con **React Native** que permite a los usuarios **buscar y ver información detallada sobre películas** utilizando la API de [The Movie Database (TMDb)](https://developer.themoviedb.org/).

## 📱 Funcionalidades

- 🔥 Pantalla principal con **películas populares**.
- 🔍 Búsqueda de películas por **título**.
- 📄 Visualización de **detalles de cada película**, incluyendo:
  - Título
  - Descripción
  - Fecha de lanzamiento
  - Calificación

## 🚀 Tecnologías Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/) – Para peticiones HTTP
- [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started) – Fuente de datos de películas

## 📦 Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/SergioRC-04/Movie-app.git
cd Movie-app
```
2. **Instala las dependencias:**

```bash
npm install
```

3. **Agrega tu API Key de TMDb:**

Crea un archivo .env en la raíz del proyecto y agrega tu API Key:

ini
Copiar
Editar
TMDB_API_KEY=tu_api_key_aqui

4. **Ejecuta el proyecto:**

```bash
npx expo start
```

> ⚠️ **Nota:** Por motivos de esta práctica, la cual corresponde a una prueba técnica para una vacante laboral, se ha dejado **temporalmente visible** la API Key de TMDb dentro del código. Esto es con el objetivo de **facilitar la ejecución y revisión del proyecto** por parte del evaluador. En un entorno de producción, esta clave debe mantenerse privada y no debe subirse al repositorio público.
