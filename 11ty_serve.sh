# Prepare .env vars in .env file

# Init and Install dependencies
npm init -y 
npm pkg set type="module"
npm install @11ty/eleventy

# Build the project
npx @11ty/eleventy

# Serve 11ty and watch for changes
npx @11ty/eleventy --serve --watch
# For bash or wsl execution watch and serve
CHOKIDAR_USEPOLLING=1 npx @11ty/eleventy --serve --watch

# Compile 11ty WINDOWS
set ENVIRONMENT11TY=production & npx @11ty/eleventy

# Compile 11ty LINUX
ENVIRONMENT11TY=production npx @11ty/eleventy