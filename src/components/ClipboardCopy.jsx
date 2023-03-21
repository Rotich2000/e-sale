import React, { useState } from 'react'
import './clipboard.css';

const ClipboardCopy = ({copyText}) => {

    const [isCopied, setIsCopied] = useState(false);

    const copyTextToClipboard = async(text) => {
        if('clipboard' in navigator){
            return await navigator.clipboard.writeText(text)
        }else{
            return document.execCommand('copy', true, text);
        }
    }

    const handleClick = () => {
        copyTextToClipboard(copyText)
        .then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false)
            },1500);
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
        <input className='text' type="text" value={copyText} />
        <button className='copyText' onClick={handleClick}>
            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
    </div>
  )
}

export default ClipboardCopy