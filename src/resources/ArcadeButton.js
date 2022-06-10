import button from '../resources/button.png'
import buttonPressed from "../resources/button-pressed.png"
import { useState, useEffect } from 'react';

function ArcadeButton(){

    const [pressed, setPressed] = useState(false)

    var sites = [
        'https://2i-gkane.github.io/Random-Item-Picker/',
        'https://carlachiodi-2i.github.io/CodingWeeklyTasks/Challenge6-Wheel/mk-wheel/index.html',
        'https://crmcleod.github.io/wheelspin/',
        'https://spinner-ms.web.app'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        window.location = sites[i];
    }

    function onPress() {
        setPressed(!pressed)
        randomSite()
    }

    if(!pressed){
        return(
            <img src={button} onClick={() => onPress()}/>
        )
    }

    if(pressed){
        return(
            <img src={buttonPressed} onClick={() => setPressed(!pressed)}/>
        )
    }

    

}

export default ArcadeButton