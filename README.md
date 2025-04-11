# 🏍️ Proyecto Progresivo JavaScript: Motorcycle API

Este proyecto tiene como objetivo desarrollar una aplicación web que permita a los usuarios explorar información técnica de motocicletas de distintas marcas y modelos. A través de una interfaz intuitiva y dinámica, el usuario puede filtrar motos según su interés, visualizar sus detalles técnicos, y finalmente dejar sus datos de contacto para recibir asesoramiento personalizado.

## 📌 Descripción del Proyecto

La principal función de esta página web es mostrar datos técnicos sobre motocicletas, ofrecidos por una API pública. 

### ¿Cómo funciona?

1. En la página principal, el usuario encuentra una selección de marcas de motocicletas populares.
2. Al hacer clic sobre una marca, es redirigido a una página específica donde puede ver todos los modelos disponibles de esa marca.
3. Se puede realizar un filtrado adicional por nombre de modelo o año, de acuerdo a las preferencias del usuario.
4. Una vez que el usuario encuentra una motocicleta que se ajusta a sus necesidades, puede presionar el botón de contacto.
5. Al hacerlo, es redirigido a un formulario donde deja sus datos personales.
6. Esa información es almacenada en `LocalStorage` y posteriormente puede ser revisada por el personal encargado para establecer contacto con el usuario.

---

## 📡 API Utilizada

Se utiliza la **API de API Ninjas - Motorcycle API**, que proporciona datos técnicos de motocicletas desde el año 1930 hasta la actualidad.

- URL base: `https://api.api-ninjas.com/v1/motorcycles`
- Parámetros utilizados:
  - `make` (marca)
  - `model` (modelo)
  - `year` (año)

---

## 💾 Tecnologías Utilizadas

- **HTML5**
- **CSS**
- **JavaScript (Vanilla JS)**
- **LocalStorage**
- **API pública**

---

## 🧩 Funcionalidades

- Visualización de motocicletas por marca.
- Filtro por modelo y año.
- Vista detallada con información técnica.
- Formulario de contacto para que el usuario deje sus datos.
- Almacenamiento de los mensajes del usuario en `localStorage`.
- Sección de administrador para visualizar y eliminar los mensajes recibidos.
- Diseño responsivo para móvil y escritorio.

---

## 🖥️ Cómo Ejecutar el Proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/JhonIsaacMedinaMendoza08/project-MotorCycle-Api-JavaScript.git
