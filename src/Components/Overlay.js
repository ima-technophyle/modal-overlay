import React from 'react'
import styled from 'styled-components'

export default function Overlay({children, handleClick, overlayRef}) {
    return (
        <OverlayWrapper>
            {children}
            <OverlayBG ref = {overlayRef} onClick = {handleClick}/>
        </OverlayWrapper>
    )
}

const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999999;
`
const OverlayBG = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3d3d3d;
    opacity: 0.8;
`