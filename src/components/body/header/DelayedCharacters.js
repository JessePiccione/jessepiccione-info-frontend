import React from 'react';
function DelayedCharacters(props){
    const word = props.word;
    let arr = word.split('');
    const [classState, setState] = React.useState(props.className+'py-letters initial-'+props.className);
    function toggleInitialAnimation(e){
        setState(props.className+'py-letters')
    }
    return (
        <div className={classState}>
            {arr.map((char,index,arr) =>{
                return (char!==' ')?
                <p key={index} style={
                    {
                        animationDelay:`${0.05*index}s`
                    }
                }
                onAnimationEnd={
                    (classState!==props.className+'py-letters' && index === arr.length-1)?
                    toggleInitialAnimation
                    :null}>{char}</p>
                :' '
            })}
        </div>
    )
}

export default DelayedCharacters