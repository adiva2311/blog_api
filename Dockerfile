ARG NODE_VERSION=20.0.0

# Gunakan image Node.js resmi
FROM node:${NODE_VERSION}-alpine

# Buat dan gunakan direktori kerja
WORKDIR /app

# Salin file dependency
COPY package*.json ./

# Install dependency
RUN npm install

# Salin semua source code
COPY . .

# Expose port dari container
EXPOSE 5000

# Jalankan aplikasi
CMD ["npm", "run", "dev"]