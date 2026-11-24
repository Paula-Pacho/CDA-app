# Competència digital a primària · Cerquem bé! (CD1) i Fes-ho en digital! (CD2)

Aplicatiu web per **ensenyar i avaluar la competència digital a l'alumnat de primària**, de 1r a 6è. Ara inclou dues competències:

| Competència | Títol a l'app | Sessions (inicial / mitjà / superior) |
|---|---|---|
| **CD1** · Navegadors i cerca per internet (criteris 1.1 a 1.4) | Cerquem bé! | 4 / 5 / 7 |
| **CD2** · Creació de continguts | Fes-ho en digital! | 5 / 6 / 7 |

Està basat en l'*Eina de seqüenciació CDA 2026* i és part del projecte **Mentories 4.0**.

> 🚧 **Properament:** CD3 i CD4 de primària i les versions per a **secundària**.

Adreça: https://paula-pacho.github.io/CDA-app/

---

## De què va

L'alumnat treballa a l'aula amb un ordinador i, mentre fa una tasca real sobre un tema que ha triat, l'app l'acompanya pas a pas: explica què ha de fer, ho practica amb activitats curtes i, al final, es fa una autoavaluació. Amb aquesta informació, el professorat pot valorar el nivell de cada alumne o parella.

### Nivells

| Nivell | Cursos | Treball | Durada aprox. per activitat |
|---|---|---|---|
| Cicle inicial | 1r i 2n | Sessió guiada pel professorat (a la pissarra digital) | 3-5 min |
| Cicle mitjà | 3r i 4t | En parella | 6-8 min |
| Cicle superior | 5è i 6è | Individual | 10-12 min |

Els dos cursos de cada cicle fan exactament el mateix contingut. A mesura que puja el cicle hi ha més contingut, més temps i més dificultat de comprensió lectora.

### Què es treballa

**CD1 · Cerquem bé!** Obrir i conèixer un navegador, la barra d'adreces i el cercador, estratègies de cerca (paraules clau), opcions d'accessibilitat (com el zoom), fonts d'informació i fiabilitat, adreces d'interès i, al cicle superior, llicències i formats d'imatge.

**CD2 · Fes-ho en digital!** Escriure i presentar, el teclat en català (accents, apòstrof, dieresi, ç, majúscules), donar format, taules, imatges i vídeos, desar i ordenar fitxers, presentacions, editar fotos, vídeos i sons, escollir el format i citar l'autoria. La teoria remarca la diferència entre **programari lliure i de pagament** (LibreOffice, Microsoft Office, Documents de Google…) i entre treballar en local o al núvol. El cicle inicial **no treballa amb tauleta**: les produccions són manuals (paper, cartolina) i es comenten a la pissarra digital.

## Com funciona

1. **Portada i selecció.** A la portada es tria l'etapa (Primària; Secundària, properament) i la competència. Després, l'alumnat escriu el nom i cognoms, el tema del treball i tria el nivell. El tema és lliure o el pot indicar el professorat; l'app no el supervisa.
2. **Triar sessió.** Les sessions són en una seqüència fixa, però es pot obrir qualsevol. El professorat indica a quina s'ha de continuar.
3. **Barra de navegació.** A dalt hi ha una barra amb la ruta (Inici › Primària › CD › Cicle › Sessió) per tornar enrere en un clic, i dos botons fixos: **«☰ Sessions»** (menú de sessions) i **«📋 Estat»** (resum de l'avaluació). Al mòbil només es veuen els dos últims nivells de la ruta.
4. **Cada sessió té cinc passos:** *Què sabem?* → *Aprenem* → *Repassem* → *Practiquem* → *Què hem après?*
5. **Activitats:** triar una resposta, tocar paraules clau, fer clic en una part d'una imatge i ordenar passos. Hi ha ajudes, lectura en veu alta i una Lupa que fa companyia. Les respostes de les preguntes s'ordenen de manera variada.
6. **Estat.** El botó «📋 Estat» resumeix el resultat per saber per on va l'alumnat i permet copiar el resum.

### Cicle inicial: sessió guiada pel professorat

A 1r i 2n és el professorat qui guia la sessió, amb cinc pestanyes: **Què sabem?** (primer les preguntes orals per al grup i, a continuació, una imatge de suport per situar el context), **Aprenem** (explicació de cada bloc, amb imatges), **Repassem** (es resolen les preguntes entre tots), **Practiquem** (alumnes diferents fan proves pràctiques a la pissarra digital o produccions manuals) i **Què hem après?** (autoavaluació conjunta). A l'inici es pot triar entre ús docent i ús alumnat (en aquest cas, es demanen nom i cognoms). Només en aquest cicle es pot canviar en qualsevol moment el tipus de lletra i posar-ho tot en majúscules.

### Estats d'avaluació

| Estat | Significat |
|---|---|
| ○ No fet | Encara no s'ha treballat |
| 🔄 En procés | S'ha treballat, però encara no s'arriba al nivell |
| ✔ Assolit | Un 70 % o més d'encerts a la primera (es permeten ajudes) |
| ⭐ Dominat | Un 90 % o més sense ajudes, pràctica feta i confirmació del professorat |

> L'apartat d'avaluació (Estat, «Copia el resum», full de seguiment) està en revisió per fer-lo més còmode per al professorat.

## Privacitat

**Cap dada surt de l'aplicació.** No hi ha comptes, ni servidor, ni seguiment. Tot passa al navegador i es perd en tancar la pestanya. El professorat anota l'estat a mà o en una plantilla de full de càlcul (`Seguiment_CD1_navegadors_i_cerca.xlsx`, de moment només per a CD1). No s'utilitza cap pregunta amb veu ni dades personals.

## Com utilitzar-la

És un únic fitxer, `index.html`, sense dependències ni instal·lació.

- **En local:** descarrega'l i obre'l amb qualsevol navegador.
- **Amb GitHub Pages:** a *Settings → Pages*, tria la branca `main` i la carpeta `/ (root)`. L'adreça serà `https://paula-pacho.github.io/CDA-app/`.

Està pensat per a ordinadors d'aula (sobretaula o portàtil) i es recomana un navegador actual. La lectura en veu alta fa servir la veu del sistema. Els dibuixos del teclat de CD2 mostren un teclat espanyol/català; si el de l'aula és diferent, algunes tecles poden canviar de lloc.

## Estructura del codi

L'app que es publica és **un únic `index.html`**, però es genera a partir de fitxers separats a `src/`:

| Fitxer | Què conté |
|---|---|
| `src/index.template.html` | Estructura de la pàgina i peu |
| `src/estils.css` | Estils (incloent la barra de navegació) |
| `src/js/01-config.js` … `05-motor.js` | Configuració, logos, competències i cicles, helpers i motor de l'app |
| `src/contingut/cd1-sessions.js`, `cd1-contingut.js` | Sessions i contingut de CD1 |
| `src/contingut/cd2-sessions.js`, `cd2-a-inicial/b-mitja/c-superior-contingut.js` | Sessions i contingut de CD2 (un fitxer per cicle) |
| `src/contingut/cd2-0-figures-contingut.js` | Figures de CD2 (teclat, taules, esquemes…) |
| `src/contingut/cd2-z-barreja-contingut.js` | Barreja la posició de les respostes correctes de CD2 |
| `build.mjs` | Script (Node, sense dependències) que uneix tot en `index.html` |

Per regenerar l'app: `node build.mjs` (o `npm run build`). Per afegir una competència, vegeu `src/contingut/PLANTILLA-competencia.txt`. El fitxer `index.html` generat es manté al repositori perquè GitHub Pages el serveixi directament.

## Autoria i llicència

**Mentories 4.0** · Paula Pacho · [GitHub: Paula-Pacho](https://github.com/Paula-Pacho)

Aquest aplicatiu web (el fitxer `index.html`, els textos i les activitats) està sota llicència [**CC BY-NC-SA 4.0**](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca) (Reconeixement – No comercial – Compartir igual). Es pot compartir i adaptar citant l'autoria (Paula Pacho, Mentories 4.0), sense ús comercial i distribuint les obres derivades amb la mateixa llicència.

[![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca)

És una obra derivada de l'*Eina de seqüenciació CDA 2026*, que també està sota llicència CC BY-NC-SA 4.0.

Els logos dels navegadors i cercadors pertanyen a les seves respectives marques i només s'hi mostren amb finalitat educativa.

*Programa finançat pel Ministeri d'Educació, Formació Professional i Esports, amb el suport de la Generalitat de Catalunya (Código Escuela 4.0).*
