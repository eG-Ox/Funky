const tallasVerano = '0–3, 3–6, 6–9, 12, 18 y 24';
const tallasDosPiezas = '3–6, 6–9, 12, 18 y 24';
const catalogo = [
  {
    id: 'acolchadas',
    categoria: 'Pijamas acolchadas',
    precioAnterior: '115',
    modelos: [
      { nombre: 'Fragola', precio: '69', descuento: 40, tallas: '6–9, 12, 18 y 24', fotos: ['02'] },
      { nombre: 'Limone', precio: '69', descuento: 40, tallas: tallasDosPiezas, fotos: ['03', '05'] },
      { nombre: 'Cielo helado', precio: '69', descuento: 40, tallas: '6–9, 12, 18 y 24', fotos: ['04', 'portada'] },
      { nombre: 'Espacial', precio: '57.50', descuento: 50, tallas: '12', ultima: true, fotos: ['06', '07'] },
      { nombre: 'Arara', precio: '57.50', descuento: 50, tallas: '6–9 y 12', ultima: true, fotos: ['08', '09'], nota: 'Selvático · Colección invierno' },
      { nombre: 'Formas', precio: '57.50', descuento: 50, tallas: '12', ultima: true, fotos: ['10', '11'] },
    ],
  },
  {
    id: 'dos-piezas',
    categoria: 'Pijamas de dos piezas',
    precioAnterior: '75',
    modelos: [
      { nombre: 'Nube', precio: '45', descuento: 40, tallas: tallasDosPiezas, fotos: ['12', '13'] },
      { nombre: 'Fresas', precio: '45', descuento: 40, tallas: tallasDosPiezas, fotos: ['14', '15'] },
    ],
  },
  {
    id: 'franela',
    categoria: 'Pijamas de franela',
    precioAnterior: '75',
    modelos: [
      { nombre: 'Selva', precio: '37.50', descuento: 50, tallas: '12', ultima: true, fotos: ['16', '18'], nota: 'Selvático · Colección invierno' },
      { nombre: 'Perezoso', precio: '37.50', descuento: 50, tallas: '12', ultima: true, fotos: ['17'] },
      { nombre: 'Disco', precio: '37.50', descuento: 50, tallas: '12', ultima: true, fotos: ['19'] },
    ],
  },
  {
    id: 'basicas',
    categoria: 'Pijamas básicas',
    precioAnterior: '45',
    modelos: [
      { nombre: 'Vainilla', precio: '34', descuento: 24, tallas: '0–3, 3–6, 12, 18 y 24', fotos: ['20'] },
      { nombre: 'Limonada', precio: '34', descuento: 24, tallas: '6–9, 12, 18 y 24', fotos: ['21'] },
      { nombre: 'Heladitos', precio: '34', descuento: 24, tallas: tallasDosPiezas, fotos: ['22'] },
      { nombre: 'Menta', precio: '34', descuento: 24, tallas: '12, 18 y 24', fotos: ['23', '24'] },
      { nombre: 'Astrofunky', precio: '25', descuento: 44, tallas: '0–3, 12 y 18', fotos: ['25', '28'] },
      { nombre: 'Gato espacial', variante: 'Blanco con ribetes fucsias', precio: '25', descuento: 44, tallas: '0–3, 6–9, 18 y 24', fotos: ['26', '28'] },
      { nombre: 'Gato espacial', variante: 'Negro con ribetes fucsias', precio: '25', descuento: 44, tallas: '0–3, 6–9, 18 y 24', fotos: ['27', '28'] },
    ],
  },
  {
    id: 'sacos',
    categoria: 'Sacos acolchados',
    precioAnterior: '115',
    modelos: [
      { nombre: 'Limone', precio: '69', descuento: 40, tallas: '0–6 y 6–12', fotos: ['29', '31'] },
      { nombre: 'Fragola', precio: '69', descuento: 40, tallas: '0–6 y 6–12', fotos: ['30'] },
    ],
  },
  {
    id: 'enteritos',
    categoria: 'Enteritos cortos',
    precioAnterior: '45',
    modelos: [
      { nombre: 'Criaturas', precio: '34', descuento: 24, tallas: tallasVerano, fotos: ['32'] },
      { nombre: 'Nuebelin', precio: '34', descuento: 24, tallas: tallasVerano, fotos: ['33'] },
      { nombre: 'Nova', precio: '34', descuento: 24, tallas: tallasVerano, fotos: ['34'] },
      { nombre: 'Astral', precio: '34', descuento: 24, tallas: tallasVerano, fotos: ['35'] },
      { nombre: 'Naos', precio: '34', descuento: 24, tallas: tallasVerano, fotos: ['36'] },
      { nombre: 'Sole', precio: '25', descuento: 44, tallas: '12', ultima: true, fotos: ['37', '38'] },
      { nombre: 'Micelio', precio: '25', descuento: 44, tallas: '0–3', ultima: true, fotos: ['39'] },
    ],
  },
  {
    id: 'body-falda',
    categoria: 'Bodies con falda',
    precioAnterior: '35',
    modelos: [
      { nombre: 'Índigo', precio: '22', descuento: 37, tallas: '0–3 y 3–6', ultima: true, fotos: ['40-indigo'] },
      { nombre: 'Honguitos', precio: '22', descuento: 37, tallas: '0–3', ultima: true, fotos: ['40-honguitos'] },
      { nombre: 'Estampado verde', precio: '22', descuento: 37, fotos: ['40-micelio', '41'], nota: 'El catálogo muestra esta prenda sin indicar su modelo ni su disponibilidad.' },
    ],
  },
  {
    id: 'polos',
    categoria: 'Polos de verano',
    precioAnterior: '25',
    modelos: [
      { nombre: 'Sole', precio: '18', descuento: 28, tallas: tallasVerano, fotos: ['42-sole'] },
      { nombre: 'Índigo', precio: '18', descuento: 28, tallas: '0–3, 3–6 y 6–9', ultima: true, fotos: ['42-indigo'] },
      { nombre: 'Micelio', precio: '18', descuento: 28, tallas: '0–3 y 3–6', ultima: true, fotos: ['42-micelio'] },
      { nombre: 'Honguitos', precio: '18', descuento: 28, tallas: '0–3 y 3–6', ultima: true, fotos: ['42-honguitos'] },
    ],
  },
];

const rutaFoto = foto => `assets/catalogo/${foto}.webp`;
const whatsapp = document.querySelector('#consulta-whatsapp').href;

function enlacePedido(modelo, categoria) {
  const variante = modelo.variante ? ` (${modelo.variante})` : '';
  const mensaje = `Hola, me interesa el modelo ${modelo.nombre}${variante} de la categoría ${categoria}. ¿Está disponible? Quisiera hacer un pedido.`;
  return `${whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

const totalPaginas = 42;
const lector = document.querySelector('#lector');
const barraLector = document.querySelector('.reader-toolbar');
const paginasPdf = document.querySelector('#paginas-pdf');
const continuo = document.querySelector('#modo-continuo');
const libro = document.querySelector('#modo-libro');
const navegacion = document.querySelector('.reader-navigation');
const selectorPagina = document.querySelector('#numero-pagina');
const paginaAnterior = document.querySelector('#pagina-anterior');
const paginaSiguiente = document.querySelector('#pagina-siguiente');
const modelosPorPagina = new Map();
let paginaActual = 1;

for (const { categoria, modelos } of catalogo) {
  for (const modelo of modelos) {
    for (const foto of modelo.fotos) {
      const numero = foto === 'portada' ? 1 : Number(foto.slice(0, 2));
      const productos = modelosPorPagina.get(numero) ?? [];
      productos.push({ modelo, categoria });
      modelosPorPagina.set(numero, productos);
    }
  }
}

const numeros = Array.from({ length: totalPaginas }, (_, indice) => indice + 1);
selectorPagina.innerHTML = numeros.map(numero =>
  `<option value="${numero}">${numero} de ${totalPaginas}</option>`
).join('');

paginasPdf.innerHTML = numeros.map(numero => {
  const src = `assets/pdf/${String(numero).padStart(2, '0')}.webp`;
  const productos = modelosPorPagina.get(numero) ?? [];
  const modelos = [...new Set(productos.map(({ modelo }) => modelo.nombre))].join(', ');
  const descripcion = numero === 1 ? 'Portada de Sabores Funky' : modelos || 'Catálogo Sabores Funky';

  return `
    <figure class="pdf-page" id="pagina-${numero}">
      <img src="${src}" width="1200" height="1441" alt="Página ${numero}. ${descripcion}."
           ${numero === 1 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
      <figcaption>
        <div class="page-caption">
          <span>Página ${numero} de ${totalPaginas}</span>
          <a class="nav-link" href="${src}" target="_blank" rel="noopener noreferrer"
             aria-label="Ampliar página ${numero}">Ampliar página ↗</a>
        </div>
        ${numero === 1 ? '' : productos.map(({ modelo, categoria }) => `
          <a class="order-link" href="${enlacePedido(modelo, categoria)}" target="_blank" rel="noopener noreferrer">
            Pedir ${modelo.nombre}${modelo.variante ? ' · ' + modelo.variante : ''} por WhatsApp
          </a>
        `).join('')}
      </figcaption>
    </figure>`;
}).join('');

const hojas = [...paginasPdf.children];

function distanciaPagina() {
  return hojas[paginaActual - 1].getBoundingClientRect().top -
    Math.max(barraLector.getBoundingClientRect().bottom, barraLector.offsetHeight);
}

function mostrarPagina(numero) {
  paginaActual = Math.min(totalPaginas, Math.max(1, numero));
  hojas.forEach((hoja, indice) => { hoja.hidden = indice !== paginaActual - 1; });
  selectorPagina.value = String(paginaActual);
  paginaAnterior.disabled = paginaActual === 1;
  paginaSiguiente.disabled = paginaActual === totalPaginas;
  const distancia = distanciaPagina();
  if (distancia < 0) window.scrollBy(0, distancia);
}

continuo.addEventListener('click', () => {
  if (navegacion.hidden) return;
  continuo.setAttribute('aria-pressed', 'true');
  libro.setAttribute('aria-pressed', 'false');
  navegacion.hidden = true;
  hojas.forEach(hoja => { hoja.hidden = false; });
  if (paginaActual > 1) {
    window.scrollBy(0, hojas[paginaActual - 1].getBoundingClientRect().top - barraLector.offsetHeight);
  }
});

libro.addEventListener('click', () => {
  if (!navegacion.hidden) return;
  const bordeBarra = barraLector.getBoundingClientRect().bottom;
  const hojaVisible = hojas.findIndex(hoja => hoja.getBoundingClientRect().bottom > bordeBarra + 24);
  continuo.setAttribute('aria-pressed', 'false');
  libro.setAttribute('aria-pressed', 'true');
  navegacion.hidden = false;
  mostrarPagina(hojaVisible + 1);
});

paginaAnterior.addEventListener('click', () => mostrarPagina(paginaActual - 1));
paginaSiguiente.addEventListener('click', () => mostrarPagina(paginaActual + 1));
selectorPagina.addEventListener('change', () => mostrarPagina(Number(selectorPagina.value)));

lector.addEventListener('keydown', evento => {
  if (navegacion.hidden || evento.target === selectorPagina) return;
  if (evento.key === 'ArrowLeft') mostrarPagina(paginaActual - 1);
  if (evento.key === 'ArrowRight') mostrarPagina(paginaActual + 1);
});

document.querySelector('#categorias').innerHTML = catalogo.map(({ id, categoria }) =>
  `<a href="#${id}">${categoria}</a>`
).join('');

document.querySelector('#productos').innerHTML = catalogo.map(({ id, categoria, precioAnterior, modelos }, grupo) => `
  <section class="product-group" id="${id}" aria-labelledby="${id}-titulo">
    <h3 id="${id}-titulo">${categoria}</h3>
    <ul class="collection-grid" role="list">
      ${modelos.map((modelo, indice) => `
        <li class="product-card">
          <button type="button" class="product-photo" data-grupo="${grupo}" data-modelo="${indice}"
                  aria-label="Ver fotos de ${modelo.nombre}${modelo.variante ? ', ' + modelo.variante : ''}"
                  aria-haspopup="dialog">
            <img src="${rutaFoto(modelo.fotos[0])}" alt="" loading="lazy" decoding="async">
            <span>${modelo.fotos.length === 1 ? 'Ver foto' : 'Ver ' + modelo.fotos.length + ' fotos'}</span>
          </button>
          <div class="product-info">
            <h4>${modelo.nombre}</h4>
            ${modelo.variante ? `<p class="product-detail">${modelo.variante}</p>` : ''}
            <p class="prices">
              <strong>S/ ${modelo.precio}</strong>
              <span class="old-price">Antes <del>S/ ${precioAnterior}</del></span>
              <span class="discount">−${modelo.descuento}%</span>
            </p>
            <p class="product-detail"><strong>Tallas:</strong> ${modelo.tallas ? modelo.tallas + ' meses' : 'No indicadas'}</p>
            ${modelo.ultima ? '<p class="last-item">Última prenda</p>' : ''}
            ${modelo.nota ? `<p class="product-detail">${modelo.nota}</p>` : ''}
          </div>
          <a class="order-link" href="${enlacePedido(modelo, categoria)}" target="_blank" rel="noopener noreferrer"
             aria-label="Pedir por WhatsApp: ${modelo.nombre}${modelo.variante ? ', ' + modelo.variante : ''}, ${categoria}">Pedir por WhatsApp</a>
        </li>
      `).join('')}
    </ul>
  </section>
`).join('');

const galeria = document.querySelector('.gallery');
const tituloGaleria = document.querySelector('#galeria-titulo');
const fotoGaleria = document.querySelector('#galeria-foto');
const pieGaleria = document.querySelector('#galeria-pie');
const controles = document.querySelector('.gallery-controls');
let fotosActivas = [];
let fotoActual = 0;

function mostrarFoto(indice) {
  fotoActual = (indice + fotosActivas.length) % fotosActivas.length;
  const foto = fotosActivas[fotoActual];
  fotoGaleria.src = rutaFoto(foto);
  fotoGaleria.alt = foto === 'portada'
    ? 'Portada original del catálogo de liquidación'
    : `${tituloGaleria.textContent}, foto ${fotoActual + 1}`;
  pieGaleria.textContent = `Foto ${fotoActual + 1} de ${fotosActivas.length}`;
}

document.querySelector('#productos').addEventListener('click', evento => {
  const boton = evento.target.closest('.product-photo');
  if (!boton) return;

  const { nombre, variante, fotos } = catalogo[boton.dataset.grupo].modelos[boton.dataset.modelo];
  tituloGaleria.textContent = variante ? `${nombre} · ${variante}` : nombre;
  fotosActivas = fotos;
  controles.hidden = fotos.length === 1;
  mostrarFoto(0);
  galeria.showModal();
});

document.querySelector('#galeria-anterior').addEventListener('click', () => mostrarFoto(fotoActual - 1));
document.querySelector('#galeria-siguiente').addEventListener('click', () => mostrarFoto(fotoActual + 1));

galeria.addEventListener('keydown', evento => {
  if (fotosActivas.length < 2) return;
  if (evento.key === 'ArrowLeft') mostrarFoto(fotoActual - 1);
  if (evento.key === 'ArrowRight') mostrarFoto(fotoActual + 1);
});
