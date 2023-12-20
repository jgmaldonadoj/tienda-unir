import {useEffect, useState} from "react";
import audifonos from '../imagenes/audifonos.jpg';
import bonsai from '../imagenes/bonsai.jpg';
import termometro from '../imagenes/termometro.jpg';
import planta from '../imagenes/planta.jpg';
import audifonos1 from '../imagenes/audifonos1.jpg';
import traeger from '../imagenes/traeger.jpg';
import guantes from '../imagenes/guantes.jpg';
import equipo_bonsai from '../imagenes/equipo_bonsai.jpg';
import raspador from '../imagenes/raspador.jpg';
import terrariro from '../imagenes/terrariro.jpg';
import termopro from '../imagenes/termopro.jpg';
import kit_ahumador from '../imagenes/kit_ahumador.jpg';
import aspiradora from '../imagenes/aspiradora.jpg';
import organizador_auto from '../imagenes/organizador_auto.jpg';
import inflador from '../imagenes/inflador.jpg';
import compresor from '../imagenes/compresor.jpg';
import audifonos2 from '../imagenes/audifonos2.jpg';
import audifonos3 from '../imagenes/audifonos3.jpg';
import arbol_jade from '../imagenes/arbol_jade.jpg';
import arbol_enebro from '../imagenes/arbol_enebro.jpg';
import tortuga from '../imagenes/tortuga.jpg';
import rana from '../imagenes/rana.jpg';
import gato from '../imagenes/gato.jpg';
import conejo from '../imagenes/conejo.jpg';
import grinch from '../imagenes/grinch.jpg';
import arbol_vida from '../imagenes/arbol_vida.jpg';
import sol_luna from '../imagenes/sol_luna.jpg';
import arbol_vida2 from '../imagenes/arbol_vida2.jpg';
import farol from '../imagenes/farol.jpg';
import hada from '../imagenes/hada.jpg';
import luces from '../imagenes/luces.jpg';
import gnomo from '../imagenes/gnomo.jpg';
import tiki from '../imagenes/tiki.jpg';
import dinosaurio from '../imagenes/dinosaurio.jpg';
import orca from '../imagenes/orca.jpg';
import paquete_plantas from '../imagenes/paquete_plantas.jpg';
import lampara_arbol from '../imagenes/lampara_arbol.jpg';
import lampara_mesa from '../imagenes/lampara_mesa.jpg';
import lampara_pie from '../imagenes/lampara_pie.jpg';
import lampara_circular from '../imagenes/lampara_circular.jpg';
import lampara_moderna from '../imagenes/lampara_moderna.jpg';
import escultura from '../imagenes/escultura.jpg';
import estatua_abstracta from '../imagenes/estatua_abstracta.jpg';
import homary from '../imagenes/homary.jpg';
import elefante from '../imagenes/elefante.jpg';
import elefante2 from '../imagenes/elefante2.jpg';
import musico from '../imagenes/musico.jpg';
import balon from '../imagenes/balon.jpg';
import jugador from '../imagenes/jugador.jpg';
import muneco from '../imagenes/muneco.jpg';
import pintura1 from '../imagenes/pintura1.jpg';
import planta_colgante from '../imagenes/planta_colgante.jpg';
import lirio from '../imagenes/lirio.jpg';
import cuadro2 from '../imagenes/cuadro2.jpg';

export const useProductos = (filtro) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const productosCompleto = [
                {
                    nombre: "Pintura hecha de óleo",
                    codigo: "001",
                    caracteristicas: [
                        "Tamaño de las pinturas al óleo: 24x24 pulgadas (23.6x23.6 in). Por favor, presta atención al tamaño al realizar un pedido.",
                        "Pintura al óleo de cuchillo de paleta de alta calidad, pintura al óleo 100% hecha a mano, hecha de acrílico fino importado, que puede mantener el colorido permanentemente sin decoloración ni agrietarse.",
                        "Esta obra de arte está pintada a mano por nuestros artistas profesionales. Este lienzo hecho a mano es adecuado para sala de estar, dormitorio, cocina, oficina, hotel, comedor, baño, pasillo, bar, etc. y otros espacios para los amantes del arte."
                    ],
                    precio: 59.99,
                    imagen: pintura1,
                    stock: 10
                },
                {
                    nombre: "Kit de árbol bonsái",
                    codigo: "002",
                    caracteristicas: [
                        "BONSAIS HERMOSOS FÁCIL DE CULTIVAR: Al elegir un kit de bonsái, tiene sentido seleccionar solo los árboles más hermosos. Por eso, seleccionamos solo los árboles más ricos en color para nuestro kit de cultivo de semillas de bonsái. Disfruta y aprecia estos rojos llameantes, deliciosos morados y verduras fragantes en tu hogar.",
                        "NO SE REQUIERE PULGAR VERDE: Tu kit de inicio de bonsái viene con (4) variedades de semillas: Delonix Regia (Flame Tree), Picea Abies (pruca), Pinus Aristata (Bristlecone Pine) y el Árbol Jacaranda (árbol de helecho). Cada semilla es fresca y lista para germinar. Y como sabes, a veces las plántulas tienen un mal día, ¡así que incluimos extras!",
                        "Kit todo en uno con accesorios incluidos: tu kit de cultivo de plantas de árboles bonsái incluye: (4) macetas duraderas (4) bandejas de goteo, (4) marcadores de plantas de madera, (3) turba de suelo, (1) paquete de fertilizante bonsái y (1) instrucciones (idioma español no garantizado). También le regalamos nuestra Guía Digital, por lo que no tiene que buscar en Internet Consejos y Cuidado Profesionales.",
                        "Semillas cultivadas en Estados Unidos: el kit de jardín interior HOME GROWN está fabricado en los Estados Unidos, con semillas y turba sin OMG, y completo con macetas duraderas. Es hermoso para regalar, pero también sirve como el regalo perfecto para los amantes de las plantas para aquellos preocupados por el planeta, y para enseñar a los niños sobre la belleza cruda de la naturaleza",
                        "Un regalo cuidadoso: Love the HOME GROWN Mini Bonsái Tree Plant Set, su impresionante belleza, colorida decoración de plantas y facilidad de uso o reemplazaremos todo tu kit de plantas, o te reembolsaremos cada centavo. Cultiva tu familia de árboles bonsái en interiores o exteriores (sigue nuestra guía) y te encantarán los resultados. ¡Pruébalo ahora y ver!"
                    ],
                    precio: 36.00,
                    imagen: bonsai,
                    stock: 24
                },
                {
                    nombre: "Cuadro de pared de orquídeas",
                    codigo: "003",
                    caracteristicas: [
                        "Tamaño total: 40 x 20 pulgadas (2 piezas de 8 x 12 pulgadas, 2 piezas de 8 x 16 pulgadas, 1 pieza de 8 x 20 pulgadas), total de 5 unidades por juego.",
                        "Lienzo con estampado de orquídeas perladas y flores vibrantes, arte de pared Giclée, imágenes florales HD impresas en lienzo. Decoración del hogar para sala de estar, dormitorio, oficina, baño, cocina, hotel, bar, etc.",
                        "Enmarcado y estirado, listo para colgar. Cada panel tiene un gancho fuerte ya montado en la barra de madera para colgar fácilmente."
                    ],
                    precio: 16.00,
                    imagen: cuadro2,
                    stock: 30
                },
                {
                    nombre: "Planta viva de enebro ",
                    codigo: "004",
                    caracteristicas: [
                        "Planta viva de enebro de jardín japonés enano pre-bonsái - Juniperus procumbens Nana - Wellspring Gardens Starter Plant",
                    ],
                    precio: 22.00,
                    imagen: planta,
                    stock: 33
                },
                {
                    nombre: "Planta decorativa de lirio",
                    codigo: "005",
                    caracteristicas: [
                        "Enfoque en la calidad: a diferencia de otras plantas falsas generales, nuestros árboles están principalmente hechos a mano y tienen más procesos de producción. Son de buena calidad en términos de color, textura y material, tiene un aspecto más realista, un toque más realista y una base más gruesa.",
                        "Regalos de inauguración durante todo el año: se puede colocar en cualquier lugar, al igual que una planta real para que sientas la presencia de la naturaleza. Se puede utilizar en el hogar, oficina, interior, exterior, ideas de regalo, regalos, recuerdos, decoración, bricolaje, exhibición, arte y manualidades, fiesta temática, etc.",
                        "Materiales seguros: Todos los materiales son tratados con retardante de llama, sin ningún olor, resistente al sol, agua, hielo, nieve y todas las plagas. Por lo tanto, no es un problema incluso si se coloca en un entorno sellado."
                    ],
                    precio: 24.00,
                    imagen: lirio,
                    stock: 14
                },
                {
                    nombre: "Traeger Grills Mezcla exclusiva",
                    codigo: "006",
                    caracteristicas: [
                        "Traeger Grills Mezcla exclusiva de briquetas de madera dura 100 % natural para ahumar, hornear, asar, cocinar a fuego lento y hacer a la barbacoa, de 20 libras",
                        "Mezcla exclusiva con sabor a madera: Los sabores de las maderas duras de nogal, arce y cereza se combinan en nuestra mezcla exclusiva de briquetas de madera dura Traeger para brindar un sabor que puede estar a la altura de casi cualquier cosa que cocines; desde carnes clásicas de barbacoa, hasta pescado y verduras, esta versátil mezcla te da un sabor con cuerpo al que volverás una y otra vez.",
                        "No todas las briquetas son iguales: La mejor parrilla de leña del mercado exige las mejores briquetas de madera del mercado. El sabor real no aparece de la nada, está ligado a materiales de calidad y a lograr un humo perfecto; comienza con briquetas de madera dura totalmente naturales hechas en molinos estadounidenses.",
                        "Traeger se ha pasado años desarrollando la briqueta perfecta: La estructura celular compacta única de nuestra madera dura da como resultado una combustión equilibrada y confiable; Traeger se ha pasado años dominando el desarrollo de las briquetas de madera dura que tienen la cantidad justa de humedad y el punto perfecto de dulzura para mantener una proporción perfecta de abrasión y humo."
                    ],
                    precio: 19.90,
                    imagen: traeger,
                    stock: 20
                },
                {
                    nombre: "Plantas colgantes artificiales",
                    codigo: "007",
                    caracteristicas: [
                        "Plantas verdes artificiales brillantes: paquete de 2 plantas de interior colgantes de tela de calidad, con 2 cestas enmarcadas de metal blanco, con 2 hojas realistas antienvejecimiento que no se decoloran y enredaderas de 3.4 pies, 2 ganchos adicionales incluidos, fantásticas luces LED alimentadas por batería, lo que te permite entrar en un mundo natural brillante",
                        "Creación de bricolaje: increíble hacer esta planta sintética con una canasta con algunas flores secas o frescas, y ramas muertas en la maceta, convierta su estilo en su exhibición creativa para un buen estado de ánimo (Consejos: estas plantas colgantes artificiales y luces de alambre de cobre son impermeables IP44, pero la caja de la batería no es impermeable)"
                    ],
                    precio: 29.12,
                    imagen: planta_colgante,
                    stock: 100
                },
                {
                    nombre: "Equipo de bonsai para principiantes",
                    codigo: "008",
                    caracteristicas: [
                        "Todo lo que necesitas para llevar la alegría de cultivar bonsái a tu vida o a tu ser querido, en una elegante caja: contiene 4 tipos de semillas (Norway Spruce, Royal Poinciana, Blue Jacaranda, Rocky Mountain Pine) almacenadas en paquetes seguros para semillas para una mejor germinación, 4 macetas de arpillera, 1 disco de tierra expandible, 4 marcadores de plantas de bambú, 1 cortadora de bonsái y un hermoso combinado. Booking de instrucciones completo y simple klet.",
                        "Rendimiento de crecimiento # 1: Las semillas se almacenan en nuestros paquetes seguros para semillas para garantizar una germinación adecuada.",
                        "El regalo perfecto para bricolaje: para mamá, papá, él o ella, este es el regalo perfecto para regalar en cumpleaños, aniversarios, vacaciones, inauguración de la casa o cualquier otra ocasión, ideal para principiantes, maestros y niños por igual. Vea la emoción en sus ojos mientras experimentan el crecimiento de árboles bonsái de interior.",
                        "No se necesita pulgar verde: simplemente siga las instrucciones paso a paso y ¡listo! Los 4 árboles se pueden plantar y mantener tanto en interiores como en exteriores en cualquier época del año, y no se necesita estratificación para ninguna de las semillas. El folleto incluido es completo y bellamente diseñado para que pueda seguir el viaje de cada semilla, su historia y la mejor manera de plantarla para asegurarse de que germine."
                    ],
                    precio: 13.99,
                    imagen: equipo_bonsai,
                    stock: 24
                },
                {
                    nombre: "Raspador para barbacoa",
                    codigo: "009",
                    caracteristicas: [
                        "FÁCIL COMO 1-2-3: Grill Rescue no tiene partes metálicas y utiliza vapor para limpiar y limpiar la suciedad, y es casi fácil de usar. Calienta tu parrilla a un mínimo de 400 grados Fahrenheit (luego apaga tus quemadores), sumerge tu cepillo de limpieza en agua, limpia suavemente cualquier acumulación o residuo",
                        "Grado profesional: no solo hemos probado este cepillo seguro para barbacoa en numerosas parrillas de gas, carbón, pellets y de superficie plana; el mango está hecho de polipropileno, un plástico resistente al calor, resistente, de grado de cocción. Entonces, ya sea que seas un chef de patio trasero de fin de semana o un maestro de parrilla, este es el limpiador de rejillas perfecto para cualquier ocasión.",
                        "Duradera y resistente al calor: nuestros cabezales de limpieza de larga duración están hechos de una espuma retardante del calor, envueltos en una capa de kevlar de alta temperatura para garantizar la máxima longevidad, y son aptos para lavavajillas y lavadoras. Así que este raspador de parrilla será el caballo de batalla de tus accesorios limpiadores de barbacoa."
                    ],
                    precio: 39.95,
                    imagen: raspador,
                    stock: 67
                },
                {
                    nombre: "Terrario de madera",
                    codigo: "010",
                    caracteristicas: [
                        "Bonito accesorio para fotos: Adecuado para estilo vintage y moderno. Se verá más hermoso y llamativo si llenas la botella con agua de color o pones algunas piedras, flores o un pequeño pez en él. Incluso se puede utilizar como recipiente para bebidas.",
                        "Tamaño - El tamaño del soporte de madera: 14 cm de alto x 28 cm de ancho x 10 cm de profundidad. Cada jarrón: 9.5 cm de alto x 7 cm de ancho. Apertura: 2.5 cm de diámetro. Tamaño adecuado perfecto para el escritorio en la oficina o en casa.",
                        "Materiales: El marco está hecho de madera natural, superficie moteada; tres terrarios en forma de bombilla están hechos de vidrio de silicona de boro, resistente al calor. (No es fácil de romper). Ideal para arreglos florales, decoración del hogar, así como varias ideas de regalo."
                    ],
                    precio: 31.00,
                    imagen: terrariro,
                    stock: 5
                },
                {
                    nombre: "Higrómetro de interior",
                    codigo: "011",
                    caracteristicas: [
                        "Termómetro higrómetro con el monitor de temperatura y humedad; el termómetro de ambiente muestra la temperatura en grados Fahrenheit o Celsius.",
                        "Medidor de humedad con ícono de nivel de humedad que indica las condiciones del aire: seco/cómodo/húmedo.",
                        "Higrómetro termómetro digital que muestra la temperatura alta y baja y los registros de humedad.",
                        "Tablero totalmente inalámbrico y diseño para montar con imanes; funciona con una pila AAA (incluida)."
                    ],
                    precio: 9.30,
                    imagen: termopro,
                    stock: 14
                },
                {
                    nombre: "Kit de ahumador de cóctel",
                    codigo: "012",
                    caracteristicas: [
                        "Kit completo de infusión de whisky: el kit de ahumador de bebidas viene con una chimenea de madera tallada a mano, una antorcha premium recargable de triple llama, cuatro cajas de virutas de madera populares (cereza, manzana, roble y nuez), dos pantallas de malla de acero inoxidable y una hermosa caja de regalo. (El butano no está incluido)",
                        "Kit de infusor de ahumador de whisky con parte superior de vidrio: disfruta de tu cóctel, whisky o bourbon con la profundidad añadida de sabor ahumado. Perfecto para un whisky recto, en las rocas, o cualquier bebida mezclada! Ahumar chips en una variedad de deliciosos sabores, lo que te permite crear el estado de ánimo perfecto para cualquier ocasión.",
                        "Gran regalo para ti, amigos y familia: el kit de ahumador de cóctel antiguo es uno de los mejores regalos de cóctel, whisky, bourbon para hombres, padre, abuelo, marido y mucho más. También es el Día del Padre seleccionado."
                    ],
                    precio: 59.99,
                    imagen: kit_ahumador,
                    stock: 24
                },
                {
                    nombre: " Aspiradora de coche ThisWorx",
                    codigo: "013",
                    caracteristicas: [
                        "PRÁCTICO: Una mini aspiradora para coche o camión que es compacta, ligera (2.4 libras) y fácil de usar. Equipado con un filtro HEPA, este pequeño quitapolvos está listo para cenizas, polvo o derrames de alimentos. Un kit de detalles para el interior del automóvil completamente cargado alojado en un diseño ergonómico",
                        "Potente: esta aspiradora de mano está hecha para su uso en movimiento y resolver problemas fuera de alcance. ¿Un día muy arenoso en la playa? ¿Una capa de pelo de perro? La aspiradora portátil para automóvil está diseñada para resolver problemas",
                        "FUERTE SUCCIÓN: La fuerza ciclónica y la fuerte succión del motor de 106w en estas aspiradoras de mano terminarán con cualquier suciedad, desechos o migas difíciles de alcanzar. Nuestra mini aspiradora para automóvil incluso tiene un filtro lavable de primera línea"
                    ],
                    precio: 26.98,
                    imagen: aspiradora,
                    stock: 29
                },
                {
                    nombre: "Organizador de auto con tapa",
                    codigo: "014",
                    caracteristicas: [
                        "Correa ajustable y diseño plegable – El cubo de basura para coche cuenta con una correa ajustable que permite que se pueda fijar en el reposacabezas delantero y trasero, así como en la parte central para un acceso más sencillo para todos. Gracias al diseño plegable, te beneficiarás de la comodidad funcional de este contenedor de basura automático.",
                        "Correa ajustable y diseño plegable – Puedes colocar nuestro cubo de basura en el suelo, asiento del auto o colgarlo en el respaldo del asiento con el cordón de ajuste. Con correa ajustable para que este contenedor de basura automático se pueda colocar en cualquier lugar.",
                        "Forro interior duradero a prueba de fugas – Este cubo de basura para auto está hecho de material impermeable y a prueba de fugas, fácil de limpiar y lavar. No más preocupaciones por derrames de líquidos u otras manchas difíciles."
                    ],
                    precio: 9.99,
                    imagen: organizador_auto,
                    stock: 19
                },
                {
                    nombre: "Inflador de neumáticos",
                    codigo: "015",
                    caracteristicas: [
                        "Rápido y preciso: construido con materiales de la más alta calidad, Airmoto es un inflador de neumáticos portátil para automóviles, camiones, SUV, motocicletas y bicicletas. Infla rápidamente los neumáticos de tu vehículo en pocos minutos con precisión de hasta 120 PSI. Bomba de aire pequeña y compacta para automóvil que cabe en tu guantera o maletero.",
                        "Apagado automático: utiliza los botones de control \"+\" y \"-\" en el Airmoto para seleccionar fácilmente la presión deseada, simplemente conecta la manguera de aire a tu automóvil y presiona el botón central \"Start\" en la bomba de aire eléctrica. Una vez que se haya alcanzado la presión correcta, el Airmoto se apagará automáticamente. La bomba inalámbrica para neumáticos de automóvil hace que sea fácil llegar a todos los neumáticos sin problemas.",
                        "Aspectos destacados: Cambia fácilmente entre unidades de presión PSI, kPa, Bar y KG/CM con solo pulsar un botón; LCD grande fácil de leer; Medidor digital de presión de neumáticos; Linterna LED incorporada para condiciones de poca luz; Botón de desinflado para disminuir la presión; La manguera de aire se almacena en el interior; Potente batería recargable de 2000 mAh con recarga rápida; Clasificado para 120 PSI."
                    ],
                    precio: 79.99,
                    imagen: inflador,
                    stock: 42
                },
                {
                    nombre: "Inflador de neumáticos",
                    codigo: "016",
                    caracteristicas: [
                        "Velocidad de inflado rápida y fácil de usar: el compresor de aire para neumáticos de VacLife puede inflar el neumático de tu automóvil estándar más rápido en segundos. Simplemente enchúfalo en la toma de alimentación de 12V en tu auto y conecta la manguera al neumático que deseas inflar. Gira el interruptor y el compresor de aire hará todo el trabajo por ti.",
                        "Apagado automático: el compresor de aire VacLife para automóviles utiliza tecnología sencilla y útil. Puedes preajustar la presión que esperas, y cuando el inflador de neumático alcance la presión deseada, el compresor de aire del automóvil se apagará automáticamente. Por lo tanto, ya no tienes que preocuparte por inflar demasiado o por la baja presión de los neumáticos. VacLife escoltará tu seguridad todo el camino.",
                        "Luz LED y 13 pies de largo alcance: nuestra bomba de aire eléctrica viene con una luz LED que puede ayudarte a inflar tu neumático en la noche. Además, el cable de alimentación de 13 pies es lo suficientemente largo para que puedas llegar al neumático delantero y trasero con facilidad. Un cable largo elimina la necesidad de desenchufar cada vez que cambies de un neumático a otro."
                    ],
                    precio: 31.99,
                    imagen: compresor,
                    stock: 24
                },
                {
                    nombre: "Auriculares Bluetooth",
                    codigo: "017",
                    caracteristicas: [
                        "Hasta 60 horas de reproducción: con hasta 60 horas de tiempo de escucha de nuestros auriculares sobre la oreja en modo Bluetooth, el triple que otros auriculares Bluetooth, siempre tendrás música para inspirarte. Viene con un cable de audio de 0.138 in, independientemente de si quieres utilizar auriculares inalámbricos o auriculares con cable, los auriculares Bluetooth Tuitager pueden satisfacerte",
                        "Auriculares estéreo de alta fidelidad: con auriculares estéreo de alta definición y chip Bluetooth 5.0 avanzado, nuestros auriculares plegables tienen como objetivo ofrecerte una calidad de sonido superior con graves profundos de alta fidelidad y agudos cristalinos, ¡piérdete en música inmersiva incluso en los niveles de volumen más bajos! El objetivo que proporciona a los clientes una calidad de sonido excepcional es nuestra búsqueda constante.",
                        "Calidad de sonido optimizada con 6 modos de ecualización: los auriculares ajustables Tuitager tienen 6 modos de ecualización que puedes cambiar libremente entre sonidos de bajos/jazz/voz/rock/pop/clásicos, cada modo te proporciona el sonido de calidad de CD. Los auriculares portátiles Tuitager siempre están actualizados para obtener mejores efectos de sonido y una mejor experiencia auditiva."
                    ],
                    precio: 19.99,
                    imagen: audifonos2,
                    stock: 27
                },
                {
                    nombre: "Auriculares Bluetooth",
                    codigo: "018",
                    caracteristicas: [
                        "Auriculares estéreo de alta fidelidad: los auriculares Bluetooth mejorados KVIDIO con controladores duales de 1.575 in y tecnología de aislamiento de ruido, ofrecen una sensación casi similar a la sala de conciertos a tu música favorita tan cerca como la estás viendo en vivo. Proporciona reproducción de sonido de alta calidad para oyentes, audiófilos y entusiastas del audio doméstico",
                        "Auriculares cómodos inigualables: orejeras hechas de espuma viscoelástica más suave que te da comodidad durante todo el día. La diadema ajustable y las orejeras flexibles pueden adaptarse fácilmente a cualquier forma de cabeza sin presionar la oreja. Plegable y de solo 0.45 libras. Diseño ligero que hace que sea la mejor opción para viajes, entrenamiento y uso diario por estudiantes universitarios",
                        "Amplia compatibilidad: simplemente pulsa el botón multifunción 2 segundos y los auriculares sobre la oreja con micrófono estarán listos para emparejar. Los auriculares inalámbricos KVIDIO son compatibles con todos los dispositivos que admiten cables Bluetooth o de 0.138 in. Con el micrófono integrado, puedes hacer llamadas con manos libres o reuniones Facetime mientras trabajas en casa"
                    ],
                    precio: 19.98,
                    imagen: audifonos3,
                    stock: 37
                },
                {
                    nombre: "Árbol de jade enano, pre-bonsai",
                    codigo: "019",
                    caracteristicas: [
                        "El árbol de jade es una suculenta floreciente de fácil cuidado que también se llama árbol de la amistad o planta de la suerte; también se puede entrenar como un hermoso bonsai.",
                        "Su aspecto de árbol bonsai en miniatura y sus escasas necesidades de agua y cuidados la convierten en una planta única para regalos de bienvenida, dormitorios, apartamentos u oficinas.",
                        "Las suculentas purifican el aire, son de bajo mantenimiento y son excelentes plantas de maceta para mostradores, escritorios, alféizares y macetas en su casa u oficina."
                    ],
                    precio: 47.47,
                    imagen: arbol_jade,
                    stock: 92
                },
                {
                    nombre: "Árbol de enebro bonsái",
                    codigo: "020",
                    caracteristicas: [
                        "Cultivado a mano a la perfección: nuestro enebro, cultivado en California, tiene de 6-8 pulgadas y ha sido seleccionado manualmente para tener la mejor calidad. Está contenido en una hermosa maceta de 7¼ x 3¼ pulgadas de ancho y 2.5 pulgadas de profundidad con un estanque de agua separado.",
                        "Para la buena suerte: simboliza la armonía, el equilibrio, la meditación y la paz, se cree que esta antigua forma de arte en feng shui trae buena fortuna a aquellos que la tienen y cuidan.",
                        "Un bonito regalo: regala prosperidad a gente especial de tu vida. Dado que el bonsái simboliza todo lo bueno de la naturaleza, esta planta de enebro es un maravilloso regalo para la casa de amigos y parientes."
                    ],
                    precio: 24.99,
                    imagen: arbol_enebro,
                    stock: 11
                },
                {
                    nombre: "Estatua de jardín solar",
                    codigo: "021",
                    caracteristicas: [
                        "Luces solares ecológicas para iluminar cualquier espacio al aire libre. Una energía renovable y limpia, alimentada por electricidad, convertida de energía solar durante el día, almacenada en una batería recargable de 1. 2 V AAA 300 mAH Ni-MH – Funciona hasta 8 horas con una carga completa de luz solar.",
                        "Tamaño perfecto: esta decoración de patio trasero para jardines de 8.1 pulgadas / 20.5 cm. de ancho y 4.9 pulgadas / 12.5 cm. de alto hace una impresión dondequiera que lo pongas, en el balcón, patio, en el césped o incluso en un alféizar de ventana ancho.",
                        "Fácil de usar: simplemente enciende la figura de búho y déjala en la posición \"encendido\" durante el día. El panel solar se carga durante las horas de luz del día y se ilumina automáticamente por la noche. Las luces led se cargarán completamente en 6-8 horas y se iluminarán durante 8-10 horas."
                    ],
                    precio: 28.98,
                    imagen: tortuga,
                    stock: 67
                },
                {
                    nombre: "Estatua de jardín de rana",
                    codigo: "022",
                    caracteristicas: [
                        "Tamaño correcto: la escultura de mini rana mide 2.3 x 3.3 x 5 pulgadas y es pequeña sin ser voluminosa. Envuelto de forma segura en espuma de poliestireno, el diseño compacto se puede colocar en cualquier lugar de tu hogar o jardín para un poco de comodidad.",
                        "Alta calidad: hecho de resina avanzada, no hay necesidad de preocuparse por la decoloración o fugas. - Esta decoración de estatua de jardín de ranas para exteriores puede soportar todas las condiciones climáticas, esta decoración de jardín con luz solar está hecha para tu hogar. Asegura que tu entorno brille con la luz más hermosa y caliente tu corazón.",
                        "Bonitas ideas de regalo: nuestros mini accesorios de jardín de hadas para decoración de jardín son el regalo perfecto para cumpleaños, Pascua, Día de la Madre, Día del Padre, aniversarios o inauguración de la casa. ¡A los niños les gustan especialmente las ranas bebés!\n"
                    ],
                    precio: 19.99,
                    imagen: rana,
                    stock: 2
                },
                {
                    nombre: "Estatua de jardín gato",
                    codigo: "023",
                    caracteristicas: [
                        "Servicio posventa profesional: no dudes en ponerte en contacto con nosotros si tienes algún problema con la estatua de gato con linterna solar. Le proporcionaremos un servicio postventa satisfactorio. También proporcionamos 90 días de reemplazo o garantía de reembolso sin riesgos.",
                        "Hermosa decoración de jardín para el hogar y grandes regalos: el gato con estatua de linterna solar no solo es el mejor regalo para cualquier ocasión como cumpleaños, Navidad, día de la madre o día del padre, Pascua, Acción de Gracias, bodas, día de San Valentín, Año Nuevo, graduación, etc. Se puede dar a amantes de los gatos, amantes de los animales, amantes, maridos, esposas, madres, padres, hijos, hijas, etc.",
                        "Fácil de usar: simplemente enciende la linterna y déjala en la posición \"ON\" durante el día. El panel solar se cargará durante las horas del día y se iluminará automáticamente por la noche. El LED se cargará completamente en 6-8 horas y se iluminará durante 8-10 horas."
                    ],
                    precio: 31.98,
                    imagen: gato,
                    stock: 34
                },
                {
                    nombre: "Estatua de jardín conejo",
                    codigo: "024",
                    caracteristicas: [
                        "Luces solares ecológicas para iluminar cualquier espacio al aire libre. Una energía renovable y limpia, alimentada por electricidad, convertida de energía solar durante el día, almacenada en una batería recargable de 1. 2 V AAA 300 mAH Ni-MH – Funciona hasta 8 horas con una carga completa de luz solar.",
                        "Tamaño perfecto: esta decoración de patio trasero para jardines de 8.1 pulgadas / 20.5 cm. de ancho y 4.9 pulgadas / 12.5 cm. de alto hace una impresión dondequiera que lo pongas, en el balcón, patio, en el césped o incluso en un alféizar ancho de la ventana.",
                        "Estatua de alta calidad: hecha de resina resistente a la intemperie, pintada a mano y acabada con un revestimiento resistente a los rayos ultravioletas."
                    ],
                    precio: 29.00,
                    imagen: conejo,
                    stock: 14
                },
                {
                    nombre: "Grinchs Adornos para árbol",
                    codigo: "025",
                    caracteristicas: [
                        "Tamaño: nuestro adorno mide 3.54 pulgadas, lleno de elementos verdes de Navidad, este adorno está equipado con una cuerda, se puede fijar fácilmente a muchas cosas, ideal para la decoración de tus vacaciones.",
                        "Decoraciones para colgar en el árbol de Navidad: una maravillosa idea de regalo de Navidad para los fanáticos de los libros del Dr. Seuss y la clásica festividad \"How a Christmas Geek Stole Christmas!\" Combinación de personajes y diseño de arte popular",
                        "Artesanía de alta calidad: nuestras decoraciones de árbol están impresas con tecnología de sublimación de alta temperatura. La imagen es permanente e impresa en ambos lados. Cada decoración está equipada con cuerdas, por lo que es más fácil de colgar. Este adorno de Navidad personalizado está hecho de acrílico de alta calidad."
                    ],
                    precio: 6.99,
                    imagen: grinch,
                    stock: 240
                },
                {
                    nombre: "Adorno árbol de la vida",
                    codigo: "026",
                    caracteristicas: [
                        "Este adorno de Navidad es un regalo perfecto que añadirá un toque especial a tu intercambio de regalos o como una idea de regalo para tus amigos y familiares, haz que tus decoraciones de Navidad brillen",
                        "Este adorno aporta sofisticación y belleza a tu temporada navideña con su intrincado diseño, meticulosa artesanía y materiales de calidad, será un recuerdo de reliquia preciado durante años.",
                        "El adorno redondo de cerámica bellamente elaborado es perfecto para exhibir en tu árbol de Navidad o alrededor de tu hogar, como una decoración única y añade un toque de elegancia a tu decoración navideña."
                    ],
                    precio: 14.99,
                    imagen: arbol_vida,
                    stock: 24
                },
                {
                    nombre: "Decoración sol y luna",
                    codigo: "027",
                    caracteristicas: [
                        "Diseño único y encantador: perfecto para personas que buscan añadir un toque caprichoso a su decoración navideña.",
                        "Construcción de cerámica de alta calidad y impresión a doble cara que garantizan un uso duradero y vibrante durante años.",
                        "Tamaño 2.8 x 2.8 pulgadas y viene con una hermosa cuerda dorada, hace que este adorno sea perfecto para decorar cualquier tamaño de árbol de Navidad."
                    ],
                    precio: 15.00,
                    imagen: sol_luna,
                    stock: 56
                },
                {
                    nombre: "Adorno árbol de la vida",
                    codigo: "028",
                    caracteristicas: [
                        "¿Quién ama un árbol? ¡Este adorno es para ti! Este adorable árbol de Navidad es nuevo en mi colección de adornos navideños. Este pequeño es un bonito recuerdo para cualquier persona que ama el árbol en general.",
                        "Detalles del producto: Material: adorno de vidrio de alta calidad. Tamaño: 3 pulgadas. Colgado: viene con una cinta plateada para una fácil exhibición. Embalaje: se entrega en una caja de regalo original para guardar y regalar.",
                        "El diseño está impreso permanentemente en el adorno a través de la sublimación, por lo que nunca se desvanecerá ni se pelará. Este hermoso adorno con forma de vidrieras de árbol seguramente hará feliz a cualquier coleccionista de adornos."
                    ],
                    precio: 16.99,
                    imagen: arbol_vida2,
                    stock: 32
                },
                {
                    nombre: "Adorno de Navidad con farol",
                    codigo: "029",
                    caracteristicas: [
                        "El tamaño de los adornos de Navidad de vidrio vintage es de 4.2 x 3.2 x 0.3 pulgadas, el diámetro del vidrio redondo es de 1.7 pulgadas. Ligero solo alrededor de 1.94 oz. Fácil de colgar en el árbol de Navidad y proteger el árbol de Navidad.",
                        "Adorno navideño navideño con imagen Van Gogh Starry Night Style Lantern es una adición festiva a tu decoración navideña o árbol de Navidad. Este adorno redondo de vidrio cubre tu imagen favorita que protege eficazmente la imagen, no se decolora fácilmente.",
                        "Decoración navideña, el adorno de Navidad es una adición festiva a tu decoración navideña o árbol de Navidad. Este adorno de Navidad de aleación y vidrio cuenta con colgar un cristal redondo, cubierto una imagen de moda que muestra claramente tu foto favorita y encantadora llamativa."
                    ],
                    precio: 23.99,
                    imagen: farol,
                    stock: 14
                },
                {
                    nombre: "Estatua hadas para decoración",
                    codigo: "030",
                    caracteristicas: [
                        "LUZ SOLAR AUTOMÁTICA DE ENCENDIDO/APAGADO: Esta luz solar cuenta con componentes fotosensibles integrados que controlan automáticamente el brillo. Se ilumina durante 8 horas por la noche cuando está completamente cargada, se apaga automáticamente al amanecer y se carga durante el día con luz solar.",
                        "Ahorro de energía y costos: el panel solar contiene una batería de litio recargable Ni MH 1.2V/AA 600mAh que recoge la luz solar. Con el interruptor en la posición ON, el panel solar de alta eficiencia carga la batería sin necesidad de electricidad externa, lo que resulta en ahorros significativos.",
                        "Resistente a la intemperie: nuestras luces solares Vuees para decoración de jardín están fabricadas con acero inoxidable de primera calidad y latón grueso, lo que garantiza durabilidad. Están recubiertos con pintura a prueba de óxido y cuentan con un diseño impermeable IP65, lo que les permite soportar diversas condiciones climáticas y mantener una funcionalidad duradera."
                    ],
                    precio: 38.98,
                    imagen: hada,
                    stock: 29
                },
                {
                    nombre: "Homeimpro Luces solares",
                    codigo: "031",
                    caracteristicas: [
                        "Esta luz solar de jardín se carga durante el día (asegúrate de que el interruptor está en posición \"ON\") y se enciende automáticamente por la noche hasta 6 horas cuando está completamente cargada.",
                        "Medidas: 7 x 2.5 x 40 pulgadas. Hecho de metal y vidrio. Ideal para decorar tu camino, jardín, césped o patio.",
                        "La lámpara solar para jardín con estructura duradera y resistente a la intemperie garantiza un rendimiento a largo plazo en la mayoría de las condiciones climáticas."
                    ],
                    precio: 25.99,
                    imagen: luces,
                    stock: 87
                },
                {
                    nombre: "Escultura gnomo de jardín",
                    codigo: "032",
                    caracteristicas: [
                        "El gnomo de jardín está hecho a mano y de material de resina resistente y vestido con césped sintético de fibra de nailon. Dimensiones: 13 x 7.9 x 5.1 pulgadas.",
                        "Esta escultura grande de gnomo para exteriores mide 13 pulgadas de alto. Es lo suficientemente grande para que se note en todo el jardín y adecuado para senderos, jardín, escalones y decoración de cabañas. El exclusivo acabado de la ropa en verde se mezcla con la decoración de tu jardín y definitivamente da alegría a tus visitantes del jardín.",
                        "sta divertida figura de gnomo jardín cuenta con un panel solar integrado en el farol, que rodea la luz LED en la base del farol. Mantén el gnomo de jardín en un lugar soleado. La pantalla de la lámpara debe orientarse hacia el sol, lo que favorece la absorción de la luz. Se carga durante el día y se ilumina automáticamente por la noche. Nota: Asegúrate de encender el botón en la parte inferior antes de ponerlo en tu jardín."
                    ],
                    precio: 36.00,
                    imagen: gnomo,
                    stock: 24
                },
                {
                    nombre: "Estatua Tiki decoración",
                    codigo: "033",
                    caracteristicas: [
                        "Decoración de jardín al aire libre de gnomo tiki diseñado en Estados Unidos: trata a alguien especial o regálate esta escultura y estatuas de jardín bellamente hechas a mano con luz solar, estatua de gnomo de jardín tiki para decoración al aire libre.",
                        "Exquisita artesanía: cada diseño de gnomos Tiki para decoración de jardín está esculpido a mano y pintado a mano a la perfección con capas de pintura extra gruesa y brillante resistente a la intemperie para ayudar a que las decoraciones de tus gnomos duren años.",
                        "Funciona con energía solar: mira este gnomo de jardín travieso súper lindo ataque tiki comiendo gnomos iluminándose por la noche cuando el sol se pone automáticamente. Empuja el interruptor en el botón y deja que ilumine tu hogar después de que el panel solar se cargue durante el día."
                    ],
                    precio: 21.95,
                    imagen: tiki,
                    stock: 38
                },
                {
                    nombre: "Estatua dinosaurio T Rex",
                    codigo: "034",
                    caracteristicas: [
                        "Lindo dinosaurio con sombrero rojo de Navidad y celebración de regalos - Estatuas de jardín maravillosas!",
                        "Es una maravillosa estatua de gnomo de dinosaurio T-Rex jardín decoraciones de Navidad al aire libre, mide: 9.7 \"H",
                        "Perfecto como regalo de vacaciones para tus amigos o familiares que aman los dinosaurios o los gnomos"
                    ],
                    precio: 19.99,
                    imagen: dinosaurio,
                    stock: 24
                },
                {
                    nombre: "Tidal Wave Orca Pod",
                    codigo: "035",
                    caracteristicas: [
                        "Detalle intrincado: el globo de agua está diseñado para añadir un toque de fantasía y diversión a los acentos de tu hogar",
                        "ESCULPADO: Pequeño y dulce globo de agua sobre la base del pedestal dimensional. La figura está esculpida en todo el mundo con apariencia realista.",
                        "DIMENSIONAL: La figura dimensional envuelve el pequeño globo de agua y representa una vaina de orcas jugando en el océano."
                    ],
                    precio: 12.95,
                    imagen: orca,
                    stock: 44
                },
                {
                    nombre: "Paquete de 4 plantas",
                    codigo: "036",
                    caracteristicas: [
                        "Paquete y tamaño: el paquete contiene 4 pequeñas plantas colgantes artificiales, incluyendo romero, eucalipto y 2 macetas de suculentas. Las macetas miden 3.1 pulgadas de alto y 3.1 pulgadas de ancho, y la altura total de las plantas es de aproximadamente 9 pulgadas, mientras que las macetas de las suculentas miden 2 pulgadas de alto y 2.4 pulgadas de ancho, y la altura total es de aproximadamente 4 pulgadas.",
                        "Material seguro: las hojas de estas plantas colgantes falsas de interior están hechas de plástico de alta calidad. Con sus colores vibrantes y texturas claras, estas hojas falsas se ven realistas y naturales. Las resistentes macetas de pulpa gris son duraderas y no se dañan fácilmente. Los materiales que utilizamos no son tóxicos y no son peligrosos y se pueden utilizar con confianza.",
                        "Sin mantenimiento: las plantas colgantes artificiales en macetas no necesitan ser regadas y no se marchitan, y mantendrán su aspecto fresco durante todo el año, lo que las hace perfectas para personas modernas ocupadas. 4 macetas falsas, cada una con sus propias características, creando un estilo brillante y minimalista para tu habitación. Como las macetas de estas plantas están hechas de pulpa de papel, no las pongas en agua."
                    ],
                    precio: 9.00,
                    imagen: paquete_plantas,
                    stock: 25
                },
                {
                    nombre: "Lámpara de árbol bonsái",
                    codigo: "037",
                    caracteristicas: [
                        "[FÁCIL DE ENSAMBLAR Y USAR] Esta luz del árbol bonsái es fácil de configurar y utilizar, simplemente insertar el árbol en la base y luego enchufar el cable en una toma de corriente USB o poner 3x pilas AA en el compartimiento y, finalmente, tocar el interruptor en la parte superior de la base. El árbol se ilumina inmediatamente.",
                        "[LINDA Y HERMOSA DECORACIÓN DE LA HABITACIÓN] La altura de este árbol bonsái luz es de 20 pulgadas y es perfecto. Es muy bonito y hermoso para la decoración de la habitación. Cuando está encendida, da un toque precioso a la habitación. Cuando están apagadas, las luces del árbol son de un color blanco nacarado.",
                        "[2 MODOS DE ALIMENTACIÓN] Esta luz de árbol bonsái puede ser alimentada por 3x pilas AA (pilas NO incluidas) y cable USB (incluido en el paquete)."
                    ],
                    precio: 22.99,
                    imagen: lampara_arbol,
                    stock: 28
                },
                {
                    nombre: "Lámpara de mesa en espiral",
                    codigo: "038",
                    caracteristicas: [
                        "Con 15 pulgadas de altura y 5.9 pulgadas de ancho, nuestra elegante lámpara de mesa LED cuenta con una curva en forma de \"S\" moderna en un acabado de metal cepillado duradero y es una característica llamativa en cualquier habitación. Seguro y personalizable, disfruta de lo último en iluminación moderna.",
                        "Nuestra elegante lámpara de mesa táctil ha sido diseñada con 3 modos de color para adaptarse a tus necesidades de iluminación. El blanco cálido (2700 K) es ideal para relajarse, blanco suave para cenar o socializar (4000 K) o blanco de luz diurna (5000 K) para leer o trabajar.",
                        "¿Necesitas cambiar el brillo de la luz en tu habitación? No hay problema. Nuestra moderna lámpara de mesa LED se puede atenuar continuamente para adaptarse al estado de ánimo u ocasión. ¡Y una función de memoria puede guardar la configuración para usarla la próxima vez!"
                    ],
                    precio: 32.99,
                    imagen: lampara_mesa,
                    stock: 33
                },
                {
                    nombre: "Lámpara de pie LED",
                    codigo: "039",
                    caracteristicas: [
                        "Diseño único de estilo de 5 anillos que se adapta bien a temas de decoración urbana, moderna, minimalista y contemporánea. La lámpara circular de pie para sala de estar es un buen complemento para tu habitación, ya sea que enciendas la luz. Incluso puedes colgar la lámpara de pie que cambia de color de ambiente en la pared como adorno (solo tienes que utilizar tornillos para paneles de yeso y pegamento para mantenerla en su lugar)",
                        "Esta moderna lámpara de pie tiene un práctico interruptor de atenuación táctil integrado que te permite ajustar el brillo de la luz de pie. Una vez para encender, dos veces para iluminar al 50%, una tercera vez al 100% de brillo y toque nuevamente para apagar.",
                        "Ahorro de energía y larga vida útil: la lámpara de pie LED para la vida de la sala de estar puede hasta 20,000 horas a la corriente y voltaje correctos, y tiene una vida útil normal de 11 años (aproximadamente 5 horas/día)."
                    ],
                    precio: 15.76,
                    imagen: lampara_pie,
                    stock: 63
                },
                {
                    nombre: "Lámpara LED circular ",
                    codigo: "040",
                    caracteristicas: [
                        "Diseño contemporáneo y elegante de espiral: nuestra lámpara LED infinita espiral diseño minimalista contemporáneo añade una estética artística simple pero impresionante a cualquier habitación. Es la lámpara de mesa perfecta para una sala de estar, oficina o como mesita de noche o luz nocturna en tu dormitorio.",
                        "Ajuste táctil no polar: la lámpara de mesa LED Infinity en espiral te permite ajustar tu luz de acuerdo a la ocasión con un simple controlador táctil. Ilumina cuando necesites leer o estudiar o atenuar cuando estés buscando crear un ambiente más suave.",
                        "El ajuste de luz blanca cálida funciona bien para una iluminación suave del hogar en un dormitorio, la luz neutra es perfecta para la iluminación diaria de restaurantes y la luz blanca fría es ideal para leer en la sala de estar y la sala de estudio. Seleccione el mejor color de iluminación para el ajuste."
                    ],
                    precio: 32.99,
                    imagen: lampara_circular,
                    stock: 67
                },
                {
                    nombre: "Lámpara de mesa moderna",
                    codigo: "041",
                    caracteristicas: [
                        "Diseño creativo de ángel en espiral: la moderna lámpara de mesa LED cuenta con un elegante diseño estético en espiral, como un ángel que la hace tan destacada y de buen aspecto. Esta moderna lámpara está hecha de metal estable, el acabado cromado es suave como espejo, aporta una estética artística y luz cómoda para tu habitación. También es perfecto para expresar amor y regalar a amigos.",
                        "Regulable continuo y protección ocular: la lámpara LED de noche viene con interruptor de atenuación continuo, para ajustar cualquier brillo para satisfacer diferentes necesidades. La temperatura de color de la lámpara LED es de 3000 K (luz cálida), cuentas de lámpara LED de alta calidad, sin parpadeo, la iluminación aerodinámica no hará que tus ojos se cansen incluso si la usas durante mucho tiempo.",
                        "Ahorro de energía y base antideslizante: la vida útil de la lámpara LED de mesita de noche es de más de 50,000 horas de trabajo. Las tiras de luz LED de 12 W están dentro de esta lámpara de noche, no hay necesidad de reemplazar bombillas adicionales y ahorrar en tu factura de electricidad. La base de la lámpara de escritorio está hecha de material antideslizante de alta calidad, para usarla cómodamente sin preocuparse por la estabilidad."
                    ],
                    precio: 49.99,
                    imagen: lampara_moderna,
                    stock: 24
                },
                {
                    nombre: "Escultura de cerámica arte",
                    codigo: "042",
                    caracteristicas: [
                        "Decoración estética creativa: juego de 2 piezas de escultura de estatua de arte de cerámica, centros de mesa perfectos, artículos de decoración de soporte de televisión. También es la decoración de mesa romántica escandinava más popular en los tiempos modernos, con una elegancia simple sin perder el ambiente de ánimo.",
                        "Decoraciones elegantes: la estatua de cerámica blanca y dorada es una obra de arte creativa, inspiración de diseño (llamas, alas en forma de hoja, cuentas). Le da a la estatua un significado único y especial, la llama es un símbolo de fuerza y victoria, las alas y las cuentas doradas se pueden interpretar como proteger a la persona más importante en el corazón.",
                        "El regalo perfecto de la expresión artística: Las estatuas de arte abstracto son cuidadosamente elaboradas por artistas expertos, mezclando formas únicas. Como regalo, se convierten en un símbolo preciado de creatividad, imaginación e individualidad. Estatuas de arte abstracto que son más que meros objetos decorativos; evocan emociones e inspiran reflexión."
                    ],
                    precio: 45.99,
                    imagen: escultura,
                    stock: 64
                },
                {
                    nombre: "Estatua abstracta de cerámica",
                    codigo: "043",
                    caracteristicas: [
                        "Dimensiones perfectas: la figura abstracta de cerámica viene en un tamaño elegante, con la pequeña mide 6.7 x 2.36 x 8.66 pulgadas, y el tamaño grande es de 6.7 x 2.36 x 11.8 pulgadas. Se adapta perfectamente a cualquier decoración moderna del hogar, ya sea como centro de mesa para el comedor, sala de estar u oficina, mezclándose perfectamente en varios estilos de hogar.",
                        "Material de calidad: la figura abstracta de oro blanco está hecha de cerámica de alta calidad, cocida a altas temperaturas para dar una superficie lisa, cómoda al tacto, fácil de limpiar, inodora, no tóxica y no peligrosa. Cuando se coloca en un lugar bien iluminado, como su sala de estar u oficina, refleja colores brillantes, llamando su atención y mejorando el sabor del propietario.",
                        "Adecuado para cualquier ocasión: esta decoración creativa y moderna para el hogar puede servir como centros de mesa para el comedor, sala de estar u oficina, decoración de mesa auxiliar, decoración de chimenea, decoración de soporte de TV. Su singularidad y delicadeza lo convierten en una excelente opción como regalo de negocios o para un amigo, destacándose en cualquier entorno."
                    ],
                    precio: 24.99,
                    imagen: estatua_abstracta,
                    stock: 33
                },
                {
                    nombre: "Homary Decoración moderna",
                    codigo: "044",
                    caracteristicas: [
                        "Diseño creativo: los globos abstractos se han convertido en íconos científicos con delicados anillos y formas encantadoras. Base de metal para mayor estabilidad y durabilidad",
                        "Estatuas únicas: este globo de metal exquisitamente elaborado seguramente añadirá energía a tu habitación y es una gran opción para decoración del hogar y regalos",
                        "Decoración elegante: estas elegantes estatuas de globo se adaptan a cualquier estilo de decoración. Ideal para decoración de cocina, dormitorio, oficina, sala de estar, hotel, apartamento, etc. Cualquier espacio se beneficiará de la adición de un globo de mesa de metal"
                    ],
                    precio: 89.00,
                    imagen: homary,
                    stock: 10
                },
                {
                    nombre: "Estatua de elefante",
                    codigo: "045",
                    caracteristicas: [
                        "La decoración de elefante dorable simboliza la suerte y la felicidad. Esta estatua de elefante puede traerte riqueza y fortuna.",
                        "Una adorable estatua de un elefante es un excelente adorno en un hogar, oficina, escritorio o cualquier espacio dentro de una casa, infundiendo vida y energía en el hogar.",
                        "La mejor opción de regalo. La estatua de elefante es una gran opción de regalo de cumpleaños, Acción de Gracias, Navidad para tu madre, papá, amigos y familia. No solo es un gesto reflexivo, sino que también sirve como un símbolo positivo asociado con la prosperidad y la buena fortuna."
                    ],
                    precio: 16.99,
                    imagen: elefante,
                    stock: 34
                },
                {
                    nombre: "Estatua de elefante luz",
                    codigo: "046",
                    caracteristicas: [
                        "Adorable decoración de elefante: elegante figura de elefante blanco incrustada en una estatua de piedra natural con líneas irregulares, diseño abstracto moderno en la mesa o estante que es muy llamativo. Elegante color blanco de piedra natural con cálida iluminación amarillenta que ilumina la piedra dura, creando un ambiente cómodo y acogedor en tu hogar.",
                        "Estatua decorativa moderna de elefante, elegante estatua de escritorio adecuada para decoración del hogar, como: decoración de mesita de noche, decoración de estantería, decoración de mesa auxiliar, sala de estar, decoración de mesa de comedor, decoración de entrada, armario de TV, estantes de baño, decoración de chimenea.",
                        "Decoración de estatua de mesa de doble uso: 5.8 pulgadas de largo x 4.2 pulgadas de ancho x 5.9 pulgadas de alto. Las resistentes esculturas de elefante son perfectas para decoraciones del hogar y luz nocturna de guardería. La estatua es una luz de acento inalámbrica que funciona con pilas, funciona con 3 pilas AA (no incluidas). El LED se apaga automáticamente después de 6 horas de tiempo de ejecución"
                    ],
                    precio: 23.99,
                    imagen: elefante2,
                    stock: 24
                },
                {
                    nombre: "Figura de músico decoración ",
                    codigo: "047",
                    caracteristicas: [
                        "El diseño: el saxofón fue inventado por Joseph Sax en 1840. El actor del saxofón es de una de las bandas. Suave actor romántico en ropa blanca de pie sobre base negra con saxofón dorado, increíble música volando. Para limpiar, limpiar con un cepillo suave o un paño.",
                        "Actor de saxofón: la escultura del saxofón es perfecta para la decoración del hogar o la oficina. Ponlos en tu habitación y decora tu habitación, como escritorio, mesa, estantería, mesa de comedor, mesita de noche. Deja que tu hogar (habitación) tenga un lugar más escénico.",
                        "Calidad prémium: 8.5 in de alto y 3.5 in de ancho. El piano de decoración musical está hecho de polirresina de la mejor calidad. Pintura 100% sin plomo y respetuosa con el medio ambiente, es seguro para niños y niños."
                    ],
                    precio: 25.90,
                    imagen: musico,
                    stock: 21
                },
                {
                    nombre: "Pelota fútbol personalizado",
                    codigo: "048",
                    caracteristicas: [
                        "Incluye tu elección de nombre para hacer de esta una pieza de recuerdo única y especial",
                        "Regalo perfecto para jugadores de secundaria, atletas universitarios o banquetes de equipos deportivos",
                        "Bellamente detallado y hecho de resina. Este adorno mide aproximadamente 2.5 pulgadas."
                    ],
                    precio: 12.99,
                    imagen: balon,
                    stock: 74
                },
                {
                    nombre: "Adorno jugador de fútbol",
                    codigo: "049",
                    caracteristicas: [
                        "3.5 pulgadas de alto x 3.2 pulgadas de ancho x 1.6 pulgadas de largo",
                        "Hecho de vidrio de alta calidad, garantiza un brillo impresionante y una durabilidad duradera",
                        "Exquisitamente pintado a mano: resalta colores vibrantes y detalles intrincados para un atractivo único"
                    ],
                    precio: 12.00,
                    imagen: jugador,
                    stock: 27
                },
                {
                    nombre: "Muñeco de nieve de pelota",
                    codigo: "050",
                    caracteristicas: [
                        "Adorno colgante decorativo: ¡Cuelga las medias y recorta el árbol con este adorno de bola de fútbol de muñeco de nieve en blanco y negro! Dale una sonrisa a la cara de tu jugador favorito esta temporada navideña con este muñeco de nieve con adorno de fútbol. Perfecto para las vacaciones o para tu adorno de árbol de temporada durante todo el año.",
                        "Diseño único y elegante: con un par de balones de fútbol blancos y negros apilados para hacer un encantador muñeco de nieve con brazos de alambre, cara sonriente con nariz de zanahoria y gorro rojo, este diseño seguramente será un favorito de la familia año tras año y despertará la cobertura de todos aquellos que lo miran. Ya sea que digas Feliz Navidad, Mele Kelikimaka, Feliz Navidad o Felices Fiestas, este adorno será un complemento de bienvenida esta temporada",
                        "Regalo perfecto para todo el año: Dale un toque personal a tu regalo este año presentando a un cónyuge, amigo, compañero de trabajo o miembro de la familia con este adorno único. No solo es ideal para el árbol de Navidad, sino que también se puede utilizar para un árbol de temporada o para llevar el encanto de los intereses personales y pasatiempos de cualquier persona a cualquier lugar de tu casa durante todo el año.\n"
                    ],
                    precio: 22.00,
                    imagen: muneco,
                    stock: 24
                }
            ];
            if (filtro == null || filtro == "") {
                setProductos(productosCompleto);
            } else {
                const result = productosCompleto.filter(obj => {
                    return obj.nombre.toUpperCase().includes(filtro.toUpperCase());
                })
                setProductos(result);
            }

        }, 2000);
    }, [filtro]);

    return productos;
}