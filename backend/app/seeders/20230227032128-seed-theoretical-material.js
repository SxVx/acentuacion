'use strict'

/** @type {import('sequelize-cli').Migration} */
const { TheoreticalMaterial, SourceOrigin } = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agudas
    await TheoreticalMaterial.create({
      name: 'Palabras agudas',
      theme_id: 1,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras agudas </p>' +
        '<p class="text-justify q-px-md">También llamadas oxítonas. Su sílaba tónica es la última y se <b>escriben con tilde cuando terminan en vocal</b> (mamá), <b>-n</b> (canción) o <b>-s</b> (jamás).</p>' +
        '<p class="text-justify q-px-md">No se escribe sin tilde en en el resto de las terminaciones (<i>animal, señor, pared, cantar...</i>). Tampoco lleva tilde Si la <b>-s</b> va detrás de otra consonante (<i>debuts, robots</i>).</p>' +
        '<p class="text-justify q-px-md">Más ejemplos:</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">además</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">ají</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">salud</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sofá</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tacón</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">calor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">pesar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">reloj</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">maní</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">marroquí</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tambor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cabezón</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sillín</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cojín</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">aprendiz</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">vivir</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">volar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">avión</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tragaluz</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">león</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>con</b> tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Comité</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Café</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Dominó</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Pesqué</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Entendí</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Revés</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Exprés</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Canción</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ilustración</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Acción</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>sin</b> tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Felicidad</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Hacer</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Buscar</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Escozor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Abril</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Candil</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Vislumbrar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Perseguir</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Regaliz</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"><b>Excepciones a la regla</b></p>' +
        '<p class="text-justify q-px-md">Llevan tilde las palabras con hiato (con dos vocales contiguas) aunque no terminen en -n, en -s ni en vocal.</p>' +
        '<p class="text-justify q-px-md">Esto se debe a que el acento gráfico que marca los hiatos es independiente de las reglas generales de acentuación.</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Raíz</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Aéreo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">País</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Raúl</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ataúd</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Caída</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Oír</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sofá</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sábado</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '</br>' +
        '<p class="text-justify q-px-md">No llevan tilde las palabras agudas, aunque la consonante final sea -s, cuando terminan en más de una consonante.</p>' +
        '<p class="text-justify q-px-md">Por ejemplo</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Robots</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Clips</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Lamps</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Troncos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Nubes</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Temas</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Abrigos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Platos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Anillos</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 1,
          updated_at: '2023-03-18',
          source_origin:
            'https://www.diccionariodedudas.com/palabras-agudas-graves-esdrujulas-y-sobreesdrujulas/',
        },
        {
          theoretical_material_id: 1,
          updated_at: '2023-03-18',
          source_origin: 'https://www.diccionariodedudas.com/palabras-agudas/',
        },
      ],
      {},
    )
    // Graves
    await TheoreticalMaterial.create({
      name: 'Palabras graves (llanas)',
      theme_id: 2,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras graves </p>' +
        '<p class="text-justify q-px-md">Las palabras graves son las que tienen la mayor fuerza de voz en su penúltima sílaba. </p>' +
        '<p class="text-justify q-px-md">Como podemos intuir, <b>eso significa que para que una palabra pueda ser grave necesitará tener al menos dos sílabas. </b> Por ejemplo, “cable” (“ca – ble”) o “cosmos” (“cos – mos”).</p>' +
        '<p class="text-justify q-px-md"> <b>A las palabras graves se conoce también como “llanas”.</b> Sin que quepa duda, estas palabras son las más usadas en el español. Y podemos encontrarlas cortas, como “canto” (bisílaba), o largas, como “cauteloso” (tetrasílaba).</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Árbol</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Mármol</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuándo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuánto</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cómo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Dónde</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Útil</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Jiménez</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Césped</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ángel</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cristóbal</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras graves? </p>' +
        '<p class="text-justify q-px-md"> Las palabras graves llevan tilde siempre que no terminen en “n”, “s” ni vocal.</p>' +
        '<p class="text-justify q-px-md"> Si nos fijamos bien, estas normas son exactamente opuestas a las de las agudas. Tengamos presente eso, y nos será muy fácil recordarlas.</p>' +
        '<p class="text-justify q-px-md"> De ese modo, palabras como “ágil”, “cártel” y “lápiz” <b>llevan tilde</b>, <u>pues su terminación lo justifica</u>. En los primeros dos casos, acaban en “l”; en el tercero, en “z”. Por ende, pueden ir acentuadas.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg">Palabras graves sin tilde</p>' +
        '<p class="text-justify q-px-md">Naturalmente, existen en nuestro vocabulario muchas palabras graves sin tilde. <b>De hecho, la mayoría de ellas no la lleva.</b></p>' +
        '<p class="text-justify q-px-md">En este grupo podemos incluir términos como “saludo” y “cambien”. El primero acaba en vocal, mientras que el segundo termina en “n”. Por consiguiente,<b> no deben ir acentuados.</b></p>' +
        '<p class="text-justify q-px-md">Sea como sea, la mayor parte del tiempo nos toparemos con palabras graves que no tendremos que acentuar. Eso nos facilitará mucho la escritura.</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves sin tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Caramelo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Casa</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Silla</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Chocolate</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amapola</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Carambola</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amarillo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calambre</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cangrejo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cambio</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Canto</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calle</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 2,
          updated_at: '2023-03-19',
          source_origin: 'https://unibetas.com/palabras-graves',
        },
      ],
      {},
    )
    // Esdrújulas
    await TheoreticalMaterial.create({
      name: 'Palabras esdrújulas',
      theme_id: 3,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras esdrújulas </p>' +
        '<p class="text-justify q-px-md">Las palabras esdrújulas son las que tienen la mayor fuerza de voz en la antepenúltima sílaba.</p>' +
        '<p class="text-justify q-px-md"> <b>Las palabras esdrújulas pueden ser palabras de muchas clases: sustantivos, verbos, adjetivos e incluso adverbios.</b> Por ende, son quizá las más variadas en ese sentido dentro de nuestro idioma.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras esdrújulas? </p>' +
        '<p class="text-center" col-12 q-px-md"> <b><u>Las palabras esdrújulas siempre llevan tilde, sin excepciones.</u></b></p>' +
        '<p class="text-justify q-px-md"><b>Esa regla es válida sin importar ni la cantidad de sílabas presentes</b> en la palabra ni tampoco su terminación. La única <b>condición</b> indispensable es que el acento de tipo prosódico se halle en la antepenúltima sílaba.</p>' +
        '<p class="text-justify q-px-md">De esa manera, una palabra esdrújula como “pájaro” (trisílaba) va siempre con su acento ortográfico, al igual que “espectáculo” (pentasílaba). Lo mismo con “súbita” (que termina en vocal) y con “déficit” (que acaba en “t”).</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras esdrújulas </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ábaco</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ímpetu</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prójimo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbito</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Órbita</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Fábula</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Lógica</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Crédito</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sábado</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prólogo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Píldora</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Máximo</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Excepción a la regla <br/> (Palabras esdrújulas sin tilde) </p>' +
        '<p class="text-justify" col-12 q-px-md">Si ya dijimos que toda palabra esdrújula va acentuada, no puede ser posible que haya una que no lleve tilde. Sin embargo, hay un grupo de palabras que hacen dudar a muchos sobre esto.</p>' +
        '<p class="text-justify" col-12 q-px-md"><b>Todas comparten una misma terminación:</b> “audazmente”, “locuazmente”, etc. Asimismo todas pertenecen a una misma categoría gramatical: el adverbio. Pues bien, sucede lo siguiente:</p>' +
        '<p class="text-center col-12 q-px-md"><u><b>Todos los adverbios terminados en “mente” tienen una acentuación especial.</b></u></p>' +
        '<p class="text-justify" col-12 q-px-md">Por consiguiente, para poder tildarlos <b>no basta</b> con que identifiquemos dónde está <b>el acento prosódico</b>, sino que hay que fijarse en <b>otro detalle</b>.</p>' +
        '<p class="text-center text-h6" col-12 q-px-md">¿Cómo tildar los adverbios terminados en “mente”?<p>' +
        '<p class="text-justify" col-12 q-px-md">Estos adverbios son en realidad la unión de dos palabras. En primer lugar, un adjetivo; en segundo, la palabra “mente”.<br/>' +
        'Esa fórmula nunca cambia. <b>Lo que sí puede variar es la acentuación.</b> Esta última dependerá del adjetivo pues si llevaba tilde, se conserva, y si no, se deja tal cual.</p>' +
        '<p class="text-justify" col-12 q-px-md">Tomemos de vuelta el <b>ejemplo</b> de <i>“audazmente”</i>. Si pronunciamos esta palabra, nuestro oído pareciera indicarnos que el acento prosódico está en <i>“daz”</i>, tal como en el adjetivo original, por lo que la catalogaríamos como palabra esdrújula.</p>' +
        '<p class="text-justify" col-12 q-px-md"><b>No obstante, en esta situación el criterio que debemos seguir no es sonoro, sino gráfico</b>. Y si nos fijamos, el adjetivo <i>“audaz”</i> no lleva tilde, así que no podemos agregársela en el adverbio.</p>' +
        '<p class="text-justify" col-12 q-px-md">Por lo tanto, a pesar de que “audazmente” nos suene como una esdrújula no debemos acentuarla basándonos en eso. Tan solo apliquemos la norma anterior, y no cometeremos ningún error.</p>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 3,
          updated_at: '2023-03-19',
          source_origin: 'https://unibetas.com/palabras-esdrujulas/',
        },
      ],
      {},
    )
    // Sobresdrújulas
    await TheoreticalMaterial.create({
      name: 'Palabras sobresdrújulas',
      theme_id: 4,
      resource:
        '<p class="text-center text-h4 col-12 q-py-lg"> Palabras sobresdrújulas </p>' +
        '<p class="text-justify q-px-md">Las palabras sobreesdrújulas son aquellas <b>cuya sílaba tónica (la más intensa) es la anterior a la antepenúltima.</b> Según las reglas de acentuación del español, siempre llevan tilde (´):</p>' +
        '<ul class="self-center">' +
        '<li>Júramelo</li>' +
        '<li>Mostrándoselas</li>' +
        '<li>Recordándotelo</li>' +
        '<li>Encontrándomelo</li>' +
        '<li>Tráetelo</li>' +
        '</ul>' +
        '<p class="text-justify q-px-md"> Para referirnos a este tipo de palabras, cabe destacar que los términos <i>sobreesdrújula</i> (con dos letras e) y <i>sobresdrújula</i> (con una letra e) son igualmente válidos.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿ Cómo se forman las palabras sobresdrújulas ? </p>' +
        '<p class="text-justify q-px-md"> Las sobresdrújulas son palabras excepcionales en el español y de muy poco uso en la escritura. Esto se debe a que <b>son verbos a los que se le añaden pronombres al final de la palabra</b>.</p>' +
        '<p class="text-justify q-px-md">Estos pronombres son los llamados enclíticos y son <i>me, te, se, nos, os, lo, la, los, las</i>). Los pronombres <i>le y les</i> no pueden aparecer junto a <i>lo, la, los y las</i>.</p>' +
        '<p class="text-justify q-px-md">Los verbos, a los que se les añaden dichos pronombres, pueden estar en gerundio o en imperativo.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Sobresdrújulas formadas por gerundios y pronombres </p>' +
        '<p class="text-justify q-px-md">A un verbo en gerundio <i>(cantando, comiendo, viviendo)</i> se le añaden dos pronombres al final de la palabra:</p>' +
        '<ul>' +
        '<li>Está todo el tiempo recordándomelo.</li>' +
        '<li>El dependiente estaba vendiéndotelo y no quise interrumpir.</li>' +
        '<li>Sobre el regalo, vi que estabas comprándoselo.</li>' +
        '<li>¡Se pasó el día repitiéndoselo todo el rato!</li>' +
        '<li>Acerca de la canciones, ayer estuvimos cantándoselas por la tarde.</li>' +
        '</ul>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Sobresdrújulas formadas con imperativos y pronombres </p>' +
        '<p class="text-justify q-px-md">A un verbo en imperativo (<i>cante, come, vivan</i>) se le añaden dos pronombres al final de la palabra:</p>' +
        '<p class="text-justify q-px-md"><b>Por ejemplo:</b></p>' +
        '<ul>' +
        '<li>Permítaseme hablar un momento acerca de la naturaleza.</li>' +
        '<li>¡Júramelo o niégamelo!</li>' +
        '<li>Véndeselo de una vez, que está deseando comprar.</li>' +
        '<li>Recuérdamelo más tarde, que ahora estoy ocupado.</li>' +
        '<li>Esas cajas del suelo, quítenmelas de ahí, por favor.</li>' +
        '</ul>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿Son sobresdrújulas las palabras terminadas en <i>"mente"</i>? </p>' +
        '<p class="text-justify q-px-md">Los adverbios que terminan en -mente no son sobresdrújulas. Esto se debe a que este tipo de palabras posee dos sílabas tónicas: la propia del adjetivo y la del sufijo. Aunque posean dos sílabas tónicas, solo llevan una tilde.</p>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 4,
          updated_at: '2023-03-19',
          source_origin: 'https://www.diccionariodedudas.com/palabras-sobreesdrujulas/',
        },
      ],
      {},
    )
    // tónicas
    await TheoreticalMaterial.create({
      name: 'Palabras tónicas',
      theme_id: 5,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras tónicas </p>' +
        '<p class="text-justify q-px-md">Las palabras tónicas <b>son todas aquellas palabras que se pronuncian acentuando una de sus sílabas</b>. ' +
        'La sílaba acentuada de la palabra tónica, a su vez, se denominará sílaba tónica. ' +
        'No todas las palabras en español se perciben, en la lengua hablada, con el mismo grado de tonicidad. ' +
        'Son tónicas las siguientes clases de palabras. </p>' +
        '<ul>' +
        '<li class="q-my-sm"><b>Sustantivos</b> la <i>puerta</i>, la <i>pelota</i>, el <i>amigo</i>, el <i>jardín</i>.</li>' +
        '<li class="q-my-sm"><b>Adjetivos</b> la <i>bonita</i> puerta, el jardín <i>bello</i>.</li>' +
        '<li class="q-my-sm"><b>Verbos y sus formas auxiliares</b> <i>hice</i> la comida, <i>ha</i> llovido, <i>ha</i> entrado.</li>' +
        '<li class="q-my-sm"><b>Adverbios</b> <i>no</i> lloverá, estuvo <i>bien</i>, <i>nunca</i> viene. También los adverbios terminados en <i>-mente</i></b> vienen <i>lentamente</i>, celebran <i>alegremente</i>.</li>' +
        '<li class="q-my-sm"><b>Pronombres personales</b> yo, tú, él, ella, ellos, ellas, nosotros, nosotras, vosotros, vosotras, nos, vos, usted, ustedes, mí, ti, sí, conmigo, contigo, consigo.</li>' +
        '<li class="q-my-sm"><b>Demostrativos</b> <i>esa</i> lámpara, <i>este</i> carro, <i>aquella</i> puerta.</li>' +
        '<li class="q-my-sm"><b>Posesivos</b> mío, tuyo, suyo, nuestro, vuestro, y sus femeninos y plurales.</li>' +
        '<li class="q-my-sm"><b>Indefinidos</b> <i>unos</i> chicos, <i>ninguna</i> canción, <i>algún</i> pariente, <i>varias</i> personas.</li>' +
        '<li class="q-my-sm"><b>Numerales</b> <i>dos</i> sillas, en <i>tercer puesto</i>, <i>quinientas</i> veces.</li>' +
        '<li class="q-my-sm"><b>Interrogativos y exclamativos</b> <i>qué</i> quieres, <i>cuántas</i> personas, <i>quién</i> es, dime <i>cuál</i>.</li>' +
        '<li class="q-my-sm">Algunas <b>conjunciones</b>, sobre todo si son derivadas de adverbios como, por ejemplo, <i>así</i>: “no lo reconoce, <i>así</i> se lo digas mil veces”; o <i>apenas</i>: “apenas me vio, me identificó”. También son tónicos algunos usos de la conjunción y, como, por ejemplo: “¿<i>y</i> viene?”, “¿<i>y</i> el vaso de agua?”</li>' +
        '<li class="q-my-sm"><b>Preposición según.</b> Por ejemplo: “Todo es positivo <i>según</i> se vea”.</li>' +
        '</ul>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Palabras tónicas que se pronuncian como átonas </p>' +
        '<p class="text-justify q-px-md"> Algunas palabras tónicas se pronuncian como átonas en determinados casos, principalmente cuando son el primer elemento en ciertas expresiones ' +
        'que se encuentran formadas por varias palabras escritas separadamente. Así, pues, aunque son tónicas, son pronunciadas como átonas en los siguientes casos: <p>' +
        '<ul>' +
        '<li class="q-my-sm">Cuando constituyen el primer elemento de numerales complejos: cuarenta mil (cuarenta<b>míl</b>), treinta y dos (treitai<b>dós</b>), vigésimo primero (vigesimo<b>priméro</b>).</li>' +
        '<li class="q-my-sm">Cuando son el primer elemento de una locución: cuesta abajo (cuest<b>abájo</b>), medio ambiente (medio<b>ambiénte</b>), mientras tanto (mientras<b>tánto</b>).</li>' +
        '<li class="q-my-sm">Cuando se antepone un sustantivo o adjetivo a otro sustantivo, siendo que la expresión nominal funciona como vocativo: capitán Ochoa (capitan<b>ochóa</b>), buen hombre (buen<b>ómbre</b>).</li>' +
        '</ul>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 5,
          updated_at: '2023-03-19',
          source_origin: 'https://www.diccionariodedudas.com/palabras-tonicas-y-atonas/',
        },
      ],
      {},
    )
    // Átonas
    await TheoreticalMaterial.create({
      name: 'Palabras tónicas',
      theme_id: 6,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras átonas </p>' +
        '<p class="text-justify q-px-md">' +
        'Son palabras átonas todas <b>aquellas que se pronuncian sin acento en la cadena hablada.</b> La gran mayoría de las palabras monosílabas, y unas cuantas bisílabas y trisílabas son átonas. ' +
        'La mayor parte de las palabras trisílabas son naturalmente tónicas. Así, pues, en español son átonas las siguientes clases de palabras: ' +
        '</p>' +
        '<ul>' +
        '<li class="q-my-sm"><b>Artículos</b>: el, la, lo, los, las. Por ejemplo: <i>el</i> cielo, <i>la</i> lluvia, <i>los</i> días.</li>' +
        '<li class="q-my-sm"><b>Posesivos</b>: cuando están antepuestos al nombre: mi, tu, su, nuestro, nuestro, y sus formas femeninas y plurales. Por ejemplo: <i>mi</i> papá, <i>tu</i> traje, <i>nuestro</i> uniforme.</li>' +
        '<li class="q-my-sm">Algunos <b>adverbios</b> como <i>tan</i>, <i>medio</i>. Por ejemplo: <i>tan</i> desilusionado, <i>medio</i> loco. También aun en ciertos casos: <i>aun</i> los más críticos lo aceptaron.</li>' +
        '<li class="q-my-sm">Algunos <b>sustantivos</b> cuando son utilizados como fórmula de tratamiento y se encuentran antepuestos a nombres propios: don, doña, fray, sor, san, santo, santa. Por ejemplo: <i>doña</i> Consuelo, <i>santo</i> Tomás, <i>sor</i> Juana.</li>' +
        '<li class="q-my-sm"><b>Pronombres personales:</b> me, te, se, lo, los, la, las, le, les, nos. Por ejemplo: <i>me</i> vio, <i>se</i> cayó, <i>la</i> busqué, <i>nos</i> encontró.</li>' +
        '<li class="q-my-sm"><b>Relativos:</b> que, quien, donde, como, cuando, cuanto, salvo cual. Por ejemplo: la universidad <i>donde</i> estudié, el modo como me habla, hice <i>cuanto</i> pude.</li>' +
        '<li class="q-my-sm"><b>Conjunciones</b>, salvo algunas excepciones: uno y otro, lo haremos <i>aunque</i> se oponga, no lo sé, <i>pues</i> no me avisó, etc.</li>' +
        '<li class="q-my-sm"><b>Preposiciones</b>, excepto según: <i>para</i> dentro, <i>en</i> casa, <i>por</i> tonto, <i>con</i> dinero, <i>sin</i> amigos.</li>' +
        '</ul>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Palabras tónicas que se pronuncian como átonas </p>' +
        '<p class="text-justify q-px-md"> Algunas palabras tónicas se pronuncian como átonas en determinados casos, principalmente cuando son el primer elemento en ciertas expresiones ' +
        'que se encuentran formadas por varias palabras escritas separadamente. Así, pues, aunque son tónicas, son pronunciadas como átonas en los siguientes casos: <p>' +
        '<ul>' +
        '<li class="q-my-sm">Cuando constituyen el primer elemento de numerales complejos: cuarenta mil (cuarenta<b>míl</b>), treinta y dos (treitai<b>dós</b>), vigésimo primero (vigesimo<b>priméro</b>).</li>' +
        '<li class="q-my-sm">Cuando son el primer elemento de una locución: cuesta abajo (cuest<b>abájo</b>), medio ambiente (medio<b>ambiénte</b>), mientras tanto (mientras<b>tánto</b>).</li>' +
        '<li class="q-my-sm">Cuando se antepone un sustantivo o adjetivo a otro sustantivo, siendo que la expresión nominal funciona como vocativo: capitán Ochoa (capitan<b>ochóa</b>), buen hombre (buen<b>ómbre</b>).</li>' +
        '</ul>' +
        '<br/>' +
        '<p class="text-justify q-px-md">' +
        'En la cadena hablada, las palabras átonas, puesto que no tienen acento propio, se comportan de una manera particular: ' +
        'se “apoyan” en la sílaba tónica de la palabra que las sigue o antecede, con la cual formarán lo que denominamos como grupo acentual.' +
        '</p>' +
        '<p class="text-justify q-px-md"> Dependiendo de la posición de la palabra con la que formen el grupo acentual, las palabras átonas podrán ser de dos tipos: <b>proclíticas</b> y <b>enclíticas</b>: </p>' +
        '<p class="text-justify q-px-md">' +
        '<b>Proclíticas</b> son aquellas palabras átonas que <b>forman grupo acentual con la palabra tónica que tienen a continuación.</b>' +
        'Así, por ejemplo, en el enunciado: se lo esperaba, las palabras proclíticas serán <i>se</i> y <i>lo</i>, que se apoyan en la sílaba tónica del verbo: seloesperába.' +
        '</p>' +
        '<p class="text-justify q-px-md">' +
        '<b>Enclíticas</b> son aquellas palabras átonas que <b>forman grupo acentual con la palabra tónica que las antecede.</b> ' +
        'Por ejemplo, en el enunciado: piénsatelo, las palabras enclíticas son los pronombres te y lo, que se pronuncian apoyados en el verbo.' +
        '</p>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 6,
          updated_at: '2023-03-19',
          source_origin: 'https://www.diccionariodedudas.com/palabras-tonicas-y-atonas/',
        },
      ],
      {},
    )
    // Tritónicas
    await TheoreticalMaterial.create({
      name: 'Palabras tritónicas',
      theme_id: 7,
      resource:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras tritónicas </p>' +
        '<p class="text-justify q-px-md">' +
        'Hay palabras que tienen los mismos sonidos y que se escriben con las mismas letras que otras, pero la situación de su sílaba tónica varía y con ella también cambia el significado. ' +
        'Se llaman tritónicas aquellas palabras que pueden tener la sílaba tónica en tres (tri-) posiciones diferentes, su acento es lo que las diferencia.' +
        '</p>' +
        '<p class="text-justify q-px-md">Veamos el siguiente ejemplo:</p>' +
        '<p class="text-justify q-px-md">Ejemplo 1: Término / Termino / Terminó  </p>' +
        '<ul>' +
        '<li class="q-my-sm">Por favor, no me hables en esos <b><i>términos</i></b></li>' +
        '<li class="q-my-sm">Ya casi <i><b>termino</i></b> el documento y cuando lo tenga listo, te lo envío</li>' +
        '<li class="q-my-sm">Andrés <b><i>terminó</i></b> la tarea muy rápido y después salió a cine con su novia</li>' +
        '</ul>' +
        '<br/>' +
        '<p class="text-justify q-px-md">Este ejercicio es muy importante porque cuando estamos aprendiendo el modo subjuntivo del español, sucede con mucha frecuencia que se confunde la pronunciación del verbo en subjuntivo con la pronunciación del verbo en pasado.</p>' +
        '<p class="text-justify q-px-md">Es muy diferente decir <i>“Yo hablé con ella ayer”</i> a decir <i>“Ojalá, ella hable mañana en la reunión”</i>.</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras tritónicas </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cálculo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calculo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calculó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Práctico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Practico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Practicó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Público</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Publico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Publicó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Género</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Genero</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Genero</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Título</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Titulo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Tituló</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 7,
          updated_at: '2023-03-19',
          source_origin: 'https://ihdemu.com/palabras-tritonicas/',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TheoreticalMaterial', null, {})
  },
}
