# 1️⃣ Use an official Node.js runtime as the base image
FROM node:18

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json (if present)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy all project files into the container
COPY . .

# 6️⃣ Expose the port Apollo Server runs on (default 5000)
EXPOSE 5000

# 7️⃣ Run the server
CMD ["node", "src/index.js"]
