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
