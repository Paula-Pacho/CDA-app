/* ============ FIGURES I ELEMENTS INTERACTIUS DE CD2 ============ */
/* Es fan servir de manera diferida (dins de lessons/items), per això poden cridar badge() i legend() del motor. */

const D_BTN=(x,y,w,t,sz,extra)=>`<rect x="${x}" y="${y}" width="${w}" height="44" rx="9" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="${x+w/2}" y="${y+30}" text-anchor="middle" font-size="${sz||22}" fill="#1f2a37" ${extra||''}>${t}</text>`;

/* Finestra amb els tres botons: minimitzar, maximitzar/restaurar, tancar */
function figFinestraCD2(){
  return `<svg viewBox="0 0 640 230" role="img" aria-label="Finestra d’un programa amb els botons de minimitzar, maximitzar i tancar"><rect x="2" y="2" width="636" height="226" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <path d="M2 16a14 14 0 0 1 14-14h608a14 14 0 0 1 14 14v34H2z" fill="#dbe7f5"/>
  <text x="24" y="34" font-size="18" fill="#1f2a37" font-weight="700">📝 El meu document</text>
  <rect x="470" y="10" width="46" height="34" rx="7" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="493" y="36" text-anchor="middle" font-size="22">–</text>
  <rect x="524" y="10" width="46" height="34" rx="7" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="547" y="36" text-anchor="middle" font-size="20">▢</text>
  <rect x="578" y="10" width="46" height="34" rx="7" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="601" y="36" text-anchor="middle" font-size="20">✕</text>
  <rect x="40" y="86" width="360" height="12" rx="6" fill="#e9edf2"/><rect x="40" y="112" width="520" height="10" rx="5" fill="#eef1f5"/><rect x="40" y="134" width="480" height="10" rx="5" fill="#eef1f5"/><rect x="40" y="156" width="440" height="10" rx="5" fill="#eef1f5"/>
  ${badge(493,8,1)}${badge(547,8,2)}${badge(601,8,3)}</svg>`+legend(['<b>–</b> Minimitzar: la finestra s’amaga a la barra de tasques, però el document no es tanca.','<b>▢</b> Maximitzar: la finestra ocupa tota la pantalla. Si ja és gran, el botó la fa petita (restaurar).','<b>✕</b> Tancar: tanquem el document. Abans cal desar-lo!']);
}

/* Barra d’eines d’un processador de textos (v: 'tot') */
function figBarraDoc(){
  return `<svg viewBox="0 0 640 170" role="img" aria-label="Barra d’eines d’un document amb els botons desfer, refer, negreta, color, alineació i imatge"><rect x="2" y="2" width="636" height="166" rx="14" fill="#f4f6f9" stroke="#b8c2cf" stroke-width="2"/>
  ${D_BTN(20,24,64,'↶')}${D_BTN(92,24,64,'↷')}${D_BTN(176,24,64,'<tspan font-weight="800">N</tspan>','22')}${D_BTN(248,24,64,'<tspan fill="#d33">A</tspan>','22')}${D_BTN(320,24,64,'☰')}${D_BTN(392,24,64,'🖼️')}${D_BTN(464,24,64,'🔤','20')}
  <rect x="40" y="96" width="560" height="56" rx="10" fill="#fff" stroke="#dbe1e8" stroke-width="2"/><text x="60" y="132" font-size="22" fill="#1f2a37">El gat dorm al sofà.</text>
  ${badge(52,22,1)}${badge(124,22,2)}${badge(208,22,3)}${badge(280,22,4)}${badge(352,22,5)}${badge(424,22,6)}</svg>`+legend(['<b>↶</b> Desfer: torna enrere l’últim canvi.','<b>↷</b> Refer: torna a fer el que hem desfet.','<b>N</b> Negreta: les lletres es veuen més gruixudes.','<b>A</b> Color: canvia el color de les lletres.','<b>☰</b> Alineació: esquerra, centre o dreta.','<b>🖼️</b> Imatge: posa una imatge al document.']);
}

/* Menú Insereix */
function figInsereix(){
  return `<svg viewBox="0 0 640 260" role="img" aria-label="Menú Insereix amb les opcions imatge, vídeo, taula i enllaç"><rect x="2" y="2" width="636" height="256" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <rect x="2" y="2" width="636" height="46" rx="14" fill="#e9edf2"/><text x="24" y="33" font-size="18" fill="#1f2a37">Fitxer &#160;&#160; Edita &#160;&#160;</text><rect x="196" y="8" width="96" height="34" rx="8" fill="#fff" stroke="#e8830c" stroke-width="3"/><text x="244" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1f2a37">Insereix</text>
  <rect x="196" y="52" width="260" height="196" rx="10" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <text x="214" y="86" font-size="19" fill="#1f2a37">🖼️ Imatge</text><text x="214" y="120" font-size="19" fill="#1f2a37">🎞️ Vídeo</text><text x="214" y="154" font-size="19" fill="#1f2a37">▦ Taula</text><text x="214" y="188" font-size="19" fill="#1f2a37">🔗 Enllaç</text><text x="214" y="222" font-size="19" fill="#1f2a37">Ω Caràcter especial</text>
  ${badge(300,26,1)}${badge(440,76,2)}</svg>`+legend(['<b>Insereix</b>: el menú on triem què afegim al document.','<b>Imatge, Vídeo, Taula, Enllaç</b>: cada opció afegeix una cosa diferent.']);
}

/* Núvol i ordinador (guardar al núvol o en local) */
function figNuvolLocal(){
  return `<svg viewBox="0 0 640 230" role="img" aria-label="Un document al núvol i un document a l’ordinador"><rect x="2" y="2" width="636" height="226" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <text x="160" y="60" text-anchor="middle" font-size="54">☁️</text><text x="160" y="104" text-anchor="middle" font-size="22" font-weight="700" fill="#1f2a37">Al núvol</text>
  <text x="160" y="136" text-anchor="middle" font-size="17" fill="#5b6776">Documents de Google</text><text x="160" y="160" text-anchor="middle" font-size="17" fill="#5b6776">Es desa sol</text><text x="160" y="184" text-anchor="middle" font-size="17" fill="#5b6776">Necessita Internet</text><text x="160" y="208" text-anchor="middle" font-size="17" fill="#5b6776">S’obre des de qualsevol ordinador</text>
  <line x1="320" y1="20" x2="320" y2="210" stroke="#dbe1e8" stroke-width="2" stroke-dasharray="6 6"/>
  <text x="480" y="60" text-anchor="middle" font-size="54">💻</text><text x="480" y="104" text-anchor="middle" font-size="22" font-weight="700" fill="#1f2a37">En local (a l’ordinador)</text>
  <text x="480" y="136" text-anchor="middle" font-size="17" fill="#5b6776">Word o LibreOffice</text><text x="480" y="160" text-anchor="middle" font-size="17" fill="#5b6776">Cal prémer «Desa»</text><text x="480" y="184" text-anchor="middle" font-size="17" fill="#5b6776">Funciona sense Internet</text><text x="480" y="208" text-anchor="middle" font-size="17" fill="#5b6776">El fitxer queda en aquest ordinador</text></svg>`;
}

/* Carpetes */
function figCarpetes(){
  return `<svg viewBox="0 0 640 250" role="img" aria-label="Una carpeta Escola amb dues carpetes dins i fitxers"><rect x="2" y="2" width="636" height="246" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <text x="30" y="46" font-size="22" fill="#1f2a37">📁 <tspan font-weight="700">Escola</tspan></text>
  <text x="70" y="86" font-size="21" fill="#1f2a37">📁 Llops</text><text x="110" y="122" font-size="19" fill="#1f2a37">📄 Llops_Resum_2026-11.docx</text><text x="110" y="154" font-size="19" fill="#1f2a37">🖼️ Llops_Foto_Pirineu.jpg</text>
  <text x="70" y="192" font-size="21" fill="#1f2a37">📁 Mates</text><text x="110" y="226" font-size="19" fill="#1f2a37">📄 Mates_Problemes_2026-11.docx</text>
  ${badge(250,76,1)}${badge(470,112,2)}</svg>`+legend(['<b>Carpeta</b>: guarda fitxers que van junts, com un calaix. Pot tenir carpetes a dins.','<b>Nom del fitxer</b>: Tema_Què és_Data. Així se sap què és sense obrir-lo.']);
}

/* Diapositives */
function figDiapos(){
  const sl=(x,y,t,sel)=>`<rect x="${x}" y="${y}" width="120" height="70" rx="6" fill="#fff" stroke="${sel?'#e8830c':'#b8c2cf'}" stroke-width="${sel?4:2}"/><text x="${x+60}" y="${y+42}" text-anchor="middle" font-size="16" fill="#1f2a37">${t}</text>`;
  return `<svg viewBox="0 0 640 280" role="img" aria-label="Presentació amb una columna de diapositives i una diapositiva gran"><rect x="2" y="2" width="636" height="276" rx="14" fill="#f4f6f9" stroke="#b8c2cf" stroke-width="2"/>
  ${sl(24,20,'1. Portada')}${sl(24,106,'2. Els llops',true)}${sl(24,192,'3. Què mengen')}
  <rect x="170" y="20" width="440" height="242" rx="10" fill="#fff" stroke="#dbe1e8" stroke-width="2"/><text x="390" y="100" text-anchor="middle" font-size="30" font-weight="700" fill="#1f2a37">Els llops</text><text x="390" y="150" text-anchor="middle" font-size="20" fill="#5b6776">• Viuen en grup</text><text x="390" y="184" text-anchor="middle" font-size="20" fill="#5b6776">• Caminen molt</text>
  ${badge(150,30,1)}${badge(590,40,2)}</svg>`+legend(['<b>Columna de diapositives</b>: cada requadre és una diapositiva. Amb el botó dret podem <b>duplicar-la</b> o <b>amagar-la</b>.','<b>Diapositiva gran</b>: aquí escrivim. Una idea per diapositiva!']);
}

/* Dispositius per crear contingut */
function figDispositius(){
  return `<svg viewBox="0 0 640 190" role="img" aria-label="Una càmera de fotos, una càmera de vídeo i un micròfon"><rect x="2" y="2" width="636" height="186" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <text x="120" y="94" text-anchor="middle" font-size="64">📷</text><text x="120" y="140" text-anchor="middle" font-size="20" font-weight="700" fill="#1f2a37">Càmera de fotos</text><text x="120" y="166" text-anchor="middle" font-size="16" fill="#5b6776">fa fotografies</text>
  <text x="320" y="94" text-anchor="middle" font-size="64">🎥</text><text x="320" y="140" text-anchor="middle" font-size="20" font-weight="700" fill="#1f2a37">Càmera de vídeo</text><text x="320" y="166" text-anchor="middle" font-size="16" fill="#5b6776">grava imatges i so</text>
  <text x="520" y="94" text-anchor="middle" font-size="64">🎤</text><text x="520" y="140" text-anchor="middle" font-size="20" font-weight="700" fill="#1f2a37">Micròfon</text><text x="520" y="166" text-anchor="middle" font-size="16" fill="#5b6776">grava la veu</text></svg>`;
}

/* Botons de gravar (fer foto, gravar, aturar) */
function figBotonsGravar(){
  return `<svg viewBox="0 0 640 170" role="img" aria-label="Botons de fer una foto, gravar i aturar"><rect x="2" y="2" width="636" height="166" rx="14" fill="#f4f6f9" stroke="#b8c2cf" stroke-width="2"/>
  <circle cx="130" cy="70" r="36" fill="#fff" stroke="#1f2a37" stroke-width="6"/><circle cx="130" cy="70" r="22" fill="#1f2a37"/><text x="130" y="140" text-anchor="middle" font-size="19" font-weight="700" fill="#1f2a37">Fer una foto</text>
  <circle cx="320" cy="70" r="36" fill="#fff" stroke="#d33" stroke-width="6"/><circle cx="320" cy="70" r="20" fill="#d33"/><text x="320" y="140" text-anchor="middle" font-size="19" font-weight="700" fill="#1f2a37">Gravar</text>
  <circle cx="510" cy="70" r="36" fill="#fff" stroke="#1f2a37" stroke-width="6"/><rect x="494" y="54" width="32" height="32" rx="4" fill="#1f2a37"/><text x="510" y="140" text-anchor="middle" font-size="19" font-weight="700" fill="#1f2a37">Aturar</text></svg>`;
}

/* Barra d’eines interactiva (per a preguntes de clic) */
const DOCBAR=`<div class="toy"><div class="bar"><span class="b" data-act="clic" data-id="desfer">↶</span><span class="b" data-act="clic" data-id="refer">↷</span><span class="b" data-act="clic" data-id="negreta"><b>N</b></span><span class="b" data-act="clic" data-id="color" style="color:#d33">A</span><span class="b" data-act="clic" data-id="alinea">☰</span><span class="b" data-act="clic" data-id="imatge">🖼️</span></div><div class="body"><small style="color:var(--mut)">Barra d’eines d’exemple (no és real)</small></div></div>`;

/* Finestra interactiva (botons minimitzar, maximitzar, tancar) */
const WINBAR=`<div class="toy"><div class="bar"><b style="flex:1">📝 El meu document</b><span class="b" data-act="clic" data-id="min">–</span><span class="b" data-act="clic" data-id="max">▢</span><span class="b" data-act="clic" data-id="close">✕</span></div><div class="body"><small style="color:var(--mut)">Finestra d’exemple (no és real)</small></div></div>`;

/* Menú Insereix interactiu */
const INSMENU=`<div class="toy"><div class="bar"><b>Insereix</b></div><div class="body" style="display:grid;gap:6px"><span class="b" style="font-size:18px" data-act="clic" data-id="imatge">🖼️ Imatge</span><span class="b" style="font-size:18px" data-act="clic" data-id="video">🎞️ Vídeo</span><span class="b" style="font-size:18px" data-act="clic" data-id="taula">▦ Taula</span><span class="b" style="font-size:18px" data-act="clic" data-id="enllac">🔗 Enllaç</span></div></div>`;

/* Document d’exemple amb una font citada */
const DOCFONT=`<div class="toy"><div class="bar"><span class="dots"><span></span><span></span><span></span></span><span class="url">📝 Els llops · document d’exemple</span></div><div class="body"><h3>Els llops</h3><p>Els llops viuen en grup que es diu <b>ramat</b>.</p><p style="color:var(--mut);font-size:15px"><span data-act="clic" data-id="fonttext" style="cursor:pointer;border-bottom:2px dotted #e8830c">Font del text: Viquipèdia, «Llop», 2026.</span></p><p>🖼️ <small style="color:var(--mut)">[imatge d’un llop]</small></p><p style="color:var(--mut);font-size:15px"><span data-act="clic" data-id="fontimg" style="cursor:pointer;border-bottom:2px dotted #e8830c">Imatge: Pep Soler, Wikimedia Commons, 2024.</span></p></div></div>`;

/* ================= FIGURES AMPLIADES (cicles mitjà i superior) ================= */
const FS=(h,aria,inner)=>`<svg viewBox="0 0 640 ${h}" role="img" aria-label="${aria}"><rect x="2" y="2" width="636" height="${h-4}" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>${inner}</svg>`;
const FT=(x,y,t,sz,w,f,a)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}" font-size="${sz||18}" font-weight="${w||400}" fill="${f||'#1f2a37'}">${t}</text>`;
const FR=(x,y,w,h,f,s,sw,rx)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx===undefined?10:rx}" fill="${f||'#fff'}" stroke="${s||'#b8c2cf'}" stroke-width="${sw||2}"/>`;
const FKEY=(x,y,w,t,sz)=>`${FR(x,y,w,46,'#fff','#8a96a6',2,8)}${FT(x+w/2,y+30,t,sz||20,700)}`;
const FOK=(x,y)=>`<circle cx="${x}" cy="${y}" r="13" fill="#2e9e5b"/>${FT(x,y+6,'✓',18,800,'#fff')}`;
const FKO=(x,y)=>`<circle cx="${x}" cy="${y}" r="13" fill="#d33"/>${FT(x,y+6,'✕',16,800,'#fff')}`;
/* petit paisatge reutilitzable (sol i muntanya) dins d’un requadre x,y,w,h */
const FPAIS=(x,y,w,h)=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#cfe8f7"/><circle cx="${x+w*0.78}" cy="${y+h*0.25}" r="${Math.min(w,h)*0.12}" fill="#f6c343"/><polygon points="${x},${y+h} ${x+w*0.38},${y+h*0.32} ${x+w*0.72},${y+h}" fill="#5b8c5a"/><polygon points="${x+w*0.45},${y+h} ${x+w*0.72},${y+h*0.5} ${x+w},${y+h}" fill="#3f6f4e"/></g>`;

/* CM1 · accents: obert i tancat + altres signes */
function figAccents(){
  const cel=(x,y,l,c,tag)=>`${FR(x,y,92,64,c,'#b8c2cf',2,10)}${FT(x+46,y+44,l,34,700)}${tag?FT(x+46,y+82,tag,14,600,'#5b6776'):''}`;
  return FS(280,'Lletres amb accent obert, accent tancat, dieresi, ce trencada i l punt volat l',
   FT(24,36,'Accent obert (cap a l’esquerra)',17,700,'#1f2a37','start')+
   cel(24,46,'à','#fff4e5')+cel(126,46,'è','#fff4e5')+cel(228,46,'ò','#fff4e5')+
   FT(380,36,'Accent tancat (cap a la dreta)',17,700,'#1f2a37','start')+
   cel(380,46,'é','#e7f1fb')+cel(482,46,'í','#e7f1fb')+cel(584-24,46,'ó','#e7f1fb')+
   FT(24,160,'Altres signes',17,700,'#1f2a37','start')+
   cel(24,170,'ï','#efedff','dieresi')+cel(126,170,'ç','#efedff','ce trencada')+cel(228,170,'l·l','#efedff','punt volat')+cel(330,170,'l’','#efedff','apòstrof')+cel(432,170,'-','#efedff','guionet'));
}

/* CM1 · tecles que cal conèixer */
function figTeclesCat(){
  return FS(210,'Tecles útils per escriure en català: majúscula, majúscula fixa, accent, ce trencada i espai',
   FKEY(24,28,90,'⇧','24')+FT(69,98,'Majúscula',15,600)+FT(69,118,'(una lletra)',13,400,'#5b6776')+
   FKEY(140,28,130,'Bloq Maj','18')+FT(205,98,'Majúscula fixa',15,600)+FT(205,118,'(moltes lletres)',13,400,'#5b6776')+
   FKEY(296,28,70,'´','24')+FT(331,98,'Accent',15,600)+FT(331,118,'+ la lletra',13,400,'#5b6776')+
   FKEY(392,28,70,'Ç','24')+FT(427,98,'Ce trencada',15,600)+FT(427,118,'tecla pròpia',13,400,'#5b6776')+
   FKEY(488,28,128,'AltGr','18')+FT(552,98,'Signes especials',15,600)+FT(552,118,'(segons el teclat)',13,400,'#5b6776')+
   FT(320,172,'La posició i el nom de les tecles pot variar segons el teclat.',15,400,'#5b6776'));
}

/* CM2 · exemples de format */
function figFormatExemples(){
  return FS(250,'Exemples de mida, negreta, cursiva i subratllat',
   FR(20,20,290,100,'#f9fafc')+FT(165,56,'Mida gran',34,700)+FT(165,102,'mida petita',15)+
   FR(330,20,290,100,'#f9fafc')+FT(475,64,'<tspan font-weight="800">Negreta</tspan> · <tspan font-style="italic">cursiva</tspan>',26)+FT(475,104,'<tspan text-decoration="underline">subratllat</tspan>',24)+
   FT(165,148,'Mida',15,600,'#e8830c')+FT(475,148,'Negreta, cursiva i subratllat',15,600,'#e8830c')+
   FR(20,160,600,70,'#fff4e5','#e8830c')+FT(320,192,'<tspan font-weight="800">Títol:</tspan> mida gran i negreta',20)+FT(320,218,'Per destacar una idea: <tspan font-weight="800">només una part</tspan>',17));
}

/* CM2 · pocs tipus de lletra: bé o malament */
function figTipusLletra(){
  return FS(220,'Dos textos: un amb un tipus de lletra i un amb cinc tipus diferents',
   FR(20,20,290,180,'#f4faf5','#2e9e5b',3)+FT(165,52,'Un o dos tipus de lletra',16,700,'#2e9e5b')+FT(165,98,'Els llops viuen en grup.',22)+FT(165,132,'Cada grup té un líder.',22)+FT(165,166,'Es llegeix bé.',22)+FOK(290,36)+
   FR(330,20,290,180,'#fdf4f4','#d33',3)+FT(475,52,'Cinc tipus diferents',16,700,'#d33')+
   `<text x="475" y="98" text-anchor="middle" font-size="22" font-family="Georgia,serif">Els llops</text><text x="475" y="128" text-anchor="middle" font-size="20" font-family="Courier New,monospace">viuen en grup.</text><text x="475" y="160" text-anchor="middle" font-size="24" font-family="Comic Sans MS,cursive" font-style="italic">Cada grup</text><text x="475" y="188" text-anchor="middle" font-size="18" font-family="Impact,sans-serif">té un líder</text>`+FKO(606,36));
}

/* CM3 · taula amb files i columnes */
function figTaula(){
  const c=(x,y,t,h,col)=>`${FR(x,y,150,44,col||(h?'#e7f1fb':'#fff'),'#8a96a6',2,2)}${FT(x+75,y+29,t,17,h?700:400)}`;
  return FS(290,'Una taula amb dues columnes i tres files; una columna i una fila ressaltades',
   c(190,40,'Animal',true)+c(340,40,'Pes (kg)',true,'#fff4e5')+
   c(190,84,'Llop',false,'#e5f4e4')+c(340,84,'40',false,'#e5f4e4')+
   c(190,128,'Guineu')+c(340,128,'6',false,'#fff4e5')+
   c(190,172,'Linx')+c(340,172,'18',false,'#fff4e5')+
   `<path d="M414 40 V30" stroke="#e8830c" stroke-width="3"/>`+FT(414,24,'Columna ↓',16,700,'#e8830c')+
   `<path d="M184 106 H 120" stroke="#2e9e5b" stroke-width="3"/><polygon points="184,98 198,106 184,114" fill="#2e9e5b" transform="translate(-14 0)"/>`+FT(86,112,'Fila',16,700,'#2e9e5b')+
   FT(320,248,'Una taula serveix per <tspan font-weight="800">comparar dades</tspan> d’un cop d’ull:',17)+FT(320,272,'amb les files i les columnes veus quin animal pesa més.',17));
}

/* CM3 · imatge bé i imatge deformada */
function figDeformar(){
  /* dibuix base de 100x72 amb sol, muntanya i casa: es pot escalar per ampliar-lo o deformar-lo */
  const img=(x,y,sx,sy)=>`<g transform="translate(${x} ${y}) scale(${sx} ${sy})"><rect width="100" height="72" fill="#cfe8f7"/><circle cx="82" cy="16" r="9" fill="#f6c343"/><polygon points="0,72 36,22 72,72" fill="#5b8c5a"/><rect x="62" y="44" width="26" height="28" fill="#c0723b"/><polygon points="58,44 75,28 92,44" fill="#a54b2a"/><rect x="71" y="56" width="8" height="16" fill="#fff"/></g><rect x="${x}" y="${y}" width="${100*sx}" height="${72*sy}" fill="none" stroke="#8a96a6" stroke-width="2"/>`;
  const h=(x,y)=>`<rect x="${x-6}" y="${y-6}" width="12" height="12" fill="#e8830c" stroke="#fff" stroke-width="2"/>`;
  return FS(300,'Imatge original, ampliada des d’una cantonada sense deformar i estirada des d’un costat deformada',
   FT(74,34,'Original',17,700)+img(24,48,1,1)+
   FT(230,34,'Des d’una cantonada',17,700,'#2e9e5b')+img(150,48,1.6,1.6)+h(310,163)+`<path d="M318 171 l14 12" stroke="#e8830c" stroke-width="4"/>`+FOK(340,26)+FT(230,224,'Es fa més gran i es veu igual',15,600,'#2e9e5b')+
   FT(445,34,'Des d’un costat',17,700,'#d33')+img(350,48,1.9,0.5)+h(540,66)+`<path d="M548 66 h26" stroke="#e8830c" stroke-width="4"/>`+FKO(562,26)+FT(445,224,'Es deforma:',15,600,'#d33')+FT(445,244,'la casa queda aplanada!',15,600,'#d33')+
   FT(320,284,'Arrossega sempre una <tspan font-weight="800" fill="#e8830c">cantonada</tspan>, mai un costat.',18));
}

/* CM4 · noms de fitxer bons i dolents */
function figNomsFitxer(){
  const f=(y,t,ok)=>`${FR(30,y,580,44,ok?'#f4faf5':'#fdf4f4',ok?'#2e9e5b':'#d33',2,10)}${FT(60,y+29,ok?'📄':'📄',22)}${FT(96,y+29,t,19,ok?700:400,'#1f2a37','start')}${ok?FOK(580,y+22):FKO(580,y+22)}`;
  return FS(260,'Exemples de noms de fitxer bons i dolents',
   FT(320,30,'Quin nom diu què és?',18,700)+f(46,'Document1',false)+f(98,'aaa',false)+f(150,'Llops_Resum_2026-11',true)+f(202,'Mates_Problemes_2026-11',true));
}

/* CM4 · programari lliure, de pagament i núvol */
function figProgramari(){
  const card=(x,ico,nom,l1,l2,l3,col)=>`${FR(x,20,196,210,'#fff',col,3)}${FT(x+98,76,ico,48)}${FT(x+98,110,nom,18,700)}${FT(x+98,140,l1,15,600,col)}${FT(x+98,166,l2,14,400,'#5b6776')}${FT(x+98,190,l3,14,400,'#5b6776')}`;
  return FS(250,'LibreOffice és lliure i gratuït, Microsoft Office és de pagament i Documents de Google és gratuït amb compte',
   card(14,'🆓','LibreOffice','Lliure i gratuït','Fitxers .odt','S’instal·la a casa','#2e9e5b')+
   card(222,'💶','Microsoft Office','De pagament','Fitxers .docx','Cal llicència','#d9822b')+
   card(430,'☁️','Documents de Google','Gratuït amb compte','Al núvol','Cal Internet','#3b82c4'));
}

/* CM5 · contrast de colors */
function figContrast(){
  const d=(x,bg,fg,ok,t)=>`${FR(x,40,270,130,bg,'#8a96a6',2)}${FT(x+135,88,'Els llops',32,700,fg)}${FT(x+135,128,t,18,400,fg)}${ok?FOK(x+250,28):FKO(x+250,28)}`;
  return FS(230,'Text clar sobre fons fosc i text fosc sobre fons clar es llegeixen bé; text del mateix to no',
   d(30,'#1f3a5f','#fff',true,'Contrast alt: es llegeix')+d(340,'#2b4a73','#3d5c88',false,'Poc contrast: no es llegeix')+
   FT(320,206,'El text s’ha de llegir bé sobre el fons.',16,600,'#5b6776'));
}

/* CM5 · hipervincle en una diapositiva */
function figHipervincle(){
  return FS(240,'Un text subratllat d’una diapositiva que porta a una pàgina web',
   FR(30,30,260,170,'#fff')+FT(160,70,'Els llops',26,700)+FT(160,110,'<tspan fill="#1a5fd0" text-decoration="underline">Més informació</tspan>',20)+FT(160,160,'Diapositiva',14,400,'#5b6776')+
   `<path d="M215 106 C 300 106, 320 106, 360 106" fill="none" stroke="#e8830c" stroke-width="4"/><polygon points="360,96 382,106 360,116" fill="#e8830c"/>`+
   FT(300,92,'clic',15,700,'#e8830c')+
   FR(390,30,220,170,'#fff')+`<rect x="392" y="32" width="216" height="30" rx="8" fill="#e9edf2"/>`+FT(500,52,'🔒 pagina-exemple.cat',14,400,'#5b6776')+FT(500,110,'Pàgina web',24,700)+FT(500,150,'(s’obre en fer clic)',14,400,'#5b6776'));
}

/* CM6 · editar una imatge */
function figEditImatge(){
  return FS(230,'Original, retallar, redimensionar i girar una imatge',
   FT(80,36,'Original',16,700)+FPAIS(30,52,100,72)+
   FT(235,36,'✂️ Retallar',16,700)+FPAIS(185,52,100,72)+`<rect x="205" y="58" width="60" height="60" fill="none" stroke="#e8830c" stroke-width="3" stroke-dasharray="6 4"/>`+
   FT(390,36,'↔️ Més petita',16,700)+FPAIS(365,68,50,36)+
   FT(545,36,'🔄 Girar',16,700)+`<g transform="rotate(-20 545 88)">${FPAIS(495,52,100,72)}</g>`+
   FT(320,190,'Retallar, redimensionar i girar: edició senzilla d’una imatge',16,600,'#5b6776'));
}

/* CM6 · editar un vídeo */
function figEditVideo(){
  const clip=(x,w,c,t)=>`${FR(x,70,w,56,c,'#8a96a6',2,6)}${FT(x+w/2,104,t,16,700)}`;
  return FS(230,'Línia de temps d’un vídeo amb clips i una tisora per retallar',
   FT(24,40,'🎞️ Vídeo (línia de temps)',17,700,'#1f2a37','start')+
   clip(24,120,'#dbe7f5','Clip 1')+clip(150,140,'#dbe7f5','Clip 2')+FR(296,70,70,56,'#f1f1f1','#c5cdd8',2,6)+FT(331,104,'sobra',15,400,'#8a96a6')+`<path d="M296 60v76" stroke="#d33" stroke-width="3" stroke-dasharray="5 4"/>`+FT(296,56,'✂️',24)+
   clip(372,120,'#dbe7f5','Clip 3')+
   FR(24,140,468,28,'#fff4e5','#e8830c',2,6)+FT(258,160,'🎵 Àudio / música',15,600)+
   FR(120,172,140,28,'#e7f1fb','#3b82c4',2,6)+FT(190,192,'Text: «Els llops»',14,600)+
   FT(560,100,'✂️ retallar',16,700)+FT(560,128,'➕ text i àudio',16,700));
}

/* CM6 · gravar bé: llum, silenci, micròfon */
function figGravarBe(){
  const c=(x,ico,t1,t2,t3)=>`${FR(x,20,196,170,'#fff','#b8c2cf')}${FT(x+98,76,ico,48)}${FT(x+98,110,t1,18,700)}${FT(x+98,138,t2,14,400,'#5b6776')}${FT(x+98,160,t3,14,400,'#5b6776')}`;
  return FS(210,'Per gravar bé: llum davant, silenci i micròfon a prop',
   c(14,'💡','Llum','davant, no d’esquena','a la finestra')+c(222,'🔇','Silenci','portes tancades,','sense soroll')+c(430,'🎤','Micròfon','a prop de qui parla,','sense tocar-lo'));
}

/* CM6 i CS7 · anatomia d’una cita */
function figCita(){
  const p=(x,w,t,c,n)=>`${FR(x,60,w,56,c,'#8a96a6',2,8)}${FT(x+w/2,94,t,17,700)}${badge(x+w/2,50,n)}`;
  return FS(250,'Una cita amb autoria, títol, lloc web, adreça i data de consulta',
   p(14,110,'Autoria','#fff4e5',1)+p(134,120,'«Títol»','#e7f1fb',2)+p(264,110,'Web','#efedff',3)+p(384,110,'https://…','#e5f4e4',4)+p(504,122,'consulta: data','#f9eeda',5)+
   FT(320,160,'Pep Soler. «Els llops». Viquipèdia. https://… (consulta: 24/11/2026).',16,600,'#1f2a37')+
   FT(320,196,'Per a una imatge: autoria, lloc d’on l’has agafada i data.',15,400,'#5b6776')+
   FT(320,226,'No és teu? Digues-ho: així respectem el treball dels altres.',15,600,'#e8830c'));
}

/* CS1 · dreceres */
function figDreceres(){
  const d=(x,k,ico,t)=>`${FKEY(x,20,56,'Ctrl','15')}${FT(x+68,52,'+',20,700)}${FKEY(x+80,20,46,k,'22')}${FT(x+68,100,ico,34)}${FT(x+68,130,t,16,700)}`;
  return FS(170,'Dreceres Ctrl C copia, Ctrl V enganxa, Ctrl X retalla i Ctrl F cerca',
   d(14,'C','📋','Copia')+d(172,'V','📥','Enganxa')+d(330,'X','✂️','Retalla')+d(488,'F','🔍','Cerca'));
}

/* CS1 · enganxar amb format i sense format */
function figEnganxar(){
  return FS(230,'Enganxar amb format barreja lletres; enganxar sense format manté el format del document',
   FR(20,20,290,190,'#fdf4f4','#d33',3)+FT(165,50,'Enganxa amb format',17,700,'#d33')+
   `<text x="165" y="96" text-anchor="middle" font-size="22" font-family="Georgia,serif" fill="#3b82c4">El llop és un</text><text x="165" y="128" text-anchor="middle" font-size="18" font-family="Courier New,monospace" fill="#d33">mamífer que viu</text><text x="165" y="162" text-anchor="middle" font-size="26" font-weight="700" fill="#2e9e5b">en grup.</text>`+FKO(298,36)+
   FR(330,20,290,190,'#f4faf5','#2e9e5b',3)+FT(475,50,'Enganxa sense format',17,700,'#2e9e5b')+
   FT(475,100,'El llop és un mamífer',22)+FT(475,134,'que viu en grup.',22)+FT(475,180,'Format coherent',15,600,'#5b6776')+FOK(608,36));
}

/* CS2 · orientació de la pàgina */
function figOrientacio(){
  return FS(240,'Pàgina vertical i pàgina horitzontal',
   FR(90,26,130,170,'#fff','#8a96a6',3,6)+FT(155,60,'Vertical',16,700)+`<rect x="106" y="76" width="98" height="8" rx="4" fill="#dfe4ea"/><rect x="106" y="94" width="98" height="8" rx="4" fill="#dfe4ea"/><rect x="106" y="112" width="70" height="8" rx="4" fill="#dfe4ea"/>`+FT(155,222,'Per a text',15,600,'#5b6776')+
   FR(300,56,230,130,'#fff','#8a96a6',3,6)+FT(415,84,'Horitzontal',16,700)+`<rect x="316" y="100" width="198" height="8" rx="4" fill="#dfe4ea"/><rect x="316" y="118" width="198" height="8" rx="4" fill="#dfe4ea"/><rect x="316" y="136" width="130" height="8" rx="4" fill="#dfe4ea"/>`+FT(415,222,'Per a taules amples',15,600,'#5b6776'));
}

/* CS2 · estructura d’un treball */
function figEstructuraDoc(){
  /* una pàgina de text vertical (format DIN A4) amb títol, apartats, llistes i número de pàgina */
  const bar=(y,w)=>`<rect x="244" y="${y}" width="${w}" height="6" rx="3" fill="#dfe4ea"/>`;
  return FS(350,'Una pàgina de text en vertical amb títol, apartats, llista amb vinyetes, llista numerada i número de pàgina',
   `<rect x="225" y="12" width="190" height="326" rx="4" fill="#fff" stroke="#8a96a6" stroke-width="3"/>`+
   FT(320,46,'Els llops',22,800)+
   FT(244,76,'1. Alimentació',14,700,'#1f2a37','start')+bar(86,150)+bar(98,150)+bar(110,100)+
   FT(244,140,'• carn',13,400,'#1f2a37','start')+FT(244,158,'• peixos',13,400,'#1f2a37','start')+
   FT(244,190,'2. Com cacen',14,700,'#1f2a37','start')+bar(200,150)+bar(212,150)+
   FT(244,244,'1) Es reuneixen',13,400,'#1f2a37','start')+FT(244,262,'2) Persegueixen',13,400,'#1f2a37','start')+
   bar(278,150)+bar(290,110)+FT(320,326,'– 1 –',14,700)+
   badge(445,40,1)+badge(445,72,2)+badge(445,150,3)+badge(445,252,4)+badge(445,322,5)+
   `<g stroke="#e8830c" stroke-width="2" stroke-dasharray="4 3"><path d="M432 40 H 405"/><path d="M432 72 H 405"/><path d="M432 150 H 405"/><path d="M432 252 H 405"/><path d="M432 322 H 405"/></g>`)+
   legend(['<b>Títol</b>: gran i en negreta.','<b>Apartats</b> amb subtítols.','<b>Llista amb vinyetes</b>: l’ordre no importa.','<b>Llista numerada</b>: l’ordre importa.','<b>Número de pàgina</b>: a baix.']);
}

/* CS3 · mateixes dades en barres, línies i sectors */
function figGrafiques(){
  const bars=[40,70,100,55];const bx=(i)=>40+i*46;
  return FS(260,'Gràfica de barres, gràfica de línies i gràfica de sectors',
   FT(106,32,'Barres',17,700)+FT(106,50,'compara quantitats',13,400,'#5b6776')+
   bars.map((v,i)=>`<rect x="${bx(i)}" y="${210-v}" width="32" height="${v}" fill="#3b82c4"/>`).join('')+`<line x1="30" y1="210" x2="226" y2="210" stroke="#8a96a6" stroke-width="2"/>`+
   FT(320,32,'Línies',17,700)+FT(320,50,'mostra l’evolució',13,400,'#5b6776')+
   `<polyline points="240,190 290,160 340,170 390,100" fill="none" stroke="#e8830c" stroke-width="4"/><circle cx="240" cy="190" r="5" fill="#e8830c"/><circle cx="290" cy="160" r="5" fill="#e8830c"/><circle cx="340" cy="170" r="5" fill="#e8830c"/><circle cx="390" cy="100" r="5" fill="#e8830c"/><line x1="230" y1="210" x2="410" y2="210" stroke="#8a96a6" stroke-width="2"/>`+
   FT(540,32,'Sectors',17,700)+FT(540,50,'parts d’un total',13,400,'#5b6776')+
   `<circle cx="540" cy="130" r="64" fill="#3b82c4"/><path d="M540 130 L540 66 A64 64 0 0 1 596 98 Z" fill="#e8830c"/><path d="M540 130 L596 98 A64 64 0 0 1 560 192 Z" fill="#2e9e5b"/>`+
   FT(320,248,'Les mateixes dades poden explicar coses diferents segons el gràfic.',15,600,'#5b6776'));
}

/* CS4 · animació i transició */
function figTransicio(){
  const s=(x,t,sel)=>`${FR(x,40,150,100,'#fff',sel?'#e8830c':'#b8c2cf',sel?4:2,8)}${FT(x+75,96,t,20,700)}`;
  return FS(270,'Una transició entre dues diapositives i una animació que fa aparèixer els punts un a un',
   FT(130,28,'Transició',17,700)+s(30,'Diap. 1')+`<path d="M184 90 H 224" stroke="#e8830c" stroke-width="4"/><polygon points="224,80 244,90 224,100" fill="#e8830c"/>`+s(250,'Diap. 2',true)+
   FT(320,170,'Efecte en canviar de diapositiva',14,400,'#5b6776')+
   FR(30,184,580,70,'#f9fafc')+FT(60,216,'Animació:',16,700,'#1f2a37','start')+FT(160,216,'1. aparix el títol',15,400,'#1f2a37','start')+FT(330,216,'2. aparix el primer punt',15,400,'#1f2a37','start')+FT(160,242,'Quan ajuda: mostra el que expliques, un punt cada vegada.',14,600,'#2e9e5b','start')+FOK(590,232));
}

/* CS5 · flux d’edició: importar → editar → exportar → guardar */
function figFluxEdicio(){
  const b=(x,ico,t,t2)=>`${FR(x,40,128,140,'#fff','#8a96a6',3)}${FT(x+64,94,ico,40)}${FT(x+64,128,t,17,700)}${FT(x+64,152,t2,13,400,'#5b6776')}`;
  const a=(x)=>`<path d="M${x} 110 h16" stroke="#e8830c" stroke-width="4"/><polygon points="${x+16},100 ${x+30},110 ${x+16},120" fill="#e8830c"/>`;
  return FS(220,'Passos: importar, editar, exportar i guardar el producte final',
   b(14,'📥','Importar','porta el fitxer')+a(144)+b(176,'✂️','Editar','retalla i ajusta')+a(306)+b(338,'📤','Exportar','crea el fitxer')+a(468)+b(500,'💾','Guardar','en dos llocs')+
   FT(320,206,'Núvol, ordinador o memòria externa: guarda sempre dues còpies.',15,600,'#5b6776'));
}

/* CS6 · formats: què serveix per a què */
function figFormats(){
  const c=(x,y,ico,t,u)=>`${FR(x,y,188,92,'#fff','#b8c2cf')}${FT(x+34,y+54,ico,32)}${FT(x+112,y+42,t,17,700)}${FT(x+112,y+66,u,13,400,'#5b6776')}`;
  return FS(260,'Format de text, taula, imatge, àudio, vídeo i esquema, cadascun amb la seva utilitat',
   c(14,14,'📝','Text','explicar i raonar')+c(226,14,'▦','Taula','comparar dades')+c(438,14,'🖼️','Imatge','mostrar com és')+
   c(14,122,'🔊','Àudio','veu i música')+c(226,122,'🎞️','Vídeo','processos')+c(438,122,'🧩','Esquema','relacions entre idees')+
   FT(320,246,'No hi ha un format «millor»: depèn del que vols transmetre i a qui.',15,600,'#5b6776'));
}

/* CS6 · mapa conceptual d’exemple (centrat i simètric) */
function figMapa(){
  const n=(cx,y,w,t,c)=>`${FR(cx-w/2,y,w,40,c,'#8a96a6',2,18)}${FT(cx,y+26,t,16,700)}`;
  const l=(x1,y1,x2,y2,t)=>{const mx=(x1+x2)/2,my=(y1+y2)/2,w=t.length*7.4+16;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8a96a6" stroke-width="3"/><rect x="${mx-w/2}" y="${my-11}" width="${w}" height="22" rx="6" fill="#fff"/>${FT(mx,my+5,t,13,600,'#e8830c')}`};
  return FS(322,'Mapa conceptual: els llops viuen en ramats i mengen carn; el ramat té un líder i la carn és de cérvols i conills',
   l(320,76,170,138,'viuen en')+l(320,76,470,138,'mengen')+l(170,178,170,236,'dirigit per')+l(470,178,470,236,'com ara')+
   n(320,36,150,'Els llops','#fff4e5')+n(170,138,140,'Ramats','#e7f1fb')+n(470,138,140,'Carn','#e7f1fb')+n(170,236,140,'Un líder','#e5f4e4')+n(470,236,190,'Cérvols i conills','#e5f4e4')+
   FT(320,306,'Caixes = idees · Fletxes amb paraules = relacions',14,400,'#5b6776'));
}

/* Teclat (distribució espanyola/catalana) amb tecles ressaltades. sel: {idTecla: número d’etiqueta} */
function kbCatSVG(sel,row5){
  const u=40,k=37;
  const Q=['Q','W','E','R','T','Y','U','I','O','P'];
  const rows=[
   {y:12,x:20,keys:[['º'],['1'],['2'],['3','tres'],['4'],['5'],['6'],['7'],['8'],['9'],['0'],['’','apos'],['¡']],tail:['⌫',58]},
   {y:56,x:20,lead:['Tab',54],keys:Q.map(c=>[c]).concat([['`','obert'],['+']])},
   {y:100,x:20,lead:['Bloq Maj',66,'bloq'],keys:['A','S','D','F','G','H','J','K','L','Ñ'].map(c=>[c]).concat([['´','tancat'],['Ç','ce']])},
   {y:144,x:20,lead:['⇧',50,'maj'],keys:[['<'],['Z'],['X'],['C'],['V'],['B'],['N'],['M'],[','],['.'],['-','guio']],tail:['⇧',88,'maj2']}];
  const key=(x,y,w,t,id,fs)=>{const on=sel&&id&&sel[id];return `<rect x="${x}" y="${y}" width="${w}" height="${k}" rx="7" fill="${on?'#ffe0b2':'#fff'}" stroke="${on?'#e8830c':'#b8c2cf'}" stroke-width="${on?3:2}"/>${FT(x+w/2,y+25,t,fs||(t.length>3?13:17),700)}${on?badge(x+w-4,y+4,sel[id]):''}`};
  let out='';
  rows.forEach(r=>{let x=r.x;
    if(r.lead){out+=key(x,r.y,r.lead[1]-3,r.lead[0],r.lead[2],12);x+=r.lead[1];}
    r.keys.forEach(kk=>{const id=kk[1]||(kk[0].length===1?kk[0]:'');out+=key(x,r.y,k,kk[0],id);x+=u;});
    if(r.tail){const id=r.tail[2];out+=key(x,r.y,r.tail[1]-3,r.tail[0],id&&(id==='maj2'?'maj':id),r.tail[0]==='⌫'?16:17);}
  });
  let h=196;
  if(row5){
    const y=188;
    out+=key(20,y,56,'Ctrl','ctrl',13)+key(80,y,40,'Win','',11)+key(124,y,46,'Alt','',13)+`<rect x="174" y="${y}" width="230" height="${k}" rx="7" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>${FT(289,y+25,'Espai',14,700)}`+key(408,y,56,'AltGr','',13)+key(468,y,40,'Win','',11)+key(512,y,56,'Ctrl','ctrl2',13);
    h=240;
  }
  return FS(h,'Teclat amb les tecles que es fan servir ressaltades',out);
}
function figTecladCat(mode){
  const note='<p style="margin:6px 0 0;font-size:15px;color:var(--mut)">Teclat espanyol o català. Si el teu és diferent, les tecles poden canviar de lloc.</p>';
  if(mode==='accents')return kbCatSVG({obert:1,tancat:2})+legend(['<b>Accent obert</b> (à è ò): tecla <b>`</b>, a la dreta de la P. Prem-la <b>i deixa-la</b>; després prem la vocal.','<b>Accent tancat</b> (é í ó ú): tecla <b>´</b>, a la dreta de la Ñ. Prem-la i deixa-la; després prem la vocal.'])+note;
  if(mode==='apos')return kbCatSVG({apos:1,guio:2,tres:3,maj:3})+legend(['<b>Apòstrof</b> (’): tecla a la dreta del 0, a la fila dels números.','<b>Guionet</b> (-): tecla a baix a la dreta, al costat del punt.','<b>Punt volat</b> (·) per a la <b>l·l</b>: prem <b>⇧</b> i la tecla del <b>3</b>.'])+note;
  if(mode==='dieresi')return kbCatSVG({tancat:1,maj:1,ce:2})+legend(['<b>Dieresi</b> (ï ü): prem <b>⇧</b> i la tecla <b>´</b>; després la <b>i</b> o la <b>u</b>.','<b>Ç</b> (ce trencada): té la seva tecla, a la dreta de la ´.'])+note;
  return kbCatSVG({maj:1,bloq:2})+legend(['<b>⇧ Majúscula</b>: la prems <b>mentre</b> prems la lletra (una sola majúscula).','<b>Bloq Maj</b>: activa la majúscula fixa; per desactivar-la, torna-la a prémer.'])+note;
}
/* Teclat per a les dreceres: Ctrl a baix a l’esquerra */
function figTecladDreceres(){
  return kbCatSVG({ctrl:1,C:2,V:3,X:4,F:5},true)+legend(['<b>Ctrl</b>: a baix a l’esquerra (i també a la dreta). Es prem <b>primer</b> i no es deixa.','<b>C</b>: copiar','<b>V</b>: enganxar','<b>X</b>: retallar','<b>F</b>: cercar (find)']);
}
