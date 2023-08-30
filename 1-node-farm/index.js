const fs = require('fs');
const http = require('http');
const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplates.js');

////////////////////////////////////////////////////////////////////////////////////////////////////

// Blocking, Synchronous way
// const textoEntrada = fs.readFileSync('./txt/input.txt', 'utf8')
// console.log(textoEntrada);
// const textoSalida = `Esto es que nosotros sabemos sobre el aguacate: ${textoEntrada}.\nCreado en ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textoSalida)
// console.log("Archivo Escrito!");

//Non-blocking, Asynchronous way
// fs.readFile('./txt/start.txt', 'utf8' ,(error, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf8' ,(error, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf8' ,(error, data3) => {
//             console.log(data3);
//             fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}` ,'utf8' , error => {
//                 console.log("Tu archivo fue escrito exitosamente");
//             })
//         })
//     })
// })
// console.log("Prueba que lee primero esto, antes que la funcion");

////////////////////////////////////////////////////////////////////////////////////////////////////

// Server

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const slugs = dataObject.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview Page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    const cardHtml = dataObject
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);

    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);

    // Api
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page Not Found, Error 404</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Escuchando peticiones en el puerto 8000');
});
