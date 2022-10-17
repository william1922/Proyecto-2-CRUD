let arrayUsuariosLocal = [
    {
        usuario: "admin",
        contraseña: "admin1234",
        email: "julian@gmail.com",
        userOn: "",
        carrito: [],
        fecha: "May 25 2022 16:10:45",
        admin: "true"
    },
    {
        usuario: "william",
        contraseña: "Qazmlp123",
        email: "willy14@gmail.com",
        userOn: "",
        carrito: [
            {
                cantidad: "300",
                categoria: "computacion",
                codigo: "1324658721655",
                descripcion: "Una computadora gamer",
                marca: "HP",
                nombre: "PC gamer",
                precio: "200",
                url: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                cantidad: "341",
                categoria: "computacion",
                codigo: "1124517523157",
                descripcion: "La notebook EXO Smart XQ3H-S3182 es una solución tanto para trabajar y estudiar como para entretenerte",
                marca: "EXO",
                nombre: "Notebook EXO",
                precio: "159.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_988078-MLA49523884623_032022-V.webp"
            },
            {
                cantidad: "9",
                categoria: "aireLibre",
                codigo: "1235173156516",
                descripcion: "Con la cama elástica Femmto TPL06FT00 vas a poder disfrutar de horas interminables de diversión",
                marca: "Femmto",
                nombre: "Cama elástica TPL06FT00",
                precio: "47.790",
                url: "https://http2.mlstatic.com/D_NQ_NP_975781-MLA48687779844_122021-O.webp"
            }
        ],
        fecha: "Oct 13 2022 13:32:02",
        admin: ""
    },
    {
        usuario: "fede",
        contraseña: "Qazmlp123",
        email: "fede@gmail.com",
        userOn: "",
        carrito: [{
            cantidad: "743",
            categoria: "aireLibre",
            codigo: "1331499157114",
            descripcion: "Si te gusta estar en los detalles o tenés un espacio verde pequeño, la bordeadora Philco te va a ayudar en aquellas zonas donde no puede alcanzar un cortacésped",
            marca: "Philco",
            nombre: "Bordeadora Philco MJPBO116",
            precio: "7.840",
            url: "https://http2.mlstatic.com/D_NQ_NP_930663-MLA42996177939_082020-O.webp"
        },
        {
            cantidad: "8",
            categoria: "aireLibre",
            codigo: "1331457736114",
            descripcion: "La bomba Vulcano BAE 100 te garantizará que tu pileta cumpla con las condiciones de higiene adecuadas",
            marca: "Vulcano",
            nombre: "Bomba para pileta Vulcano",
            precio: "41.510",
            url: "https://http2.mlstatic.com/D_NQ_NP_721020-MLA48108349358_112021-O.webp"
        },],
        fecha: "Oct 1 2022 17:24:09",
        admin: ""
    },
    {
        usuario: "gabriel",
        contraseña: "Qazmlp123",
        email: "gabriel@gmail.com",
        userOn: "",
        carrito: [
            {
                cantidad: "73",
                categoria: "electrodomesticos",
                codigo: "1112456752364",
                descripcion: "Permite apagar automáticamente el display cuando el equipo no está siendo utilizado. Reduciendo el consumo y logrando así un mayor ahorro de energía",
                marca: "BGH",
                nombre: "Microondas Bgh Eco Negro Digital",
                precio: "46.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_723240-MLA49854576698_052022-W.webp"
            },
            {
                cantidad: "1.571",
                categoria: "computacion",
                codigo: "1324655721655",
                descripcion: "Los auriculares para gaming GXT 450 Blizz Surround Sound ofrecen sonidos de gaming en alta fidelidad y unos potentes graves",
                marca: "Trust Gaming",
                nombre: "Trust Gxt 450 Auriculares Gamer",
                precio: "9.979",
                url: "https://http2.mlstatic.com/D_NQ_NP_665254-MLA50890793340_072022-O.webp"
            },
            {
                cantidad: "8",
                categoria: "aireLibre",
                codigo: "1331457736114",
                descripcion: "La bomba Vulcano BAE 100 te garantizará que tu pileta cumpla con las condiciones de higiene adecuadas",
                marca: "Vulcano",
                nombre: "Bomba para pileta Vulcano",
                precio: "41.510",
                url: "https://http2.mlstatic.com/D_NQ_NP_721020-MLA48108349358_112021-O.webp"
            },
            {
                cantidad: "800",
                categoria: "aireLibre",
                codigo: "1331452164894",
                descripcion: "Mantener los espacios verdes de tu hogar ahora es más fácil, olvidate de cortes desprolijos y malezas",
                marca: "Omaha",
                nombre: "Desmalezadora Omaha DN52",
                precio: "20.499",
                url: "https://http2.mlstatic.com/D_NQ_NP_868018-MLA51155817879_082022-O.webp"
            }],
        fecha: "Sep 25 2022 20:12:12",
        admin: ""
    },
    {
        usuario: "jose",
        contraseña: "Qazmlp123",
        email: "jose@gmail.com",
        userOn: "",
        carrito: [
            {
                cantidad: "103",
                categoria: "aireLibre",
                codigo: "1321374171411",
                descripcion: "Esta motosierra Omaha Tools facilitará el trabajo permitiéndote así disfrutar de tu hobby",
                marca: "Omaha",
                nombre: "Motosierra a nafta",
                precio: "20.150",
                url: "https://http2.mlstatic.com/D_NQ_NP_796804-MLA49837896492_052022-O.webp"
            },
            {
                cantidad: "981",
                categoria: "aireLibre",
                codigo: "1351321351313",
                descripcion: "Con tu sopladora Philco MJPSA116 podés eliminar la suciedad y mantener despejadas las áreas verdes, abiertas y otras zonas",
                marca: "Philco",
                nombre: "Sopladora aspiradora MJPSA116",
                precio: "10.730",
                url: "https://http2.mlstatic.com/D_NQ_NP_794662-MLA40251750410_122019-O.webp"
            },
            {
                cantidad: "100",
                categoria: "aireLibre",
                codigo: "1331452157114",
                descripcion: "Una parrilla para preparar buenas comidas",
                marca: "Coleman",
                nombre: "Parrilla",
                precio: "60",
                url: "https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                cantidad: "341",
                categoria: "computacion",
                codigo: "1124517523157",
                descripcion: "La notebook EXO Smart XQ3H-S3182 es una solución tanto para trabajar y estudiar como para entretenerte",
                marca: "EXO",
                nombre: "Notebook EXO",
                precio: "159.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_988078-MLA49523884623_032022-V.webp"
            },
            {
                cantidad: "716",
                categoria: "computacion",
                codigo: "1554172359871",
                descripcion: "Sin dudas, esta máquina es ideal para cumplir, de forma eficiente, la meta que te propongas",
                marca: "HP",
                nombre: "Impresora a color multifunción",
                precio: "18.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_954133-MLA44482330199_012021-O.webp"
            },
            {
                cantidad: "97",
                categoria: "computacion",
                codigo: "1357784452156",
                descripcion: "Con tu Dell WM126 encontrá eso que buscás en un solo aparato con la mejor tecnología",
                marca: "Logitech",
                nombre: "Mouse inalámbrico Dell WM126",
                precio: "5.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_638392-MLA32146296591_092019-O.webp"
            }],
        fecha: "Sep 14 2022 18:24:54",
        admin: ""
    },
    {
        usuario: "julian",
        contraseña: "Qazmlp123",
        email: "julian@gmail.com",
        userOn: "",
        carrito: [
            {
                cantidad: "716",
                categoria: "computacion",
                codigo: "1554172359871",
                descripcion: "Sin dudas, esta máquina es ideal para cumplir, de forma eficiente, la meta que te propongas",
                marca: "HP",
                nombre: "Impresora a color multifunción",
                precio: "18.999",
                url: "https://http2.mlstatic.com/D_NQ_NP_954133-MLA44482330199_012021-O.webp"
            }
        ],
        fecha: "May 25 2022 16:10:45",
        admin: ""
    },
    {
        usuario: "miriam",
        contraseña: "Qazmlp123",
        email: "miriam@gmail.com",
        userOn: "",
        carrito: [{
            cantidad: "92",
            categoria: "electrodomesticos",
            codigo: "1234567891011",
            descripcion: "La seguridad es muy importante, por eso, cuando el agua está lista, la jarra se apaga automáticamente permitiendo a su vez, ahorrar energía",
            marca: "Oster",
            nombre: "Pava eléctrica BVSTKE671",
            precio: "7.790",
            url: "https://http2.mlstatic.com/D_NQ_NP_979745-MLA49141285425_022022-O.webp"
        },
        {
            cantidad: "214",
            categoria: "electrodomesticos",
            codigo: "1681321351351",
            descripcion: "Con el sistema de vapor ajustable eliminarás las arrugas más rebeldes de forma fácil y sencilla sin dañar tu ropa",
            marca: "Oster",
            nombre: "Plancha Seca Di4112",
            precio: "6.745",
            url: "https://http2.mlstatic.com/D_NQ_NP_908842-MLA49849903582_052022-O.webp"
        },
        {
            cantidad: "22",
            categoria: "electrodomesticos",
            codigo: "3513135465165",
            descripcion: "Prepará exquisitas tortas, panes y mucho más con esta batidora Oster FPSTSM3711 y encontrá facilidad sin sacrificar calidad",
            marca: "Oster",
            nombre: "Batidora de pie FPSTSM3711",
            precio: "35.999",
            url: "https://http2.mlstatic.com/D_NQ_NP_663422-MLA44027912877_112020-O.webp"
        }],
        fecha: "Jan 14 2022 09:14:21",
        admin: ""
    },
    {
        usuario: "marcela",
        contraseña: "Qazmlp123",
        email: "marcela@gmail.com",
        userOn: "",
        carrito: [{
            cantidad: "743",
            categoria: "aireLibre",
            codigo: "1331499157114",
            descripcion: "Si te gusta estar en los detalles o tenés un espacio verde pequeño, la bordeadora Philco te va a ayudar en aquellas zonas donde no puede alcanzar un cortacésped",
            marca: "Philco",
            nombre: "Bordeadora Philco MJPBO116",
            precio: "7.840",
            url: "https://http2.mlstatic.com/D_NQ_NP_930663-MLA42996177939_082020-O.webp"
        },
        {
            cantidad: "8",
            categoria: "aireLibre",
            codigo: "1331457736114",
            descripcion: "La bomba Vulcano BAE 100 te garantizará que tu pileta cumpla con las condiciones de higiene adecuadas",
            marca: "Vulcano",
            nombre: "Bomba para pileta Vulcano",
            precio: "41.510",
            url: "https://http2.mlstatic.com/D_NQ_NP_721020-MLA48108349358_112021-O.webp"
        },
        {
            cantidad: "800",
            categoria: "aireLibre",
            codigo: "1331452164894",
            descripcion: "Mantener los espacios verdes de tu hogar ahora es más fácil, olvidate de cortes desprolijos y malezas",
            marca: "Omaha",
            nombre: "Desmalezadora Omaha DN52",
            precio: "20.499",
            url: "https://http2.mlstatic.com/D_NQ_NP_868018-MLA51155817879_082022-O.webp"
        }],
        fecha: "sep 15 2022 18:01:54",
        admin: ""
    },
    {
        usuario: "jorge",
        contraseña: "Qazmlp123",
        email: "jorge@gmail.com",
        userOn: "",
        carrito: [{
            cantidad: "9",
            categoria: "aireLibre",
            codigo: "1235173156516",
            descripcion: "Con la cama elástica Femmto TPL06FT00 vas a poder disfrutar de horas interminables de diversión",
            marca: "Femmto",
            nombre: "Cama elástica TPL06FT00",
            precio: "47.790",
            url: "https://http2.mlstatic.com/D_NQ_NP_975781-MLA48687779844_122021-O.webp"
        },
        {
            cantidad: "17",
            categoria: "aireLibre",
            codigo: "3450651685213",
            descripcion: "Su capacidad de 940 litros la convierte en el espacio de diversión ideal para toda la familia. Tanto niños como adultos, podrán jugar, zambullirse y disfrutar de forma segura",
            marca: "Bestway",
            nombre: "Pileta inflable redonda",
            precio: "9.499",
            url: "https://http2.mlstatic.com/D_NQ_NP_939743-MLA48162136497_112021-O.webp"
        }],
        fecha: "Feb 14 2022 11:14:54",
        admin: ""
    },
    {
        usuario: "daiana",
        contraseña: "Qazmlp123",
        email: "daiana@gmail.com",
        userOn: "",
        carrito: [],
        fecha: "Nov 14 2021 09:14:14",
        admin: ""
    },
    {
        usuario: "caro",
        contraseña: "Qazmlp123",
        email: "caro@gmail.com",
        userOn: "",
        carrito: [],
        fecha: "Jul 11 2021 14:09:45",
        admin: ""
    },
    {
        usuario: "julia",
        contraseña: "Qazmlp123",
        email: "julia@gmail.com",
        userOn: "",
        carrito: [],
        fecha: "Jun 05 2022 11:10:44",
        admin: ""
    },
    {
        usuario: "sofia",
        contraseña: "Qazmlp123",
        email: "sofia@gmail.com",
        userOn: "",
        carrito: [{
            cantidad: "9",
            categoria: "aireLibre",
            codigo: "1235173156516",
            descripcion: "Con la cama elástica Femmto TPL06FT00 vas a poder disfrutar de horas interminables de diversión",
            marca: "Femmto",
            nombre: "Cama elástica TPL06FT00",
            precio: "47.790",
            url: "https://http2.mlstatic.com/D_NQ_NP_975781-MLA48687779844_122021-O.webp"
        },
        {
            cantidad: "17",
            categoria: "aireLibre",
            codigo: "3450651685213",
            descripcion: "Su capacidad de 940 litros la convierte en el espacio de diversión ideal para toda la familia. Tanto niños como adultos, podrán jugar, zambullirse y disfrutar de forma segura",
            marca: "Bestway",
            nombre: "Pileta inflable redonda",
            precio: "9.499",
            url: "https://http2.mlstatic.com/D_NQ_NP_939743-MLA48162136497_112021-O.webp"
        },
        {
            cantidad: "971",
            categoria: "computacion",
            codigo: "1323758721655",
            descripcion: "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más!",
            marca: "Lenovo",
            nombre: "Tablet Lenovo Yoga Tab",
            precio: "200",
            url: "https://http2.mlstatic.com/D_NQ_NP_898122-MLA48244069278_112021-O.webp"
        },
        {
            cantidad: "258",
            categoria: "electrodomesticos",
            codigo: "1112726752364",
            descripcion: "La ventaja principal de calefaccionar con un convector, es que consigue elevar la temperatura del ambiente sin humedecer el aire",
            marca: "Peabody",
            nombre: "Calefactor eléctrico Peabody",
            precio: "14.700",
            url: "https://http2.mlstatic.com/D_NQ_NP_602706-MLA31485281872_072019-O.webp"
        },
        {
            cantidad: "830",
            categoria: "aireLibre",
            codigo: "1331452387114",
            descripcion: "Diseño de procesamiento único, con un aspecto extraordinario como un bolígrafo",
            marca: "Generic",
            nombre: "Linterna Tactica Mini Led",
            precio: "1.045",
            url: "https://http2.mlstatic.com/D_NQ_NP_635235-MLA48234389676_112021-O.webp"
        },
        {
            cantidad: "1.270",
            categoria: "aireLibre",
            codigo: "1982452157114",
            descripcion: "Una carpa tipo iglu que se arma en segundos",
            marca: "Generic",
            nombre: "Carpa Automatica Playa Camping Reforzada",
            precio: "1.045",
            url: "https://http2.mlstatic.com/D_NQ_NP_644410-MLA48352522996_112021-O.webp"
        },
        {
            cantidad: "743",
            categoria: "aireLibre",
            codigo: "1331499157114",
            descripcion: "Si te gusta estar en los detalles o tenés un espacio verde pequeño, la bordeadora Philco te va a ayudar en aquellas zonas donde no puede alcanzar un cortacésped",
            marca: "Philco",
            nombre: "Bordeadora Philco MJPBO116",
            precio: "7.840",
            url: "https://http2.mlstatic.com/D_NQ_NP_930663-MLA42996177939_082020-O.webp"
        },],
        fecha: "Oct 09 2022 19:01:45",
        admin: ""
    }
]

let arrayProductosHard = [
    {
        cantidad: "300",
        categoria: "computacion",
        codigo: "1324658721655",
        descripcion: "Una computadora gamer",
        marca: "HP",
        nombre: "PC gamer",
        precio: "200",
        url: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        cantidad: "150",
        categoria: "computacion",
        codigo: "1221453641527",
        descripcion: "Un teclado de ultima generacion",
        marca: "Sony",
        nombre: "Teclado 2022",
        precio: "10",
        url: "https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        cantidad: "100",
        categoria: "aireLibre",
        codigo: "1331452157114",
        descripcion: "Una parrilla para preparar buenas comidas",
        marca: "Coleman",
        nombre: "Parrilla",
        precio: "60",
        url: "https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        cantidad: "341",
        categoria: "computacion",
        codigo: "1124517523157",
        descripcion: "La notebook EXO Smart XQ3H-S3182 es una solución tanto para trabajar y estudiar como para entretenerte",
        marca: "EXO",
        nombre: "Notebook EXO",
        precio: "159.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_988078-MLA49523884623_032022-V.webp"
    },
    {
        cantidad: "112",
        categoria: "computacion",
        codigo: "1454123678412",
        descripcion: "Encontrarás en esta marca compatibilidad, practicidad y garantía de por vida",
        marca: "EXO",
        nombre: "Pendrive Kingston DataTraveler Exodia",
        precio: "1.500",
        url: "https://http2.mlstatic.com/D_NQ_NP_978108-MLA48208758338_112021-O.webp"
    },
    {
        cantidad: "245",
        categoria: "computacion",
        codigo: "1897134561224",
        descripcion: "Este dispositivo de Foscam brinda la calidad de imagen y funciones que necesitás para comunicarte de manera fácil y efectiva en la virtualidad",
        marca: "EXO",
        nombre: "Cámara web Foscam W21",
        precio: "4.399",
        url: "https://http2.mlstatic.com/D_NQ_NP_678444-MLA50207483008_062022-O.webp"
    },
    {
        cantidad: "716",
        categoria: "computacion",
        codigo: "1554172359871",
        descripcion: "Sin dudas, esta máquina es ideal para cumplir, de forma eficiente, la meta que te propongas",
        marca: "HP",
        nombre: "Impresora a color multifunción",
        precio: "18.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_954133-MLA44482330199_012021-O.webp"
    },
    {
        cantidad: "97",
        categoria: "computacion",
        codigo: "1357784452156",
        descripcion: "Con tu Dell WM126 encontrá eso que buscás en un solo aparato con la mejor tecnología",
        marca: "Logitech",
        nombre: "Mouse inalámbrico Dell WM126",
        precio: "5.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_638392-MLA32146296591_092019-O.webp"
    },
    {
        cantidad: "73",
        categoria: "electrodomesticos",
        codigo: "1112456752364",
        descripcion: "Permite apagar automáticamente el display cuando el equipo no está siendo utilizado. Reduciendo el consumo y logrando así un mayor ahorro de energía",
        marca: "BGH",
        nombre: "Microondas Bgh Eco Negro Digital",
        precio: "46.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_723240-MLA49854576698_052022-W.webp"
    },
    {
        cantidad: "34",
        categoria: "electrodomesticos",
        codigo: "1674344114252",
        descripcion: "El lavado a mano ¡quedó en el pasado! Gracias al lavavajillas, la higiene está garantizada",
        marca: "Whirlpool",
        nombre: "Lavavajillas de 14 cubiertos blanco",
        precio: "20.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_666160-MLA40197052330_122019-O.webp"
    },
    {
        cantidad: "174",
        categoria: "electrodomesticos",
        codigo: "1333647518512",
        descripcion: "El lavarropas Eslabón de Lujo EWH09A hará que el lavado diario sea más sencillo",
        marca: "Whirlpool",
        nombre: "Lavarropas automático Eslabón de Lujo",
        precio: "119.399",
        url: "https://http2.mlstatic.com/D_NQ_NP_834561-MLA46389009590_062021-O.webp"
    },
    {
        cantidad: "15",
        categoria: "electrodomesticos",
        codigo: "3365412181681",
        descripcion: "Al ser empotrable, este horno le brindará a tu cocina un estilo sofisticado y te dará la posibilidad de ahorrar más espacio",
        marca: "Whirlpool",
        nombre: "Horno empotrable eléctrico",
        precio: "198.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_809057-MLA50771877933_072022-O.webp"
    },
    {
        cantidad: "603",
        categoria: "electrodomesticos",
        codigo: "2564112688132",
        descripcion: "Con su encendido automático prendelo de manera rápida y sencilla",
        marca: "Whirlpool",
        nombre: "Anafe a gas Ispirazione",
        precio: "115.799",
        url: "https://http2.mlstatic.com/D_NQ_NP_884844-MLA32149634652_092019-O.webp"
    },
    {
        cantidad: "40",
        categoria: "electrodomesticos",
        codigo: "1884114336812",
        descripcion: "Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Eslabón de Lujo, la protagonista de la cocina",
        marca: "Whirlpool",
        nombre: "Heladera Eslabón de Lujo",
        precio: "126",
        url: "https://http2.mlstatic.com/D_NQ_NP_922031-MLA48157767448_112021-O.webp"
    },
    {
        cantidad: "210",
        categoria: "electrodomesticos",
        codigo: "1259874775314",
        descripcion: "Este electrodoméstico llegó para quedarse. Simple, práctico y cómodo de utilizar para que tus recetas se luzcan",
        marca: "Oster",
        nombre: "Mixer 2803 FPSTHB2803",
        precio: "20.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_886462-MLA32605608599_102019-O.webp"
    },
    {
        cantidad: "92",
        categoria: "electrodomesticos",
        codigo: "1234567891011",
        descripcion: "La seguridad es muy importante, por eso, cuando el agua está lista, la jarra se apaga automáticamente permitiendo a su vez, ahorrar energía",
        marca: "Oster",
        nombre: "Pava eléctrica BVSTKE671",
        precio: "7.790",
        url: "https://http2.mlstatic.com/D_NQ_NP_979745-MLA49141285425_022022-O.webp"
    },
    {
        cantidad: "214",
        categoria: "electrodomesticos",
        codigo: "1681321351351",
        descripcion: "Con el sistema de vapor ajustable eliminarás las arrugas más rebeldes de forma fácil y sencilla sin dañar tu ropa",
        marca: "Oster",
        nombre: "Plancha Seca Di4112",
        precio: "6.745",
        url: "https://http2.mlstatic.com/D_NQ_NP_908842-MLA49849903582_052022-O.webp"
    },
    {
        cantidad: "22",
        categoria: "electrodomesticos",
        codigo: "3513135465165",
        descripcion: "Prepará exquisitas tortas, panes y mucho más con esta batidora Oster FPSTSM3711 y encontrá facilidad sin sacrificar calidad",
        marca: "Oster",
        nombre: "Batidora de pie FPSTSM3711",
        precio: "35.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_663422-MLA44027912877_112020-O.webp"
    },
    {
        cantidad: "879",
        categoria: "electrodomesticos",
        codigo: "1321685465163",
        descripcion: "Descubrí un mundo de posibilidades en la cocina con la licuadora BLSTPYG1211NBG y dale rienda suelta a la creatividad",
        marca: "Oster",
        nombre: "Licuadora BLSTPYG1211NBG",
        precio: "39.999",
        url: "https://http2.mlstatic.com/D_NQ_NP_690238-MLA48089495239_112021-O.webp"
    },
    {
        cantidad: "9",
        categoria: "aireLibre",
        codigo: "1235173156516",
        descripcion: "Con la cama elástica Femmto TPL06FT00 vas a poder disfrutar de horas interminables de diversión",
        marca: "Femmto",
        nombre: "Cama elástica TPL06FT00",
        precio: "47.790",
        url: "https://http2.mlstatic.com/D_NQ_NP_975781-MLA48687779844_122021-O.webp"
    },
    {
        cantidad: "17",
        categoria: "aireLibre",
        codigo: "3450651685213",
        descripcion: "Su capacidad de 940 litros la convierte en el espacio de diversión ideal para toda la familia. Tanto niños como adultos, podrán jugar, zambullirse y disfrutar de forma segura",
        marca: "Bestway",
        nombre: "Pileta inflable redonda",
        precio: "9.499",
        url: "https://http2.mlstatic.com/D_NQ_NP_939743-MLA48162136497_112021-O.webp"
    },
    {
        cantidad: "103",
        categoria: "aireLibre",
        codigo: "1321374171411",
        descripcion: "Esta motosierra Omaha Tools facilitará el trabajo permitiéndote así disfrutar de tu hobby",
        marca: "Omaha",
        nombre: "Motosierra a nafta",
        precio: "20.150",
        url: "https://http2.mlstatic.com/D_NQ_NP_796804-MLA49837896492_052022-O.webp"
    },
    {
        cantidad: "981",
        categoria: "aireLibre",
        codigo: "1351321351313",
        descripcion: "Con tu sopladora Philco MJPSA116 podés eliminar la suciedad y mantener despejadas las áreas verdes, abiertas y otras zonas",
        marca: "Philco",
        nombre: "Sopladora aspiradora MJPSA116",
        precio: "10.730",
        url: "https://http2.mlstatic.com/D_NQ_NP_794662-MLA40251750410_122019-O.webp"
    },
    {
        cantidad: "25",
        categoria: "aireLibre",
        codigo: "3214532135135",
        descripcion: "Esta cortadora de pasto eléctrica cuenta con una bolsa recolectora de 32 L que facilita la tarea del usuario ya que es práctica para colocar y vaciar",
        marca: "Petri",
        nombre: "Cortadora de pasto eléctrica",
        precio: "37.250",
        url: "https://http2.mlstatic.com/D_NQ_NP_611326-MLA40185360782_122019-O.webp"
    },
    {
        cantidad: "544",
        categoria: "aireLibre",
        codigo: "5651320213503",
        descripcion: "Con su válvula de desagüe, vas a poder sacar el agua de una manera mucho más rápida y simple cuando desees limpiarla o vaciarla",
        marca: "Pelopincho",
        nombre: "Pileta estructural rectangular",
        precio: "37.105",
        url: "https://http2.mlstatic.com/D_NQ_NP_980240-MLA40165269048_122019-O.webp"
    },
    {
        cantidad: "69",
        categoria: "computacion",
        codigo: "1324658757655",
        descripcion: "Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces",
        marca: "Trust Gaming",
        nombre: "Micrófono GXT 212 Mico USB 23791",
        precio: "5.249",
        url: "https://http2.mlstatic.com/D_NQ_NP_851788-MLA45455236240_042021-O.webp"
    },
    {
        cantidad: "1.571",
        categoria: "computacion",
        codigo: "1324655721655",
        descripcion: "Los auriculares para gaming GXT 450 Blizz Surround Sound ofrecen sonidos de gaming en alta fidelidad y unos potentes graves",
        marca: "Trust Gaming",
        nombre: "Trust Gxt 450 Auriculares Gamer",
        precio: "9.979",
        url: "https://http2.mlstatic.com/D_NQ_NP_665254-MLA50890793340_072022-O.webp"
    },
    {
        cantidad: "594",
        categoria: "computacion",
        codigo: "1316658721655",
        descripcion: "Control del volumen y de los bajos en la parte frontal del altavoz",
        marca: "Trust Gaming",
        nombre: "Parlantes Gxt 608",
        precio: "13.195",
        url: "https://http2.mlstatic.com/D_NQ_NP_951637-MLA31116087012_062019-O.webp"
    },
    {
        cantidad: "151",
        categoria: "computacion",
        codigo: "1328658721655",
        descripcion: "El diseño contemporáneo de esta laptop le da un aspecto y sensación de primera calidad, con un cuerpo delgado que se adapta a tus viajes cuando estás fuera de la oficina",
        marca: "Lenovo",
        nombre: "Notebook Lenovo V-series V15 G1 Iml Iron Gray",
        precio: "177.180",
        url: "https://http2.mlstatic.com/D_NQ_NP_714842-MLA51838842275_102022-O.webp"
    },
    {
        cantidad: "971",
        categoria: "computacion",
        codigo: "1323758721655",
        descripcion: "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más!",
        marca: "Lenovo",
        nombre: "Tablet Lenovo Yoga Tab",
        precio: "200",
        url: "https://http2.mlstatic.com/D_NQ_NP_898122-MLA48244069278_112021-O.webp"
    },
    {
        cantidad: "258",
        categoria: "electrodomesticos",
        codigo: "1112726752364",
        descripcion: "La ventaja principal de calefaccionar con un convector, es que consigue elevar la temperatura del ambiente sin humedecer el aire",
        marca: "Peabody",
        nombre: "Calefactor eléctrico Peabody",
        precio: "14.700",
        url: "https://http2.mlstatic.com/D_NQ_NP_602706-MLA31485281872_072019-O.webp"
    },
    {
        cantidad: "830",
        categoria: "aireLibre",
        codigo: "1331452387114",
        descripcion: "Diseño de procesamiento único, con un aspecto extraordinario como un bolígrafo",
        marca: "Generic",
        nombre: "Linterna Tactica Mini Led",
        precio: "1.045",
        url: "https://http2.mlstatic.com/D_NQ_NP_635235-MLA48234389676_112021-O.webp"
    },
    {
        cantidad: "1.270",
        categoria: "aireLibre",
        codigo: "1982452157114",
        descripcion: "Una carpa tipo iglu que se arma en segundos",
        marca: "Generic",
        nombre: "Carpa Automatica Playa Camping Reforzada",
        precio: "1.045",
        url: "https://http2.mlstatic.com/D_NQ_NP_644410-MLA48352522996_112021-O.webp"
    },
    {
        cantidad: "743",
        categoria: "aireLibre",
        codigo: "1331499157114",
        descripcion: "Si te gusta estar en los detalles o tenés un espacio verde pequeño, la bordeadora Philco te va a ayudar en aquellas zonas donde no puede alcanzar un cortacésped",
        marca: "Philco",
        nombre: "Bordeadora Philco MJPBO116",
        precio: "7.840",
        url: "https://http2.mlstatic.com/D_NQ_NP_930663-MLA42996177939_082020-O.webp"
    },
    {
        cantidad: "8",
        categoria: "aireLibre",
        codigo: "1331457736114",
        descripcion: "La bomba Vulcano BAE 100 te garantizará que tu pileta cumpla con las condiciones de higiene adecuadas",
        marca: "Vulcano",
        nombre: "Bomba para pileta Vulcano",
        precio: "41.510",
        url: "https://http2.mlstatic.com/D_NQ_NP_721020-MLA48108349358_112021-O.webp"
    },
    {
        cantidad: "800",
        categoria: "aireLibre",
        codigo: "1331452164894",
        descripcion: "Mantener los espacios verdes de tu hogar ahora es más fácil, olvidate de cortes desprolijos y malezas",
        marca: "Omaha",
        nombre: "Desmalezadora Omaha DN52",
        precio: "20.499",
        url: "https://http2.mlstatic.com/D_NQ_NP_868018-MLA51155817879_082022-O.webp"
    }
]

let productosAEnviar = JSON.parse(localStorage.getItem('productos')) || []
let usuariosAEnviar = JSON.parse(localStorage.getItem('regUser')) || []
if (productosAEnviar.length <= 0) {
    localStorage.setItem("productos", JSON.stringify(arrayProductosHard))
}
if (usuariosAEnviar.length <= 0) {
    localStorage.setItem("regUser", JSON.stringify(arrayUsuariosLocal))
}

