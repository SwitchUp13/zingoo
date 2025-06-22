module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
