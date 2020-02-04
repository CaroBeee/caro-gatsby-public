import React, { Component } from "react"
import { Link} from "react-scroll"
import PortfolioItem from "./portfolio-item"
import bulmaCarousel from "../../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js"

// Requiring function causes error during builds



class Portfolio extends Component {

  componentDidMount() {
    // Initialize all elements with carousel class.
    var carousels = bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      
    })
  }

  render() {
    return (
      <section id="portfolio">
        <div className="column is-10 is-offset-1">
          <h2 className="title">PORTFOLIO</h2>
          <hr />
          <div className="clearfix"></div>
          <div className="porfolio-wrapper">
            <div className="portfolioContainer gallery columns is-5 is-multiline is-hidden-mobile">
            <div className="column">
              <PortfolioItem
                title="Apovena"
                imgTeaser="apovena-teaser.jpg"
                meta="apovena"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#themeing", "#framework", "#json"]}
                tag="Wordpress"
                client="wdv"
                year="2019"
                state="Online"
                type="Web-Hub"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_apovena.png"
                excerpt="Ein Angebot für Apotheken zentral gelagerter produktbezogener Content (Web-Hub) auf einer eigenen Website auszuspielen."
                tech={["Wordpress", "Sass", "JSON", "Bulma", "Gulp"]}
                task={["Konzeption Technik","Umsetzung","Erstellung Webicons", "Theming", "Templating","API-Schnittstelle", "Konzeption Contentverwaltung" ]}
                description="Es werden individuelle Websites für Apotheken mit nur einem Wordpress-Theme erstellt, dabei werden die Stammdaten der Apotheke aus einer externen DB in Wordpress importiert. Allein der Content für Themen-Artikel wird in Wordpress redaktionell erstellt."
                link="https://www.pluspunkt-apotheke-schwedt.de/"
              />
              </div>
              <div className="column is-4">
              <PortfolioItem
                title="MDK"
                imgTeaser="mdk-teaser.jpg"
                meta="mdk"
                cat="themes, templates, sass, bulma, javascript, technisches-konzept"
                highlight={["#designsystem", "#styleguide"]}
                tag="Prototyp"
                client="MDK"
                year="2017"
                state="Online"
                type="Prototyp"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_mdk.png"
                excerpt="Einheitliche und moderne Darstellung der MDK-Gemeinschaft in einem Portal."
                tech={["Sass", "Nunjucks", "Bootstrap", "Gulp"]}
                task={["Konzeption Technik","Umsetzung", "Design System","Erstellung Webicons",  "Templating",]}
                description="Der sehr modulare Aufbau wurde mit einem Styleguide begonnen und sukzessiv für die verschiedenen Komponenten ausgebaut. Der Prototyp wurde dann extern in einem CMS übertragen."               
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="AOK BaWü Unternehmensbericht 2018"
                meta="aok-ub"
                imgTeaser="aok-bawue-ubericht-teaser.jpg"
                cat="templates, sass, bulma, javascript"
                highlight={["#scrollanimation", "#chartjs"]}
                tag="Landingpage"
                client="AOK Baden-Württemberg"
                year="2018"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AOK_BaWue_UBericht.png"
                excerpt="Digitaler Auftritt des Unternehmensberichts der AOK Baden-Württemberg"
                tech={["Sass", "ChartJS", "Greensock", "Bulma", "Gulp"]}
                task={["Umsetzung", "Templating"]}
                description="Für die Darstellung der Jahresdaten wurden Animationen und interaktive Grafiken via ChartJS eingesetzt."
                link=""
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Mein Rheuma wird erwachsen"
                meta="mrwe"
                imgTeaser="mrwe-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#community", "#quiz"]}
                tag="Wordpress"
                client="Dt. Rheumaliga"
                year="2015"
                state="Online"
                type="Website"
                award={["BCM Award Gewinner 2017 Gold", "Comprix 2017 Gold"]}
                imgMockup="Mockups-Projekte_MRWE.png"
                excerpt="Zielgruppe sind rheumaerkrankte Jugendliche, die vor dem Wechsel vom Kinder- zum Erwachsenen-Rheumatologen stehen. "
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Konzeption Technik","Umsetzung","Theming", "Templating", "Quiz-Logik", "Konzeption Contentverwaltung", "Modulerweiterung" ]}
                description="Die Website wurde mit einem Pagebuilder umgesetzt, damit die Redakteure die Möglichkeit haben nicht nur Inhalte zu ändern und zuzufügen, sondern auch eigene Module einzubauen. Zusätzlich gibt es ein 'Quizquest'-Modul, das spielerisch Information zu unterschiedlichen Lebensbereichen rund um das Thema Rheumaerkrankung aufzeigt. "
                link="https://mein-rheuma-wird-erwachsen.de/"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Ihre Vorsorge"
                meta="iv"
                imgTeaser="IhreVorsorge-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#magazin", "#templating", "#imagemap"]}
                tag="Typo3"
                client="Deutsche Rentenversicherung"
                year="2015"
                state="Online"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_IhreVorsorge.png"
                excerpt="Informationsportal rund um das Thema Vorsorge mit aktuellen Nachrichten, Forum und Rechner"
                tech={["Typo3", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Templating", "Weiterentwicklung"]}
                description="Die Module und die verschiedenen Templates der Website wurden zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                link="https://ihre-vorsorge.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="G+G"
                meta="gg"
                imgTeaser="gg-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#magazin", "#templating"]}
                tag="Prototyp"
                client="KomPart Verlagsgesellschaft"
                year="2017"
                state="Online"
                type="Prototyp"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_g-und-g.png"
                excerpt="Online Magazin der Zeitschrift 'Gesundheit und Gesellschaft'. Das ist das AOK-Forum für Politik, Praxis und Wissenschaft."
                tech={["Sass", "Bootstrap", "webpack"]}
                task={["Umsetzung", "Templating", "Styleguide"]}
                description="Das Templating und die Komponenten der Website wurden in einem Prototypen umgesetzt, um sie dann extern in ein CMS übertragen zu lassen."
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Schwäbisch Hall Beratungsspiel"
                meta="bsh"
                imgTeaser="bsh-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#theming", "#quiz"]}
                tag="Wordpress"
                client="Schwäbisch Hall"
                year="2016"
                state="Online"
                type="Website (intern)"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_BSH.png"
                excerpt="Quizspiel für interne Schulungen der zukünftigen Berater der Schwäbisch Hall."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Konzeption Technik","Umsetzung", "Theming", "Quiz-Logik"]}
                description="Auf Basis eines vorgefertigten Quizmoduls wurde das Beraterspiel im Look der Schwäbisch Hall umgesetzt."
                link="https://bsh-beraterspiel.vorschau.wdv.de/"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Fit durch die Schule"
                meta="fdds"
                imgTeaser="fdds-teaser.jpg"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#relaunch", "#scrolliejs"]}
                tag="Wordpress"
                client="AOK Rheinland-Hamburg"
                year="2017"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_FDDS.png"
                excerpt="Initiative des Nordrhein-westfälische Schulministeriums und der AOK Rheinland/Hamburg zur Förderung  von mehr Bewegung. "
                tech={["Wordpress", "Scrollie.js"]}
                task={["Umsetzung", "Theming", "Templating"]}
                description="Die Website wurde mit einem Pagebuilder erstellt. Während des Scrollings durch den Onepager wechseln sich in den Sections die Farben."
                link="https://fitdurchdieschule.de.integration70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Abenteuer und Reisen"
                meta="a+r"
                imgTeaser="a-und-r-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#magazin", "#blog", "#shop"]}
                tag="Wordpress"
                client="Abenteuer und Reisen"
                year="2015"
                state="Online"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AundR.png"
                excerpt="Deutschlands großes digitales Reisemagazin mit Reiseberichten, -tipps und weiteres."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Theming", "Templating"]}
                description="Die Umsetzung eines Blog-artigen Magazin wurde mit Wordpress realisiert und durch ein Shop-Modul und weitere Features erweitert."
                link="https://www.abenteuer-reisen.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Mediaportal"
                meta="aok-mp"
                imgTeaser="aok-bawue-presse-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#relaunch", "#phtml"]}
                tag="OpenText"
                client="AOK Baden-Württemberg"
                year="2015"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AOK_BaWue_Presse.png"
                excerpt="Das Media- und Politikportal der AOK Baden-Württemberg."
                tech={["OpenText", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Templating"]}
                description="Relaunch des vorhandenen Auftritts des Medienportals der AOK Baden-Württembergs im responsiven Design."
                link=""
              />
            </div>
            </div>
            <div className="portfolioContainer carousel carousel-animated carousel-animate-slide is-hidden-desktop">
              <div className="carousel-item is-active">
              <PortfolioItem
                title="Apovena"
                imgTeaser="apovena-teaser.jpg"
                meta="apovena"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#themeing", "#framework", "#json"]}
                tag="Wordpress"
                client="wdv"
                year="2019"
                state="Online"
                type="Web-Hub"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_apovena.png"
                excerpt="Ein Angebot für Apotheken zentral gelagerter produktbezogener Content (Web-Hub) auf einer eigenen Website auszuspielen."
                tech={["Wordpress", "Sass", "JSON", "Bulma", "Gulp"]}
                task={["Konzeption Technik","Umsetzung","Erstellung Webicons", "Theming", "Templating","API-Schnittstelle", "Konzeption Contentverwaltung" ]}
                description="Es werden individuelle Websites für Apotheken mit nur einem Wordpress-Theme erstellt, dabei werden die Stammdaten der Apotheke aus einer externen DB in Wordpress importiert. Allein der Content für Themen-Artikel wird in Wordpress redaktionell erstellt."
                link="https://www.pluspunkt-apotheke-schwedt.de/"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="MDK"
                imgTeaser="mdk-teaser.jpg"
                meta="mdk"
                cat="themes, templates, sass, bulma, javascript, technisches-konzept"
                highlight={["#designsystem", "#styleguide"]}
                tag="Prototyp"
                client="MDK"
                year="2017"
                state="Online"
                type="Prototyp"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_mdk.png"
                excerpt="Einheitliche und moderne Darstellung der MDK-Gemeinschaft in einem Portal."
                tech={["Sass", "Nunjucks", "Bootstrap", "Gulp"]}
                task={["Konzeption Technik","Umsetzung", "Design System","Erstellung Webicons",  "Templating",]}
                description="Der sehr modulare Aufbau wurde mit einem Styleguide begonnen und sukzessiv für die verschiedenen Komponenten ausgebaut. Der Prototyp wurde dann extern in einem CMS übertragen."               
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="AOK BaWü Unternehmensbericht 2018"
                meta="aok-ub"
                imgTeaser="aok-bawue-ubericht-teaser.jpg"
                cat="templates, sass, bulma, javascript"
                highlight={["#scrollanimation", "#chartjs"]}
                tag="Landingpage"
                client="AOK Baden-Württemberg"
                year="2018"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AOK_BaWue_UBericht.png"
                excerpt="Digitaler Auftritt des Unternehmensberichts der AOK Baden-Württemberg"
                tech={["Sass", "ChartJS", "Greensock", "Bulma", "Gulp"]}
                task={["Umsetzung", "Templating"]}
                description="Für die Darstellung der Jahresdaten wurden Animationen und interaktive Grafiken via ChartJS eingesetzt."
                link=""
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Mein Rheuma wird erwachsen"
                meta="mrwe"
                imgTeaser="mrwe-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#community", "#quiz"]}
                tag="Wordpress"
                client="Dt. Rheumaliga"
                year="2015"
                state="Online"
                type="Website"
                award={["BCM Award Gewinner 2017 Gold", "Comprix 2017 Gold"]}
                imgMockup="Mockups-Projekte_MRWE.png"
                excerpt="Zielgruppe sind rheumaerkrankte Jugendliche, die vor dem Wechsel vom Kinder- zum Erwachsenen-Rheumatologen stehen. "
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Konzeption Technik","Umsetzung","Theming", "Templating", "Quiz-Logik", "Konzeption Contentverwaltung", "Modulerweiterung" ]}
                description="Die Website wurde mit einem Pagebuilder umgesetzt, damit die Redakteure die Möglichkeit haben nicht nur Inhalte zu ändern und zuzufügen, sondern auch eigene Module einzubauen. Zusätzlich gibt es ein 'Quizquest'-Modul, das spielerisch Information zu unterschiedlichen Lebensbereichen rund um das Thema Rheumaerkrankung aufzeigt. "
                link="https://mein-rheuma-wird-erwachsen.de/"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Ihre Vorsorge"
                meta="iv"
                imgTeaser="IhreVorsorge-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#magazin", "#templating", "#imagemap"]}
                tag="Typo3"
                client="Deutsche Rentenversicherung"
                year="2015"
                state="Online"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_IhreVorsorge.png"
                excerpt="Informationsportal rund um das Thema Vorsorge mit aktuellen Nachrichten, Forum und Rechner"
                tech={["Typo3", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Templating", "Weiterentwicklung"]}
                description="Die Module und die verschiedenen Templates der Website wurden zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                link="https://ihre-vorsorge.de"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="G+G"
                meta="gg"
                imgTeaser="gg-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#magazin", "#templating"]}
                tag="Prototyp"
                client="KomPart Verlagsgesellschaft"
                year="2017"
                state="Online"
                type="Prototyp"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_g-und-g.png"
                excerpt="Online Magazin der Zeitschrift 'Gesundheit und Gesellschaft'. Das ist das AOK-Forum für Politik, Praxis und Wissenschaft."
                tech={["Sass", "Bootstrap", "webpack"]}
                task={["Umsetzung", "Templating", "Styleguide"]}
                description="Das Templating und die Komponenten der Website wurden in einem Prototypen umgesetzt, um sie dann extern in ein CMS übertragen zu lassen."
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Schwäbisch Hall Beratungsspiel"
                meta="bsh"
                imgTeaser="bsh-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#theming", "#quiz"]}
                tag="Wordpress"
                client="Schwäbisch Hall"
                year="2016"
                state="Online"
                type="Website (intern)"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_BSH.png"
                excerpt="Quizspiel für interne Schulungen der zukünftigen Berater der Schwäbisch Hall."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Konzeption Technik","Umsetzung", "Theming", "Quiz-Logik"]}
                description="Auf Basis eines vorgefertigten Quizmoduls wurde das Beraterspiel im Look der Schwäbisch Hall umgesetzt."
                link="https://bsh-beraterspiel.vorschau.wdv.de/"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Fit durch die Schule"
                meta="fdds"
                imgTeaser="fdds-teaser.jpg"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#relaunch", "#scrolliejs"]}
                tag="Wordpress"
                client="AOK Rheinland-Hamburg"
                year="2017"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_FDDS.png"
                excerpt="Initiative des Nordrhein-westfälische Schulministeriums und der AOK Rheinland/Hamburg zur Förderung  von mehr Bewegung. "
                tech={["Wordpress", "Scrollie.js"]}
                task={["Umsetzung", "Theming", "Templating"]}
                description="Die Website wurde mit einem Pagebuilder erstellt. Während des Scrollings durch den Onepager wechseln sich in den Sections die Farben."
                link="https://fitdurchdieschule.de.integration70.wdv.de"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Abenteuer und Reisen"
                meta="a+r"
                imgTeaser="a-und-r-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#magazin", "#blog", "#shop"]}
                tag="Wordpress"
                client="Abenteuer und Reisen"
                year="2015"
                state="Online"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AundR.png"
                excerpt="Deutschlands großes digitales Reisemagazin mit Reiseberichten, -tipps und weiteres."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Theming", "Templating"]}
                description="Die Umsetzung eines Blog-artigen Magazin wurde mit Wordpress realisiert und durch ein Shop-Modul und weitere Features erweitert."
                link="https://www.abenteuer-reisen.de"
              />
              </div>
              <div className="carousel-item">
              <PortfolioItem
                title="Mediaportal"
                meta="aok-mp"
                imgTeaser="aok-bawue-presse-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#relaunch", "#phtml"]}
                tag="OpenText"
                client="AOK Baden-Württemberg"
                year="2015"
                state="Offline"
                type="Website"
                award={["Nope"]}
                imgMockup="Mockups-Projekte_AOK_BaWue_Presse.png"
                excerpt="Das Media- und Politikportal der AOK Baden-Württemberg."
                tech={["OpenText", "Sass", "Bootstrap", "Grunt"]}
                task={["Umsetzung", "Templating"]}
                description="Relaunch des vorhandenen Auftritts des Medienportals der AOK Baden-Württembergs im responsiven Design."
                link=""
              />
              </div>
            </div>
          </div>
         
        </div>
        <div className="columns is-centered">
     
    <Link to="/" className="button is-link is-hidden-mobile">Zurück zur Startseite</Link>
   
    </div>
      </section>
    )
  }
}

export default Portfolio
