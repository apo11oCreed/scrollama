# Scrollama scrollytelling experiments

This project is an exploration of scrollytelling with the use of the Scrollama library. As the visitor views each scroller section, the image and videos should be optimized to reduce performance degradations from their sizes.

## Requirements
* The first couple of scrollers' content should load on page view
* The remaining scrollers' content should lazyload when the scroller step is near to view
* The scrollers' video will be delivered via videojs
* The scrollers' video content should be preloaded, paused and start playing only when the parent steps come into view
* The scrollers' video content should play automatically across all device/browsers when the parent steps come into view
* The scrollers' video content should be delivered as HSL for best performance but fallback to MP4 where not supported

## Dependencies
* Bun (global)
* Vite
* Sveltekit
* Typescript
* Stylus
* Scrollama
* FFMPEG (global)
* AWS S3
* VideoJS

## Notes

### The following files require changes:
node_modules/sirv/build.mjs
`import { parse } from '@polka/url';`
Should be changed to:
`import { parse } from '@polka/url/build.mjs';`

node_modules/@polka/url/build.mjs
`function parse(str) {`
Should be changed to:
`export function parse(str) {`
