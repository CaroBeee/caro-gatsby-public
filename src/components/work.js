import React, { Component } from "react";

class Work extends React.Component {
    
    render() {
      return ( 
        <section
        id="experience"
        className="columns"
   
      >
        <div className="column is-5 is-offset-1 offset-lt">
          <h2 className="title">Berufliche Laufbahn</h2>
          <hr />
          <div className="timeline-centered">
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                  JANUAR 2019 - bis heute
                </div>
                <h3 className="company">wldmr_, Spin-Off des wdv</h3>
                <p className="designation">CREATIVE UI DEVELOPER</p>
                <p className="description">
                  Innovationsteam von 12 Personen innerhalb des wdv mit dem Schwerpunkt Design Thinking
                </p>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                  NOVEMBER 2014 - JANUAR 2019
                </div>
                <h3 className="company">wdv</h3>
                <p className="designation">WEB-FRONTEND ENTWICKLERIN</p>
                <p className="description">
                  Umsetzung und Weiterentwicklungen von Webseiten
                </p>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                  August 2011 - Juli 2014
                </div>
                <h3 className="company">CBC - RTL Mediengruppe</h3>
                <p className="designation">Technische Assistentin</p>
                <p className="description">
                Qualitätskontrolle für die Mediengruppe Deutschland (RTL, RTL Nitro, VOX, Digitale Sparten)
Technisch qualitative Prüfung und Abnahme von Sendematerial.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="column is-5  offset-rt">
          <h2 className="title">Ausbildung</h2>
          <hr />
          <div className="timeline-centered">
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                  August 2011 - August 2014
                </div>
                <h3 className="company">Master of Science</h3>
                <p className="designation">Fachhochschule Düsseldorf</p>
                <p className="description">
                  Masterstudium Medieninformatik
                </p>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                  September 2006 - Juli 2011
                </div>
                <h3 className="company">Bachelor Of Engineering</h3>
                <p className="designation">Fachhochschule Düsseldorf</p>
                <p className="description">
                  Bachelorstudium Medientechnik
                </p>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-entry-inner">
                <div className="timeline-icon"></div>
                <div className="timeline-label">
                 April 2003 - Juni 2006
                </div>
                <h3 className="company">Mediengestaltung für Bild und Ton</h3>
                <p className="designation">VCC Perfect Pictures</p>
                <p className="description">
                  Postproduktion für Werbung und Film
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

)
}
};

export default Work