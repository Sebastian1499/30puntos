# Demo de Validación y Errores HTTP

Este proyecto es una demostración interactiva de validación de formularios y manejo de errores HTTP en el desarrollo web frontend.

## Evolución del Proyecto

El proyecto ha pasado por dos versiones principales para mostrar la evolución y mejora del código:

1. **Versión Original** (`Ejemplo HTTP.html`):
   - Todo el código en un solo archivo
   - Funcional pero menos mantenible
   - Útil para referencia y comparación

2. **Versión Estructurada** (`index.html`):
   - Código separado en componentes
   - Mejor organización de archivos
   - Más fácil de mantener y escalar

Ambas versiones se mantienen en el repositorio para demostrar el proceso de mejora y refactorización.

## Características

- Validación de formularios en el lado del cliente
- Simulación de respuestas HTTP comunes
- Interfaz moderna y responsive
- Manejo de errores en tiempo real
- Demostración de códigos de estado HTTP

## Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (ES6+)
- Validación de formularios nativa

## Estructura del Proyecto

```
proyecto/
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # Lógica JavaScript
├── index.html          # Página principal
└── README.md          # Documentación
```

## Funcionalidades

### Formulario de Registro
- Validación de nombre (2-80 caracteres)
- Validación de email (formato correcto)
- Validación de edad (18-120 años)
- Validación de contraseña (mínimo 8 caracteres)
- Confirmación de contraseña

### Simulador HTTP
Demostración de códigos de estado HTTP comunes:
- 200 OK
- 201 Created
- 400 Bad Request
- 409 Conflict
- 422 Unprocessable Entity
- 500 Internal Server Error

## Uso

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Prueba el formulario de registro
4. Experimenta con los diferentes códigos HTTP

## Casos de Prueba

### Formulario de Registro
- Intenta registrar con email "ana@mail.com" (simulará error 409)
- Usa una contraseña que contenga el nombre (simulará error 422)
- Completa el formulario correctamente (simulará éxito 201)

## Contribución

Si deseas contribuir al proyecto:
1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.