import React, { Component } from "react"
import Modal from "../modal"
import PortfolioImage from "./portfolio-image"
import PortfolioImageMockup from "./portfolio-image-mockup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class PortfolioItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState

      return { modalState: newState }
    })
  }

  render() {
    const Techs = () =>
      this.props.tech &&
      this.props.tech.map(function(techs, i) {
        return (
          <span key={i} className="tag">
            {techs}
          </span>
        )
      })

    const Tasks = () =>
      this.props.task &&
      this.props.task.map(function(tasks, i) {
        return <li key={i}>{tasks}</li>
      })

    const Awards = () =>
      this.props.award &&
      this.props.award.map(function(awards, i) {
        return (
          <><p key={i} className="title">{awards}</p></>
        )
      })

    return (
      <div className="card is-equal-height">
        <a
          className="modal-button"
          data-target={"modal-" + this.props.meta}
          title={this.props.title}
          onClick={this.toggleModal}
          onKeyDown={this.toggleModal}
          role="button"
          tabIndex={0}
        >
          <div className="card-image">
            <PortfolioImageMockup
              img={this.props.imgMockup}
              title={this.props.title}
            />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="tags">
                  <span className="tag small is-rounded">{this.props.tag}</span>
                </div>
                <h3>{this.props.title}</h3>
              </div>
            </div>

            <div className="content">
              <p>{this.props.excerpt}</p>
            </div>
          </div>

          <footer className="card-footer">
            <div className="card-footer-item">
            <span className="highlights">{this.props.highlight}</span>
            </div>
            <div className="card-footer-item">
            <span className="icon is-small">
              <FontAwesomeIcon
                className="card-icon"
                icon={["fas", "arrow-circle-right"]}
              ></FontAwesomeIcon>
            </span>
            </div>
         
          </footer>
        </a>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title={this.props.title}
        >
          <section className="modal-card-body">
            <h1 className="has-text-centered">{this.props.title}</h1>
            <hr className="center" />
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2 className="title">Beschreibung</h2>
                  <p>{this.props.excerpt}</p>
                  <p>{this.props.description}</p>
                </div>
              </div>
              <div className="column">
                <PortfolioImageMockup
                  img={this.props.imgMockup}
                  title={this.props.title}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2 className="title">Facts</h2>

                  <div className="box facts">
                    <nav className="level">
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="heading">Kunde</p>
                          <p className="title">{this.props.client}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="heading">Jahr</p>
                          <p className="title">{this.props.year}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="heading">Status</p>
                          <p className="title">{this.props.state}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="heading">Typ</p>
                          <p className="title">{this.props.type}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                      <div>
                      <p className="heading">Award</p>
                      <Awards/>
                      </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h2 className="title">Mein Einsatz</h2>
                <ul className="border">
                  <Tasks />
                </ul>
              </div>
              <div className="column">
                <h2 className="title">Technologie</h2>

                <div className="tags">
                  <Techs />
                </div>
              </div>
            </div>
            <h2 className="title">Screenshots</h2>
            <PortfolioImage
              project={this.props.meta}
              title={this.props.title}
            />
          </section>
          <footer className="modal-card-foot has-text-centered">
            <a
              href={this.props.link}
              className="button btn-transparent is-outlined"
            >
              <span>Zum Projekt</span>{" "}
              <span className="icon is-small">
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                ></FontAwesomeIcon>
              </span>
            </a>
          </footer>
        </Modal>
      </div>
    )
  }
}

export default PortfolioItem
