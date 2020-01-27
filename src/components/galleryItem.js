import React, { useState } from "react"
import Img from 'gatsby-image'
import Modal from "../components/modal"
import galleryItemStyles from '../css/galleryItem.module.scss'


const GalleryItem=(props)=>{
    const fluid = props.fluid;
    const [show, setShow] = useState(false);
    const showModal = e => {
        setShow(!show);
      };
    
    return (
        <button tabindex="0" role ="button" className={galleryItemStyles.imgContainer} onClick={e => {
            showModal(e);
       }} onKeyDown={e => {
        showModal(e);
   }}>
            <Img fluid={fluid}/>
            <Modal show={show}>
                <Img fluid={fluid}/>
            </Modal>
        </button>
    )
    
}
export default GalleryItem;