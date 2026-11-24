const CICLES = {
  inicial:{nom:'Cicle inicial',cursos:'1r i 2n',parella:true},
  mitja:{nom:'Cicle mitjà',cursos:'3r i 4t',parella:true},
  superior:{nom:'Cicle superior',cursos:'5è i 6è',parella:false}
};
const sb=(id,ca,text)=>({id,ca,text});
/* Competències: cada fitxer contingut/cdN-sessions.js hi registra les seves sessions (SESSIONS_BY.CDN) i les dades de portada (COMP.CDN). */
const SESSIONS_BY = {};
const COMP = {};
let SESSIONS = {}; /* sessions de la competència activa (S.cd); es canvia amb useCD() */
