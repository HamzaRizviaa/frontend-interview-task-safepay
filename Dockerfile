# Use the official Python base image for the backend
FROM python:3.10-slim AS backend

# Set the working directory
WORKDIR /app

# Copy only the requirements file first
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend files
COPY . .

# Stage for building the frontend
FROM node:16 AS frontend

# Set working directory
WORKDIR /frontend

# Copy frontend source files
COPY src/ ./src/
COPY package.json package-lock.json vite.config.ts ./

# Install Node.js dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Final stage: Combine frontend and backend
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy backend files from the backend stage
COPY --from=backend /app /app

# Copy built frontend files into the backend's public directory
COPY --from=frontend /frontend/dist /app/public

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the backend port
EXPOSE 5000

# Run the backend server
CMD ["python", "run_server"]
