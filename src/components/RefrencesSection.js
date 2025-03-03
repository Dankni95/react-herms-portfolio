import React from 'react'

import Toggle from './Toggle';

import styled from 'styled-components';
import {About} from '../styles'

//Animation
import { AnimateSharedLayout } from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../Animation';

const RefrencesSection = () => {

   const [element, controls] = useScroll();

    return (
        <Ref variants={scrollReveal} animate={controls} ref={element}>
            <h2><span>Re</span>frences</h2>

            <AnimateSharedLayout>
                <Toggle  title="Zeipt, TheFactory Accelerator">
                    <div  className="description">
                        <p className="ref_p">"This guys is one trusted guy. He delivers exactly what you want him to deliver. I recommend this guy at the highest."</p> 
                    </div>
                </Toggle>
        
                <Toggle title="Others">
                    <div className="description">
                    <p className="ref_p">"This guys is one trusted guy. He delivers exactly what you want him to deliver. I recommend this guy at the highest."</p>  
                    </div>
                </Toggle>
                <Toggle title="Others">
                    <div className="description">
                    <p className="ref_p">"This guys is one trusted guy. He delivers exactly what you want him to deliver. I recommend this guy at the highest."</p>  
                    </div>
                </Toggle>
                <Toggle title="Others">
                    <div className="description">
                    <p className="ref_p">"This guys is one trusted guy. He delivers exactly what you want him to deliver. I recommend this guy at the highest."</p>  
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Ref>
    )
};

const Ref = styled(About)`
display: block;

span {
    display: block;
}

h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
}



.line {
    background: #313131;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
`

export default RefrencesSection;