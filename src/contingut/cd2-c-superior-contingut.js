/* ============ CD2 · CICLE SUPERIOR (5è i 6è) ============ */
/* Treball individual. El tema és el de la investigació de CD1. Les sessions s’acumulen: a la 7 es fa una producció completa. */
Object.assign(CONTENT, {

'cd2-superior-1':{
 puc:['Sé què fa cada drecera (Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+F) i quan l’uso','Sé copiar i enganxar amb format i només el text','Sé copiar el format d’un títol a un altre'],
 lessons:[
  {t:'Copiar, enganxar i retallar',h:`Amb el teclat és més ràpid:<br>[[key:Ctrl]] + [[key:C]] <b>copia</b> el que has seleccionat.<br>[[key:Ctrl]] + [[key:V]] <b>enganxa</b> el que has copiat.<br>[[key:Ctrl]] + [[key:X]] <b>retalla</b>: ho treu d’aquí i ho pots enganxar en un altre lloc.<br>Sempre prems <b>Ctrl</b> i, sense deixar-la, la lletra.`,fig:()=>figDreceres()},
  {t:'Enganxar amb o sense format',h:`Quan copies un text d’una pàgina web, també copies el seu <b>format</b> (lletra, color, mida). Si l’enganxes tal qual, el teu document queda <b>barrejat</b>.<br>Per enganxar només el text i que agafi el format del teu document, fes servir <b>«Enganxa sense format»</b> ([[key:Ctrl]] + [[key:Maj]] + [[key:V]]).`,fig:()=>figEnganxar()},
  {t:'Copiar el format',h:`Si has fet un títol amb un format (mida, color, negreta) i vols el mateix en un altre títol, no cal repetir-ho: fes servir <b>«Copia el format»</b> (el pinzell 🖌️): selecciona el títol, prem el pinzell i passa’l pel text nou.`},
  {t:'Cercar dins d’un document',h:`Amb [[key:Ctrl]] + [[key:F]] <b>cerques una paraula</b> dins del document. Va molt bé en documents llargs, i a CD1 ja l’has fet servir per trobar una paraula dins d’una pàgina web.`}],
 items:[
  ch('D1','dreceres','Quina drecera <b>copia</b>?',['[[key:Ctrl]] + [[key:C]]','[[key:Ctrl]] + [[key:V]]','[[key:Ctrl]] + [[key:X]]'],0,'La C de «copiar».','Ctrl + C copia.'),
  ch('D2','dreceres','Vols <b>moure</b> un paràgraf (treure’l d’aquí i posar-lo allà). Què fas?',['Ctrl + X i després Ctrl + V','Ctrl + C i després Ctrl + X','Només Ctrl + V'],0,'Retallar i enganxar.','Ctrl + X retalla i Ctrl + V enganxa en un altre lloc.'),
  ch('D3','dreceres','Copies un text d’una web i, en enganxar-lo, hi ha <b>lletres de colors i tipus diferents</b>. Com ho solucionaries?',['Enganxo sense format','Escric tot de nou','Ho deixo així'],0,'Només vols el text.','Enganxar sense format conserva només el text i adopta el format del teu document.'),
  ch('D4','dreceres','Vols el <b>mateix format d’un títol</b> en un altre. Què és més ràpid?',['Copiar el format amb el pinzell 🖌️','Repetir tots els canvis un per un','Esborrar el document'],0,'No cal fer-ho tot de nou.','Copia el format aplica d’una vegada el mateix format.'),
  ch('D5','dreceres','Vols trobar la paraula «ramat» en un document de 10 pàgines. Què fas?',['[[key:Ctrl]] + [[key:F]]','[[key:Ctrl]] + [[key:P]]','Ho llegeixo tot'],0,'La F de «find».','Ctrl + F cerca una paraula dins del document.'),
  ch('D6','dreceres','<b>Per què</b> és millor «Enganxa sense format» quan copies d’una pàgina web?',['Perquè el document manté un format coherent','Perquè s’enganxa més de pressa','Perquè no cal citar la font'],0,'Pensa en l’estil global.','Mantenir un format coherent fa el document més net. Citar la font cal igualment.'),
  ch('D7','dreceres','Has copiat un fragment d’un article sense posar-ne la font. Què falta?',['Citar la font i l’autoria','Res, ja està','Canviar el color'],0,'Copiar no vol dir que sigui teu.','Quan fem servir text d’altri cal citar-ne la font.'),
  {id:'D8',saber:'dreceres',type:'ordre',prompt:'<b>Ordena els passos</b> per moure un paràgraf a un altre lloc.',steps:['Premo Ctrl + V','Selecciono el paràgraf','Poso el cursor on el vull','Premo Ctrl + X'],order:[1,3,2,0],hint:'Primer cal seleccionar.',expl:'Seleccionem, retallem, posem el cursor al lloc nou i enganxem.'}],
 sabers:{dreceres:{realDone:req(['d1','d2','d3'])}},
 real:{blocks:[
   {h:'<b>1.</b> A <b>Documents de Google</b>, copia (Ctrl + C) un paràgraf sobre el teu tema d’una pàgina web que hagis fet servir a CD1. Enganxa’l <b>sense format</b>.',fields:['d1']},
   {h:'<b>2.</b> Fes un títol amb un format (mida, color, negreta) i <b>copia el format</b> a un segon títol amb el pinzell.',fields:['d2']},
   {h:'<b>3.</b> Cerca amb Ctrl + F una paraula clau del teu tema dins del document. Quantes vegades hi apareix?',fields:['d3']}],
  fields:[{k:'d1',type:'select',label:'Has enganxat sense format?',opts:['Sí','No, amb format']},
   {k:'d2',type:'select',label:'Has copiat el format del títol?',opts:['Sí, amb el pinzell','Ho he fet a mà','No']},
   {k:'d3',type:'text',label:'Quantes vegades apareix la paraula?'}]}},

'cd2-superior-2':{
 puc:['Sé estructurar un treball amb títol, apartats i pàgines numerades','Sé fer llistes numerades i amb vinyetes i inserir un salt de pàgina','Sé fer servir la correcció ortogràfica i canviar l’idioma','Sé configurar la impressió'],
 lessons:[
  {t:'Estructura d’un treball',h:`Un treball ben fet té <b>títol</b>, <b>apartats</b> amb subtítols i <b>pàgines numerades</b>.<br>Per posar la <b>numeració de pàgines</b> fes servir el menú <b>Insereix → Números de pàgina</b>.<br>L’<b>orientació</b> (vertical o horitzontal) es canvia a la configuració de la pàgina; l’horitzontal va bé per a taules amples.`,fig:()=>figEstructuraDoc()},
  {t:'Llistes i salt de pàgina',h:`Una <b>llista amb vinyetes</b> (•) s’usa quan l’ordre <b>no importa</b>.<br>Una <b>llista numerada</b> s’usa quan l’<b>ordre importa</b> (passos d’una recepta).<br>Un <b>salt de pàgina</b> fa que el contingut següent comenci a la pàgina nova, sense haver de prémer Intro moltes vegades.`},
  {t:'Símbols, formes i correcció',h:`Pots inserir <b>símbols</b> (€, ©, Ω, ≈) i <b>formes</b> (fletxes, cercles) des del menú Insereix.<br>La <b>correcció ortogràfica</b> subratlla en vermell les faltes. Si el document té una part en un altre idioma, <b>canvia l’idioma</b> d’aquesta part perquè no la marqui com a falta.`},
  {t:'Imprimir bé',h:`Abans d’imprimir revisa la <b>vista prèvia</b>: la mida del paper, l’orientació, els marges i quantes pàgines serà.<br>Així estalvies paper i tinta. Imprimir és l’últim pas, no el primer.`,fig:()=>figOrientacio()}],
 items:[
  ch('G1','doc','Per a una <b>recepta</b> amb passos, quina llista és millor?',['Numerada','Amb vinyetes','Cap'],0,'L’ordre importa.','Una llista numerada serveix quan l’ordre importa.'),
  ch('G2','doc','Per a una llista de <b>ingredients</b>, quina llista és millor?',['Amb vinyetes','Numerada','Un paràgraf sense separar'],0,'L’ordre no importa.','Amb vinyetes quan l’ordre no importa.'),
  ch('G3','doc','Vols que un apartat <b>comenci en una pàgina nova</b>. Què és millor?',['Un salt de pàgina','Prémer Intro moltes vegades','Esborrar el text'],0,'Una eina pensada per això.','El salt de pàgina és més net i no es descol·loca.'),
  ch('G4','doc','El document té una part en <b>anglès</b> i el corrector la marca en vermell. Què fas?',['Canvio l’idioma d’aquesta part','L’esborro','Ignoro el corrector sempre'],0,'No és una falta, és un altre idioma.','Cal canviar l’idioma d’aquesta part perquè no es marqui com a falta.'),
  ch('G5','doc','Una taula és <b>massa ampla</b> per a la pàgina. Què pots provar?',['Canviar l’orientació a horitzontal','Fer la lletra més gran','Esborrar columnes'],0,'La pàgina serà més ampla.','L’orientació horitzontal dona més amplada.'),
  ch('G6','doc','Per què és útil la <b>vista prèvia</b> abans d’imprimir?',['Per veure com quedarà i no malgastar paper','Per canviar el nom','Per esborrar el document'],0,'Una mirada abans.','La vista prèvia evita imprimir amb errors.'),
  ch('G7','doc','El corrector no marca una paraula, però està malament escrita («<i>cassa</i>» en lloc de «<i>casa</i>»). Per què?',['Perquè «cassa» també existeix i el corrector no sap quina volies','Perquè el corrector no funciona','Perquè no cal revisar'],0,'Pensa en paraules que existeixen.','El corrector no entén el significat: cal rellegir.')],
 sabers:{doc:{realDone:req(['g1','g2','g3'])}},
 real:{blocks:[
   {h:'<b>1.</b> Crea un document sobre el teu tema amb <b>títol, almenys dos apartats</b> i <b>pàgines numerades</b>.',fields:['g1']},
   {h:'<b>2.</b> Afegeix una <b>llista numerada</b> o una <b>llista amb vinyetes</b> i fes un <b>salt de pàgina</b> abans de l’últim apartat.',fields:['g2']},
   {h:'<b>3.</b> Passa el corrector, comprova la vista prèvia d’impressió i apunta quantes faltes has corregit.',fields:['g3']}],
  fields:[{k:'g1',type:'check',label:'Què té el document?',opts:['Títol','Dos apartats o més','Pàgines numerades']},
   {k:'g2',type:'select',label:'Quina llista has fet servir?',opts:['Numerada','Amb vinyetes','Cap']},
   {k:'g3',type:'text',label:'Faltes corregides'}]}},

'cd2-superior-3':{
 puc:['Sé triar entre taula, gràfica i esquema segons la informació','Sé combinar cel·les i ajustar files i columnes','Sé inserir una gràfica a partir d’una taula'],
 lessons:[
  {t:'Taula, gràfica o esquema?',h:`<b>Taula</b>: per comparar o consultar <b>dades exactes</b> (quantitat per animal).<br><b>Gràfica</b>: per veure <b>com canvien</b> les dades o <b>quina és més gran</b> d’un cop d’ull (per exemple, l’augment de la temperatura al llarg dels anys).<br><b>Esquema</b>: per mostrar <b>relacions</b> entre idees.<br>Decideix què vols que l’altra persona entengui <b>primer</b>.`,fig:()=>figGrafiques()},
  {t:'Combinar cel·les i ajustar la taula',h:`Pots <b>combinar cel·les</b> perquè una gran ocupi diverses columnes, per exemple per a un títol que abraça tota la taula.<br>Pots <b>ajustar la mida</b> de files i columnes arrossegant les vores: fes-les de la mida del contingut, ni massa grans ni massa petites.<table class="lic"><tr><th colspan="2">Animals del bosc</th></tr><tr><th>Animal</th><th>Què menja</th></tr><tr><td>Llop</td><td>Carn</td></tr></table>`},
  {t:'De taula a gràfica',h:`Per fer una <b>gràfica</b>: 1) escriu les dades en una <b>taula</b>; 2) selecciona-les; 3) a <b>Insereix → Gràfica</b> tria el tipus (barres, línies, sectors); 4) posa-li un <b>títol</b> i indica què representa cada eix.<br>Una gràfica sense títol no s’entén.`},
  {t:'Quin tipus de gràfica?',h:`<b>Barres</b>: compara quantitats entre grups.<br><b>Línies</b>: mostra l’evolució amb el temps.<br><b>Sectors</b> (com un formatge 🧀): mostra les parts d’un total (sumen el 100 %).`}],
 items:[
  ch('T1','taules','Vols mostrar <b>com ha pujat la temperatura</b> any rere any. Què és millor?',['Una gràfica de línies','Un esquema','Un text llarg'],0,'Evolució al llarg del temps.','Les línies mostren l’evolució amb el temps.'),
  ch('T2','taules','Vols comparar el <b>pes</b> de cinc animals. Què és millor?',['Una gràfica de barres','Un paràgraf','Una imatge sola'],0,'Quantitats entre grups.','Les barres comparen quantitats entre grups.'),
  ch('T3','taules','Una cel·la <b>combinada</b> serveix per…',['ocupar diverses columnes, per exemple un títol','esborrar la taula','canviar el color'],0,'Com unir quadrats.','Combinar cel·les uneix diverses cel·les en una.'),
  ch('T4','taules','Quin tipus de gràfica és millor per mostrar <b>quina part del total</b> ocupa cada cosa?',['Sectors','Línies','Barres sempre'],0,'Pensa en un formatge tallat en parts.','Els sectors mostren parts d’un total.'),
  ch('T5','taules','Una gràfica no té <b>títol</b> ni indicacions. Què passa?',['No s’entén què representa','Es veu millor','És més exacta'],0,'Cal context.','Una gràfica sempre necessita títol i eixos clars.'),
  ch('T6','taules','Per fer una gràfica, normalment, primer cal…',['tenir les dades en una taula','escollir el color','imprimir'],0,'Les dades van primer.','La gràfica surt de les dades d’una taula.'),
  ch('T7','taules','Vols mostrar <b>com es relacionen</b> els fets d’una història (qui fa què). Què és millor?',['Un esquema','Una gràfica de línies','Una taula de nombres'],0,'Relacions entre idees.','Un esquema mostra relacions.')],
 sabers:{taules:{realDone:req(['t1','t2','t3'])}},
 real:{blocks:[
   {h:'<b>1.</b> Fes una <b>taula</b> amb dades del teu tema (almenys tres files) i <b>combina cel·les</b> per a un títol.',fields:['t1']},
   {h:'<b>2.</b> Fes una <b>gràfica</b> a partir de la taula. Quin tipus has triat?',fields:['t2']},
   {h:'<b>3.</b> Explica en una frase <b>per què</b> has triat aquest tipus de gràfica.',fields:['t3']}],
  fields:[{k:'t1',type:'select',label:'Has combinat cel·les per al títol?',opts:['Sí','No']},
   {k:'t2',type:'select',label:'Tipus de gràfica',opts:['Barres','Línies','Sectors']},
   {k:'t3',type:'text',label:'Per què aquest tipus de gràfica?'}]}},

'cd2-superior-4':{
 puc:['Sé quan ajuda una animació o una transició i quan distreu','Sé triar colors, lletra i quantitat de text perquè es vegi bé','Sé afegir animacions i transicions i justificar-ne l’ús'],
 lessons:[
  {t:'Animacions i transicions',h:`Una <b>transició</b> és l’efecte que es veu <b>quan canvies de diapositiva</b>.<br>Una <b>animació</b> fa que un element (títol, imatge) <b>aparegui o es mogui</b> dins la diapositiva.<br>Es poden afegir des del menú <b>Insereix</b> o <b>Diapositiva</b>.`,fig:()=>figTransicio()},
  {t:'Menys és més',h:`Ajuden quan <b>revelen un punt a poc a poc</b> i així el públic segueix el que expliques.<br>Distreuen quan són <b>massa</b>, <b>massa llargues</b> o no tenen relació amb el contingut.<br>Una bona regla: <b>com a màxim</b> un tipus de transició a tota la presentació.`},
  {t:'Que es vegi bé',h:`<b>Contrast</b>: text clar sobre fons fosc o text fosc sobre fons clar.<br><b>Mida de lletra</b>: es llegeix des de l’última fila de la classe, si no és massa gran.<br><b>Poques paraules</b> per diapositiva: idees, no paràgrafs.`,fig:()=>figContrast()},
  {t:'Presentar',h:`Una presentació és un <b>suport</b>: tu expliques i les diapositives <b>ajuden</b>. No llegeixis la diapositiva tal qual; afegeix el que no hi ha escrit.`}],
 items:[
  ch('V1','presav','Una <b>transició</b> és…',['l’efecte en canviar de diapositiva','una imatge','un tipus de lletra'],0,'Passes d’una a una altra.','La transició és l’efecte en passar d’una diapositiva a una altra.'),
  ch('V2','presav','Una animació <b>ajuda</b> quan…',['mostra els punts d’un en un mentre els expliques','fa botar tot sense motiu','és molt llarga'],0,'Va al ritme del que expliques.','Ajuda quan acompanya el que expliques.'),
  ch('V3','presav','Una presentació té <b>cinc tipus de transicions</b> diferents. Què és probable?',['Que distreguin l’atenció','Que s’entengui millor','Que sigui més curta'],0,'Menys és més.','Massa efectes distreuen del contingut.'),
  ch('V4','presav','Quin <b>color de text</b> es llegeix millor sobre fons blau fosc?',['Blanc','Blau marí','Verd fosc'],0,'Cal contrast.','El text clar sobre fons fosc es llegeix millor.'),
  ch('V5','presav','Una diapositiva té <b>tres paràgrafs llargs</b>. Què millorem?',['Posem idees clau, poques paraules','Posem la lletra més petita','Afegim més text'],0,'La diapositiva no és el discurs.','Convé usar idees clau i poques paraules.'),
  ch('V6','presav','Quan fas la presentació, el millor és…',['explicar amb les teves paraules i no llegir la diapositiva','llegir-la tal qual','no dir res'],0,'La diapositiva és suport.','Les diapositives són un suport: tu expliques.'),
  ch('V7','presav','Vols justificar una animació. Quina és una <b>bona raó</b>?',['Mostra els passos d’un procés un per un','Fa que quedi més bonic i prou','Em va semblar divertit'],0,'Ha de tenir un sentit.','Una animació ha de tenir una funció clara.')],
 sabers:{presav:{realDone:req(['v1','v2','v3'])}},
 real:{blocks:[
   {h:'<b>1.</b> A <b>Presentacions de Google</b>, crea una presentació de <b>quatre diapositives</b> sobre el teu tema. Cada una, amb una idea i poc text.',fields:['v1']},
   {h:'<b>2.</b> Afegeix <b>una animació</b> en un lloc on ajudi i <b>una sola transició</b> a tota la presentació.',fields:['v2']},
   {h:'<b>3.</b> Explica <b>per què</b> has posat aquesta animació.',fields:['v3']}],
  fields:[{k:'v1',type:'select',label:'Quantes diapositives té?',opts:['Quatre o més','Tres','Menys de tres']},
   {k:'v2',type:'select',label:'Què has afegit?',opts:['Una animació i una transició','Només animació','Només transició','Res']},
   {k:'v3',type:'text',label:'Per què aquesta animació?'}]}},

'cd2-superior-5':{
 fig:()=>figDispositius(),
 puc:['Sé importar un fitxer a un editor multimèdia','Sé fer una edició senzilla d’imatge, vídeo i àudio','Sé on guardar el producte final (núvol, local o memòria externa) i triar el programa'],
 lessons:[
  {t:'Importar a un editor',h:`<b>Importar</b> vol dir <b>portar</b> una foto, un vídeo o un àudio a l’editor des d’una carpeta, de la càmera o del núvol.<br>Fes servir el menú <b>Fitxer → Importa/Obre</b> o arrossega el fitxer a l’editor.`,fig:()=>figFluxEdicio()},
  {t:'Edició senzilla',h:`<b>Imatge</b>: retallar, redimensionar, girar, ajustar la llum.<br><b>Vídeo</b>: retallar clips, ordenar-los, afegir text, música o una veu.<br><b>Àudio</b>: retallar la pista, baixar o pujar el volum.<br>Edita només el que és <b>necessari</b>.`},
  {t:'Exportar i guardar el producte final',h:`<b>Exportar</b> és <b>crear el fitxer final</b> a partir de l’editor.<br>Pots guardar-lo:<br>☁️ al <b>núvol</b> (el pots obrir des de qualsevol lloc);<br>💻 en <b>local</b>, a l’ordinador;<br>💾 en una <b>memòria externa</b> (llapis de memòria, disc dur).<br>Un consell: té <b>dues còpies</b> del que és important.`,fig:()=>figNuvolLocal()},
  {t:'Triar el programa',h:`Per editar pots fer servir programes <b>lliures i gratuïts</b> (com <b>Audacity</b> o <b>GIMP</b>) o <b>de pagament</b> (que cal comprar). Abans de triar, pensa en:<br>💶 el <b>cost</b> i la <b>llicència</b>;<br>🏠 si el pots <b>instal·lar a casa</b>;<br>🔁 si el <b>fitxer s’obre</b> en altres programes.`}],
 items:[
  ch('M1','multi','<b>Importar</b> un fitxer a un editor vol dir…',['portar-lo a l’editor per treballar-hi','esborrar-lo','imprimir-lo'],0,'Portem el fitxer cap a dins.','Importar és portar el fitxer a l’editor.'),
  ch('M2','multi','Per <b>treure el principi i el final</b> d’un vídeo, fas…',['retallar el clip','girar','canviar el color'],0,'Treiem el que sobra.','Retallar el clip elimina parts del vídeo.'),
  ch('M3','multi','<b>Exportar</b> és…',['crear el fitxer final','esborrar els originals','obrir un fitxer'],0,'Després de l’edició.','Exportar crea el fitxer final.'),
  ch('M4','multi','Vols tenir un vídeo important <b>segur</b>. Què fas?',['El guardo en dos llocs (per exemple, núvol i memòria externa)','El deixo només en un ordinador compartit','No el guardo'],0,'Les còpies protegeixen.','Dues còpies eviten perdre el treball.'),
  ch('M5','multi','Vols editar àudio gratuïtament a casa. Què mires primer?',['Si el programa és lliure o gratuït i es pot instal·lar','Només el nom','Que sigui car'],0,'Cost i instal·lació.','Convé mirar el cost, la llicència i si es pot instal·lar.'),
  ch('M6','multi','Un programa lliure com <b>Audacity</b> és…',['gratuït i es pot instal·lar a casa','de pagament','només per a escoles'],0,'No cal comprar-lo.','Audacity és lliure i gratuït.'),
  ch('M7','multi','Per què convé <b>editar només el necessari</b>?',['Perquè així es manté clar i es treballa més ràpid','Perquè està prohibit fer més','Perquè no cal revisar'],0,'Menys és més.','Editar només el necessari fa el producte més clar.'),
  {id:'M8',saber:'multi',type:'ordre',prompt:'<b>Ordena els passos</b> per treballar amb un àudio.',steps:['L’exporto','L’importo a l’editor','El guardo en dos llocs','El retallo'],order:[1,3,0,2],hint:'Primer cal portar-lo a l’editor.',expl:'Importar, retallar, exportar i guardar en dos llocs.'}],
 sabers:{multi:{realDone:req(['m1','m2','m3'])}},
 real:{blocks:[
   {h:'<b>1.</b> <b>Importa</b> una foto, un vídeo o un àudio del teu tema a un editor (el que us indiqui el professorat). Què has importat?',fields:['m1']},
   {h:'<b>2.</b> <b>Edita’l de manera senzilla</b> (retalla, redimensiona o ajusta el volum) i guarda’l. Què has fet?',fields:['m2']},
   {h:'<b>3.</b> On has guardat el producte final i <b>amb quin programa</b> l’has fet? Era lliure o de pagament?',rows:[['m3','m4']],fields:[]}],
  fields:[{k:'m1',type:'select',label:'Què has importat?',opts:['Una foto','Un vídeo','Un àudio']},
   {k:'m2',type:'select',label:'Quina edició has fet?',opts:['Retallar','Redimensionar','Ajustar volum','Una altra']},
   {k:'m3',type:'select',label:'On l’has guardat?',opts:['Al núvol','En local','En una memòria externa','En dos llocs']},
   {k:'m4',type:'select',label:'El programa és…',opts:['Lliure o gratuït','De pagament','No ho sé']}]}},

'cd2-superior-6':{
 puc:['Sé decidir primer què vull transmetre i a qui','Sé triar el format més adient: text, taula, imatge, àudio, vídeo, esquema o mapa conceptual','Sé valorar la qualitat estètica d’una producció'],
 lessons:[
  {t:'Primer pensa què vols transmetre',h:`Abans de triar el format, pregunta’t:<br>❓ <b>Què</b> vull que s’entengui?<br>👥 <b>A qui</b> ho explico (companys, famílies, nens petits)?<br>Segons la resposta, el format és un altre: un nen petit entén millor una imatge; una persona gran potser prefereix un text més gran.`},
  {t:'Triar el format',h:`📝 <b>Text</b>: explicacions i raonaments.<br>▦ <b>Taula</b>: comparar dades.<br>🖼️ <b>Imatge</b>: mostrar com és una cosa.<br>🔊 <b>Àudio</b>: entrevistes, música, relats.<br>🎞️ <b>Vídeo</b>: processos i accions.<br>🧩 <b>Esquema o mapa conceptual</b>: relacions entre idees.<br>Cap no és «millor» sempre: <b>depèn</b> del que vols explicar.`,fig:()=>figFormats()},
  {t:'Mapes conceptuals',h:`Un <b>mapa conceptual</b> posa les idees en <b>caixes</b> unides per <b>fletxes amb paraules</b> que expliquen la relació («es menja», «viu a»).<br>Hi ha aplicacions per fer-los fàcilment. Ajuden a estudiar i a veure l’estructura d’un tema.`,fig:()=>figMapa()},
  {t:'Cura estètica',h:`Una bona producció té:<br>🎨 <b>colors</b> que combinen i es llegeixen;<br>📐 una <b>composició</b> ordenada (res amuntegat);<br>📸 <b>imatges</b> nítides i <b>àudios</b> sense soroll.<br>Una producció cuidada demostra respecte per qui la mira.`}],
 items:[
  ch('E1','format','Abans de triar el format, el més important és pensar…',['què vols transmetre i a qui','quin color triar','quant dura el vídeo'],0,'El format ve després.','Primer el missatge i el públic; després, el format.'),
  ch('E2','format','Vols mostrar <b>com es fa</b> un procés (per exemple, com neixen els llops). Què és millor?',['Un vídeo','Una taula','Un àudio'],0,'Mostra moviment.','El vídeo mostra processos amb moviment.'),
  ch('E3','format','Vols <b>comparar</b> tres animals amb dades. Què és millor?',['Una taula','Un àudio','Una imatge'],0,'Cal comparar.','Una taula compara dades.'),
  ch('E4','format','Vols mostrar com es <b>relacionen</b> els elements d’un ecosistema. Què és millor?',['Un mapa conceptual','Un àudio','Una foto'],0,'Relacions entre idees.','Un mapa conceptual mostra relacions.'),
  ch('E5','format','Una entrevista a una persona gran del poble queda millor en…',['àudio o vídeo','taula','esquema'],0,'La veu té valor.','L’àudio o el vídeo conserven la veu.'),
  ch('E6','format','Una presentació té <b>textos amuntegats</b> i colors que no es llegeixen. Quin aspecte falla?',['La cura estètica i la composició','El tema','El fitxer'],0,'Pensa en l’ordre i el contrast.','La composició i els colors són part de la qualitat.'),
  ch('E7','format','Expliques el mateix tema a nens de P4 i a adults. Què canvia?',['El format i el nivell, segons a qui ho expliques','Res: sempre igual','El nom del fitxer'],0,'Hem de pensar en el públic.','El públic condiciona el format i el nivell.'),
  ch('E8','format','Dos companys expliquen el mateix amb una taula i un vídeo. Quin és «millor»?',['Depèn del que volen transmetre','Sempre el vídeo','Sempre la taula'],0,'No hi ha una resposta única.','El format adequat depèn del missatge i del públic.')],
 sabers:{format:{realDone:req(['e1','e2','e3'])}},
 real:{blocks:[
   {h:'<b>1.</b> Escriu en una frase <b>què vols transmetre</b> sobre el teu tema i <b>a qui</b>.',fields:['e1']},
   {h:'<b>2.</b> Tria <b>el format</b> que et sembla millor i explica <b>per què</b>.',rows:[['e2','e3']],fields:[]}],
  fields:[{k:'e1',type:'text',label:'Què vull transmetre i a qui'},
   {k:'e2',type:'select',label:'Format triat',opts:['Text','Taula','Imatge','Àudio','Vídeo','Esquema o mapa conceptual']},
   {k:'e3',type:'text',label:'Per què aquest format?'}]}},

'cd2-superior-7':{
 puc:['Sé qui és l’autor o l’autora d’un contingut','Sé citar un text i una imatge amb autoria, adreça i data de consulta','Sé posar el meu nom a la meva producció i citar les fonts que he fet servir'],
 lessons:[
  {t:'Qui és l’autor o l’autora?',h:`Tot contingut (text, foto, vídeo, so) té <b>una autoria</b>: algú l’ha fet.<br>Quan el fem servir en el nostre treball hem de <b>reconèixer-ho</b>: dir qui l’ha fet i d’on l’hem tret. A CD1 ho vas veure en mirar les fonts consultades.`},
  {t:'Citar un text i una imatge',h:`Una <b>cita</b> bona té:<br>👤 l’<b>autoria</b> (persona o entitat);<br>📄 el <b>títol</b> de la pàgina;<br>🔗 l’<b>adreça</b> web;<br>📅 la <b>data de consulta</b> (el dia que l’has mirada).<br>Exemple: <i>Pep Soler. «Els llops». Viquipèdia. https://… (consulta: 24/11/2026).</i><br>Per a una imatge, el mateix: autoria, lloc d’on l’has agafada i data.`,fig:()=>figCita()},
  {t:'La nostra autoria',h:`També has d’<b>escriure el teu nom</b> a la teva producció: ets autor o autora del que has creat.<br>A més, dona les <b>gràcies</b> a les fonts que has fet servir amb una llista al final: les <b>fonts consultades</b>.`},
  {t:'Per què citem?',h:`Citem perquè:<br>1. Respectem el <b>treball dels altres</b>.<br>2. Qui ens llegeix pot <b>comprovar</b> el que diem i veure si és fiable.<br>3. Mostrem què és <b>nostre</b> i què hem pres d’altres persones.`}],
 items:[
  ch('A1','autoria','Una cita bona inclou…',['autoria, títol, adreça i data de consulta','només l’adreça','només «Internet»'],0,'Quatre dades.','L’autoria, el títol, l’adreça i la data permeten trobar la font.'),
  clic('A2','autoria','Clica la <b>font del text</b>.',DOCFONT,'fonttext','Diu d’on hem tret la informació.','La font del text diu d’on s’ha tret.'),
  clic('A3','autoria','Clica la <b>font de la imatge</b>.',DOCFONT,'fontimg','Diu qui l’ha feta i on l’hem agafat.','La font de la imatge identifica autoria i lloc.'),
  ch('A4','autoria','Per què cal posar la <b>data de consulta</b>?',['Perquè una pàgina pot canviar amb el temps','Perquè és bonic','No cal'],0,'Les webs s’actualitzen.','La informació d’una web pot canviar.'),
  ch('A5','autoria','Has fet un treball amb text d’una web i una imatge d’un banc d’imatges. Què fas al final?',['Poso una llista de fonts amb autoria i adreça','No poso res','Poso només el nom de la web'],0,'Dono crèdit.','Una llista de fonts reconeix el treball dels altres.'),
  ch('A6','autoria','Hi ha una imatge sense autoria visible. Què és millor?',['Busco una imatge amb autoria clara o en demano permís','La faig servir igualment','Esborro la font'],0,'No sabem de qui és.','Convé fer servir imatges amb autoria identificable.'),
  ch('A7','autoria','Per què posem <b>el nostre nom</b> a la producció?',['Perquè som els autors del que hem creat','Perquè sí','Perquè ho exigeix l’ordinador'],0,'Som autors.','Qui crea un contingut n’és l’autor o l’autora.'),
  ch('A8','autoria','Una cita permet que un lector…',['comprovi i trobi la font','imprimeixi el treball','tanqui el document'],0,'Pensa en la fiabilitat.','Citar permet verificar la informació.')],
 sabers:{autoria:{realDone:req(['a1','a2','a3','a4'])}},
 real:{blocks:[
   {h:'<b>1.</b> <b>Producció final.</b> Crea un document (o una presentació) sobre el teu tema amb: títol, una taula o gràfica, una imatge i el teu nom com a autor o autora. Indica el nom del fitxer.',fields:['a1']},
   {h:'<b>2.</b> Escriu la <b>cita</b> d’un text que hagis fet servir (autoria, títol, adreça i data de consulta).',fields:['a2']},
   {h:'<b>3.</b> Escriu la <b>cita</b> d’una imatge que hagis fet servir.',fields:['a3']},
   {h:'<b>4.</b> Fes una <b>llista de comprovació</b>: marca el que té la teva producció.',fields:['a4']}],
  fields:[{k:'a1',type:'text',label:'Nom del fitxer de la producció'},
   {k:'a2',type:'text',label:'Cita del text'},
   {k:'a3',type:'text',label:'Cita de la imatge'},
   {k:'a4',type:'check',label:'La meva producció té…',opts:['Títol','Una taula o gràfica','Una imatge','El meu nom com a autor/a','Fonts citades amb data de consulta']}]}}

});
