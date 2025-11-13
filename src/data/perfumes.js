const perfumes = [
    {
      nombre: "Dior Sauvage",
      descripcion: "Fragancia fresca con notas de bergamota y ambroxan, inspirada en paisajes salvajes.",
      precio: 125.99,
      categoria: "Masculino",
      imagen: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw19c30c58/Y0785220/Y0785220_F078524009_E01_GHC.jpg?sw=800"
    },
    {
      nombre: "Chanel Coco Mademoiselle",
      descripcion: "Aroma floral y elegante con toques de naranja, jazmín y pachulí.",
      precio: 139.50,
      categoria: "Femenino",
      imagen: "https://cdn.deloox.com/cdn/product/1276927/441082_500.jpg"
    },
    {
      nombre: "YSL Black Opium",
      descripcion: "Aroma adictivo con café, vainilla y flores blancas, ideal para la noche.",
      precio: 118.00,
      categoria: "Femenino",
      imagen: "https://www.druni.es/media/catalog/product/1/8/187.jpg"
    },
    {
      nombre: "Bleu de Chanel",
      descripcion: "Fragancia amaderada y aromática con notas de pomelo e incienso.",
      precio: 130.00,
      categoria: "Masculino",
      imagen: "https://a.cdnsbn.com/images/products/xl/17089180205.jpg"
    },
    {
      nombre: "Versace Eros",
      descripcion: "Perfume intenso con notas de menta, manzana verde y haba tonka.",
      precio: 110.75,
      categoria: "Masculino",
      imagen: "https://cdn.deloox.com/cdn/product/1085918/472382_500.jpg"
    },
    {
      nombre: "Lancôme La Vie Est Belle",
      descripcion: "Fragancia dulce con iris, jazmín y praliné, símbolo de la felicidad.",
      precio: 126.00,
      categoria: "Femenino",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeB6FnNjnJ9g2QWfFk-GZGgXlKnOFyWu47A&s"
    },
    {
      nombre: "Armani Acqua di Giò",
      descripcion: "Aroma acuático con notas marinas, cítricos y maderas aromáticas.",
      precio: 112.00,
      categoria: "Masculino",
      imagen: "https://fimgs.net/mdimg/perfume/o.71606.jpg"
    },
    {
      nombre: "Carolina Herrera Good Girl",
      descripcion: "Perfume sofisticado con cacao, almendra y jazmín sambac.",
      precio: 135.99,
      categoria: "Femenino",
      imagen: "https://media.douglas.es/medias/o1vQBM455949-0-global.jpg?context=bWFzdGVyfGltYWdlc3w5ODc5N3xpbWFnZS9qcGVnfGFHWXdMMmd5TUM4Mk16WTBNVEUwTWpFNU9ETXdNaTl2TVhaUlFrMDBOVFU1TkRsZk1GOW5iRzlpWVd3dWFuQm58M2ViOGIxMDhiNjUwMzI3MWYwNThhNWZiZGFjYjYxYjA4NjE1ZjUwMGQwOTljNmE4OGI4MWYyN2NlZjI5Nzg4OQ&grid=true&imPolicy=grayScaled"
    },
    {
      nombre: "Paco Rabanne Invictus",
      descripcion: "Aroma fresco y amaderado que representa la victoria y la energía.",
      precio: 119.00,
      categoria: "Masculino",
      imagen: "https://www.druni.es/media/catalog/product/4/3/430.jpg"
    },
    {
      nombre: "Gucci Bloom",
      descripcion: "Fragancia floral con jazmín, nardo y raíz de lirio.",
      precio: 125.00,
      categoria: "Femenino",
      imagen: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1643739311/670035_99999_0099_001_100_0000_Light-eau-de-toilette-gucci-bloom-100ml.jpg"
    },
    {
      nombre: "Tom Ford Noir Extreme",
      descripcion: "Aroma cálido y oriental con cardamomo, vainilla y ámbar.",
      precio: 165.00,
      categoria: "Masculino",
      imagen: "https://cdn.basler-beauty.de/out/pictures/generated/product/1/980_980_100/1602160-TOM-FORD-Noir-Extreme-Eau-de-Parfum-100-ml.1cdab569.jpg"
    },
    {
      nombre: "Dolce & Gabbana Light Blue",
      descripcion: "Fragancia cítrica y veraniega con notas de manzana y bambú.",
      precio: 105.50,
      categoria: "Femenino",
      imagen: "https://static2.sabinacdn.com/94941-thickbox_default/light-blue-pour-homme-dolce-gabbana.jpg"
    },
    {
      nombre: "Hugo Boss Bottled",
      descripcion: "Perfume clásico con manzana, canela y madera de sándalo.",
      precio: 99.99,
      categoria: "Masculino",
      imagen: "https://cdn.basler-beauty.de/out/pictures/generated/product/1/980_980_100/2583593-Hugo-Boss-Boss-Bottled-Elixir-Parfum-100-ml.0d501cfa.jpg"
    },
    {
      nombre: "Marc Jacobs Daisy",
      descripcion: "Aroma fresco y femenino con violeta, jazmín y fresa silvestre.",
      precio: 115.00,
      categoria: "Femenino",
      imagen: "https://cdn.basler-beauty.de/out/pictures/generated/product/1/980_980_100/40285e4b6ab00a43016ab1a63fb06d22-MARC-JACOBS-DAISY-Eau-de-Toilette.a6cef3d7.jpg"
    },
    {
      nombre: "Creed Aventus",
      descripcion: "Fragancia icónica con piña, musgo de roble y abedul, símbolo de éxito.",
      precio: 295.00,
      categoria: "Masculino",
      imagen: "https://cdn.deloox.com/cdn/product/1148490/472148_500.jpg"
    },
    {
      nombre: "Giorgio Armani My Way",
      descripcion: "Perfume floral con azahar, jazmín y vainilla, elegante y moderno.",
      precio: 128.00,
      categoria: "Femenino",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsjRoCUeOVySjEqM0175DIYIxJOVM99BGyA&s"
    },
    {
      nombre: "Jean Paul Gaultier Le Male",
      descripcion: "Aroma oriental-fougère con lavanda, menta y vainilla.",
      precio: 120.00,
      categoria: "Masculino",
      imagen: "https://www.druni.es/media/catalog/product/4/6/4668.jpg"
    },
    {
      nombre: "Burberry Her",
      descripcion: "Fragancia frutal con grosella negra, jazmín y almizcle blanco.",
      precio: 124.00,
      categoria: "Femenino",
      imagen: "https://assets.burberry.com/is/image/Burberryltd/170DBE43-9B00-40B1-A766-F1482E6F263D?$BBY_V2_SL_3x4$&wid=1278&hei=1700"
    },
    {
      nombre: "Prada Luna Rossa",
      descripcion: "Aroma limpio y energético con lavanda, ámbar y naranja amarga.",
      precio: 122.00,
      categoria: "Masculino",
      imagen: "https://www.prada.com/content/dam/pradabkg_products/2/2A1/2A1151/2HC8F0Z99/2A1151_2HC8_F0Z99_P_ML100_SLF.jpg"
    },
    {
      nombre: "Valentino Donna Born In Roma",
      descripcion: "Aroma sensual con vainilla, jazmín y grosella negra.",
      precio: 135.00,
      categoria: "Femenino",
      imagen: "https://media.douglas.es/medias/KNzrui293494-0-dgl-ES.jpg?context=bWFzdGVyfGltYWdlc3wxMjk4OTd8aW1hZ2UvanBlZ3xhR1EyTDJoa05pODBOemc1TURrd05UY3lOekF3Tmk5TFRucHlkV2t5T1RNME9UUmZNRjlrWjJ3dFJWTXVhbkJufGJiODU5OTFmMzIyYmVkMWZiOGRmZjFmZDIxM2ZmYjQzMDJiOGUzODA2MTA4Yjk0MjE2MjhmNWM0OGQyOWQ5MzA&grid=true"
    },
    {
      nombre: "Azzaro Wanted",
      descripcion: "Perfume masculino con notas de limón, cardamomo y vetiver.",
      precio: 115.00,
      categoria: "Masculino",
      imagen: "https://www.druni.es/media/catalog/product/8/4/8464.jpg"
    },
    {
      nombre: "Jo Malone Peony & Blush Suede",
      descripcion: "Fragancia ligera con peonía, manzana roja y gamuza suave.",
      precio: 145.00,
      categoria: "Femenino",
      imagen: "https://cdn.basler-beauty.de/out/pictures/generated/product/1/1200_1200_100/1485288-JO-MALONE-LONDON-Peony-Blush-Suede-Cologne-100-ml.5cc42029.jpg"
    },
    {
      nombre: "Montblanc Explorer",
      descripcion: "Aroma amaderado y aventurero con bergamota, vetiver y pachulí.",
      precio: 115.00,
      categoria: "Masculino",
      imagen: "https://perfumeriasgotta.com/62560-medium_default/montblanc-explorer-extreme-parfum.jpg"
    },
    {
      nombre: "Chanel Chance Eau Tendre",
      descripcion: "Perfume floral-afrutado con toronja, jazmín y almizcle blanco.",
      precio: 140.00,
      categoria: "Femenino",
      imagen: "https://media.sephora.eu/content/dam/digital/massivpimupload/C/CHANEL/199453/61508-media_swatch.jpg?scaleWidth=585&scaleHeight=585&scaleMode=fit"
    }
];

export default perfumes;