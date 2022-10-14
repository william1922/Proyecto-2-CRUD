export class Producto{
    constructor(codigo,nombre,marca,cantidad,precio,categoria,url,descripcion){
        this.codigo=codigo
        this.nombre=nombre
        this.marca=marca
        this.cantidad=cantidad
        this.precio=precio
        this.categoria=categoria
        this.url=url
        this.descripcion=descripcion
    }
}

export let productosRS = []

let producto1 = new Producto(1324658721655,'PC gamer','HP',300,200.000,'computacion','https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Una computadora gamer')

let producto2 = new Producto(1221453641527,'Teclado 2022','Sony',150,10.000,'computacion','https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Un teclado de ultima generacion')

let producto3 = new Producto(1331452157114,'Parrilla','Coleman',100,60.000,'aireLibre','https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Una parrilla para preparar buenas comidas')

let producto4 = new Producto(1124517523157,'Notebook EXO','EXO',341,159.999,'computacion','https://http2.mlstatic.com/D_NQ_NP_988078-MLA49523884623_032022-V.webp','La notebook EXO Smart XQ3H-S3182 es una solución tanto para trabajar y estudiar como para entretenerte')

let producto5 = new Producto(1454123678412,'Pendrive Kingston DataTraveler Exodia','EXO',112,1500,'computacion','https://http2.mlstatic.com/D_NQ_NP_978108-MLA48208758338_112021-O.webp','Encontrarás en esta marca compatibilidad, practicidad y garantía de por vida')

let producto6 = new Producto(1897134561224,'Cámara web Foscam W21','EXO',245,4.399,'computacion','https://http2.mlstatic.com/D_NQ_NP_678444-MLA50207483008_062022-O.webp','Este dispositivo de Foscam brinda la calidad de imagen y funciones que necesitás para comunicarte de manera fácil y efectiva en la virtualidad')

let producto7 = new Producto(1554172359871,'Impresora a color multifunción','HP',716,18.999,'computacion','https://http2.mlstatic.com/D_NQ_NP_954133-MLA44482330199_012021-O.webp','Sin dudas, esta máquina es ideal para cumplir, de forma eficiente, la meta que te propongas')

let producto8 = new Producto(1357784452156,'Mouse inalámbrico Dell WM126','Logitech',97,5.9999,'computacion','https://http2.mlstatic.com/D_NQ_NP_638392-MLA32146296591_092019-O.webp','Con tu Dell WM126 encontrá eso que buscás en un solo aparato con la mejor tecnología')

let producto9 = new Producto(1112456752364,'Microondas Bgh Eco Negro Digital','BGH',73,46.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_723240-MLA49854576698_052022-W.webp','Permite apagar automáticamente el display cuando el equipo no está siendo utilizado. Reduciendo el consumo y logrando así un mayor ahorro de energía')

let producto10 = new Producto(1674344114252,'Lavavajillas de 14 cubiertos blanco','Whirlpool',34,20.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_666160-MLA40197052330_122019-O.webp','El lavado a mano ¡quedó en el pasado! Gracias al lavavajillas, la higiene está garantizada')

let producto11 = new Producto(1333647518512,'Lavarropas automático Eslabón de Lujo','Whirlpool',174,119.399,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_834561-MLA46389009590_062021-O.webp','El lavarropas Eslabón de Lujo EWH09A hará que el lavado diario sea más sencillo')

let producto12 = new Producto(3365412181681,'Horno empotrable eléctrico','Whirlpool',15,198.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_809057-MLA50771877933_072022-O.webp','Al ser empotrable, este horno le brindará a tu cocina un estilo sofisticado y te dará la posibilidad de ahorrar más espacio')

let producto13 = new Producto(2564112688132,'Anafe a gas Ispirazione ','Whirlpool',357,115.799,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_884844-MLA32149634652_092019-O.webp','Con su encendido automático prendelo de manera rápida y sencilla')

let producto14 = new Producto(1884114336812,'Heladera Eslabón de Lujo','Whirlpool',40,126.000,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_922031-MLA48157767448_112021-O.webp','Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Eslabón de Lujo, la protagonista de la cocina')

let producto15 = new Producto(1259874775314,'Mixer 2803 FPSTHB2803','Oster',560,20.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_886462-MLA32605608599_102019-O.webp','Este electrodoméstico llegó para quedarse. Simple, práctico y cómodo de utilizar para que tus recetas se luzcan')

let producto16 = new Producto(1234567891011,'Pava eléctrica BVSTKE671','Oster',92,7.790,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_979745-MLA49141285425_022022-O.webp','La seguridad es muy importante, por eso, cuando el agua está lista, la jarra se apaga automáticamente permitiendo a su vez, ahorrar energía')

let producto17 = new Producto(1681321351351,'Plancha Seca Di4112','Oster',214,6.745,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_908842-MLA49849903582_052022-O.webp','Con el sistema de vapor ajustable eliminarás las arrugas más rebeldes de forma fácil y sencilla sin dañar tu ropa')

let producto18 = new Producto(3513135465165,'Batidora de pie FPSTSM3711','Oster',22,35.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_663422-MLA44027912877_112020-O.webp','Prepará exquisitas tortas, panes y mucho más con esta batidora Oster FPSTSM3711 y encontrá facilidad sin sacrificar calidad')

let producto19 = new Producto(1321685465163,'Licuadora BLSTPYG1211NBG','Oster',614,39.999,'electrodomesticos','https://http2.mlstatic.com/D_NQ_NP_690238-MLA48089495239_112021-O.webp','Descubrí un mundo de posibilidades en la cocina con la licuadora BLSTPYG1211NBG y dale rienda suelta a la creatividad')

let producto20 = new Producto(1235173156516,'Cama elástica TPL06FT00 ','Femmto',9,47.790,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_975781-MLA48687779844_122021-O.webp','Con la cama elástica Femmto TPL06FT00 vas a poder disfrutar de horas interminables de diversión')

let producto21 = new Producto(3450651685213,'Pileta inflable redonda','Bestway',17,9.499,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_939743-MLA48162136497_112021-O.webp','Su capacidad de 940 litros la convierte en el espacio de diversión ideal para toda la familia. Tanto niños como adultos, podrán jugar, zambullirse y disfrutar de forma segura')

let producto22 = new Producto(1321374171411,'Motosierra a nafta','Omaha',103,20.100,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_796804-MLA49837896492_052022-O.webp','Esta motosierra Omaha Tools facilitará el trabajo permitiéndote así disfrutar de tu hobby')

let producto23 = new Producto(1351321351313,'Sopladora aspiradora MJPSA116','Philco',981,10.900,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_794662-MLA40251750410_122019-O.webp','Con tu sopladora Philco MJPSA116 podés eliminar la suciedad y mantener despejadas las áreas verdes, abiertas y otras zonas')

let producto24 = new Producto(3214532135135,'Cortadora de pasto eléctrica','Petri',25,37.200,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_611326-MLA40185360782_122019-O.webp','Esta cortadora de pasto eléctrica cuenta con una bolsa recolectora de 32 L que facilita la tarea del usuario ya que es práctica para colocar y vaciar')

let producto25 = new Producto(5651320213503,'Pileta estructural rectangular','Pelopincho',544,37.520,'aireLibre','https://http2.mlstatic.com/D_NQ_NP_980240-MLA40165269048_122019-O.webp','Con su válvula de desagüe, vas a poder sacar el agua de una manera mucho más rápida y simple cuando desees limpiarla o vaciarla')

productosRS.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14,producto15,producto16,producto17,producto18,producto19,producto20,producto21,producto22,producto23,producto24,producto25)