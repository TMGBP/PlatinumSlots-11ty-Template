module.exports = function (eleventyConfig) {
  
  // Add passthrough copies
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
    },
  };
};
