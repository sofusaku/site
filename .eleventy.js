module.exports = (eleventyConfig) => {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: false
    });
    
    // Temporary(?)
    eleventyConfig.addPassthroughCopy('_redirects');
}
