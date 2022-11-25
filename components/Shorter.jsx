import React, { useEffect, useState } from 'react';


const baseApi = 'https://api.shrtco.de/v2';
const shortenEndpoint = `${baseApi}/shorten/`;

const ERROR_AND_MESSAGE = {
    1:"Please add a link",
    2:"Invalid url",
    3:"Try again",
    4:"Cannot generate link",
    5:"shortcode already taken/in use",
    6:"Unknown error",
    10:"Cannot shorten this link"
}

const DEFAULT_ERROR_MESSAGE = "Cannot generate link";
const Shorter = () => {

    const [eneteredUrl, setEnteredUrl] = useState('');
    const [error, setError] = useState(null);
    const [shortenedUrls, setShortenedUrls] = useState({});


    const [loading, setLoading] = useState(false);

    const [copiedLinkUrl, setCopiedLinkUrl] = useState(null);



    const handleSubmit = async(e)=>{

        e.preventDefault();

        if(loading) return

        const url = `${shortenEndpoint}?url=${eneteredUrl}`;
        
        fetch(url, {
            method:"GET"
        })
        .then((res)=>res.json())
        .then(data=>{

            const { ok, error_code,  result } = data;

            if (!ok) {

                const error_message = ERROR_AND_MESSAGE[error_code] ?? DEFAULT_ERROR_MESSAGE;

                setError(() =>  error_message);

            }else{
                const { full_short_link } = result;

                setShortenedUrls((prev) => {

                    prev[eneteredUrl] = full_short_link;

                    return { ...prev };
                });
            }

            
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err)
            setError(() => DEFAULT_ERROR_MESSAGE);
            setLoading(false);
        })

        setError(null);
        setLoading(true);

    }

    const copyText = async(url)=>{

        await navigator.clipboard.writeText(url);

        setCopiedLinkUrl(()=>url);

    }

    



    return (
        <section className='deep'>

            <div className="section__content shorter__content">
            
                <form className="shorter__actions" onSubmit={handleSubmit}>

                    
                    <div className="form_input" data-error={Boolean(error)} data-loading={loading}>
                        <input 
                            type="text" 
                            placeholder='Shorten a link here...'
                            onChange={(e)=>{
                                e.preventDefault();

                                setEnteredUrl(()=>e.target.value);
                                setError(null);
                            }}

                            value={eneteredUrl}
                        />

                        <span className='error_message'>{error}</span>
                    </div>

                        <button type="submit" className='btn'>
                            {loading ? "Loading...":"Shorten It!"}
                        </button>
                    
                </form>


                <div className="shorter__lists">

                    {
                        Object.entries(shortenedUrls).map(([url, shortLink], i)=>{
                            
                            const copied = Object.is(copiedLinkUrl, url);
                            
                            
                            return (
                                <div className="shorter__lists--item" key={i}>
                                    <span>{url}</span>

                                    <div>
                                        <span>{shortLink}</span>

                                        <input 
                                            type="button" 
                                            data-copied={copied} 
                                            value={copied ? "Copied!" :"Copy" }
                                            onClick={() => copyText(url)}

                                        />
                                    </div>
                                </div>       
                            )
                        })
                    }

                </div>
                
            </div>
        </section>
    )
}

export default Shorter