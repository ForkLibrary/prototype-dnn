# prototype-dnn

A ready-to-go Gulp and Harp project set up that does auto css injection via BrowserSync.

## Getting Started

```console
npm i -g harp
harp init -b agencyrevolution/prototype-dnn#gh-pages project-name
cd project-name
make install
make server
```

## Publishing
This has to happen from the root of your project so it can access your source in `_harp` and compile into the root directory (`./`).

```console
cd project-name
git init
git checkout -b gh-pages
make compile
make deploy
```

## Looking for the source?
Head on over to the [#gh-pages](https://github.com/agencyrevolution/prototype-dnn/tree/gh-pages/_harp) branch.
