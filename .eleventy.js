// .eleventy.js
// Load environment variables from a .env file if it exists
require('dotenv').config();

// Define variables with defaults in an object
const env = {
  environment11ty: process.env.APP_ENV || 'development',
  backendApiUrl: process.env.BACKEND_API_URL || "http://localhost",
  cssStyleSheetFile: process.env.CSS_FILE || "./assets/css/style.css",
  headerResumeImageFile: process.env.RESUME_IMAGE_FILE || "./assets/images/profilephoto.jpg",
  faviconImageFile: process.env.FAVICON_IMAGE_FILE || "./assets/images/favicon.ico"
};

module.exports = function(eleventyConfig) {
  // Make 'env' data available globally in Eleventy templates
   eleventyConfig.addGlobalData("env", env)

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy({ "src/assets/images/favicon.ico": "/favicon.ico" });
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch asset files for changes
  eleventyConfig.addWatchTarget("src");

  // You can keep this for debugging if you like
  eleventyConfig.on('beforeWatch', (changedFiles) => {
    console.log('Files changed:', changedFiles);
  });

  console.log("environment11ty:", env.environment11ty);
  console.log("backendApiUrl:", env.backendApiUrl);
  console.log("cssStyleSheetFile:", env.cssStyleSheetFile);
  console.log("headerResumeImageFile:", env.headerResumeImageFile);
  console.log("faviconImageFile:", env.faviconImageFile);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    },
    templateFormats: ["liquid"], // Use "liquid"
    htmlTemplateEngine: "liquid",      // Set to "liquid"
    markdownTemplateEngine: "liquid" // Set to "liquid"
  };
};