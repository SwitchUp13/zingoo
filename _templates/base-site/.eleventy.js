const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a Nunjucks date filter
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  // Pass through static assets like styles
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
