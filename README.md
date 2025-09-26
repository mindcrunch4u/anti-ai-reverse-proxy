
## Usage

```bash
pip install mitmproxy bs4
mitmdump --mode reverse:http://<YOUR SERVER IP>:<PORT> -s insert_snippet.py
```

## Demo with insert_snippet.py

Run a server and scrape it:

![running and scraping](https://github.com/mindcrunch4u/anti-ai-reverse-proxy/blob/main/about/demo.gif)

Before:

![before](https://github.com/mindcrunch4u/anti-ai-reverse-proxy/blob/main/about/before.png)

After:

![after](https://github.com/mindcrunch4u/anti-ai-reverse-proxy/blob/main/about/after.png)

## Using JS snippets

With `jsdom` and NodeJS:
- build as a standalone lib: `./node_modules/.bin/esbuild --platform=node jsdom-injection.js  --bundle --outfile=lib.js`
- esbuild must use `--platform=node`.
- this won't work with native js. 

With `linkedom` and native js:
- build as a standlone lib: `./node_modules/.bin/esbuild linkedom-injection.js --bundle --outfile=lib.js`
- this works as a pure js lib.
- but it still doesn't work with Nginx's njs, where you get errors like: `SyntaxError: Token "class" not supported in this version in lib.js:1550`
