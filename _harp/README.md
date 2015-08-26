# prototype-dnn

A ready-to-go Gulp and Harp project set up that does auto css injection via BrowserSync.

You can set it via Harp with:

```console
harp init -b agencyrevolution/prototype-dnn#gh-pages project-name
cd project-name/_harp
npm install
gulp
```

Then, success.

## Publishing
This has to happen from the root of your project so it can access your source in `_harp` and compile into the root directory (`./`).

```console
cd project-name
NODE_ENV=production harp compile _harp ./
git add -A
git commit -m "New compile on Date/Time"
git push -u origin gh-pages
```
