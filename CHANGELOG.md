# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.0 - 2019-02-09 - Initial release

### Added
- Add Eleventy
	- `npm init -y`
	- `npm install --save-dev @11ty/eleventy`
	- Configure Eleventy:
		- `/.eleventy.js`
		- `/.eleventyignore`
- Initialize Git
	- `git init`
	- Add `/.gitattributes`
	- Add `/.gitignore`
- Configure npm: `/package.json`
- Add pages
	- Page default settings: `/src/pages/pages.json`
	- Home page: `/src/pages/home/home.md`
	- About page: `/src/pages/about/about.liquid`
		- About page data: `/src/pages/about/about.json`
- Add a page layout
	- `/src/_includes/_layouts/page.liquid`
- Style pages
	- `/src/css/normalize.css`
	- `/src/css/app.css`
- Configure Git
	- Add `/CHANGELOG.md`
	- Add `/LICENSE`
	- Add `/README.md`