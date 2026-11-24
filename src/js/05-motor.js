/* ============ ESTAT ============ */
const S={screen:'portada',nivell:'primaria',cd:'CD1',c:{nom:'',email:'',tipus:'Suggeriment',msg:''},cstat:null,us:'docent',fmt:{font:'app',maj:false},cicle:'mitja',n1:'',n2:'',tema:'',sk:null,step:0,item:0,res:{},real:{},self:{},tok:[],ord:[],fb:null,hint:false,back:false,err:'',opened:false};
const $app=document.getElementById('app');
const STEPS=['Què sabem?','Aprenem','Repassem','Practiquem','Què hem après?'];
const ST_LAB={no:'○ No fet',proces:'🔄 En procés',assolit:'✔ Assolit',dominat:'⭐ Dominat'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sessOf=k=>{const p=k.split('-');const cd=/^cd\d$/.test(p[0])?p.shift().toUpperCase():'CD1';return SESSIONS_BY[cd][p[0]].find(s=>s.id==p[1])};
const skey=(c,i)=>(S.cd==='CD1'?'':S.cd.toLowerCase()+'-')+c+'-'+i;
function useCD(id){S.cd=id;SESSIONS=SESSIONS_BY[id]}
useCD('CD1');
const WIDE=['google','startpage','duckduckgo','freesound','scholar'];
const logoHTML=(id,sm)=>LOGOS[id]?`<img class="logo ${sm?'sm':''} ${WIDE.includes(id)?'wide':''}" src="${LOGOS[id]}" alt="${LNAME[id]}">`:`<span class="logo ph ${sm?'sm':''}">${sm?'':'logo'}</span>`;
const logoRow=ids=>{const have=ids.filter(i=>LOGOS[i]);const use=have.length?have:ids;return `<div class="logos">${use.map(i=>`<div class="lg ${WIDE.includes(i)?'wide':''}">${logoHTML(i)}<b>${LNAME[i]}</b></div>`).join('')}</div>`};
const LINKS={google:'https://www.google.com',bing:'https://www.bing.com',duckduckgo:'https://duckduckgo.com',startpage:'https://www.startpage.com',commons:'https://commons.wikimedia.org',freesound:'https://freesound.org',scholar:'https://scholar.google.com'};
const webLinks=a=>`<div class="logos">${a.map(([t,u])=>`<a class="btn sec" href="${u}" target="_blank" rel="noopener">🔗 ${t}</a>`).join(' ')}</div>`;
const logoLinks=ids=>`<div class="logos">${ids.map(i=>`<a class="lg ${WIDE.includes(i)?'wide':''}" href="${LINKS[i]}" target="_blank" rel="noopener">${logoHTML(i)}<b>${LNAME[i]}</b></a>`).join('')}</div>`;
const fx=s=>String(s).replace(/\[\[key:([^\]]+)\]\]/g,(m,k)=>`<kbd>${k}</kbd>`).replace(/\[\[logo:(\w+)\]\]/g,(m,i)=>logoHTML(i,true)+LNAME[i]).replace(/%%row:([\w,]+)%%/g,(m,l)=>logoRow(l.split(',')));
const SYM=[[/Ctrl/g,'Control'],[/\s\+\s/g,' més '],[/−/g,' menys '],[/←/g,' La fletxa cap a l’esquerra '],[/→/g,' La fletxa cap a la dreta '],[/↻/g,' La fletxa que gira '],[/＋/g,' El signe més '],[/☆/g,''],[/↵/g,''],[/⇧/g,''],[/\s·\s/g,', '],[/aquest símbol:\s*" "/g,'aquest símbol, que són unes cometes'],[/[«»"“”]/g,''],[/%/g,' per cent'],[/\b0\b/g,'zero']];
const plain=h=>{let t=String(h).replace(/%%row:[\w,]+%%/g,' ').replace(/\[\[logo:\w+\]\]/g,'').replace(/\[\[key:([^\]]+)\]\]/g,'$1').replace(/<br>/g,'. ').replace(/<[^>]+>/g,'');
  SYM.forEach(([a,b])=>{t=t.replace(a,b)});
  return t.replace(/[⃣️‍]/g,'').replace(/\p{Extended_Pictographic}/gu,' ').replace(/\s+/g,' ').replace(/\s+([.,:;?!])/g,'$1').replace(/:\s*\./g,'.').replace(/([?!…])\./g,'$1').replace(/\.\s*\./g,'.').trim()};
const BRANDS=/(Google Chrome|Google Acadèmic|Wikimedia Commons|Freesound|DuckDuckGo|Startpage|Firefox|Safari|Google|Chrome|Bing|Edge|Word|Excel)/;
const MASCOT=`<svg viewBox="0 0 100 100" width="70" height="70" aria-hidden="true"><circle cx="46" cy="52" r="34" fill="var(--c)"/><circle cx="34" cy="46" r="10" fill="#fff"/><circle cx="58" cy="46" r="10" fill="#fff"/><circle cx="36" cy="48" r="5" fill="#223"/><circle cx="60" cy="48" r="5" fill="#223"/><path d="M36 66q10 9 22 0" stroke="#223" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="76" cy="70" r="13" fill="rgba(255,255,255,.6)" stroke="#223" stroke-width="4"/><line x1="85" y1="80" x2="96" y2="92" stroke="#223" stroke-width="6" stroke-linecap="round"/></svg>`;
const bubble=t=>`<div class="top"><div>${MASCOT}</div><div class="bubble">${t}</div></div>`;
const speak=t=>{try{speechSynthesis.cancel();t.split(BRANDS).forEach((seg,i)=>{if(!seg.trim())return;const u=new SpeechSynthesisUtterance(seg.trim());u.lang=i%2?'en-US':'ca-ES';u.rate=.9;speechSynthesis.speak(u)})}catch(e){}};
const spBtn=t=>`<button class="sp noprint" data-act="speak" data-t="${esc(plain(t))}" title="Escolta">🔊</button>`;
const resetQ=()=>{S.tok=[];S.ord=[];S.fb=null;S.hint=false};

/* ============ LÒGICA D'ESTAT ============ */
function saberState(k,cs,sab){
  const its=cs.items.filter(i=>i.saber===sab.id);
  const r=S.res[k]||{};
  const done=its.filter(i=>r[i.id]&&r[i.id].done).length;
  if(!done)return{st:'no',done:0,n:its.length};
  const c=its.filter(i=>r[i.id]&&r[i.id].first===true).length;
  const pct=c/its.length;
  const hints=its.some(i=>r[i.id]&&r[i.id].hint);
  const realOk=!!cs.sabers[sab.id].realDone(S.real[k]||{});
  let st='proces';
  if(done===its.length&&pct>=.7)st='assolit';
  if(done===its.length&&pct>=.9&&!hints&&realOk)st='dominat';
  return{st,pct,c,n:its.length,done,hints,realOk};
}
function sessionStatus(k){
  const cs=CONTENT[k];if(!cs)return null;
  const s=sessOf(k);const sts=s.sabers.map(sb=>saberState(k,cs,sb).st);
  if(sts.every(x=>x==='no'))return'no';
  return sts.every(x=>x==='assolit'||x==='dominat')?'fet':'proces';
}

/* ============ PANTALLES ============ */
const FONTS={app:'',arial:'Arial,Helvetica,sans-serif',verdana:'Verdana,Geneva,sans-serif',comic:'"Comic Sans MS","Comic Neue","Chalkboard SE",sans-serif',georgia:'Georgia,"Times New Roman",serif'};
const FONT_LAB={app:'Lletra de l’app',arial:'Arial (lletra de pal)',verdana:'Verdana',comic:'Comic Sans',georgia:'Georgia (amb serif)'};
const isIni=()=>S.cicle==='inicial';
const profNota=t=>docentMode()?`<details class="prof noprint"><summary>👩‍🏫 Suggeriments per al professorat</summary><p>${t}</p></details>`:'';
const docentMode=()=>isIni()&&S.us==='docent';
const quiTxt=()=>docentMode()?'Grup classe (sessió guiada pel professorat)':S.n1+(S.n2?' i '+S.n2:'');

function badge(x,y,n){return `<circle cx="${x}" cy="${y}" r="12" fill="#e8830c" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">${n}</text>`}
function legend(items){return `<ol class="leg">${items.map((t,i)=>`<li><span class="n">${i+1}</span><span>${t}</span></li>`).join('')}</ol>`}
function figDesktop(){
  const L=(id,x,y,sz)=>LOGOS[id]?`<image href="${LOGOS[id]}" x="${x}" y="${y}" width="${sz}" height="${sz}"/>`:`<rect x="${x}" y="${y}" width="${sz}" height="${sz}" rx="8" fill="#fff"/>`;
  return `<svg viewBox="0 0 640 300" role="img" aria-label="Escriptori d’un ordinador amb icones i barra de tasques"><rect x="2" y="2" width="636" height="296" rx="14" fill="#3b82c4" stroke="#b8c2cf" stroke-width="2"/>
  ${L('chrome',34,26,58)}<text x="63" y="108" text-anchor="middle" font-size="15" fill="#fff" font-weight="700">Chrome</text>
  ${L('firefox',34,126,58)}<text x="63" y="208" text-anchor="middle" font-size="15" fill="#fff" font-weight="700">Firefox</text>
  <rect x="2" y="256" width="636" height="42" rx="0" fill="#1f2937"/><rect x="2" y="256" width="636" height="42" rx="14" fill="#1f2937"/><rect x="2" y="256" width="636" height="20" fill="#1f2937"/>
  <g fill="#8ec5ff"><rect x="18" y="266" width="10" height="10"/><rect x="30" y="266" width="10" height="10"/><rect x="18" y="278" width="10" height="10"/><rect x="30" y="278" width="10" height="10"/></g>
  ${L('chrome',64,262,32)}${L('firefox',106,262,32)}
  <rect x="64" y="294" width="32" height="3" fill="#8ec5ff"/>
  ${badge(108,34,1)}${badge(150,262,2)}</svg>`+legend(['<b>Escriptori</b>: la icona s’obre amb <b>doble clic</b> (dos clics ràpids).','<b>Barra de tasques</b> (a baix): la icona s’obre amb <b>un sol clic</b>.']);
}
function figBrowser(v){
  const cerca=v==='cerca';
  let body=cerca?`<text x="320" y="150" text-anchor="middle" font-size="30" font-weight="700" fill="#5b6776">Cercador</text>
   <rect x="130" y="170" width="380" height="46" rx="23" fill="#fff" stroke="#e8830c" stroke-width="3"/><text x="158" y="200" font-size="20" fill="#7a8594">🔎 Escriu aquí la paraula…</text>${badge(512,168,1)}`
   :`<rect x="40" y="126" width="300" height="14" rx="7" fill="#dfe4ea"/><rect x="40" y="152" width="460" height="10" rx="5" fill="#e9edf2"/><rect x="40" y="172" width="420" height="10" rx="5" fill="#e9edf2"/><rect x="40" y="192" width="380" height="10" rx="5" fill="#e9edf2"/><rect x="40" y="212" width="440" height="10" rx="5" fill="#e9edf2"/>`;
  const btn=(cx,g)=>`<circle cx="${cx}" cy="80" r="18" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="${cx}" y="88" text-anchor="middle" font-size="24" fill="#1f2a37">${g}</text>`;
  const svg=`<svg viewBox="0 0 640 250" role="img" aria-label="Finestra d’un navegador amb els seus botons"><rect x="2" y="2" width="636" height="246" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <path d="M2 16a14 14 0 0 1 14-14h608a14 14 0 0 1 14 14v34H2z" fill="#e9edf2"/>
  <rect x="22" y="14" width="176" height="36" rx="9" fill="#fff"/><text x="40" y="38" font-size="16" fill="#1f2a37">Pestanya</text>
  <circle cx="226" cy="32" r="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="226" y="40" text-anchor="middle" font-size="22" fill="#1f2a37">＋</text>
  <rect x="2" y="50" width="636" height="60" fill="#fff"/><line x1="2" y1="110" x2="638" y2="110" stroke="#dbe1e8" stroke-width="2"/>
  ${btn(44,'←')}${btn(90,'→')}${btn(136,'↻')}
  <rect x="172" y="60" width="440" height="40" rx="20" fill="#f1f4f8" stroke="#dbe1e8" stroke-width="2"/><text x="194" y="87" font-size="18" fill="#5b6776">🔒 www.exemple.cat</text>
  ${body}
  ${cerca?'':badge(60,62,1)+badge(106,62,2)+badge(152,62,3)+badge(242,18,4)}</svg>`;
  return svg+legend(cerca?['<b>Barra de cerca</b> 🔎: aquí escrivim la paraula que volem buscar.']:['<b>←</b> Enrere: torna a la pàgina d’abans.','<b>→</b> Endavant: va a la pàgina següent.','<b>↻</b> Recarregar: torna a carregar la pàgina.','<b>＋</b> Pestanya nova: obre una pestanya en blanc.']);
}
function kbSVG(inter){
  const rows=[['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ñ'],['Z','X','C','V','B','N','M']];
  const x0=[40,52,76],ys=[60,112,164];
  const key=(x,y,w,h,t,id,extra)=>`<g ${inter?`data-act="clic" data-id="${id}"`:''}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${extra?'#ffe0b2':'#fff'}" stroke="${extra?'#e8830c':'#b8c2cf'}" stroke-width="${extra?4:2}"/><text x="${x+w/2}" y="${y+h/2+7}" text-anchor="middle" font-size="${t.length>2?18:22}" font-weight="700" fill="#1f2a37">${t}</text></g>`;
  let k=key(14,8,50,32,'Esc','esc');
  rows.forEach((r,i)=>{r.forEach((c,j)=>{k+=key(x0[i]+j*52,ys[i],46,46,c,'lletra')})});
  k+=key(574,60,112,98,'Intro ↵','intro',true);
  k+=key(14,164,56,46,'⇧','maj');
  k+=key(150,216,300,40,'Espai','espai');
  return `<svg class="kb" viewBox="0 0 700 270" role="img" aria-label="Teclat amb la tecla Intro destacada"><rect x="2" y="2" width="696" height="266" rx="16" fill="#e9edf2" stroke="#b8c2cf" stroke-width="2"/>${k}${inter?'':badge(676,50,1)+badge(298,70,2)}</svg>`;
}
function figKeys(){return `<div class="fig">${kbSVG(false)}${legend(['<b>Intro</b>: la tecla gran de la dreta. La premem per cercar.','<b>Lletres</b>: hi escrivim la paraula.'])}</div>`}

function kbZoom(){
  const key=(x,y,w,t,hi)=>`<g><rect x="${x}" y="${y}" width="${w}" height="46" rx="8" fill="${hi?'#ffe0b2':'#fff'}" stroke="${hi?'#e8830c':'#b8c2cf'}" stroke-width="${hi?4:2}"/><text x="${x+w/2}" y="${y+30}" text-anchor="middle" font-size="${t.length>2?18:22}" font-weight="700" fill="#1f2a37">${t}</text></g>`;
  const R=(arr,x0,y,hi)=>arr.map((t,i)=>key(x0+i*52,y,46,t,hi===t)).join('');
  let k=R(['º','1','2','3','4','5','6','7','8','9','0','’'],14,8,'0')+R(['Q','W','E','R','T','Y','U','I','O','P','`','+'],40,60,'+')+R(['A','S','D','F','G','H','J','K','L','Ñ'],52,112)+key(14,164,56,'⇧')+R(['Z','X','C','V','B','N','M',',','.','−'],76,164,'−')+key(14,216,80,'Ctrl',true)+key(170,216,300,'Espai');
  return `<svg class="kb" viewBox="0 0 700 270" role="img" aria-label="Teclat amb les tecles del zoom destacades"><rect x="2" y="2" width="696" height="266" rx="16" fill="#e9edf2" stroke="#b8c2cf" stroke-width="2"/>${k}${badge(54,216,1)}${badge(650,58,2)}${badge(582,164,3)}${badge(572,8,4)}</svg>`;
}
function figZoom(){return kbZoom()+legend(['<b>Ctrl</b>: a baix a l’esquerra del teclat.','<b>+</b>: al final de la fila de les lletres de dalt. <b>Ctrl i +</b> amplia.','<b>−</b> (signe menys): a la fila de sota, al costat del punt. <b>Ctrl i −</b> fa petit.','<b>0</b> (número zero): a la fila dels números. <b>Ctrl i 0</b> torna a la mida normal.'])+'<p style="margin:6px 0 0;font-size:15px;color:var(--mut)">La posició de les tecles pot variar una mica segons el teclat.</p>'}

function kbBM(){
  const key=(x,y,w,t,hi)=>`<g><rect x="${x}" y="${y}" width="${w}" height="46" rx="8" fill="${hi?'#ffe0b2':'#fff'}" stroke="${hi?'#e8830c':'#b8c2cf'}" stroke-width="${hi?4:2}"/><text x="${x+w/2}" y="${y+30}" text-anchor="middle" font-size="${t.length>2?18:22}" font-weight="700" fill="#1f2a37">${t}</text></g>`;
  const R=(arr,x0,y,hi)=>arr.map((t,i)=>key(x0+i*52,y,46,t,hi===t)).join('');
  const k=R(['º','1','2','3','4','5','6','7','8','9','0','’'],14,8)+R(['Q','W','E','R','T','Y','U','I','O','P','`','+'],40,60)+R(['A','S','D','F','G','H','J','K','L','Ñ'],52,112)+key(14,164,56,'⇧',true)+R(['Z','X','C','V','B','N','M',',','.','−'],76,164,'B')+key(14,216,80,'Ctrl',true)+key(170,216,300,'Espai');
  return `<svg class="kb" viewBox="0 0 700 270" role="img" aria-label="Teclat amb les tecles Ctrl, Maj i B destacades"><rect x="2" y="2" width="696" height="266" rx="16" fill="#e9edf2" stroke="#b8c2cf" stroke-width="2"/>${k}${badge(54,216,1)}${badge(56,164,2)}${badge(326,164,3)}</svg>`;
}
function figBM(){return kbBM()+legend(['<b>Ctrl</b>: a baix a l’esquerra del teclat.','<b>⇧ Maj</b>: la tecla de les majúscules, just a sobre de Ctrl.','<b>B</b>: a la fila de sota de les lletres.'])+'<p style="margin:6px 0 0;font-size:15px;color:var(--mut)">Premeu les tres tecles alhora: Ctrl + Maj + B.</p>'}
function figEines(kind){
  const chip=(x,w,t)=>`<rect x="${x}" y="150" width="${w}" height="34" rx="17" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="${x+w/2}" y="173" text-anchor="middle" font-size="16" fill="#1f2a37">${t} ▾</text>`;
  const web=kind==='web';
  const chips=web?chip(40,210,'Qualsevol moment')+chip(262,210,'Qualsevol llengua'):chip(40,90,'Mida')+chip(142,90,'Color')+chip(244,90,'Tipus')+chip(346,150,'Drets d’ús');
  const svg=`<svg viewBox="0 0 640 250" role="img" aria-label="Pàgina d’un cercador amb el botó Eines i els filtres"><rect x="2" y="2" width="636" height="246" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <rect x="40" y="16" width="360" height="40" rx="20" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="62" y="43" font-size="18" fill="#1f2a37">🔎 el teu tema</text>
  <text x="48" y="100" font-size="18" font-weight="${web?800:600}" fill="${web?'#0f9d9a':'#1f2a37'}">Tot</text><text x="116" y="100" font-size="18" font-weight="${web?600:800}" fill="${web?'#1f2a37':'#0f9d9a'}">Imatges</text><text x="220" y="100" font-size="18" fill="#1f2a37">Vídeos</text><text x="312" y="100" font-size="18" fill="#1f2a37">Notícies</text>
  <rect x="520" y="78" width="96" height="34" rx="17" fill="#ffe0b2" stroke="#e8830c" stroke-width="3"/><text x="568" y="101" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2a37">Eines ▾</text>
  <line x1="30" y1="118" x2="610" y2="118" stroke="#dbe1e8" stroke-width="2"/>
  ${chips}
  <rect x="40" y="206" width="320" height="12" rx="6" fill="#dfe4ea"/><rect x="40" y="228" width="440" height="9" rx="4.5" fill="#e9edf2"/>
  ${badge(612,78,1)}${web?badge(244,150,2)+badge(466,150,3):badge(126,150,2)+badge(226,150,3)+badge(328,150,4)+badge(490,150,5)}</svg>`;
  const leg=web?['<b>Eines</b>: el botó que mostra els filtres.','<b>Qualsevol moment</b>: filtra per data (última setmana, últim any…).','<b>Qualsevol llengua</b>: filtra per idioma.']:['<b>Eines</b>: el botó que mostra els filtres.','<b>Mida</b>: petita, mitjana o gran.','<b>Color</b>: en color, blanc i negre o transparent.','<b>Tipus</b>: fotografia, dibuix, GIF…','<b>Drets d’ús</b>: llicències que permeten reutilitzar la imatge.'];
  return svg+legend(leg)+'<p class="nota" style="margin:8px 0 0">Els noms i la posició poden variar una mica segons el cercador.</p>';
}
function figPix(){
  const N=10,c=(N-1)/2;let g='';
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){const d=Math.hypot(x-c,y-c);const on=d<4.2;g+=`<rect x="${x*18}" y="${y*18}" width="18" height="18" fill="${on?'#0f9d9a':'#fff'}" stroke="#dbe1e8" stroke-width="1"/>`}
  return `<svg viewBox="0 0 640 220" role="img" aria-label="Comparació entre una imatge de mapa de bits ampliada i una de vectorial"><rect x="2" y="2" width="636" height="216" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <g transform="translate(60,20)">${g}</g><text x="150" y="212" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2a37">Mapa de bits ampliat</text>
  <circle cx="500" cy="110" r="76" fill="#0f9d9a"/><text x="500" y="212" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2a37">Vectorial ampliat</text>
  ${badge(60,20,1)}${badge(424,34,2)}</svg>`+legend(['<b>Mapa de bits</b> (JPG, PNG, GIF): format fet de <b>píxels</b>. En ampliar-lo, es veuen els quadradets: <b>pixelació</b>.','<b>Vectorial</b> (SVG): format fet de línies i formes. Es pot ampliar tant com vulguis i <b>no es pixela</b>.']);
}
function figBookmarks(){
  const btn=(cx,g)=>`<circle cx="${cx}" cy="80" r="18" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="${cx}" y="88" text-anchor="middle" font-size="24" fill="#1f2a37">${g}</text>`;
  const chip=(x,w,t)=>`<rect x="${x}" y="116" width="${w}" height="28" rx="14" fill="#fff" stroke="#dbe1e8" stroke-width="2"/><text x="${x+w/2}" y="136" text-anchor="middle" font-size="15" fill="#1f2a37">${t}</text>`;
  const svg=`<svg viewBox="0 0 640 270" role="img" aria-label="Navegador amb l’estrella dels preferits i la barra d’adreces d’interès"><rect x="2" y="2" width="636" height="266" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <path d="M2 16a14 14 0 0 1 14-14h608a14 14 0 0 1 14 14v34H2z" fill="#e9edf2"/><rect x="22" y="14" width="176" height="36" rx="9" fill="#fff"/><text x="40" y="38" font-size="16" fill="#1f2a37">Pestanya</text>
  <rect x="2" y="50" width="636" height="60" fill="#fff"/>${btn(44,'←')}${btn(90,'→')}${btn(136,'↻')}
  <rect x="172" y="60" width="440" height="40" rx="20" fill="#f1f4f8" stroke="#dbe1e8" stroke-width="2"/><text x="194" y="87" font-size="18" fill="#5b6776">🔒 www.exemple.cat</text>
  <circle cx="588" cy="80" r="17" fill="#ffe0b2" stroke="#e8830c" stroke-width="3"/><text x="588" y="90" text-anchor="middle" font-size="26" fill="#1f2a37">☆</text>
  <rect x="2" y="110" width="636" height="40" fill="#f6f8fb"/><line x1="2" y1="150" x2="638" y2="150" stroke="#dbe1e8" stroke-width="2"/>
  ${chip(18,140,'📁 Investigació')}${chip(168,170,'⭐ Museu de la Lluna')}${chip(348,130,'⭐ Diccionari')}
  <rect x="40" y="176" width="300" height="14" rx="7" fill="#dfe4ea"/><rect x="40" y="202" width="460" height="10" rx="5" fill="#e9edf2"/><rect x="40" y="222" width="420" height="10" rx="5" fill="#e9edf2"/><rect x="40" y="242" width="380" height="10" rx="5" fill="#e9edf2"/>
  ${badge(612,58,1)}${badge(500,130,2)}</svg>`;
  return svg+legend(['<b>Estrella ☆</b>: és al <b>final de la barra de cerca del navegador</b>. Hi cliquem per guardar la pàgina a la barra d’adreces d’interès (preferits).','<b>Barra d’adreces d’interès</b>: és sota la barra de cerca. Hi surten les pàgines i carpetes guardades.'])+'<p class="nota" style="margin:8px 0 0">⚠️ Es guarden al <b>navegador</b> (Chrome, Firefox, Edge…), <b>no al cercador</b> (Google, Bing…). Si canvies de navegador, els preferits d’un navegador no apareixen en un altre.</p>';
}

function figMenu(adv){
  const tab=(x,w,t,sel)=>`<text x="${x+w/2}" y="199" text-anchor="middle" font-size="19" font-weight="${sel?800:600}" fill="${sel?'#0f9d9a':'#1f2a37'}">${t}</text>${sel?`<rect x="${x}" y="208" width="${w}" height="4" rx="2" fill="#0f9d9a"/>`:''}`;
  const svg=`<svg viewBox="0 0 640 290" role="img" aria-label="Pàgina d’un cercador amb el menú de cerques"><rect x="2" y="2" width="636" height="286" rx="14" fill="#fff" stroke="#b8c2cf" stroke-width="2"/>
  <path d="M2 16a14 14 0 0 1 14-14h608a14 14 0 0 1 14 14v34H2z" fill="#e9edf2"/><rect x="22" y="14" width="176" height="36" rx="9" fill="#fff"/><text x="40" y="38" font-size="16" fill="#1f2a37">Pestanya</text>
  <rect x="2" y="50" width="636" height="50" fill="#fff"/><rect x="20" y="58" width="600" height="34" rx="17" fill="#f1f4f8" stroke="#dbe1e8" stroke-width="2"/><text x="40" y="82" font-size="17" fill="#5b6776">🔒 www.cercador-exemple.cat</text>
  <line x1="2" y1="100" x2="638" y2="100" stroke="#dbe1e8" stroke-width="2"/>
  <rect x="40" y="116" width="420" height="42" rx="21" fill="#fff" stroke="#b8c2cf" stroke-width="2"/><text x="62" y="144" font-size="19" fill="#1f2a37">🔎 llops</text>
  <line x1="30" y1="212" x2="610" y2="212" stroke="#dbe1e8" stroke-width="2"/>
  ${tab(40,70,'Tot',true)}${tab(130,110,'Imatges')}${tab(260,100,'Vídeos')}${tab(380,110,'Notícies')}
  <rect x="40" y="232" width="320" height="12" rx="6" fill="#dfe4ea"/><rect x="40" y="254" width="460" height="9" rx="4.5" fill="#e9edf2"/><rect x="40" y="272" width="400" height="9" rx="4.5" fill="#e9edf2"/>
  ${badge(100,178,1)}${badge(232,178,2)}${badge(352,178,3)}${badge(480,178,4)}</svg>`;
  return svg+legend(adv?['<b>Tot</b>: pàgines web de qualsevol tipus.','<b>Imatges</b>: fotos, icones, logos i dibuixos.','<b>Vídeos</b>: contingut audiovisual.','<b>Notícies</b>: articles informatius sobre fets reals.']:['<b>Tot</b>: pàgines web de tota mena.','<b>Imatges</b>: fotos i dibuixos.','<b>Vídeos</b>: imatges en moviment.','<b>Notícies</b>: el que ha passat fa poc.'])+'<p class="nota" style="margin:8px 0 0">Aquest menú és de la pàgina del <b>cercador</b> (Google, Bing…), no del navegador.</p>';
}
function fmtBar(){
  if(!isIni()||!['inici','menu','sessio','estat'].includes(S.screen))return '';
  return `<div class="fmtbar noprint"><label>Aa <select data-fmt="font" aria-label="Tipus de lletra">${Object.keys(FONTS).map(k=>`<option value="${k}" ${S.fmt.font===k?'selected':''}>${FONT_LAB[k]}</option>`).join('')}</select></label><label><input type="checkbox" data-fmt="maj" ${S.fmt.maj?'checked':''}> Tot en majúscules</label></div>`;
}
function applyFmt(){
  const on=isIni()&&['inici','menu','sessio','estat'].includes(S.screen);
  $app.style.fontFamily=on?(FONTS[S.fmt.font]||''):'';
  $app.classList.toggle('maj',on&&!!S.fmt.maj);
}
function vInici(){
  const c=CICLES[S.cicle],ini=isIni(),alumn=!ini||S.us==='alumnat';
  return `<div class="top"><div>${MASCOT}</div><div class="grow"><h1>${COMP[S.cd].titol}</h1><span class="chip">${COMP[S.cd].chip}</span></div></div>
  <div class="card">
    <label>Tria el nivell</label>
    <div class="cicles">${Object.entries(CICLES).map(([k,v])=>`<button class="cc ${S.cicle===k?'sel':''}" data-act="cicle" data-v="${k}"><b>${v.nom}</b>${v.cursos}<small>${k==='inicial'?'Guiat pel professorat':v.parella?'En parella':'Individual'} · ${SESSIONS[k].length} sessions</small></button>`).join('')}</div>
    ${ini?`<label for="us">Qui farà servir l’app?</label><select id="us" data-k="us" data-rr="1"><option value="docent" ${S.us==='docent'?'selected':''}>Ús docent: el professorat guia la sessió a la pissarra digital</option><option value="alumnat" ${S.us==='alumnat'?'selected':''}>Ús alumnat: l’alumnat fa servir l’app</option></select>`:''}
    ${alumn?`<label>${c.parella?'Nom i cognoms (alumne/a 1)':'Nom i cognoms'}</label>
    <input type="text" data-k="n1" value="${esc(S.n1)}" autocomplete="off">
    ${c.parella?`<label>Nom i cognoms (alumne/a 2)</label><input type="text" data-k="n2" value="${esc(S.n2)}" autocomplete="off">`:''}`:''}
    ${S.err?`<div class="fb ko">${esc(S.err)}</div>`:''}
    <p style="margin-top:18px"><button class="btn big" data-act="start">Comencem →</button> <button class="btn sec" data-act="go" data-v="nivell">← Enrere</button></p>
  </div>`;
}
const NIVELLS={
  primaria:{nom:'Primària',cursos:'1r a 6è',actiu:true,cds:[
    {id:'CD1',nom:'Cerca i tractament de la informació',sub:'Navegadors i cerca per internet'},
    {id:'CD2',nom:'Creació de continguts digitals',sub:'Documents, presentacions i multimèdia'},
    {id:'CD3',nom:'Comunicació i col·laboració'},
    {id:'CD4',nom:'Seguretat i benestar digital'}]},
  secundaria:{nom:'Secundària',cursos:'1r a 4t d’ESO',actiu:false,cds:[
    {id:'CD1',nom:'Cerca i tractament de la informació'},
    {id:'CD2',nom:'Creació de continguts digitals'},
    {id:'CD3',nom:'Comunicació i col·laboració'},
    {id:'CD4',nom:'Seguretat i benestar digital'}]}
};
const CONTACTE={endpoint:'',email:'ppacho@xtec.cat'}; /* Posa aquí l'adreça del servei de formulari (p. ex. Formspree) o un correu */
const TIPUS_MSG=['Suggeriment','Error o dubte','Comentari general'];
function vPortada(){
  const c=S.c;
  return `<div class="top"><div>${MASCOT}</div><div class="grow"><h1>Competència digital</h1><span class="chip">Eina per treballar-la de forma transversal</span></div></div>
  <div class="card">
    <p>Aquesta eina serveix per <b>treballar la competència digital de forma transversal</b> a l’aula: l’alumnat aprèn pas a pas mentre fa una activitat real, i el professorat veu en quin punt està cada alumne o parella.</p>
    <p>Tria l’etapa per començar:</p>
    <div class="nivells">
      <button class="nv" data-act="nivell" data-v="primaria"><b>📚 Primària</b><small>1r a 6è</small></button>
      <button class="nv" disabled><b>🎓 Secundària</b><small>ESO</small><span class="soon">Properament</span></button>
    </div>
  </div>
  <div class="card contacte"><h2>Contacte</h2>
    <div class="nota">🚧 <b>Aquesta eina està en desenvolupament.</b> Valorem molt qualsevol retroacció: suggeriments, errors, dubtes o idees de millora. Ens ajuda a fer-la <b>útil i funcional per als centres educatius</b>. Gràcies per col·laborar-hi!</div>
    <p><small style="color:var(--mut)">No hi escriguis dades personals de l’alumnat.</small></p>
    <label for="c-nom">El teu nom (opcional)</label>
    <input id="c-nom" type="text" data-k="c.nom" value="${esc(c.nom)}" autocomplete="off">
    <label for="c-email">Correu electrònic (opcional, si vols que et responguem)</label>
    <input id="c-email" type="text" data-k="c.email" value="${esc(c.email)}" autocomplete="off" inputmode="email">
    <label for="c-tipus">Tipus de missatge</label>
    <select id="c-tipus" data-k="c.tipus">${TIPUS_MSG.map(t=>`<option ${c.tipus===t?'selected':''}>${t}</option>`).join('')}</select>
    <label for="c-msg">Missatge</label>
    <textarea id="c-msg" data-k="c.msg" rows="5">${esc(c.msg)}</textarea>
    ${S.cstat?`<div class="fb ${S.cstat.ok?'ok':'ko'}" style="margin-top:12px">${esc(S.cstat.msg)}</div>`:''}
    <p style="margin-top:14px"><button class="btn" data-act="enviaContacte">Envia el missatge</button></p>
  </div>`;
}
function vNivell(){
  const n=NIVELLS[S.nivell];
  return `<div class="top"><div>${MASCOT}</div><div class="grow"><h1>${n.nom}</h1><span class="chip">${n.cursos} · Tria la competència</span></div></div>
  <div class="cdgrid">${n.cds.map(cd=>(n.actiu&&SESSIONS_BY[cd.id])?`<button class="nv" data-act="cd" data-v="${cd.id}"><b>${cd.id}</b>${esc(cd.nom)}${cd.sub?`<small>${esc(cd.sub)}</small>`:''}</button>`:`<button class="nv" disabled><b>${cd.id}</b>${esc(cd.nom)}<span class="soon">Properament</span></button>`).join('')}</div>
  <p><button class="btn sec" data-act="go" data-v="portada">← Torna a l’inici</button></p>`;
}
function header(extra){
  const c=CICLES[S.cicle];
  return `<div class="top noprint"><div>${MASCOT}</div><div class="grow"><b>${esc(quiTxt())}</b><br><span class="chip">${c.nom}</span>${S.tema.trim()?` <span class="chip">Tema: ${esc(S.tema)}</span>`:''}</div>${extra||''}</div>`;
}
function vMenu(){
  const list=SESSIONS[S.cicle];
  return header('')+
  `<h2>Triem sessió</h2><p>Comença per l’ordre (1, 2, 3…). Si ja has fet alguna sessió, el professorat et dirà per quina vas.</p>`+
  list.map(s=>{
    const k=skey(S.cicle,s.id),st=sessionStatus(k);
    return `<div class="card hl"><div class="row"><div class="grow" style="flex:1"><h3>${s.id}. ${esc(s.titol)} ${st==='fet'?'✅':st==='proces'?'🔄':''}</h3><small style="color:var(--mut)">${esc(s.sabers.map(x=>x.text).join(' · '))}</small></div>
    <button class="btn" data-act="open" data-i="${s.id}">${st&&st!=='no'?'Continuar':'Començar'}</button></div></div>`;}).join('')+
  `<p class="noprint"><button class="btn sec" data-act="go" data-v="inici">← Canvia de nivell</button></p>`;
}
function stepper(){
  return `<div class="steps noprint">${STEPS.map((t,i)=>`<button class="stp ${i===S.step?'on':i<S.step?'done':''}" data-act="step" data-v="${i}">${i+1}. ${t}</button>`).join('')}</div>`;
}
function vSessio(){
  const k=S.sk,s=sessOf(k),cs=CONTENT[k];
  let h=header('')+`<h2>${s.id}. ${esc(s.titol)}</h2>`+stepper();
  const self=S.self[k]||(S.self[k]={pre:[],post:[]});
  const emoOne=(g,i,labs)=>{const L=labs||['Ho sé fer','Una mica','Encara no'];return `<div class="emo" style="margin-top:6px">${[[3,'g',L[0]],[2,'y',L[1]],[1,'r',L[2]]].map(([v,cl,t])=>`<button class="sem ${cl} ${self[g][i]===v?'on':''}" data-act="self" data-g="${g}" data-i="${i}" data-v="${v}"><i></i>${t}</button>`).join('')}</div>`};
  const emoCard=(g,i)=>`<div class="card"><div>${esc(cs.puc[i])}</div>${emoOne(g,i)}</div>`;
  const emo=(g)=>cs.puc.map((p,i)=>emoCard(g,i)).join('');
  const ini=isIni();
  const blk=true;
  const figH=cs.fig?`<div class="fig">${cs.fig()}</div>`:'';
  const figCtx=cs.fig?`<div class="fig">${cs.fig().replace(/<ol class="leg">[\s\S]*?<\/ol>/g,'').replace(/<circle[^>]*r="12" fill="#e8830c"[^>]*\/><text[^>]*>\d<\/text>/g,'')}</div>`:''; /* a «Què sabem?» la imatge només dona context: sense text explicatiu (la teoria és a «Aprenem») */
  if(S.step===0){
    if(ini){
      h+=profNota('Formuleu les preguntes en veu alta i deixeu que l’alumnat respongui lliurement, sense corregir: l’objectiu és detectar els coneixements previs del grup. En acabar, marqueu el semàfor segons la impressió general. Aquest punt de partida quedarà reflectit a l’estat final.')+`<div class="card hl"><h3>🗣️ ${docentMode()?'Preguntes per al grup':'Pensem una mica'}</h3><ol class="qs">${cs.sabem.map(q=>`<li>${fx(q)} ${spBtn(q)}</li>`).join('')}</ol></div>${figCtx}
      <h3>Punt de partida ${docentMode()?'del grup':''}</h3><p>${docentMode()?'Després de les preguntes, marqueu com es veu el grup en cada cosa:':'Marca com et veus ara en cada cosa:'}</p>`+emo('pre');
      h+=`<p><button class="btn big" data-act="next">Aprenem →</button></p>`;
    }else{
      h+=bubble('Avui aprendràs això. Abans de començar, digues com et veus: 🟢 ho sé fer · 🟡 una mica · 🔴 encara no.')+emo('pre');
      h+=`<p><button class="btn big" data-act="next">Anem-hi →</button></p>`;
    }
  }else if(S.step===1){
    h+=(ini?profNota('Projecteu cada bloc i expliqueu-lo amb les vostres paraules; el botó 🔊 el llegeix en veu alta si us va bé. Abans de passar al bloc següent, demaneu exemples a l’alumnat perquè connectin el contingut amb la seva experiència.'):bubble('Llegeix (o escolta 🔊) i després practicarem.'))+figH+cs.lessons.map(l=>`<div class="card hl"><h3>${l.t} ${spBtn(l.t+'. '+l.h)}</h3><div>${fx(l.h)}</div>${l.links?logoLinks(l.links):''}${l.web?webLinks(l.web):''}${l.fig?`<div class="fig">${l.fig()}</div>`:''}</div>`).join('');
    h+=`<p><button class="btn sec" data-act="prev">← Enrere</button> <button class="btn big" data-act="next">Repassem →</button></p>`;
  }else if(S.step===2){
    h+=vPractica(k,cs);
  }else if(S.step===3){
    const r=S.real[k]||{};
    const fieldH=(f,nolabel)=>(nolabel?'':`<label>${f.label}</label>`)+(f.type==='text'?`<input type="text" data-k="real.${k}.${f.k}" value="${esc(r[f.k])}" autocomplete="off" aria-label="${esc(f.label)}">`:f.type==='check'?`<div class="chk">${f.opts.map(o=>`<label><input type="checkbox" data-chk="real.${k}.${f.k}" value="${esc(o)}" ${(r[f.k]||'').split(', ').includes(o)?'checked':''}> ${f.logos&&f.logos[o]?logoHTML(f.logos[o],true):''}${esc(o)}</label>`).join('')}</div>`:`<select data-k="real.${k}.${f.k}" aria-label="${esc(f.label)}"><option value="">— tria —</option>${f.opts.map(o=>`<option ${r[f.k]===o?'selected':''}>${o}</option>`).join('')}</select>`);
    const fbyk=Object.fromEntries(cs.real.fields.map(f=>[f.k,f]));
    if(blk){
      const blocks=cs.real.blocks||[{h:cs.real.intro,links:cs.real.links,fields:cs.real.fields.map(f=>f.k),search:!cs.real.links}];
      h+=profNota('Convideu diferents alumnes a fer cada acció a la pissarra digital mentre la resta del grup els orienta. Anoteu les respostes entre tots just sota de cada pregunta.')+`<div class="card hl"><h3>${COMP[S.cd].pIcon||'🔎'} Practiquem</h3><label for="tema">${COMP[S.cd].tema||'Tema de la investigació'}</label><input id="tema" type="text" data-k="tema" value="${esc(S.tema)}" placeholder="${COMP[S.cd].exemple||'Per exemple: els llops'}" autocomplete="off">`
      +blocks.map(bl=>`<div style="margin-top:16px">${bl.h?`<p>${fx(bl.h)}</p>`:''}${bl.links?logoLinks(bl.links):''}${bl.web?webLinks(bl.web):''}${bl.search?`<p><a class="btn big" href="${SEARCH_URL}" target="_blank" rel="noopener" data-act="opened">🔎 Obre el cercador (pestanya nova)</a></p>`:''}${(bl.rows||[]).map(r=>`<div class="cols">${r.map(x=>`<div>${fieldH(fbyk[x],bl.nolabel)}</div>`).join('')}</div>`).join('')}${bl.fields.map(x=>fieldH(fbyk[x],bl.nolabel)).join('')}</div>`).join('')
      +`</div>`;
    }else{
      h+=bubble('Ara toca cercar de debò!')+`<div class="card hl"><h3>🔎 Practiquem</h3><p>${cs.real.intro}</p>
      <p><a class="btn big" href="${SEARCH_URL}" target="_blank" rel="noopener" data-act="opened">🔎 Obre el cercador (pestanya nova)</a></p></div>`;
    }
    if(S.back)h+=`<div class="back">${blk?'👋 Ja sou aquí! Continueu amb les respostes.':'👋 Ja has tornat! Omple el quadre de sota amb el que has fet.'}</div>`;
    if(!blk)h+=`<div class="card" id="realform"><h3>📝 El que he fet</h3>${cs.real.fields.map(f=>fieldH(f)).join('')}</div>`;
    h+=`<p><button class="btn sec" data-act="prev">← Enrere</button> <button class="btn big" data-act="next">Següent →</button></p>`;
  }else{
    if(ini){
      h+=profNota('Dirigiu una autoavaluació conjunta: llegiu cada definició, comproveu que el grup la pot explicar amb altres paraules i pregunteu com es veu ara. Marqueu el semàfor segons el consens. Compareu-ho amb el punt de partida de la primera pestanya.')+`<h3>${docentMode()?'Què hem après?':'Què he après?'}</h3>`;
      h+=figH;
      const used=(cs.defs||[]).map(d=>d.p);
      h+=(cs.defs||[]).map(d=>`<div class="card hl"><h3>${d.t} ${spBtn(d.t+'. '+d.h)}</h3><div>${fx(d.h)}</div>${emoOne('post',d.p,['Ho sé explicar','Una mica','Encara no'])}</div>`).join('');
      h+=cs.puc.map((p,i)=>used.includes(i)?'':emoCard('post',i)).join('');
    }else{
      h+=bubble('Molt bé! Mira com et veus ara i després ensenya l’estat al professorat.')+emo('post');
    }
    h+=`<p><button class="btn big" data-act="go" data-v="estat">📋 Estat</button> <button class="btn sec" data-act="go" data-v="menu">← Sessions</button></p>`;
  }
  return h;
}
function vPractica(k,cs){
  const items=cs.items,n=items.length;
  if(S.item>=n)return isIni()?bubble('Hem acabat de repassar! 🎉')+`<div class="card"><p>Ara, a la pissarra digital, convideu diferents alumnes a fer proves pràctiques.</p><button class="btn sec" data-act="restart">Repassar de nou</button> <button class="btn big" data-act="next">Practiquem →</button></div>`:bubble('Has acabat la pràctica! 🎉')+`<div class="card"><p>Ara passarem a cercar de debò.</p><button class="btn sec" data-act="restart">Repetir la pràctica</button> <button class="btn big" data-act="next">Practiquem →</button></div>`;
  const it=items[S.item],r=(S.res[k]=S.res[k]||{}),ir=(r[it.id]=r[it.id]||{first:null,hint:false,done:false});
  let h=(isIni()&&S.item===0?profNota('Projecteu cada pregunta i deixeu que el grup en debati la resposta abans de seleccionar-la. Si no és correcta, aprofiteu l’error per tornar a explicar el concepte; també hi ha disponible la pista. Si us sembla, podeu demanar a diferents alumnes que vinguin a la pissarra a marcar la resposta.'):'')+`<div class="prog"><i style="width:${S.item/n*100}%"></i></div><p style="margin:6px 0"><small>Pregunta ${S.item+1} de ${n}</small></p>`;
  const need=it.type==='words'?it.correct.length:0;
  const pr=it.type==='words'?`Vols respondre aquesta pregunta: <i>«${esc(it.words.join(' ')+it.end)}»</i><br>Toca les <b>${need} paraules clau</b> que escriuries al cercador.`:it.prompt;
  let body=`<div style="margin-bottom:6px">${fx(pr)} ${spBtn(pr)}</div>`;
  if(it.html&&it.type==='choice')body+=it.html;
  if(it.type==='words'){
    body=`<div class="toy"><div class="bar"><span class="dots"><span></span><span></span><span></span></span><span class="url">🔎 Paraules clau per cercar…</span></div><div class="body">${body}<div style="font-size:23px;margin-top:8px">${it.words.map((w,i)=>{const sel=S.tok.includes(i);const good=it.correct.includes(w.toLowerCase());return `<button class="tok ${ir.done?(good?'ok':''):sel?'sel':''}" data-act="tok" data-i="${i}" ${ir.done?'disabled':''}>${esc(w)}</button>`}).join('')}${esc(it.end)}</div></div></div>`;
    if(!ir.done)body+=`<p><button class="btn" data-act="check" ${S.tok.length===need?'':'disabled'}>Comprova</button> <span style="color:var(--mut)">Has triat ${S.tok.length} de ${need}</span></p>`;
  }else if(it.type==='clic'){
    body+=`<div class="${ir.done?'locked':''}">${it.html}</div>`+(ir.done?`<style>.toy [data-id="${it.target}"]{outline:3px solid var(--ok);border-radius:8px}.toy [data-id="${it.target}"] rect{stroke:var(--ok)!important;stroke-width:5!important}</style>`:'');
  }else if(it.type==='ordre'){
    body+=it.steps.map((t,i)=>{const p=S.ord.indexOf(i);return `<button class="opt ord ${p>=0?'sel':''}" data-act="ord" data-i="${i}" ${ir.done?'disabled':''}>${p>=0?`<span class="n">${p+1}</span>`:''}${fx(esc(t))}</button>`}).join('');
    if(!ir.done)body+=`<p><button class="btn" data-act="check" ${S.ord.length===it.steps.length?'':'disabled'}>Comprova</button> <button class="btn sec" data-act="ordreset">Torna a començar</button></p>`;
  }else{
    body+=it.opts.map((o,i)=>{const bad=(S.fb&&S.fb.bad||[]).includes(i);const good=ir.done&&i===it.ok;return `<button class="opt ${good?'ok':bad?'ko':''}" data-act="opt" data-i="${i}" ${ir.done?'disabled':''}>${fx(esc(o))}</button>`}).join('');
  }
  if(S.hint)body+=`<div class="fb hint">💡 ${fx(esc(it.hint))}</div>`;
  if(S.fb&&S.fb.msg)body+=`<div class="fb ${S.fb.ok?'ok':'ko'}">${S.fb.ok?'✅ ':'❌ '}${S.fb.msg}</div>`;
  if(!ir.done)body+=`<p><button class="btn sec" data-act="hint">💡 Pista</button></p>`;
  else body+=`<p><button class="btn big" data-act="nextitem">${S.item===n-1?'Acabar':'Següent'} →</button></p>`;
  return h+`<div class="card hl">${body}</div><p><button class="btn sec" data-act="prev">← Enrere</button></p>`;
}
function realScore(k,cs){const r=S.real[k]||{};const fs=(cs.real.fields||[]).filter(f=>f.ok!==undefined||f.okFn);if(!fs.length)return null;return{c:fs.filter(f=>f.okFn?!!f.okFn(r[f.k]||'',r):r[f.k]===f.ok).length,n:fs.length}}
function summaryText(k,cs){
  const s=sessOf(k);
  return s.sabers.map(sb=>{const q=saberState(k,cs,sb);const sc=realScore(k,cs);return `${sb.text.split(' (')[0]}: ${ST_LAB[q.st]}${q.n&&q.done?` (${Math.round(q.pct*100)}%${q.hints?', amb pistes':''}${q.st==='dominat'?', pendent de confirmar':''}${sc?`, pràctica ${sc.c}/${sc.n} correctes`:''})`:''}`}).join(' | ');
}
function realAnswers(k,cs){
  const r=S.real[k]||{};
  const order=cs.real.blocks?cs.real.blocks.flatMap(b=>(b.rows||[]).flat().concat(b.fields||[])):(cs.real.fields||[]).map(f=>f.k);
  const fb=Object.fromEntries((cs.real.fields||[]).map(f=>[f.k,f]));
  return order.filter(x=>fb[x]).map(x=>{const f=fb[x],v=(r[x]||'').trim();let mark='';if(v&&(f.okFn||f.ok!==undefined)){mark=(f.okFn?!!f.okFn(v,r):v===f.ok)?' ✅':' ❌'}return{q:f.label,a:v,mark}});
}
function vEstat(){
  const d=new Date().toLocaleDateString('ca-ES');
  const c=CICLES[S.cicle];
  const keys=SESSIONS[S.cicle].map(s=>skey(S.cicle,s.id)).filter(k=>CONTENT[k]&&((sessionStatus(k)&&sessionStatus(k)!=='no')||Object.values(S.real[k]||{}).some(v=>String(v).trim())));
  let h=header(`<span class="noprint"></span>`)+`<h2>📋 Estat</h2><div class="card hl"><table>
    <tr><th>${docentMode()?'Sessió':'Alumnat'}</th><td>${esc(quiTxt())}</td></tr>
    <tr><th>Nivell</th><td>${c.nom} (${c.cursos})</td></tr>${S.tema.trim()?`<tr><th>Tema</th><td>${esc(S.tema)}</td></tr>`:''}<tr><th>Data</th><td>${d}</td></tr></table></div>`;
  if(!keys.length)h+=`<div class="card">Encara no has fet cap activitat.</div>`;
  let txt='';
  keys.forEach(k=>{
    const cs=CONTENT[k],s=sessOf(k),self=S.self[k]||{pre:[],post:[]};
    h+=`<div class="card"><h3>Sessió ${s.id}. ${esc(s.titol)}</h3><table><tr><th>Saber</th><th>Estat</th><th>Detall</th></tr>`+
    s.sabers.map(sb=>{const q=saberState(k,cs,sb);
      const det=q.done?`${q.c} de ${q.n} bé a la primera (${Math.round(q.pct*100)}%)<br>${q.hints?'Ha fet servir pistes':'Sense pistes'} · ${q.realOk?'Fitxa de cerca feta':'Falta la cerca real'}${(()=>{const sc=realScore(k,cs);return sc?` · Pràctica: ${sc.c} de ${sc.n} respostes correctes`:''})()}${q.st==='dominat'?'<br>☐ Confirmat pel docent':''}`:'';
      return `<tr><td>${esc(sb.text)} <small>(${sb.ca})</small></td><td class="st ${q.st}">${ST_LAB[q.st]}</td><td><small>${det}</small></td></tr>`}).join('')+`</table>`;
    const pre=self.pre,post=self.post,E=['','🔴','🟡','🟢'];
    if(pre.length||post.length)h+=`<p><small>Com es veu: abans ${pre.map(v=>E[v]||'·').join(' ')} → després ${post.length?post.map(v=>E[v]||'·').join(' '):'(encara no)'}</small></p>`;
    const ra=realAnswers(k,cs);
    h+=`<h4 style="margin:14px 0 6px">📝 Respostes de la pràctica</h4>`+(ra.some(x=>x.a)?`<table class="resp"><tr><th>Pregunta</th><th>Resposta</th></tr>${ra.map(x=>`<tr><td><small>${fx(x.q)}</small></td><td>${x.a?esc(x.a)+x.mark:'<small style="color:var(--mut)">— sense resposta —</small>'}</td></tr>`).join('')}</table>`:`<p><small>Encara no hi ha respostes a la pràctica.</small></p>`);
    h+=`</div>`;
    txt+=`${quiTxt()} · ${c.nom} · Sessió ${s.id} · ${d}${S.tema.trim()?' · Tema: '+S.tema:''} · ${summaryText(k,cs)}\n`+(ra.some(x=>x.a)?'   Respostes de la pràctica:\n'+ra.filter(x=>x.a).map(x=>`   - ${x.q.replace(/<[^>]+>/g,'')}: ${x.a}`).join('\n')+'\n':'');
  });
  window.__txt=txt;
  h+=`<div class="card noprint" style="font-size:16px"><b>Com es calcula l’estat de cada saber</b>
  <p style="margin:6px 0">Es compten només les preguntes encertades <b>a la primera</b>.</p>
  <table>
   <tr><td class="st no">○ No fet</td><td>Encara no ha fet cap pregunta d’aquest saber.</td></tr>
   <tr><td class="st proces">🔄 En procés</td><td>Ha fet preguntes, però no ha encertat a la primera 7 de cada 10, o encara no les ha acabades totes.</td></tr>
   <tr><td class="st assolit">✔ Assolit</td><td>Ha acabat les preguntes i n’ha encertat a la primera <b>7 de cada 10 o més</b>. Pot haver fet servir pistes (és a dir, ho fa amb ajuda).</td></tr>
   <tr><td class="st dominat">⭐ Dominat</td><td>Ha encertat a la primera <b>9 de cada 10 o més</b>, <b>sense cap pista</b>, i ha fet la cerca real (fitxa). L’app només ho proposa: el docent ho confirma marcant la casella ☐.</td></tr>
  </table></div>
  <p class="noprint"><button class="btn" data-act="copy">📎 Copia el resum</button> <button class="btn sec" data-act="go" data-v="menu">← Torna a les sessions</button></p><div id="copied" class="noprint"></div>`;
  return h;
}
/* Barra de navegació: camí clicable (Inici › Primària › CD › Cicle › Sessió) i dos botons fixos (Sessions i Estat) */
function navBar(){
  const sc=S.screen;
  if(sc==='portada')return '';
  const n=NIVELLS[S.nivell],c=CICLES[S.cicle];
  const it=[['portada','🏠 Inici','Torna a la portada'],['nivell',n.nom,'Tria la competència']];
  if(['inici','menu','sessio','estat'].includes(sc))it.push(['inici',S.cd,COMP[S.cd].titol+': canvia de nivell']);
  if(['menu','sessio','estat'].includes(sc))it.push(['menu',c.nom,'Llista de sessions']);
  if(sc==='sessio')it.push([null,'Sessió '+sessOf(S.sk).id]);
  if(sc==='estat')it.push([null,'Estat']);
  const last=it.length-1;
  const crumbs=it.map(([v,t,tt],i)=>i===last?`<li><span class="cur" aria-current="page">${esc(t)}</span></li>`:`<li><button class="crumb" data-act="go" data-v="${v}" title="${esc(tt||'')}">${esc(t)}</button></li>`).join('');
  const acts=['menu','sessio','estat'].includes(sc)?`<div class="navb"><button class="btn sec ${sc==='menu'?'on':''}" data-act="go" data-v="menu">☰ Sessions</button><button class="btn sec ${sc==='estat'?'on':''}" data-act="go" data-v="estat">📋 Estat</button></div>`:'';
  return `<nav class="nav noprint" aria-label="Camí de navegació"><ol class="crumbs">${crumbs}</ol>${acts}</nav>`;
}
function render(){
  document.body.dataset.c=S.cicle;
  const v={portada:vPortada,nivell:vNivell,inici:vInici,menu:vMenu,sessio:vSessio,estat:vEstat}[S.screen];
  $app.innerHTML=fmtBar()+navBar()+v();
  applyFmt();
  window.scrollTo(0,0);
}

/* ============ EVENTS ============ */
function setPath(p,v){const a=p.split('.');let o=S;for(let i=0;i<a.length-1;i++){o=o[a[i]]=o[a[i]]||{}}o[a[a.length-1]]=v}
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(k)setPath(k,e.target.value)});
document.addEventListener('change',e=>{const d=e.target.dataset||{};
  if(d.k){setPath(d.k,e.target.value);if(d.rr)render()}
  if(d.chk){const v=[...document.querySelectorAll('input[data-chk="'+d.chk+'"]:checked')].map(x=>x.value).join(', ');setPath(d.chk,v)}
  if(d.fmt){if(d.fmt==='maj')S.fmt.maj=e.target.checked;else S.fmt.font=e.target.value;applyFmt()}
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&S.screen==='sessio'&&S.step===3&&S.opened){S.back=true;render();const f=document.getElementById('realform');if(f)f.scrollIntoView({behavior:'smooth'})}});
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;
  const a=b.dataset.act,d=b.dataset;
  const k=S.sk,cs=k&&CONTENT[k];
  if(a==='speak'){speak(d.t);return}
  if(a==='opened'){S.opened=true;return}
  const mark=(it,ir,ok,okMsg,koMsg,bad)=>{if(ir.first===null)ir.first=ok;if(ok){ir.done=true;S.fb={ok:true,msg:fx(okMsg)}}else S.fb={ok:false,msg:koMsg,bad:bad||[]};render()};
  if(a==='cicle'){S.cicle=d.v;render()}
  else if(a==='start'){const need=isIni()?(S.us==='alumnat'&&!S.n1.trim()):!S.n1.trim();if(need){S.err='Escriu el teu nom per començar.';render();return}S.err='';S.screen='menu';render()}
  else if(a==='nivell'){S.nivell=d.v;S.screen='nivell';render()}
  else if(a==='cd'){useCD(d.v);S.screen='inici';render()}
  else if(a==='enviaContacte'){enviaContacte()}
  else if(a==='go'){S.screen=d.v;render()}
  else if(a==='open'){S.sk=skey(S.cicle,d.i);S.screen='sessio';S.step=0;S.item=0;resetQ();S.back=false;S.opened=false;render()}
  else if(a==='step'){S.step=+d.v;resetQ();render()}
  else if(a==='next'){S.step=Math.min(4,S.step+1);resetQ();render()}
  else if(a==='prev'){S.step=Math.max(0,S.step-1);render()}
  else if(a==='restart'){S.item=0;S.res[k]={};resetQ();render()}
  else if(a==='self'){const s=S.self[k]||(S.self[k]={pre:[],post:[]});s[d.g][+d.i]=+d.v;render()}
  else if(a==='tok'){const i=+d.i;S.tok=S.tok.includes(i)?S.tok.filter(x=>x!==i):[...S.tok,i];S.fb=null;render()}
  else if(a==='ord'){const i=+d.i,p=S.ord.indexOf(i);S.ord=p>=0?S.ord.slice(0,p):[...S.ord,i];S.fb=null;render()}
  else if(a==='ordreset'){S.ord=[];S.fb=null;render()}
  else if(a==='hint'){const it=cs.items[S.item];S.res[k][it.id].hint=true;S.hint=true;render()}
  else if(a==='check'){
    const it=cs.items[S.item],ir=S.res[k][it.id];
    let ok;
    if(it.type==='ordre')ok=S.ord.length===it.order.length&&S.ord.every((x,i)=>x===it.order[i]);
    else{const sel=S.tok.map(i=>it.words[i].toLowerCase()).sort(),cor=it.correct.map(x=>x.toLowerCase()).sort();ok=sel.length===cor.length&&sel.every((x,i)=>x===cor[i])}
    mark(it,ir,ok,esc(it.expl),it.type==='ordre'?'Gairebé! Torna-ho a provar.':'Gairebé! Torna-ho a provar (pots fer servir la pista).')}
  else if(a==='opt'){const it=cs.items[S.item],ir=S.res[k][it.id],i=+d.i;mark(it,ir,i===it.ok,esc(it.expl),'Torna-ho a provar.',[...((S.fb&&S.fb.bad)||[]),i])}
  else if(a==='clic'){const it=cs.items[S.item],ir=S.res[k][it.id];if(ir.done)return;mark(it,ir,d.id===it.target,esc(it.expl),'Aquest no és. Torna-ho a provar.')}
  else if(a==='nextitem'){S.item++;resetQ();render()}
  else if(a==='copy'){const t=window.__txt||'';const m=document.getElementById('copied');
    try{navigator.clipboard.writeText(t).then(()=>{m.innerHTML='<div class="fb ok">Resum copiat. Enganxa’l a la plantilla.</div>'},()=>{m.innerHTML='<div class="fb hint">No s’ha pogut copiar. Selecciona el text:<br><textarea rows="4" readonly>'+esc(t)+'</textarea></div>'})}
    catch(err){m.innerHTML='<div class="fb hint"><textarea rows="4" readonly>'+esc(t)+'</textarea></div>'}}
});
async function enviaContacte(){
  const c=S.c;
  if(!c.msg.trim()){S.cstat={ok:false,msg:'Escriu un missatge abans d’enviar-lo.'};render();return}
  const dades={nom:c.nom.trim(),email:c.email.trim(),tipus:c.tipus,missatge:c.msg.trim(),eina:'Competència digital (CDA-app)'};
  if(CONTACTE.endpoint){
    try{
      const r=await fetch(CONTACTE.endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(dades)});
      if(r.ok){S.c={nom:'',email:'',tipus:'Suggeriment',msg:''};S.cstat={ok:true,msg:'Gràcies! Hem rebut el teu missatge.'}}
      else S.cstat={ok:false,msg:'No s’ha pogut enviar el missatge. Torna-ho a provar més tard.'};
    }catch(err){S.cstat={ok:false,msg:'No s’ha pogut enviar el missatge. Comprova la connexió i torna-ho a provar.'}}
    render();return;
  }
  if(CONTACTE.email){
    const cos=dades.missatge+'\n\n— '+(dades.nom||'Sense nom')+(dades.email?' ('+dades.email+')':'');
    const a=document.createElement('a');
    a.href='mailto:'+CONTACTE.email+'?subject='+encodeURIComponent('['+dades.tipus+'] Competència digital')+'&body='+encodeURIComponent(cos);
    document.body.appendChild(a);a.click();a.remove();
    S.cstat={ok:true,msg:'S’ha obert el teu programa de correu amb el missatge preparat. Prem «Envia» allà per acabar. Si no s’ha obert, escriu-nos directament a '+CONTACTE.email+'.'};render();return;
  }
  S.cstat={ok:false,msg:'El formulari encara no està configurat.'};render();
}
render();
