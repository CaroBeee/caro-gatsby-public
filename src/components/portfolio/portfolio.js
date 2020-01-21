import React, { Component } from "react"
import PortfolioItem from "./portfolio-item"
import bulmaCarousel from "../../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js"

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

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
            <div className="column is-4">
              <PortfolioItem
                title="Apovena"
                imgTeaser="apovena-teaser.jpg"
                meta="apovena"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#Themeing", "#Framework", "#bla"]}
                tag="Wordpress"
                client="wdv"
                year="2019"
                state="Online"
                type="Web-Hub"
                award="Nope"
                imgMockup="Mockups-Projekte_apovena.png"
                excerpt="Ein Angebot für Apotheken zentral gelagerter produktbezogener Content (Web-Hub) auf einer eigenen Website auszuspielen."
                tech={["Wordpress", "Sass", "JSON", "Bulma", "Gulp"]}
                description="Es werden individuelle Websites für Apotheken mit einem Wordpress-Theme erstellt, dabei werden die Stammdaten aus einer externe DB in Wordpress eingespeist. Nur der Content allein wird in Wordpress erstellt."
                link="https://www.pluspunkt-apotheke-schwedt.de/"
              />
              </div>
              <div className="column is-4">
              <PortfolioItem
                title="MDK"
                imgTeaser="mdk-teaser.jpg"
                meta="mdk"
                cat="themes, templates, sass, bulma, javascript, technisches-konzept"
                highlight={["#DesignSystem", "#Styleguide"]}
                tag="Prototyp"
                client="MDK"
                year="2017"
                state="Online"
                type="Prototyp"
                award="Nope"
                imgMockup="Mockups-Projekte_mdk.png"
                excerpt="Einheitliche und moderne Darstellung der MDK-Gemeinschaft in einem Portal."
                tech={["Sass", "Nunjucks", "Bootstrap", "Gulp"]}
                description="Der sehr modulare Aufbau wurde mit einem Styleguide begonnen und sukzessiv für die verschiedenen Komponenten ausgebaut. Der Prototyp wurde dann in einem CMS übertragen."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="AOK BaWü Unternehmensbericht 2018"
                meta="aok"
                imgTeaser="aok-bawue-ubericht-teaser.jpg"
                cat="templates, sass, bulma, javascript"
                highlight={["#ScrollAnimation", "#ChartJS"]}
                tag="Landingpage"
                client="AOK Baden-Württemberg"
                year="2018"
                state="Offline"
                type="Website"
                award="Nope"
                imgMockup="Mockups-Projekte_AOK_BaWue_UBericht.png"
                excerpt="Digitaler Auftritt des Unternehmensberichts der AOK Baden-Württemberg"
                tech={["Sass", "ChartJS", "Greensock", "Bulma", "Gulp"]}
                description="Hier wurden Animationen und interaktive Grafiken via ChartJS eingesetzt."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link=""
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Mein Rheuma wird erwachsen"
                meta="mrwe"
                imgTeaser="mrwe-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#Community", "#Quiz"]}
                tag="Wordpress"
                client="Deutsche Rheumaliga"
                year="2015"
                state="Online"
                type="Website"
                award="BCM Award Gewinner 2017 Gold, Comprix 2017 Gold"
                imgMockup="Mockups-Projekte_MRWE.png"
                excerpt="Zielgruppe sind rheumaerkrankte Jugendliche, die vor dem Wechsel vom Kinder- zum Erwachsenen-Rheumatologen stehen. "
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                description="Die Website wurde mit einem Pagebuilder umgesetzt, damit die Redakteure die Möglichkeit haben nicht nur Inhalte zu ändern und zuzufügen, sondern eigene Module einzubauen."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="https://mein-rheuma-wird-erwachsen.de/"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Ihre Vorsorge"
                meta="iv"
                imgTeaser="IhreVorsorge-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#Magazin", "#ImageMap"]}
                tag="Typo3"
                client="Deutsche Rentenversicherung"
                year="2015"
                state="Online"
                type="Website"
                award="Nope"
                imgMockup="Mockups-Projekte_IhreVorsorge.png"
                excerpt="Informationsportal rund um das Thema Vorsorge mit aktuellen Nachrichten, Forum und Rechner"
                tech={["Typo3", "Sass", "Bootstrap", "Grunt"]}
                description="Hier wurden die Module der Website zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="https://ihre-vorsorge.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="G+G"
                meta="gg"
                imgTeaser="gg-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#Magazin", "#bla"]}
                tag="Prototyp"
                client="KomPart Verlagsgesellschaft"
                year="2017"
                state="Online"
                type="Prototyp"
                award="Nope"
                imgMockup="Mockups-Projekte_g-und-g.png"
                excerpt="Online Magazin der Zeitschrift 'Gesundheit und Gesellschaft'. Das ist das AOK-Forum für Politik, Praxis und Wissenschaft."
                tech={["Sass", "Bootstrap", "webpack"]}
                description="Hier wurden die Module der Website zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="http://mdk-prototyp.vorschau70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Schwäbisch Hall Beratungsspiel"
                meta="bsh"
                imgTeaser="bsh-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#Interactive", "#Quiz"]}
                tag="Wordpress"
                client="Schwäbisch Hall"
                year="2016"
                state="Online"
                type="Website (intern)"
                award="Nope"
                imgMockup="Mockups-Projekte_BSH.png"
                excerpt="Quizspiel für interne Schulungen der zukünftigen Berater der Schwäbisch Hall."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                description="Auf Basis eines vorgefertigten Quizmoduls wurde für das Beraterspiel entsprechende Anpassungen gemacht."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="https://bsh-beraterspiel.vorschau.wdv.de/"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Fit durch die Schule"
                meta="fdds"
                imgTeaser="fdds-teaser.jpg"
                cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                highlight={["#Relaunch", "#ScrollieJS"]}
                tag="Wordpress"
                client="AOK Rheinland-Hamburg"
                year="2017"
                state="Offline"
                type="Website"
                award="Nope"
                imgMockup="Mockups-Projekte_FDDS.png"
                excerpt="Initiative des Nordrhein-westfälische Schulministeriums und der AOK Rheinland/Hamburg zur Förderung  von mehr Bewegung. "
                tech={["Wordpress", "Scrollie.js"]}
                description="Die Website wurde mit einem Pagebuilder erstellt."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="https://fitdurchdieschule.de.integration70.wdv.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Abenteuer und Reisen"
                meta="ar"
                imgTeaser="a-und-r-teaser.jpg"
                cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                highlight={["#Magazin", "#Blog", "#Shop"]}
                tag="Wordpress"
                client="Abenteuer und Reisen"
                year="2015"
                state="Online"
                type="Website"
                award="Nope"
                imgMockup="Mockups-Projekte_AundR.png"
                excerpt="Deutschlands großes digitales Reisemagazin mit Reiseberichten, -tipps und weiteres."
                tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                description=""
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
                link="https://www.abenteuer-reisen.de"
              />
              </div>
               <div className="column is-4">
              <PortfolioItem
                title="Mediaportal"
                meta="aok"
                imgTeaser="aok-bawue-presse-teaser.jpg"
                cat="templates, sass, bootstrap, javascript"
                highlight={["#Relaunch", "#PHTML"]}
                tag="OpenText"
                client="AOK Baden-Württemberg"
                year="2015"
                state="Offline"
                type="Website"
                award="Nope"
                imgMockup="Mockups-Projekte_AOK_BaWue_Presse.png"
                excerpt="Das Media- und Politikportal der AOK Baden-Württemberg."
                tech={["OpenText", "Sass", "Bootstrap", "Grunt"]}
                description="Relaunch des vorhandenen Auftritts des Medienportals der AOK Baden-Württembergs."
                images={[
                  { image: "apovena-teaser.jpg" },
                  { image: "apovena-teaser.jpg" },
                ]}
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
                  highlight={["#Themeing", "#Framework", "#bla"]}
                  tag="Wordpress"
                  client="wdv"
                  year="2019"
                  state="Online"
                  type="Web-Hub"
                  award="Nope"
                  imgMockup="Mockups-Projekte_apovena.png"
                  excerpt="Ein Angebot für Apotheken zentral gelagerter produktbezogener Content (Web-Hub) auf einer eigenen Website auszuspielen."
                  tech={["Wordpress", "Sass", "JSON", "Bulma", "Gulp"]}
                  description="Es werden individuelle Websites für Apotheken mit einem Wordpress-Theme erstellt, dabei werden die Stammdaten aus einer externe DB in Wordpress eingespeist. Nur der Content allein wird in Wordpress erstellt."
                  link="https://www.pluspunkt-apotheke-schwedt.de/"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="MDK"
                  imgTeaser="mdk-teaser.jpg"
                  meta="mdk"
                  cat="themes, templates, sass, bulma, javascript, technisches-konzept"
                  highlight={["#DesignSystem", "#Styleguide"]}
                  tag="Prototyp"
                  client="MDK"
                  year="2017"
                  state="Online"
                  type="Prototyp"
                  award="Nope"
                  imgMockup="Mockups-Projekte_mdk.png"
                  excerpt="Einheitliche und moderne Darstellung der MDK-Gemeinschaft in einem Portal."
                  tech={["Sass", "Nunjucks", "Bootstrap", "Gulp"]}
                  description="Der sehr modulare Aufbau wurde mit einem Styleguide begonnen und sukzessiv für die verschiedenen Komponenten ausgebaut. Der Prototyp wurde dann in einem CMS übertragen."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="http://mdk-prototyp.vorschau70.wdv.de"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="AOK BaWü Unternehmensbericht 2018"
                  meta="aok"
                  imgTeaser="aok-bawue-ubericht-teaser.jpg"
                  cat="templates, sass, bulma, javascript"
                  highlight={["#ScrollAnimation", "#ChartJS"]}
                  tag="Landingpage"
                  client="AOK Baden-Württemberg"
                  year="2018"
                  state="Offline"
                  type="Website"
                  award="Nope"
                  imgMockup="Mockups-Projekte_AOK_BaWue_UBericht.png"
                  excerpt="Digitaler Auftritt des Unternehmensberichts der AOK Baden-Württemberg"
                  tech={["Sass", "ChartJS", "Greensock", "Bulma", "Gulp"]}
                  description="Hier wurden Animationen und interaktive Grafiken via ChartJS eingesetzt."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link=""
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Mein Rheuma wird erwachsen"
                  meta="mrwe"
                  imgTeaser="mrwe-teaser.jpg"
                  cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                  highlight={["#Community", "#Quiz"]}
                  tag="Wordpress"
                  client="Deutsche Rheumaliga"
                  year="2015"
                  state="Online"
                  type="Website"
                  award="BCM Award Gewinner 2017 Gold, Comprix 2017 Gold"
                  imgMockup="Mockups-Projekte_MRWE.png"
                  excerpt="Zielgruppe sind rheumaerkrankte Jugendliche, die vor dem Wechsel vom Kinder- zum Erwachsenen-Rheumatologen stehen. "
                  tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                  description="Die Website wurde mit einem Pagebuilder umgesetzt, damit die Redakteure die Möglichkeit haben nicht nur Inhalte zu ändern und zuzufügen, sondern eigene Module einzubauen."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="https://mein-rheuma-wird-erwachsen.de/"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Ihre Vorsorge"
                  meta="iv"
                  imgTeaser="IhreVorsorge-teaser.jpg"
                  cat="templates, sass, bootstrap, javascript"
                  highlight={["#Magazin", "#ImageMap"]}
                  tag="Typo3"
                  client="Deutsche Rentenversicherung"
                  year="2015"
                  state="Online"
                  type="Website"
                  award="Nope"
                  imgMockup="Mockups-Projekte_IhreVorsorge.png"
                  excerpt="Informationsportal rund um das Thema Vorsorge mit aktuellen Nachrichten, Forum und Rechner"
                  tech={["Typo3", "Sass", "Bootstrap", "Grunt"]}
                  description="Hier wurden die Module der Website zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="https://ihre-vorsorge.de"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="G+G"
                  meta="gg"
                  imgTeaser="gg-teaser.jpg"
                  cat="templates, sass, bootstrap, javascript"
                  highlight={["#Magazin", "#bla"]}
                  tag="Prototyp"
                  client="KomPart Verlagsgesellschaft"
                  year="2017"
                  state="Online"
                  type="Prototyp"
                  award="Nope"
                  imgMockup="Mockups-Projekte_g-und-g.png"
                  excerpt="Online Magazin der Zeitschrift 'Gesundheit und Gesellschaft'. Das ist das AOK-Forum für Politik, Praxis und Wissenschaft."
                  tech={["Sass", "Bootstrap", "webpack"]}
                  description="Hier wurden die Module der Website zunächst in statischen Code umgesetzt, um sie dann in das CMS Typo3 übertragen zu lassen."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="http://mdk-prototyp.vorschau70.wdv.de"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Schwäbisch Hall Beratungsspiel"
                  meta="bsh"
                  imgTeaser="bsh-teaser.jpg"
                  cat="templates, sass, bootstrap, javascript"
                  highlight={["#Interactive", "#Quiz"]}
                  tag="Wordpress"
                  client="Schwäbisch Hall"
                  year="2016"
                  state="Online"
                  type="Website (intern)"
                  award="Nope"
                  imgMockup="Mockups-Projekte_BSH.png"
                  excerpt="Quizspiel für interne Schulungen der zukünftigen Berater der Schwäbisch Hall."
                  tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                  description="Auf Basis eines vorgefertigten Quizmoduls wurde für das Beraterspiel entsprechende Anpassungen gemacht."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="https://bsh-beraterspiel.vorschau.wdv.de/"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Fit durch die Schule"
                  meta="fdds"
                  imgTeaser="fdds-teaser.jpg"
                  cat="wordpress, themes, templates, sass, bulma, php, javascript, technisches-konzept"
                  highlight={["#Relaunch", "#ScrollieJS"]}
                  tag="Wordpress"
                  client="AOK Rheinland-Hamburg"
                  year="2017"
                  state="Offline"
                  type="Website"
                  award="Nope"
                  imgMockup="Mockups-Projekte_FDDS.png"
                  excerpt="Initiative des Nordrhein-westfälische Schulministeriums und der AOK Rheinland/Hamburg zur Förderung  von mehr Bewegung. "
                  tech={["Wordpress", "Scrollie.js"]}
                  description="Die Website wurde mit einem Pagebuilder erstellt."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="https://fitdurchdieschule.de.integration70.wdv.de"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Abenteuer und Reisen"
                  meta="ar"
                  imgTeaser="a-und-r-teaser.jpg"
                  cat="wordpress, themes, templates, sass, bootstrap, php, javascript"
                  highlight={["#Magazin", "#Blog", "#Shop"]}
                  tag="Wordpress"
                  client="Abenteuer und Reisen"
                  year="2015"
                  state="Online"
                  type="Website"
                  award="Nope"
                  imgMockup="Mockups-Projekte_AundR.png"
                  excerpt="Deutschlands großes digitales Reisemagazin mit Reiseberichten, -tipps und weiteres."
                  tech={["Wordpress", "Sass", "Bootstrap", "Grunt"]}
                  description=""
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link="https://www.abenteuer-reisen.de"
                />
              </div>
              <div className="carousel-item">
                <PortfolioItem
                  title="Mediaportal"
                  meta="aok"
                  imgTeaser="aok-bawue-presse-teaser.jpg"
                  cat="templates, sass, bootstrap, javascript"
                  highlight={["#Relaunch", "#PHTML"]}
                  tag="OpenText"
                  client="AOK Baden-Württemberg"
                  year="2015"
                  state="Offline"
                  type="Website"
                  award="Nope"
                  imgMockup="Mockups-Projekte_AOK_BaWue_Presse.png"
                  excerpt="Das Media- und Politikportal der AOK Baden-Württemberg."
                  tech={["OpenText", "Sass", "Bootstrap", "Grunt"]}
                  description="Relaunch des vorhandenen Auftritts des Medienportals der AOK Baden-Württembergs."
                  images={[
                    { image: "apovena-teaser.jpg" },
                    { image: "apovena-teaser.jpg" },
                  ]}
                  link=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
