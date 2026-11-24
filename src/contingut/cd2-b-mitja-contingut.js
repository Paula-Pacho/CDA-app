/* ============ CD2 · CICLE MITJÀ (3r i 4t) ============ */
/* Treball en parella. El tema de les produccions és el de la investigació de CD1. */
Object.assign(CONTENT, {

'cd2-mitja-1':{
 puc:['Sé escriure accents oberts i tancats, l’apòstrof i el guionet','Sé escriure la l·l i la dieresi','Sé fer una majúscula i activar la majúscula fixa'],
 lessons:[
  {t:'Accent obert i tancat',h:`En català hi ha dos accents:<br>L’<b>accent obert</b> (à, è, ò) va cap a l’esquerra.<br>L’<b>accent tancat</b> (é, í, ó, ú) va cap a la dreta.<br>En molts teclats, <b>primer</b> es prem la tecla de l’accent i <b>després</b> la lletra. La posició de les tecles pot variar segons el teclat.`,fig:()=>figAccents()},
  {t:'Apòstrof, guionet i punt volat',h:`L’<b>apòstrof</b> (’) apareix a <b>l’escola</b>, <b>d’aquí</b>, <b>m’agrada</b>.<br>El <b>guionet</b> (-) uneix paraules en casos com <b>porta-li</b> o <b>vés-hi</b>.<br>La <b>l·l</b> porta un <b>punt volat</b> (·): <b>col·legi</b>, <b>il·lusió</b>. És un punt al mig, no un punt normal.`},
  {t:'Dieresi i ç',h:`La <b>dieresi</b> (¨) es posa sobre la <b>i</b> o la <b>u</b>: <b>país</b> (no porta dieresi), <b>raïm</b>, <b>pingüí</b>.<br>La <b>ç</b> (ce trencada) té una tecla pròpia al teclat.`},
  {t:'Majúscula i majúscula fixa',h:`Per fer <b>una</b> majúscula premem [[key:⇧]] i la lletra.<br>Per escriure <b>moltes</b> majúscules seguides activem la <b>majúscula fixa</b> ([[key:Bloq Maj]]). Per desactivar-la, la tornem a prémer.<br>Pot ser útil per a <b>TÍTOLS</b>, però un text ben escrit no va tot en majúscules.`,fig:()=>figTeclesCat()}],
 items:[
  ch('C1','teclat','Quina paraula té <b>accent tancat</b>?',['també','això','cafè'],0,'L’accent tancat va cap a la dreta (é).','«també» porta accent tancat (é); «això» i «cafè» en porten d’oberts.'),
  ch('C2','teclat','Quina paraula porta un <b>apòstrof</b>?',['l’escola','la escola','l-escola'],0,'L’article perd una lletra davant d’una vocal.','«l’escola» porta apòstrof: l’article «la» es converteix en «l’».'),
  ch('C3','teclat','Quina paraula s’escriu bé amb <b>punt volat</b>?',['col.legi','col·legi','col-legi'],1,'Cal un punt al mig, no a baix.','«col·legi» porta punt volat (l·l).'),
  ch('C4','teclat','Quina paraula porta <b>dieresi</b>?',['pingüí','país','llapis'],0,'Pensa en la u i en la i.','«pingüí» porta dieresi sobre la u.'),
  ch('C5','teclat','Vols escriure un <b>títol</b> en majúscules. Què pots fer?',['Activar la majúscula fixa [[key:Bloq Maj]]','Premre l’espai','Esborrar'],0,'Així no cal prémer ⇧ cada vegada.','La majúscula fixa deixa escriure moltes majúscules seguides.'),
  ch('C6','teclat','Quina d’aquestes frases està <b>ben escrita</b>?',['M’agrada anar a l’escola','Magrada anar a la escola','M agrada anar a l’escola'],0,'Hi ha dos apòstrofs.','«M’agrada» i «l’escola» porten apòstrof.'),
  ch('C7','teclat','La <b>ç</b> és…',['una lletra que té tecla pròpia','una c amb una cua que no existeix al teclat','un signe de puntuació'],0,'Busca-la prop de la Ñ.','La ç és una lletra pròpia del català i té tecla pròpia.')],
 sabers:{teclat:{realDone:req(['c1','c2','c3'])}},
 real:{blocks:[
   {h:'<b>1.</b> Escriviu en parella, a <b>Documents de Google</b>, una frase sobre el vostre tema amb un <b>accent obert</b> i un <b>accent tancat</b>. Copieu aquí la frase.',fields:['c1']},
   {h:'<b>2.</b> Escriviu una paraula amb <b>l·l</b> (punt volat) i una amb <b>apòstrof</b> i copieu-les aquí.',rows:[['c2','c3']],fields:[]}],
  fields:[{k:'c1',type:'text',label:'La vostra frase amb els dos accents'},
   {k:'c2',type:'text',label:'Paraula amb l·l'},
   {k:'c3',type:'text',label:'Paraula amb apòstrof'}]}},

'cd2-mitja-2':{
 puc:['Sé canviar la mida del text, subratllar-lo i posar-lo en cursiva','Sé quan convé cada format (títol, destacar)','Sé desfer i refer amb els botons i amb les dreceres'],
 lessons:[
  {t:'Mida, cursiva i subratllat',h:`Amb la <b>mida</b> fem el text més gran (per a un <b>títol</b>) o més petit.<br>La <b>cursiva</b> inclina les lletres: <i>per destacar un títol d’un llibre o una paraula estrangera</i>.<br>El <b>subratllat</b> posa una ratlla sota el text. Compte: els enllaços també són subratllats; no l’abusem.`,fig:()=>figFormatExemples()},
  {t:'Tipus de lletra',h:`El <b>tipus de lletra</b> canvia com es veu el text. Convé usar <b>pocs tipus</b> (un o dos) i que es llegeixin bé.<br>Un text amb molts tipus diferents queda <b>embolicat</b>.`,fig:()=>figTipusLletra()},
  {t:'Quan convé cada format',h:`<b>Títol</b>: mida gran i negreta.<br><b>Destacar</b> una idea: negreta o color, però no a tot arreu.<br><b>Llegir bé</b>: lletra clara i mida còmoda. Si tot està destacat, <b>res no destaca</b>.`},
  {t:'Desfer i refer amb dreceres',h:`Amb els botons ↶ i ↷ desfem i refem.<br>També es pot fer amb el teclat: [[key:Ctrl]] i [[key:Z]] <b>desfà</b>; [[key:Ctrl]] i [[key:Y]] <b>refà</b>.<br>Fixeu-vos que sempre es prem <b>Ctrl</b> primer i, sense deixar-la, la lletra.`,fig:()=>figBarraDoc()}],
 items:[
  ch('F1','format','Volem un <b>títol</b>. Què fem?',['Mida gran i negreta','Mida petita i tot en color','Tot subratllat'],0,'El títol s’ha de veure de seguida.','Un títol convé que sigui gran i en negreta.'),
  ch('F2','format','Per destacar el <b>títol d’un llibre</b> dins d’un text, fem servir…',['la cursiva','el subratllat','un color qualsevol'],0,'Inclina les lletres.','La cursiva s’usa per a títols d’obres.'),
  ch('F3','format','Un text té <b>cinc tipus de lletra diferents</b>. Què passa?',['Queda embolicat i costa de llegir','Queda més clar','No passa res'],0,'Pensa en la lectura.','Convé usar pocs tipus de lletra.'),
  ch('F4','format','Quina drecera <b>desfà</b> l’últim canvi?',['[[key:Ctrl]] i [[key:Z]]','[[key:Ctrl]] i [[key:C]]','[[key:Ctrl]] i [[key:P]]'],0,'La Z és a baix a l’esquerra.','Ctrl i Z desfà l’últim canvi.'),
  ch('F5','format','Quina drecera <b>refà</b> el que hem desfet?',['[[key:Ctrl]] i [[key:Y]]','[[key:Ctrl]] i [[key:Z]]','[[key:Ctrl]] i [[key:0]]'],0,'Va a la inversa de desfer.','Ctrl i Y refà el que hem desfet.'),
  ch('F6','format','Si <b>tot</b> el text està en negreta i en color…',['res no destaca','tot es llegeix millor','el text desapareix'],0,'Destacar vol dir que una part sigui diferent.','Si tot està destacat, res no destaca.'),
  ch('F7','format','Per què no convé <b>subratllar</b> molt de text?',['Perquè es confon amb els enllaços','Perquè no es veu mai','Perquè està prohibit'],0,'Pensa en el color blau dels enllaços.','Els enllaços també van subratllats: no convé confondre’ls.')],
 sabers:{format:{realDone:req(['f1','f2','f3'])}},
 real:{blocks:[
   {h:'<b>1.</b> A <b>Documents de Google</b>, escriviu un <b>títol</b> sobre el vostre tema amb una mida gran i en negreta.',fields:['f1']},
   {h:'<b>2.</b> Escriviu una frase i destaqueu-ne <b>només una part</b> (cursiva o negreta).',fields:['f2']},
   {h:'<b>3.</b> Feu un canvi, <b>desfeu-lo</b> amb una drecera i <b>refeu-lo</b>. Quina drecera heu fet servir per desfer?',fields:['f3']}],
  fields:[{k:'f1',type:'select',label:'El títol té mida gran i negreta?',opts:['Sí, tots dos','Només un','Cap']},
   {k:'f2',type:'select',label:'Heu destacat només una part del text?',opts:['Sí','No, tot el text']},
   {k:'f3',type:'select',label:'Drecera per desfer',opts:['Ctrl + Z','Ctrl + C','Ctrl + P'],ok:'Ctrl + Z'}]}},

'cd2-mitja-3':{
 puc:['Sé inserir una imatge, un vídeo i una taula en un document','Sé quan una taula és millor que un text','Sé canviar la mida d’una imatge sense deformar-la'],
 lessons:[
  {t:'El menú Insereix',h:`El menú <b>Insereix</b> és on afegim coses al document: una <b>imatge</b>, un <b>vídeo</b>, una <b>taula</b>, un <b>enllaç</b>…<br>Triem l’opció i seguim les instruccions.`,fig:()=>figInsereix()},
  {t:'Quan una taula és millor',h:`Una <b>taula</b> és millor que un text quan hem de <b>comparar dades</b>.<br>Per exemple: quant mengen tres animals. En una taula es veu d’un cop d’ull.<br>Una taula té <b>files</b> (en horitzontal) i <b>columnes</b> (en vertical).`,fig:()=>figTaula()},
  {t:'Imatges: mida i deformació',h:`Per fer una imatge més gran o més petita, <b>arrosseguem una cantonada</b>.<br>Si arrosseguem un <b>costat</b> en lloc d’una cantonada, la imatge es <b>deforma</b> (queda aplanada o estirada).<br>Per això sempre usem les <b>cantonades</b>.`,fig:()=>figDeformar()},
  {t:'Vídeos',h:`També podem inserir un <b>vídeo</b> a un document. Quan ho fem, hem de pensar si <b>cal</b> o si només <b>distreu</b>.<br>Si l’aprofitem, convé que expliqui el tema i sigui curt.`}],
 items:[
  clic('I1','inserir','Clica l’opció per <b>inserir una taula</b>.',INSMENU,'taula','Té una quadrícula.','L’opció ▦ Taula insereix una taula.'),
  clic('I2','inserir','Clica l’opció per <b>inserir una imatge</b>.',INSMENU,'imatge','Té un dibuix de paisatge.','L’opció Imatge serveix per afegir imatges.'),
  ch('I3','inserir','Voleu <b>comparar</b> quant pesen quatre animals. Què és millor?',['Una taula','Una imatge sola','Una frase llarga'],0,'Pensa en files i columnes.','Una taula ajuda a comparar dades.'),
  ch('I4','inserir','Una <b>imatge s’ha deformat</b> (s’ha aplanat). Què hem fet malament?',['Hem arrossegat un costat en lloc d’una cantonada','Hem premut Ctrl','Hem guardat el document'],0,'Les cantonades mantenen la proporció.','Per no deformar-la cal arrossegar una cantonada.'),
  ch('I5','inserir','Una taula té…',['files i columnes','només pàgines','només colors'],0,'En horitzontal i en vertical.','Les files van en horitzontal i les columnes en vertical.'),
  ch('I6','inserir','Voleu posar un <b>vídeo</b> al document. Quan té sentit?',['Quan ajuda a explicar el tema','Sempre, encara que no tingui relació','Mai'],0,'Pensa en si ajuda.','Un vídeo s’insereix quan ajuda a entendre el tema.'),
  ch('I7','inserir','El menú <b>Insereix</b> serveix per…',['afegir coses al document','apagar l’ordinador','canviar el color de la pantalla'],0,'Afegim imatges i taules.','Insereix serveix per afegir elements al document.')],
 sabers:{inserir:{realDone:req(['i1','i2','i3'])}},
 real:{blocks:[
   {h:'<b>1.</b> A <b>Documents de Google</b>, escriviu una frase sobre el vostre tema i <b>inseriu una imatge</b>.',fields:['i1']},
   {h:'<b>2.</b> <b>Inseriu una taula</b> de dues columnes (per exemple: animal i què menja) amb tres files.',fields:['i2']},
   {h:'<b>3.</b> Canvieu la mida de la imatge arrossegant una <b>cantonada</b>. Es veu bé, sense deformar?',fields:['i3']}],
  fields:[{k:'i1',type:'select',label:'Heu inserit una imatge?',opts:['Sí','No']},
   {k:'i2',type:'select',label:'Heu inserit una taula?',opts:['Sí, amb 2 columnes i 3 files','Sí, però diferent','No']},
   {k:'i3',type:'select',label:'La imatge es veu sense deformar?',opts:['Sí','No, s’ha deformat']}]}},

'cd2-mitja-4':{
 puc:['Sé posar un bon nom als fitxers i desar-los','Sé organitzar fitxers en carpetes','Sé explicar la diferència entre treballar al núvol i en local','Sé que hi ha programari lliure i programari de pagament']
 ,
 lessons:[
  {t:'Noms que s’entenen',h:`Un bon nom de fitxer diu <b>què és</b>, <b>de què va</b> i <b>de quan és</b>: <b>Llops_Resum_2026-11</b>.<br>Un nom com <b>Document1</b> no explica res: d’aquí a un mes no sabrem què és.`,fig:()=>figNomsFitxer()},
  {t:'Carpetes i subcarpetes',h:`Una <b>carpeta</b> és com un calaix: guarda fitxers que van junts.<br>Dins d’una carpeta en podem posar d’altres: les <b>subcarpetes</b>. Per exemple: <b>Escola → Llops → fotos</b>.<br>Així ho trobem tot més de pressa.`,fig:()=>figCarpetes()},
  {t:'Núvol o ordinador local',h:`Al <b>núvol</b> ☁️ (Documents de Google) el document es desa <b>sol</b> i el podem obrir des de <b>qualsevol ordinador</b> amb Internet.<br>En <b>local</b> 💻 (Word, LibreOffice) el fitxer es guarda a <b>aquest ordinador</b>: cal prémer <b>Desa</b> i funciona sense Internet.<br>Els fitxers de Word acaben en <b>.docx</b> i els de LibreOffice en <b>.odt</b>.`,fig:()=>figNuvolLocal()},
  {t:'Programari lliure o de pagament',h:`Els programes poden ser:<br>🆓 <b>Lliures i gratuïts</b>, com <b>LibreOffice</b>: els pots instal·lar a casa i copiar sense pagar.<br>💶 <b>De pagament</b>, com <b>Microsoft Office</b> (Word): cal tenir una <b>llicència</b> per usar-lo.<br>☁️ <b>Documents de Google</b> és gratuït, però cal tenir un <b>compte</b> i connexió a Internet.<br>Cap és «millor»: l’important és saber que n’hi ha de diferents i que sovint <b>es poden obrir els fitxers d’un a l’altre</b>.`,fig:()=>figProgramari()},
  {t:'Reobrir un fitxer',h:`Per <b>reobrir</b> un fitxer el busquem a la carpeta pel seu <b>nom</b> i l’obrim. Si el nom és clar, el trobem de seguida.`}],
 items:[
  ch('G1','guardar','Quin és el <b>millor nom</b> per a un resum sobre els llops?',['Llops_Resum_2026-11','Document1','Resum','Cosa nova'],0,'Diu què és, de què va i de quan és.','Un bon nom explica el contingut i la data.'),
  ch('G2','guardar','Una <b>subcarpeta</b> és…',['una carpeta dins d’una altra','un fitxer molt gran','un programa'],0,'Pensa en un calaix dins d’un calaix.','Una subcarpeta és una carpeta dins d’una altra.'),
  ch('G3','guardar','Un document de <b>Documents de Google</b> es guarda…',['al núvol, sol','només si premem un botó','a l’ordinador en local sempre'],0,'No cal prémer «Desa».','Documents de Google desa al núvol automàticament.'),
  ch('G4','guardar','Un fitxer <b>.docx</b> és de…',['Word (Microsoft Office)','LibreOffice','Google'],0,'Mira l’extensió.','.docx és el format de Word. LibreOffice usa .odt.'),
  ch('G5','guardar','<b>LibreOffice</b> és un programa…',['lliure i gratuït','de pagament','només per a mòbils'],0,'Es pot instal·lar a casa sense pagar.','LibreOffice és lliure i gratuït.'),
  ch('G6','guardar','Per usar <b>Microsoft Office</b> cal…',['tenir una llicència (pagar)','res, és lliure','una impressora'],0,'No és gratuït.','Microsoft Office és de pagament i necessita llicència.'),
  {id:'G7',saber:'guardar',type:'ordre',prompt:'<b>Ordeneu els passos</b> per guardar i trobar un document. Toqueu-los en l’ordre correcte.',steps:['El deso en una carpeta amb un bon nom','Obro un document nou','Escric el text','El reobro buscant-lo a la carpeta'],order:[1,2,0,3],hint:'Primer cal tenir el document.',expl:'Obrim, escrivim, desem amb un bon nom en una carpeta i el reobrim.'},
  ch('G8','guardar','Voleu continuar el treball des de casa amb qualsevol ordinador. Què us convé?',['Treballar al núvol','Guardar-ho només en local sense còpia','Escriure-ho a mà'],0,'El núvol és accessible des de qualsevol lloc.','Al núvol podeu obrir el document des de qualsevol ordinador amb Internet.')],
 sabers:{guardar:{realDone:req(['g1','g2','g3','g4'])}},
 real:{blocks:[
   {h:'<b>1.</b> Poseu un <b>bon nom</b> al document de la vostra producció (tema, què és i data) i escriviu-lo aquí.',fields:['g1']},
   {h:'<b>2.</b> <b>Creeu una carpeta</b> amb el nom del vostre tema i moveu-hi el document. Com s’anomena la carpeta?',fields:['g2']},
   {h:'<b>3.</b> Respon: el document, <b>és al núvol o en local</b>? I amb quin programa l’heu fet? És <b>lliure o de pagament</b>?',rows:[['g3','g4']],fields:[]}],
  fields:[{k:'g1',type:'text',label:'Nom del fitxer'},
   {k:'g2',type:'text',label:'Nom de la carpeta'},
   {k:'g3',type:'select',label:'On és guardat?',opts:['Al núvol','En local']},
   {k:'g4',type:'select',label:'El programa que heu fet servir és…',opts:['Gratuït (com Documents de Google o LibreOffice)','De pagament (com Microsoft Office)','No ho sé']}]}},

'cd2-mitja-5':{
 puc:['Sé què porta una bona diapositiva: una idea i poc text','Sé duplicar i amagar una diapositiva i canviar-ne el fons','Sé crear un hipervincle en un text i en una imatge'],
 lessons:[
  {t:'Una idea per diapositiva',h:`Una bona diapositiva té <b>una sola idea</b>, <b>poc text</b> i alguna <b>imatge</b>.<br>Si hi ha molt text, el públic llegeix i no escolta. Mireu la figura: un <b>títol</b> i dues frases curtes.`,fig:()=>figDiapos()},
  {t:'Duplicar i amagar',h:`Per <b>duplicar</b> una diapositiva (fer-ne una còpia) fem clic amb el <b>botó dret</b> sobre la diapositiva i triem «Duplica».<br>Per <b>amagar-la</b> sense esborrar-la, triem «Oculta»: no es veu a la presentació, però continua guardada.`},
  {t:'Canviar el fons',h:`Podem canviar el <b>fons</b> d’una diapositiva: un color o una imatge.<br>Cal que el text es <b>llegeixi bé</b> sobre el fons: fons clar amb text fosc, o al revés.`,fig:()=>figContrast()},
  {t:'Hipervincles que creem',h:`A CD1 vam aprendre què és un <b>hipervincle</b>. Ara en <b>creem</b> un:<br>1. Seleccionem el <b>text</b> o la <b>imatge</b>.<br>2. Premem [[key:Ctrl]] i [[key:K]] (o el botó d’enllaç).<br>3. Enganxem l’<b>adreça</b> de la pàgina.<br>Ara el text o la imatge ens porta a aquella pàgina.`,fig:()=>figHipervincle()}],
 items:[
  ch('P1','present','Una <b>bona diapositiva</b> té…',['una idea i poc text','cinc idees i molt text','només text petit'],0,'Pensa en què es veu de lluny.','Una idea per diapositiva i poc text.'),
  ch('P2','present','Volem <b>fer una còpia</b> d’una diapositiva. Què fem?',['La dupliquem','L’amaguem','La tanquem'],0,'Una còpia igual.','Duplicar fa una còpia de la diapositiva.'),
  ch('P3','present','Una diapositiva està <b>amagada</b>. Què vol dir?',['No es veu a la presentació, però existeix','S’ha esborrat','Només es veu a la meitat'],0,'Està guardada, però no es mostra.','Amagar no esborra: només no es mostra.'),
  ch('P4','present','El <b>fons</b> és fosc. Quin color de text es llegeix millor?',['Blanc o molt clar','Negre','Blau fosc'],0,'Cal contrast.','Sobre fons fosc, el text clar es llegeix millor.'),
  ch('P5','present','Per <b>crear un hipervincle</b> en un text, primer…',['seleccionem el text','escrivim l’adreça sense seleccionar','apaguem l’ordinador'],0,'Cal triar a què va l’enllaç.','Primer seleccionem el text o la imatge.'),
  ch('P6','present','Un hipervincle en una <b>imatge</b> serveix per…',['portar a una altra pàgina quan hi fem clic','fer-la més petita','esborrar-la'],0,'Igual que en un text.','Una imatge també pot ser un enllaç.'),
  ch('P7','present','Una diapositiva té <b>molt de text petit</b>. Què millorem?',['Posem menys text i més gran','Posem més text','Canviem el color a vermell'],0,'El públic ha de poder llegir-ho.','Menys text i més gran: així s’entén millor.')],
 sabers:{present:{realDone:req(['p1','p2','p3'])}},
 real:{blocks:[
   {h:'<b>1.</b> A <b>Presentacions de Google</b>, creeu una presentació de <b>tres diapositives</b> sobre el vostre tema (una idea per diapositiva).',fields:['p1']},
   {h:'<b>2.</b> <b>Dupliqueu</b> una diapositiva i <b>amagueu-ne</b> una. Canvieu el fons d’una.',fields:['p2']},
   {h:'<b>3.</b> Creeu un <b>hipervincle</b> en una paraula o una imatge que porti a una pàgina que ja heu fet servir a CD1. Copieu l’adreça aquí.',fields:['p3']}],
  fields:[{k:'p1',type:'select',label:'Quantes diapositives té la presentació?',opts:['Tres o més','Dues','Una']},
   {k:'p2',type:'check',label:'Què heu fet?',opts:['He duplicat una diapositiva','He amagat una diapositiva','He canviat el fons']},
   {k:'p3',type:'text',label:'Adreça de l’hipervincle'}]}},

'cd2-mitja-6':{
 fig:()=>figDispositius(),
 puc:['Sé quines edicions senzilles es poden fer amb una imatge, un vídeo i un àudio','Sé gravar millor (llum, soroll i micròfon)','Sé indicar la font d’un text i d’una imatge que no són meus'],
 lessons:[
  {t:'Editar una imatge',h:`Amb un programa d’imatges podem:<br>✂️ <b>Retallar</b>: ens quedem només amb la part que interessa.<br>↔️ <b>Redimensionar</b>: fer-la més gran o més petita.<br>🔄 <b>Girar</b>: posar-la bé si està girada.`,fig:()=>figEditImatge()},
  {t:'Editar un vídeo i un àudio',h:`En un <b>vídeo</b> podem <b>retallar el clip</b> (treure el principi o el final), <b>afegir text</b> i <b>afegir àudio</b>.<br>En un <b>àudio</b> podem <b>retallar</b> la pista i quedar-nos amb la part bona.<br>Amb un editor senzill és molt fàcil.`,fig:()=>figEditVideo()},
  {t:'Gravar bé',h:`Per gravar bé:<br>💡 <b>Llum</b>: davant d’una finestra, no d’esquena a ella.<br>🔇 <b>Silenci</b>: tanquem portes i fem callar el soroll.<br>🎤 <b>Micròfon</b>: a prop de qui parla, però sense tocar.`,fig:()=>figGravarBe()},
  {t:'Indicar la font',h:`Quan fem servir un <b>text</b> o una <b>imatge</b> que <b>no és nostre</b>, hem de dir <b>d’on l’hem tret</b>: és la <b>font</b>.<br>Posem l’<b>autoria</b> (qui l’ha fet) i d’on l’hem agafat.<br>Exemple: <i>Imatge: Pep Soler, Wikimedia Commons, 2024.</i> Així respectem el treball dels altres.`,fig:()=>figCita()}],
 items:[
  ch('E1','editar','Una imatge té massa espai buit al voltant. Què fem?',['La retallem','La girem','La imprimim'],0,'Ens quedem amb la part que interessa.','Retallar deixa només la part que ens interessa.'),
  ch('E2','editar','Una foto està <b>girada</b> de costat. Què fem?',['La girem','La retallem','L’esborrem'],0,'La posem dreta.','Girar posa la imatge dreta.'),
  ch('E3','editar','En un vídeo, <b>retallar el clip</b> serveix per…',['treure el principi o el final que no volem','canviar el color','afegir música'],0,'Treiem el que sobra.','Retallar el clip elimina parts del vídeo.'),
  ch('E4','editar','Per gravar un àudio, <b>on</b> ens posem?',['Un lloc silenciós','A prop d’una obra','Dins d’un cotxe en marxa'],0,'Pensa en el soroll.','Un lloc silenciós dona un àudio més net.'),
  ch('E5','editar','Per gravar un vídeo, la <b>llum</b> ha de…',['il·luminar la cara, no d’esquena a la finestra','ser molt fosca','venir de darrere'],0,'Volem veure bé qui parla.','La llum ha de caure sobre la cara.'),
  clic('E6','font','Clica la <b>font de la imatge</b>.',DOCFONT,'fontimg','Diu qui l’ha feta i d’on és.','La font de la imatge diu qui l’ha feta i d’on l’hem tret.'),
  clic('E7','font','Clica la <b>font del text</b>.',DOCFONT,'fonttext','És al final del paràgraf.','La font del text diu d’on hem tret la informació.'),
  ch('E8','font','Hem usat una foto d’un llop d’Internet. Què hem de posar al document?',['La font i l’autoria','Res, ja és meva','Només “Internet”'],0,'No és nostra.','Cal posar l’autoria i d’on l’hem tret.')],
 sabers:{editar:{realDone:req(['e1','e2'])},font:{realDone:req(['e3','e4'])}},
 real:{blocks:[
   {h:'<b>1.</b> Agafeu una imatge del vostre tema i <b>retalleu-la o redimensioneu-la</b> a l’editor. Què heu fet?',fields:['e1']},
   {h:'<b>2.</b> Graveu (o editeu) un <b>àudio o un vídeo curt</b> d’uns 10 segons. Hi heu retallat alguna cosa?',fields:['e2']},
   {h:'<b>3.</b> Poseu en el document una <b>imatge i un text d’una font</b> i escriviu-ne la <b>font</b> a sota. Copieu aquí la font de la imatge i del text.',rows:[['e3','e4']],fields:[]}],
  fields:[{k:'e1',type:'select',label:'Què heu fet amb la imatge?',opts:['L’he retallada','L’he redimensionada','L’he girada','Cap de les anteriors']},
   {k:'e2',type:'select',label:'Què heu fet amb l’àudio o vídeo?',opts:['Hem retallat el clip o la pista','Hem afegit text o àudio','Només l’hem gravat','No ho he fet']},
   {k:'e3',type:'text',label:'Font de la imatge (autoria i web)'},
   {k:'e4',type:'text',label:'Font del text (autoria i web)'}]}}

});
