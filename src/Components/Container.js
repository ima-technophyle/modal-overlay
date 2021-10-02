import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import Overlay from './Overlay';

export default function Container() {
    
    const overlayRef = useRef(null);

    const [overlay, setOverlay] = useState(false);

    const handleClick = (e) => {

        if(overlayRef.current === e.target) {
            return setOverlay(false);
        }
        return setOverlay(true);
    }

    return (
        <Wrapper>

            {overlay && 
            
                <Overlay overlayRef = {overlayRef} handleClick = {handleClick} >
                    <Modal/>
                </Overlay>
            }

            <ButtonContainer>
                <Button onClick = {handleClick} >Click Me</Button>
            </ButtonContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`
const Button = styled.button`
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    outline: none;
`
const ButtonContainer = styled.div`
    width: 150px;
    height: 60px;
    padding: 10px;
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`