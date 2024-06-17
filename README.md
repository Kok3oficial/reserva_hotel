# Gestión de Reservas de Hoteles
<img src="https://www.clubdelectores.cl/wp-content/uploads/1683552395-36.jpg">
Esta es una aplicación de servicios para la gestión de reservas en hoteles, desarrollada con Node.js y Express.

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` en la raíz del proyecto y define el puerto:
    ```
    PORT=3000
    ```
4. Ejecuta `npm start` para iniciar el servidor.

## Endpoints

### Crear reserva
- **Método:** POST
- **Endpoint:** `/api/reservas`
- **Ejemplo de uso:**
    ```json
    {
        "hotel": "Hotel Paraíso",
        "fecha": "2023-05-15",
        "tipo_habitacion": "doble",
        "estado": "confirmada",
        "num_huespedes": 3,
        "detalles": "Habitación para dos adultos y un niño"
    }
    ```

### Obtener la lista de reservas
- **Método:** GET
- **Endpoint:** `/api/reservas`

### Obtener información de una reserva específica
- **Método:** GET
- **Endpoint:** `/api/reservas/:id`

### Actualizar información de una reserva
- **Método:** PUT
- **Endpoint:** `/api/reservas/:id`

### Eliminar una reserva específica
- **Método:** DELETE
- **Endpoint:** `/api/reservas/:id`

### Filtrar reservas por hotel
- **Método:** GET
- **Endpoint:** `/api/reservas?hotel=HOTEL`

### Filtrar reservas por rango de fechas
- **Método:** GET
- **Endpoint:** `/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN`

### Filtrar reservas por tipo de habitación
- **Método:** GET
- **Endpoint:** `/api/reservas?tipo_habitacion=TIPO_HABITACION`

### Filtrar reservas por estado
- **Método:** GET
- **Endpoint:** `/api/reservas?estado=ESTADO`

### Filtrar reservas por número de huéspedes
- **Método:** GET
- **Endpoint:** `/api/reservas?num_huespedes=NUM_HUESPEDES`

## Contribuir
- La aplicación es de codigo abierto y cualquier modificación para su mejora es bienvenida. Muchas gracias por apoyar el proyecto.

####Created by koke1oficial
- 
