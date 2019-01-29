document.querySelectorAll("a[href^='#']").forEach(function(anchor) {
  anchor.addEventListener(
    "click",
    function(e) {
      if (window.scrollTo) {
        var target = document.getElementById(
          this.getAttribute("href").substring(1)
        );
        e.preventDefault();
        window.scrollTo({ behavior: "smooth", top: target.offsetTop });
      }
    }.bind(anchor)
  );
});

var menuMobileIsOpened = false;

function changeIcon() {
  menuMobileIsOpened = !menuMobileIsOpened;
  document.getElementById("mobileMenuIcon").innerHTML = menuMobileIsOpened
    ? 'close'
    : 'menu';
}

var deutschMode = localStorage.length > 0
  ? JSON.parse(localStorage.getItem('deutschMode'))
  : false;

var changeLang = function() {
  document.querySelector("html").lang = deutschMode ? "de" : "pt-br";

  document.querySelector("#navFlag").src = deutschMode
    ? "https://ralomach.github.io/kindergartenhanselgretel/img/br_30x21.jpg"
    : "https://ralomach.github.io/kindergartenhanselgretel/img/de_30x21.jpg";
  document.querySelector("#navFlag").alt = deutschMode
    ? "Bandeira do Brasil"
    : "Bandeira da Alemanha";
  document.querySelector("#buttonFlag").src = deutschMode
    ? "https://ralomach.github.io/kindergartenhanselgretel/img/br_30x21.jpg"
    : "https://ralomach.github.io/kindergartenhanselgretel/img/de_30x21.jpg";
  document.querySelector("#buttonFlag").alt = deutschMode
    ? "Bandeira do Brasil"
    : "Bandeira da Alemanha";

  var translations = {
    textBemvindo: ["Willkommem bei", "Bem-vindo(a) ao"],
    textBemvindo2: ["Seit", "Desde"],
    nav1: ["Start", "Início"],
    nav2: ["Unser Kindergarten", "Nossa escola"],
    nav3: ["Ziele und Methoden", "Objetivos e métodos"],
    nav4: ["Aktivitäten", "Atividades"],
    nav5: ["Fotogalerie", "Galeria de fotos"],
    nav6: ["Kontakt", "Contato"],
    mobileNav1: ["Start", "Início"],
    mobileNav2: ["Kindergarten", "Escola"],
    mobileNav3: ["Ziele", "Objetivos"],
    mobileNav4: ["Aktivitäten", "Atividades"],
    mobileNav5: ["Fotogalerie", "Galeria"],
    mobileNav6: ["Kontakt", "Contato"],
    escolaHeading: ["Unser Kindergarten", "Nossa escola"],
    professorasHeading: ["Lehrerstaff", "Equipe de professoras"],
    professorasText: ["Alle Lehrerinnen haben Deutsch als Muttersprache, sind Pädagoginnen oder Psychopädagoginnen mit spezieller Ausbildung für Kleinkinder.", "Todas as professoras possuem o alemão como língua materna, são pedagogas ou psicopedagogas, com especialização em educação infantil pré-escolar."],
    idadesHeading: ["Alterstufen", "Idades"],
    idadesText: ["Die Kinder können ab neun Monate den Kleinkindergarten besuchen.", "As crianças podem freqüentar o Kindergarten a partir de nove meses."],
    espacosHeading: ["Räume", "Espaços"],
    espacosText1: ["Interne Umgebungen: Klassenzimmer, Spielzimmer, Geschichtenecke, Puppenzimmer, Theaterraum, Gymnastikraum, Musikraum, Schlafzimmer für die Kleineren und eine grosse Bibliotek.", "Ambientes internos: Salas de aula amplas, recinto de brinquedos, cantinho de histórias, quarto de bonecas, sala de teatro e teatro de fantoches, sala de educação física, sala de música, biblioteca grande, dormitório para os pequenos."],
    espacosText2: ["Im Freien: Schaukeln, Rutschbahnen, Schaukelpferde, Klettergerüste, Puppenhaus, Hängebrücke mit Tarzanhäuschen, Sandkasten, Karussel.", "Parte externa: Balanços, cavalos de mola, escorregadores, carrossel, ponte pênsil com casinha de tarzan, trepa-trepa, casa de bonecas, caixa de areia."],
    espacosText3: ["Garten: Grosser Garten mit Obstbäume, grosse Rasenfläche sowie Beeten wo die Kinder gemüse säen, pflanzen und ernten können. Wir haben auch Enten, Hasen und Vögel.", "Área verde: Jardim grande com muitas árvores frutíferas, gramado, canteiros para plantar e colher verduras. Também temos patos, coelhos e pássaros."],
    objetivosHeading: ["Ziele und Methoden", "Objetivos e métodos"],
    atividadesHeading: ["Aktivitäten", "Atividades"],
    galeriaHeading: ["Fotogalerie", "Galeria de fotos"],
    contatoHeading: ["Kontakt", "Contato"],
    objetivosText: [
      `<p class="flow-text">
              Der Kleinkindergarten "Hänsel und Gretel" hat sich zum Ziel gesetzt die Persönlichkeit des Kindes zu entwickeln. Es werden seine Phantasie und Kreativität gefördert, die die Grundlage für ein schöpferisch reiches Leben sind. (Montessori, Piaget, Vygotsky, Steiner, Rousseau)
            </p><p class="flow-text">
              Ein freundschaftliches Zusammenleben ohne jede Konkurrenz soll verhüten, dass das Kind sich auf die eine oder andere Weise minderwertig fühlt. Jeder Wettbewerb beim Kleinkind fördert nicht seinen Ehrgeiz sondern bringt psychische Störungen. Das Kind muss zuerst seine Fähigkeiten kennen lernen und entwickeln. (Froebel, F; Sime, M.; Mussen, M. P.; Rousseau, J.)
            </p><p class="flow-text">
              Mit Liebe und Freundschaft wird das Kind gelenkt damit es sich frei und unbeschwert fühlt. Das Prinzip ist Freiheit mit Grenzen, d. h. Disziplin und Respekt wo es erforderlich ist. (Rousseau; Niederle; Snyders, G; Froebel, F.). So erwirbt es Sicherheit und Selbstvertrauen. (Stender-Lavatelei, S.; Sime, M.; Rousseau, J.)
            </p><p class="flow-text">
              Wir erziehen die Kinder damit sie in ihrem späteren Leben wirtschaftliche, kulturelle oder politische Führer werden und nicht nur "menschliche Hilfsmittel" bei der Erzeugung von Gewinn und folgsame Verbraucher (Konsumententyp). Mit 6 Jahren ist die Grundlage des weiteren Lebens geformt. (Jung, Piaget; Rousseau; Wallon)
            </p><p class="flow-text">
              Wir singen, spielen, basteln mit den verschiedensten Materie, pflanzen, pflücken, backen, turnen und lenken das Kind (ästethische Elementarerziehung), damit es persönlich gefestigt in die Grundschule eintritt.
            </p><p class="flow-text">
              Sprachen: Kinder lernen eine, zwei, drei oder mehr Sprachen auf natürliche und spontane Weise, nur durch Hören und Sprechen. Wir haben Kinder die mit drei-vier Jahren perfekt zwei oder drei Sprachen beherrschen. Und je kleiner und jünger die Kinder sind, desto plastischer und grösser ist die Lernfähigkeit einer Sprache. (Vygotsky) Im 'Hänsel und Gretel' werden alle Aktivitäten auf deutscher Sprache durchgeführt und gelenkt. Es wird während ganzen Zeit der Anwesenheit des Kindes nur Deutsch gesprochen.
            </p>`,
      `<p class="flow-text">
              O Jardim de Infância 'Hänsel und Gretel' possui como meta desenvolver a personalidade da criança. Fomenta-se sua fantasia e criatividade que são a base para uma rica vida criadora e realizadora. (Montessori, Piaget, Vygotsky, Steiner, Rousseau)
            </p><p class="flow-text">
              Uma convivência com amizade e sem concorrência, nessa faixa etária, evita que a criança possa sentir-se inferior por um ou outro motivo. Qualquer competição na primeira infância não estimula a auto estima mas ao contrário, traz distúrbios psícológicos. Primeiramente a criança precisa conhecer e desenvolver suas habilidades. (Sime, M.; Mussen, M. P.; Rousseau, J. J.; Froebel, F.)
            </p><p class="flow-text">
              Com amor e amizade a criança é orientada para sentir-se livre e tranqüila, sem peso nem medos. O princípio é a liberdade regrada, isto é, disciplina e respeito onde se faz necessário. (Rousseau; Niederle; Froebel) Assim adquire segurança e auto confiança. (Stender-Lavatelei, S.; Sime, M.; Rousseau, J. J.)
            </p><p class="flow-text">
              Educamos as crianças para que em sua vida futura possam ser realizadores, líderes culturais, sociais, econômicos e políticos e não se tornem simplesmente um 'recurso humano' para obtenção de lucros e consumidores obedientes. Até seis anos foi formada a base para toda sua vida. (Jung, Piaget; Rousseau; Wallon)
            </p><p class="flow-text">
              Cantamos, brincamos, fazemos muitos trabalhos artesanais para os projetos com os mais diversos materiais, plantamos, colhemos, fazemos bolachinhas, ginástica apropriada e dirigimos a criança para que inicie a escola primária psiquicamente fortalecida e auto confiante.
            </p><p class="flow-text">
              Crianças aprendem um, dois, três ou mais idiomas de uma maneira natural e espontânea, somente ouvindo e falando. Temos crianças que falam fluentemente dois a três idiomas aos 4 anos de idade. Quanto menor e mais nova for a criança, tanto mais plástica é a capacidade de aprendizagem de línguas. Os idiomas aprendidos naturalmente na primeira infância são todos como maternos. No Kindergarten Hänsel und Gretel, todas as atividades acontecem em alemão.</p>`
    ],
    cognitivoHeading: ["Kognitiv", "Cognitivo"],
    cognitivoText: [
      "Fördern der Begriffsbildung, des logischen Denkens, der Wahrnehmungsfähigkeit durch orientierte Gruppenspiele, Tisch-, Höhr-, Seh- und Tastspiele.",
      "Fomento à compreensão, ao pensamento lógico, à capacidade de perceber e distinguir através de jogos dirigidos em grupo, jogos de mesa, de tatear, de ouvir, de ver, etc."
    ],
    motricidadeHeading: ["Handfertigkeit", "Motricidade"],
    motricidadeText: [
      "Fördern der Feinmotorik durch Zeichnen, Malen, Reissen, Schneiden, Kleben, viel Basteln für die Projekte, die während des Jahres ausgearbeitet werden, mit unterschiedlichen Materialien wie Papier, Stoff, Naturmaterialien, Ton, Pappmaché und andere. Erlernen verschiedener Techniken unter Verwendung unterschiedlicher Hilfsmittel. Wir Kneten, Weben, Nähen, Sticken, usw, um das Selbstvertrauen zu erhöhen.",
      "Desenvolve-se a motricidade fina através desenhos, pinturas, rasgaduras, recortar, colar e bastante trabalhos manuais para os diversos projetos, que são executados durante o ano, com os mais diversos materiais como sucatas, papéis, tecidos, objetos da natureza, papel maché, argila e outros. Aprendizado de diferentes técnicas pela utilização de diversos recursos. Também trabalhamos com massa de modelar, com teares, bordados, costuras, etc. Tudo isso faz aumentar muito sua auto confiança."
    ],
    socialHeading: ["Sozial", "Social"],
    socialText: [
      "Förderung aller sozialer Verhaltensweisen, Gruppen-fähigkeiten, zurückstehen, oder im Vordergrundstehen, Toleranz üben, Konfliktlösung, freundschaftliches Zusammenleben.",
      "Promoção de todos comportamentos sociais, capacidades de entrosamento grupal, saber ganhar e dar a vez, ter tolerância, resolver conflitos, acatar opiniões, respeito ao próximo, convivência na amizade."
    ],
    caseiroHeading: ["Häuslichkeit", "Caseiro"],
    caseiroText: [
      "Freude erwecken bei dem Verrichten häuslicher Arbeiten, Backen, gemeinsam Speisen zubereiten, Feste vorbereiten u.a.",
      "Atiçar alegria na execução de trabalhos caseiros, fazer bolachinhas, ajudar a preparar as refeições comunitárias, preparar festas, etc."
    ],
    criatividadeHeading: ["Kreativität", "Criatividade"],
    criatividadeText: [
      "Gefördert durch allgemeines Spielen in den Spielecken und im Freien, Rollenspiele, Kasperltheater, Märchen, Kinder-theater, Verkleiden, Bilderbücher, u.a.",
      "Incentivada pelo brincar em geral nos cantinhos e ao ar livre, pelas brincadeiras de faz-de-conta, pelo teatro de fantoches, contos de fadas, teatro infantil, livros, etc."
    ],
    motorHeading: ["Motorisch", "Motor"],
    motorText: [
      "Förderung der Grobmotorik und Geschicklichkeit. Bewegungskoordination durch unterschiedliche Bewegungsangebote auch mit musikalischer Begleitung wie Ballspiele, Hüpfen, Laufen, Hopsen, Klettern, Springen, Spiele mit Pneus, verschiedene Turnarten, bildnerisches Gestalten, Theater, Kreis- und Rollen-spiele, u. a.",
      "Desenvolvimento da motricidade grossa, da lateralidade e das habilidades. Coordenação de movimentos pela oferta de diversos movimentos, da ginástica bastante diversificada e divertida como jogos de bola, pular, correr, saltar, escalar, brincadeiras com pneus, com blocos de espuma, e também com acompanhamento musical, representações teatrais, jogos de faz-de-conta, brincadeiras de roda e outros."
    ],
    naturezaHeading: ["Natur Erleben", "Natureza"],
    naturezaText: [
      "Tägliche Aufenthalte im Freien, naturwissenschaftliche Erlebnisse, zahlreiche Ausflüge in Parks, Naturschutzgebiete, Bauernhöfe, zoologischen Garten usw erwecken den Kindern Liebe zur Natur und das Gefühl der Notwendigkeit die Welt zu erhalten in der wir leben.",
      "Folguedos e brincadeiras diárias ao ar livre, vivências das ciências naturais, numerosas excursões incentivam o amor à natureza e o sentimento da necessidade da conservação do mundo em que vivemos."
    ],
    musicaHeading: ["Musikalisch", "Música"],
    musicaText: [
      "Spass am Singen wecken. Kinder lieben Musik und Singen. Singen trägt zu ihrer sozio-emotionalen, cognitiven und physischen Entwicklung auf verschiedene Arten bei: während sie singen nehmen sie an einer Gruppe Teil, steigern ihr Warnehmen von verschiedenen Tönen und Bewegungen (Tanz), lernen neue Worte und Konzepte, Rhytmen, Melodien und Reime. Wir singen Lieder die sich auf das Thema des Tages beziehen. Sie lernen ebenso den Gebrauch von Instrumenten wie Rasseln, Glöckchen, Tamburin, Triangeln. Wir singen in Gruppen aber auch einzeln.",
      "Crianças gostam de música e de canto. Cantar contribui de diversas maneiras para o desenvolvimento sócio-emocional, cognitivo e físico. Enquanto cantam, participam de um grupo, aumentam sua capacidade de percepção de diferentes sons e movimentos, apreendem palavras, conceitos e ritmos novos bem como novas melodias e poesias. Cantamos canções relativas ao projeto em estudo. Também aprendem o manuseio de instrumentos como triângulos, tamborins, chocalhos, reco-recos, guizos. Cantamos em grupos e solos."
    ],
    linguisticoHeading: ["Sprachlich", "Linguístico"],
    linguisticoText: [
      "Sprache verstehen und freies Sprechen fördern, Sinn erkennen, durch Fingerspiele, Geschichten, Lieder; Bilder in Sprache umsetzen, usw.",
      "Entendimento dos idiomas e estimulação à livre manifestação oral. Reconhecimento do sentido, interpretação de gravuras em linguagem através, jogos de dedos, histórias, músicas e outros."
    ]
  };

  for (key in translations) {
    document.getElementById(key).innerHTML = deutschMode
      ? translations[key][0]
      : translations[key][1];
  }
}

var changeMode = function() {
  deutschMode = !deutschMode;
  localStorage.setItem("deutschMode", deutschMode);
  changeLang();
}

changeLang();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "top",
    hoverEnabled: false
  });

  var images = document.querySelectorAll(".materialboxed");
  var instances2 = M.Materialbox.init(images, {});
});

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3500
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
})
