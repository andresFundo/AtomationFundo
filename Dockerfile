# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que la aplicación usará (si es necesario)
EXPOSE 3000

# Comando para ejecutar las pruebas y luego iniciar la aplicación para ver los reportes
CMD ["sh", "-c", "npm run test:web && npm run start"]