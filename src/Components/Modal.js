import React from 'react'
import styled from 'styled-components'

export default function Modal() {
    return (
        <ModalWrapper/>
    )
}

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 2;
    width: 90%;
    max-width: 600px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    border-radius: 10px;
`
