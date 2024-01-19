FROM node:20

# Create app directory
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE $PORT

# Set environment variables
ENV PORT=$PORT

# Create a non-root user
RUN adduser --disabled-password --gecos "" myuser
USER myuser

CMD ["npm", "run", "start:dev"]
