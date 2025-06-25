# 🚗 API REST - Concesionario (NestJS + MySQL)

Este proyecto implementa una **API RESTful** con [NestJS](https://nestjs.com/) que permite administrar las operaciones de un **concesionario de carros**, incluyendo:

- Registro de clientes
- Gestión de vehículos
- Control de repuestos
- Registro de historial de compras (relación entre cliente, carro y repuesto)

El objetivo es facilitar un backend robusto, escalable y organizado para manejar toda la información del concesionario.

---

## 🧰 Librerías utilizadas

| Paquete                | Descripción                                                |
|------------------------|------------------------------------------------------------|
| `@nestjs/common`       | Núcleo del framework NestJS                                |
| `@nestjs/core`         | Motor de ejecución NestJS                                  |
| `@nestjs/config`       | Carga y lectura de variables de entorno desde `.env`       |
| `@nestjs/typeorm`      | Integración con TypeORM                                    |
| `mysql2`               | Driver para conexión a base de datos MySQL                 |
| `class-validator`      | Validaciones para DTOs                                     |
| `class-transformer`    | Transformación de datos entre clases y objetos simples     |

---

## ⚙️ Instalación del proyecto

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/concesionario-nestjs.git
cd concesionario-nestjs
2. Instala las dependencias
npm install
3. Crea un archivo .env en la raíz con el siguiente contenido:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=concesionario

⚠️ Asegúrate de que tu base de datos concesionario exista en http://localhost/phpmyadmin. NestJS y TypeORM crearán automáticamente las tablas necesarias con base en las entidades.

4. Inicia el servidor en modo desarrollo
npm run start:dev
🧾 Comando útil adicional
Para aplicar formato y lint:

npm run totalformat
Este comando ejecuta:

npm run format && npm run lint
🔍 Entidades y rutas disponibles
A continuación se explican cada entidad, su propósito, y los campos necesarios para realizar las operaciones.

📘 Clientes
Ruta base: http://localhost:3000/clientes

Campo	Tipo	Requerido	Descripción
nombre	string	✔️	Nombre completo del cliente
email	string	✔️	Correo electrónico único
telefono	string	❌	Número de teléfono (opcional)

Rutas disponibles:
Método	Ruta	Funcionalidad
GET	/clientes	Listar todos los clientes
GET	/clientes/:id	Obtener un cliente por ID
POST	/clientes	Crear nuevo cliente
PATCH	/clientes/:id	Actualizar un cliente
DELETE	/clientes/:id	Eliminar un cliente

🚘 Carros
Ruta base: http://localhost:3000/carros

Campo	Tipo	Requerido	Descripción
marca	string	✔️	Marca del vehículo (Ej: Toyota)
modelo	string	✔️	Modelo del vehículo (Ej: Corolla)
año	number	✔️	Año de fabricación
clienteId	number	✔️	ID de cliente al que pertenece el vehículo

Rutas disponibles:
Método	Ruta	Funcionalidad
GET	/carros	Listar todos los carros
GET	/carros/:id	Obtener un carro por ID
POST	/carros	Crear nuevo carro (requiere clienteId)
PATCH	/carros/:id	Actualizar un carro
DELETE	/carros/:id	Eliminar un carro

🛠️ Repuestos
Ruta base: http://localhost:3000/repuestos

Campo	Tipo	Requerido	Descripción
nombre	string	✔️	Nombre del repuesto (Ej: batería)
precio	decimal	✔️	Precio del repuesto

Rutas disponibles:
Método	Ruta	Funcionalidad
GET	/repuestos	Listar todos los repuestos
GET	/repuestos/:id	Obtener un repuesto por ID
POST	/repuestos	Crear nuevo repuesto
PATCH	/repuestos/:id	Actualizar un repuesto
DELETE	/repuestos/:id	Eliminar un repuesto

📦 Historial de Compras
Ruta base: http://localhost:3000/historial

Campo	Tipo	Requerido	Descripción
clienteId	number	✔️	ID del cliente que realiza la compra
carroId	number	✔️	ID del carro involucrado en la compra
repuestoId	number	✔️	ID del repuesto adquirido
cantidad	number	✔️	Número de unidades compradas
total	decimal	✔️	Total pagado por la compra

⚠️ Esta entidad relaciona directamente las otras tres. Asegúrate de tener datos creados antes de probarla.

Rutas disponibles:
Método	Ruta	Funcionalidad
GET	/historial	Listar todas las compras registradas
GET	/historial/:id	Obtener una compra por ID
POST	/historial	Registrar una nueva compra
PATCH	/historial/:id	Modificar una compra existente
DELETE	/historial/:id	Eliminar un registro de compra

✅ Flujo recomendado de pruebas
Crear un cliente (POST /clientes)

Crear un carro (POST /carros) usando clienteId

Crear un repuesto (POST /repuestos)

Crear una entrada de historial de compra (POST /historial) usando clienteId, carroId y repuestoId

Validar las demás rutas: GET, PATCH y DELETE de cada módulo

📮 Pruebas con Postman
Todos los endpoints se pueden probar desde http://localhost:3000 usando Postman. Puedes crear una colección que cubra:

CRUD de clientes

CRUD de carros (requiere cliente)

CRUD de repuestos

CRUD de historial (requiere cliente, carro y repuesto)

👨‍💻 Autor
Sebastián Arango
Proyecto académico – SENA 2025
concesionario-nestjs