import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button'
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        
       <button 
            onclick = {e => props.click && props.click(props.label)}
            className = {classes}>
            {props.label}
        </button> 
    )
}
    
    


{/*Conteúdo JS puro, utilizando $ {} para interpolação
    <button className = {`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
        </button> 
        
*/}