import React, { Component } from "react"
import Modal from "../modal"
import PortfolioImage from "./portfolio-image"
import PortfolioImageTeaser from "./portfolio-image-teaser"
import PortfolioImageMockup from "./portfolio-image-mockup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





class PortfolioItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
    console.log(props);

    

  
    
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState

      return { modalState: newState }
    })
  }

  
 

  render() {

 
     const Techs  = () => (
      this.props.tech.map(function(techs, i){
        return (
          <span className="tag">{techs}</span>
        );
      })
    ) 

   
   

    return (
      <div className="column is-4">
      <div
        className="card"

      >
        <a
          className="modal-button"
          data-target={"modal-" + this.props.meta}
          title={this.props.title}
          onClick={this.toggleModal}
        >
          


 <div className="card-image">
    
   {/*  <PortfolioImageTeaser img={this.props.imgTeaser} /> */}
    <PortfolioImageMockup img={this.props.imgMockup} />
   
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

  <footer className="card-footer has-text-right">
  <div className="highlights">
           
           {this.props.highlight}
          
         </div>
    <span className="icon is-small">
    <FontAwesomeIcon className="card-icon" icon={[ 'fas', 'arrow-circle-right']}></FontAwesomeIcon>
    </span>
        </footer>

        </a>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title= {this.props.title}
        >
            <section className="modal-card-body">
          <h1 className="has-text-centered">{this.props.title}</h1>
          <hr className="center"/>
          
          <PortfolioImageMockup img={this.props.imgMockup} />
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
      <p className="title">{this.props.award}</p>
    </div>
  </div>
</nav>
            
          </div>
          
          <h2 className="title">Technologie</h2>
         
          <div className="tags">
     <Techs/> 
          </div>
          <h2 className="title">Beschreibung</h2>
        
          <p>
          {this.props.excerpt}
          </p>
          <p>
          {this.props.description}
          </p>

          <PortfolioImage project={this.props.meta} />
          </div>
        </section>
        <footer className="modal-card-foot has-text-centered">
          <a href={this.props.link} className="button btn-transparent is-outlined"><span>Zum Projekt</span> <span class="icon is-small">
          <FontAwesomeIcon  icon={[ 'fas', 'angle-right']}></FontAwesomeIcon>
</span></a>
        </footer>
        </Modal>
     
    
      </div>
      </div>
    )
  }
}

export default PortfolioItem
