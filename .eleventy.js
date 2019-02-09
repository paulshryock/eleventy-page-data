const fs = require('fs');

module.exports = (function(eleventyConfig) {

	const assets = [
		'css',
	];

	assets.forEach((asset) => {
	  try {
		  if (fs.existsSync(`./src/${asset}`)) {
				eleventyConfig.addPassthroughCopy(`src/${asset}`);
		  }
		} catch(err) {
		  console.error(err)
		}
	});
	
	return {
    passthroughFileCopy: true,

		dir: {
			input: "src",
			output: "_site"
		}
	};

});