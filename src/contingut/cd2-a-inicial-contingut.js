/* ============ CD2 · CICLE INICIAL (1r i 2n) ============ */
/* Sense tauleta: cada pràctica combina un pas a la pissarra digital (un alumne o alumna per pas) i una producció manual en paper o cartolina. */
Object.assign(CONTENT, {

'cd2-inicial-1':{
 fig:()=>figFinestraCD2(),
 sabem:['Si volem escriure una carta amb l’ordinador, què fem servir?','Heu vist mai una presentació amb diapositives? On?','Què fem quan una finestra és massa gran o ens destorba?','Qui ha escrit alguna vegada alguna cosa amb l’ordinador?'],
 puc:['Sé què és un processador de textos i per a què serveix','Sé què és una presentació i per a què serveix','Sé què fan els botons de la finestra: minimitzar, maximitzar i tancar'],
 defs:[{p:0,t:'Processador de textos',h:'El <b>processador de textos</b> és el programa per <b>escriure</b> amb l’ordinador: cartes, notes, un conte… A l’aula fem servir <b>Documents de Google</b>.'},{p:1,t:'Presentació',h:'La <b>presentació</b> és un programa per fer <b>diapositives</b>: cada diapositiva té una idea i imatges. A l’aula fem servir <b>Presentacions de Google</b>.'}],
 lessons:[
  {t:'Per escriure: processador de textos',h:`Quan volem <b>escriure</b> amb l’ordinador, obrim un <b>processador de textos</b> 📝.<br>Hi podem fer una carta, una nota o un conte.<br>A l’aula fem servir <b>Documents de Google</b>.`},
  {t:'Per presentar: diapositives',h:`Quan volem <b>ensenyar</b> una cosa a la classe, fem una <b>presentació</b> 🖼️.<br>Té moltes <b>diapositives</b>, com pàgines que passem una darrere l’altra.<br>A l’aula fem servir <b>Presentacions de Google</b>.<br>En una diapositiva hi ha <b>poc text</b> i alguna imatge.`},
  {t:'Les finestres',h:`Els programes s’obren dins d’una <b>finestra</b>. Té tres botons a dalt a la dreta.<br>Amb el botó <b>–</b> la <b>minimitzem</b>: s’amaga a baix, a la barra de tasques.<br>Amb el botó <b>▢</b> la <b>maximitzem</b>: ocupa tota la pantalla.<br>Amb el botó <b>✕</b> la <b>tanquem</b>.`}],
 items:[
  ch('A1','apps','Voleu escriure una <b>carta</b> amb l’ordinador. Què obriu?',['Un processador de textos 📝','Una calculadora 🧮','Un joc 🎮'],0,'Serveix per escriure.','El processador de textos serveix per escriure cartes i notes.'),
  ch('A2','apps','Voleu <b>ensenyar a la classe</b> fotos i poques paraules. Què fem?',['Una presentació amb diapositives','Una carta','Un dibuix a mà'],0,'Té moltes pàgines que anem passant.','La presentació serveix per ensenyar idees amb diapositives.'),
  ch('A3','apps','A l’aula, quin programa fem servir per <b>escriure</b>?',['Presentacions de Google','Documents de Google','Fotos'],1,'El nom diu què fem: documents.','Escrivim amb Documents de Google.'),
  clic('A4','apps','Clica el botó que <b>amaga</b> la finestra a la barra de tasques (minimitzar).',WINBAR,'min','És el botó amb un guió.','Minimitzar és el botó – : amaga la finestra sense tancar-la.'),
  clic('A5','apps','Clica el botó que <b>tanca</b> la finestra.',WINBAR,'close','És una creu.','El botó ✕ tanca la finestra.'),
  ch('A6','apps','Volem que la finestra <b>ocupi tota la pantalla</b>. Quin botó fem servir?',['Minimitzar –','Maximitzar ▢','Tancar ✕'],1,'Pensa en «fer-la molt gran».','Maximitzar fa que la finestra ocupi tota la pantalla.'),
  ch('A7','apps','Si <b>minimitzem</b> un document, el document…',['s’esborra','es tanca per sempre','continua obert, amagat a baix'],2,'Només l’amaguem.','Minimitzar només amaga la finestra: el document continua obert.')],
 sabers:{apps:{realDone:req(['a1','a2','a3'])}},
 real:{blocks:[
   {h:'<b>1. A la pissarra digital.</b> Un alumne o alumna obre <b>Documents de Google</b> i un altre obre <b>Presentacions de Google</b>. Mireu com són.',fields:['a1']},
   {h:'<b>2. A la pissarra.</b> Un alumne o alumna prova els tres botons de la finestra: minimitzar, maximitzar i restaurar.',fields:['a2']},
   {h:'<b>3. Amb paper i colors.</b> Cada alumne o alumna <b>dibuixa en un full</b> l’ordinador amb la finestra i els seus tres botons, i escriu a mà què fa cada botó.',fields:['a3']}],
  fields:[{k:'a1',type:'select',label:'Quin programa serveix per escriure?',opts:['Documents de Google','Presentacions de Google'],ok:'Documents de Google'},
   {k:'a2',type:'select',label:'Els alumnes han provat els botons?',opts:['Sí, tots tres','Només alguns','No'],ok:'Sí, tots tres'},
   {k:'a3',type:'select',label:'Els dibuixos mostren els tres botons?',opts:['Sí, tots','La majoria','Cal repetir-ho']}]}},

'cd2-inicial-2':{
 fig:()=>kbSVG(false)+legend(['<b>Lletres</b>: al mig del teclat, per escriure paraules.','<b>Intro</b>: la tecla gran de la dreta; canvia de línia.']),
 sabem:['On són les lletres al teclat? Són totes iguals?','Com escrivim una lletra majúscula?','Com deixem un espai entre dues paraules?','Quina tecla fem servir per esborrar si ens equivoquem?'],
 puc:['Sé trobar les lletres i els números al teclat','Sé fer un espai, un punt i una coma','Sé esborrar una lletra quan m’he equivocat'],
 lessons:[
  {t:'Lletres i números',h:`El <b>teclat</b> té <b>lletres</b> al mig i <b>números</b> a la fila de dalt.<br>Per escriure la lletra, hi fem un <b>toc</b> amb el dit. No cal prémer molt de temps: si la deixem premuda, <b>es repeteix</b>!`},
  {t:'Espai, punt i coma',h:`La tecla <b>llarga de baix</b> és l’<b>espai</b>: serveix per separar paraules.<br>El <b>punt</b> (.) va al final de la frase i la <b>coma</b> (,) fa una petita pausa.<br>Després del punt, la paraula següent comença amb <b>majúscula</b>.`},
  {t:'Majúscula i Intro',h:`Per fer una <b>majúscula</b>, premem [[key:⇧]] (la fletxa cap amunt) <b>i</b>, alhora, la lletra.<br>Amb [[key:↵ Intro]] <b>canviem de línia</b>.`},
  {t:'Esborrar',h:`Si ens equivoquem, no passa res! Premem la tecla de <b>retrocedir</b> (⌫, a dalt a la dreta de les lletres) i <b>esborra la lletra</b> que acabem d’escriure.`}],
 items:[
  clic('T1','teclat','Clica la tecla de l’<b>espai</b> (la més llarga).',`<div class="toy"><div class="body">${kbSVG(true)}</div></div>`,'espai','És la tecla llarga de baix.','L’espai és la tecla llarga de baix: separa les paraules.'),
  clic('T2','teclat','Clica la tecla de les <b>majúscules</b> (⇧).',`<div class="toy"><div class="body">${kbSVG(true)}</div></div>`,'maj','Té una fletxa cap amunt.','La tecla ⇧ serveix per fer majúscules.'),
  clic('T3','teclat','Clica una <b>lletra</b>.',`<div class="toy"><div class="body">${kbSVG(true)}</div></div>`,'lletra','Les lletres són al mig del teclat.','Les lletres són al mig del teclat.'),
  ch('T4','teclat','Per <b>separar dues paraules</b> escrites fem…',['un espai','una coma','un número'],0,'És la tecla llarga.','L’espai separa les paraules.'),
  ch('T5','teclat','Ens hem equivocat d’una lletra. Quina tecla ens ajuda?',['La de retrocedir ⌫','L’espai','El número 0'],0,'Serveix per esborrar.','La tecla de retrocedir esborra la lletra.'),
  ch('T6','teclat','Una frase acaba amb un…',['espai','punt','número'],1,'És com una petita bola.','Al final de la frase posem un punt.'),
  ch('T7','teclat','Volem escriure el nom <b>Maria</b> amb la M gran. Què fem?',['Premem [[key:⇧]] i la M alhora','Premem l’espai i la M','Premem la M molta estona'],0,'La M gran és una majúscula.','Premem ⇧ i la lletra a la vegada.')],
 sabers:{teclat:{realDone:req(['t1','t2','t3'])}},
 real:{blocks:[
   {h:'<b>1. A la pissarra digital.</b> Un alumne o alumna obre un document i escriu el seu <b>nom</b> amb la primera lletra en majúscula.',fields:['t1']},
   {h:'<b>2. A la pissarra.</b> Un altre alumne o alumna escriu una <b>frase curta</b> amb punt i un espai entre les paraules.',fields:['t2']},
   {h:'<b>3. Amb cartolina.</b> Cada alumne o alumna fa un <b>cartell amb el seu nom</b> en lletres de colors: la primera, més gran (majúscula).',fields:['t3']}],
  fields:[{k:'t1',type:'select',label:'Ha escrit el nom amb majúscula inicial?',opts:['Sí, sol o sola','Sí, amb ajuda','No']},
   {k:'t2',type:'select',label:'La frase té espais i punt?',opts:['Sí, tots dos','Només un','Cap']},
   {k:'t3',type:'select',label:'Els cartells tenen el nom ben escrit?',opts:['Sí, tots','La majoria','Cal repetir-ho']}]}},

'cd2-inicial-3':{
 fig:()=>figBarraDoc(),
 sabem:['Com podem fer unes lletres més grosses o d’un altre color?','Si ens equivoquem amb l’ordinador, podem tornar enrere?','Com posem una imatge en un document?','Heu usat mai una barra de botons per canviar un text?'],
 puc:['Sé seleccionar un text i canviar-ne el format: negreta, color i alineació','Sé desfer i refer un canvi','Sé inserir una imatge en un document'],
 defs:[{p:1,t:'Desfer i refer',h:'<b>Desfer ↶</b> torna enrere l’últim canvi. <b>Refer ↷</b> el torna a fer. Si ens equivoquem, <b>no passa res</b>!'}],
 lessons:[
  {t:'Seleccionar el text',h:`Abans de canviar un text, el cal <b>seleccionar</b>: l’arrosseguem amb el ratolí i es pinta d’un color.<br>El canvi només afecta el que <b>hem seleccionat</b>.`},
  {t:'Negreta, color i alineació',h:`Amb els botons de la <b>barra d’eines</b> canviem com es veu el text:<br><b>N</b> fa les lletres <b>gruixudes</b> (negreta).<br><span style="color:#d33"><b>A</b></span> canvia el <b>color</b> de les lletres.<br>☰ canvia l’<b>alineació</b>: a l’esquerra, al centre o a la dreta.`},
  {t:'Desfer i refer',h:`Si ens equivoquem, premem <b>↶ Desfer</b> i tornem enrere.<br>Si ens en penedim, premem <b>↷ Refer</b> i tornem a fer-ho.<br>Un error no és un problema!`},
  {t:'Posar una imatge',h:`Per posar una <b>imatge</b>, cliquem el botó 🖼️ de la barra d’eines i triem una imatge.<br>Així el document queda més bonic i s’entén millor.`}],
 items:[
  clic('F1','format','Clica el botó per fer les lletres <b>gruixudes</b> (negreta).',DOCBAR,'negreta','És la N.','La N fa el text en negreta.'),
  clic('F2','format','Clica el botó per <b>desfer</b> l’últim canvi.',DOCBAR,'desfer','Una fletxa que torna enrere.','↶ desfà l’últim canvi.'),
  clic('F3','format','Clica el botó per <b>posar una imatge</b>.',DOCBAR,'imatge','Té un dibuix de paisatge.','El botó 🖼️ posa una imatge.'),
  ch('F4','format','Volem canviar el <b>color</b> de les lletres. Què fem primer?',['Seleccionem el text','Tanquem el document','Premem l’espai'],0,'Abans de canviar, cal triar què canviem.','Cal seleccionar el text abans d’aplicar un canvi.'),
  ch('F5','format','Ens hem equivocat i volem tornar enrere. Què fem?',['Desfer ↶','Refer ↷','Tancar ✕'],0,'Torna a l’estat d’abans.','Desfer torna enrere l’últim canvi.'),
  ch('F6','format','Hem desfet un canvi per error i el volem recuperar. Què fem?',['Desfer ↶','Refer ↷','Esborrar tot'],1,'Torna a fer-ho.','Refer torna a fer el que havíem desfet.'),
  ch('F7','format','Una imatge en un document serveix per…',['fer-lo més clar i més bonic','apagar l’ordinador','que no es pugui llegir'],0,'Ens ajuda a entendre millor.','Una imatge ajuda a entendre i fa el document més bonic.')],
 sabers:{format:{realDone:req(['f1','f2','f3'])}},
 real:{blocks:[
   {h:'<b>1. A la pissarra digital.</b> Un alumne o alumna escriu una paraula, la <b>selecciona</b> i la posa en <b>negreta</b> i d’un altre <b>color</b>.',fields:['f1']},
   {h:'<b>2. A la pissarra.</b> Un altre alumne o alumna fa un canvi, el <b>desfà</b> i el <b>refà</b>.',fields:['f2']},
   {h:'<b>3. Amb paper.</b> Cada alumne o alumna <b>dissenya a mà una diapositiva</b>: un títol gran, una imatge dibuixada i una frase. Marca amb colors la negreta.',fields:['f3']}],
  fields:[{k:'f1',type:'select',label:'Ha posat negreta i color?',opts:['Sí, tots dos','Només un','Cap']},
   {k:'f2',type:'select',label:'Ha sabut desfer i refer?',opts:['Sí, sol o sola','Sí, amb ajuda','No']},
   {k:'f3',type:'select',label:'Les diapositives tenen títol, imatge i frase?',opts:['Sí, totes','La majoria','Cal repetir-ho']}]}},

'cd2-inicial-4':{
 fig:()=>figNuvolLocal(),
 sabem:['Quan acabem un dibuix, què fem perquè no es perdi?','On guardem els treballs de l’escola?','Si volem un document que vam fer fa dies, com el trobem?','Per què un fitxer ha de tenir un nom?'],
 puc:['Sé què vol dir desar un document','Sé posar un nom que expliqui què hi ha al document','Sé obrir un document que ja tinc'],
 lessons:[
  {t:'Desar és guardar',h:`<b>Desar</b> vol dir <b>guardar</b> el document perquè no es perdi.<br>A <b>Documents de Google</b> es desa <b>sol</b> al núvol ☁️, però en altres programes cal prémer <b>«Desa»</b>.`},
  {t:'El nom del document',h:`El <b>nom</b> ha de dir <b>què és</b>: <i>Els llops</i> és millor que <i>Document1</i>.<br>Així el trobarem fàcilment quan el volguem.`},
  {t:'Núvol o ordinador',h:`Un document es pot guardar <b>al núvol</b> ☁️ (a Internet) o a l’<b>ordinador</b> 💻.<br>Al núvol, el podem obrir des de qualsevol ordinador amb Internet.`},
  {t:'Obrir un document que ja tenim',h:`Per <b>obrir</b> un document guardat, el busquem pel <b>nom</b> i hi fem doble clic o un clic, segons on sigui.<br>Després ja podem continuar treballant-hi.`}],
 items:[
  ch('D1','desar','<b>Desar</b> un document vol dir…',['guardar-lo perquè no es perdi','esborrar-lo','imprimir-lo'],0,'Pensa en el que fem amb un dibuix que volem conservar.','Desar és guardar el document.'),
  ch('D2','desar','Quin <b>nom</b> és millor per al document sobre els llops?',['Els llops','Document1','aaa'],0,'El nom ha de dir què hi ha.','Un bon nom explica què conté el document.'),
  ch('D3','desar','A Documents de Google, el document es guarda…',['al núvol ☁️, sol','només en un paper','en un llibre'],0,'No cal prémer res: es desa sol.','Documents de Google desa al núvol automàticament.'),
  ch('D4','desar','Volem continuar un document que vam fer ahir. Què fem?',['El busquem pel nom i l’obrim','Escrivim un document nou','Apaguem l’ordinador'],0,'Ja el tenim guardat.','Obrim el document guardat buscant-lo pel nom.'),
  {id:'D5',saber:'desar',type:'ordre',prompt:'<b>Ordeneu els passos</b> per guardar un document. Toqueu-los en l’ordre correcte.',steps:['Escrivim el nom que explica què és','Obrim un document nou','Comprovem que s’ha desat','Escrivim el text'],order:[1,3,0,2],hint:'Primer cal tenir un document obert.',expl:'Obrim el document, escrivim el text, posem un bon nom i comprovem que s’ha desat.'},
  ch('D6','desar','Volem veure el document des d’un altre ordinador de l’escola. On convé que estigui?',['Al núvol ☁️','Només en aquest ordinador','Només en un full'],0,'Un lloc a què es pot arribar des de qualsevol ordinador.','Al núvol, el podem obrir des de qualsevol ordinador amb Internet.')],
 sabers:{desar:{realDone:req(['d1','d2','d3'])}},
 real:{blocks:[
   {h:'<b>1. A la pissarra digital.</b> Un alumne o alumna posa un nom al document de classe. Entre tots decidim quin nom explica millor què és.',fields:['d1']},
   {h:'<b>2. A la pissarra.</b> Un altre alumne o alumna tanca el document i el torna a obrir buscant-lo pel nom.',fields:['d2']},
   {h:'<b>3. Amb targetes de cartolina.</b> Per grups, ordeneu les targetes dels passos per desar un document (obrir, escriure, posar nom, comprovar).',fields:['d3']}],
  fields:[{k:'d1',type:'select',label:'El nom diu què és el document?',opts:['Sí','Més o menys','No']},
   {k:'d2',type:'select',label:'Han trobat el document pel nom?',opts:['Sí, sense ajuda','Sí, amb ajuda','No']},
   {k:'d3',type:'select',label:'Els grups han ordenat bé les targetes?',opts:['Sí, tots','La majoria','Cal repetir-ho']}]}},

'cd2-inicial-5':{
 fig:()=>figDispositius(),
 sabem:['Amb què fem una foto?','Com podem guardar la nostra veu?','Una foto i un dibuix són el mateix?','Heu fet mai un vídeo? Amb què?'],
 puc:['Sé quins aparells serveixen per fer fotos, vídeos i enregistrar sons','Sé què fan els botons de fer foto, gravar i aturar','Sé dir en què es diferencia una foto d’un dibuix'],
 lessons:[
  {t:'Aparells que graven',h:`Per <b>crear</b> imatges i sons fem servir aparells:<br>📷 la <b>càmera de fotos</b> fa fotografies.<br>🎥 la <b>càmera de vídeo</b> grava imatges i so.<br>🎤 el <b>micròfon</b> grava la veu.`},
  {t:'Foto, gravar i aturar',h:`Tots els aparells tenen botons semblants:<br>⚫ <b>Fer una foto</b>.<br>🔴 <b>Gravar</b>: comença a gravar el vídeo o el so.<br>⏹️ <b>Aturar</b>: acaba la gravació.`,fig:()=>figBotonsGravar()},
  {t:'Dues maneres de crear una imatge',h:`Una <b>foto</b> mostra el que hi ha de veritat, amb una càmera.<br>Un <b>dibuix</b> el fem nosaltres, amb llapis o amb un programa.<br>Són dues maneres de crear una imatge.`}],
 items:[
  ch('M1','multi','Voleu fer una <b>fotografia</b>. Què feu servir?',['Una càmera 📷','Un micròfon 🎤','Un teclat ⌨️'],0,'Mira el que té la lent.','La càmera de fotos fa fotografies.'),
  ch('M2','multi','Voleu <b>gravar la vostra veu</b>. Què feu servir?',['Un micròfon 🎤','Una càmera de fotos','Un ratolí'],0,'Escolta i grava el so.','El micròfon grava la veu.'),
  ch('M3','multi','Per <b>començar a gravar</b> un vídeo, quin botó premem?',['Gravar 🔴','Aturar ⏹️','Cap'],0,'Té un cercle vermell.','El botó vermell comença a gravar.'),
  ch('M4','multi','Per <b>acabar la gravació</b>, quin botó premem?',['Aturar ⏹️','Gravar 🔴','Fer una foto'],0,'Té un quadrat.','El botó quadrat atura la gravació.'),
  ch('M5','multi','Una <b>foto</b> és diferent d’un <b>dibuix</b> perquè…',['la foto es fa amb una càmera i mostra el que hi ha de veritat','tots dos són el mateix','la foto es fa amb un llapis'],0,'Pensa en l’aparell.','La foto mostra la realitat; el dibuix el fem nosaltres.'),
  ch('M6','multi','Quins aparells serveixen per <b>crear un vídeo</b> amb so?',['Una càmera de vídeo 🎥','Un micròfon sol','Un ratolí'],0,'Grava imatges i so.','La càmera de vídeo grava imatge i so.')],
 sabers:{multi:{realDone:req(['m1','m2','m3'])}},
 real:{blocks:[
   {h:'<b>1. A la pissarra digital o amb l’aparell del professorat.</b> Un alumne o alumna fa una <b>foto</b> de la classe i la mirem entre tots.',fields:['m1']},
   {h:'<b>2. Amb el micròfon o amb l’aparell del professorat.</b> Un altre alumne o alumna <b>grava la seva veu</b> dient el seu nom, i després l’escoltem.',fields:['m2']},
   {h:'<b>3. Amb cartolina.</b> Cada alumne o alumna <b>dibuixa una càmera</b> amb els seus botons (foto, gravar, aturar) i escriu què fa cada botó.',fields:['m3']}],
  fields:[{k:'m1',type:'select',label:'S’ha pogut fer la foto?',opts:['Sí','Amb ajuda','No']},
   {k:'m2',type:'select',label:'S’ha pogut gravar i escoltar la veu?',opts:['Sí','Amb ajuda','No']},
   {k:'m3',type:'select',label:'Els dibuixos mostren els botons?',opts:['Sí, tots','La majoria','Cal repetir-ho']}]}}

});
