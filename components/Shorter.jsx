import React from 'react'

const Shorter = () => {
  return (
    <section>

        <div className="section__content">
        
            <div className="shorter__actions">

                <div className="form_input">
                    <input 
                        type="text" 
                        placeholder='Shorten a link here...' 
                    />

                    <span className='error_message'>An error message</span>
                </div>

                <button className='btn'>
                    Shorten It!
                </button>
            </div>


            <div className="shorter__lists">

                <div className="shorter_lists_item">
                    <span>https://sample.com</span>

                    <div>
                        <span>https://reLink.com/fdkens</span>

                        <input type="button" data-copied={false} value="Copy" />
                    </div>
                </div>

                <div className="shorter_lists_item">
                    <span>https://sample1.com</span>

                    <div>
                        <span>https://reLink.com/fdkets</span>

                        <input type="button" data-copied={true} value="Copied" />
                    </div>
                </div>

                <div className="shorter_lists_item">
                    <span>https://sample2.com</span>

                    <div>
                        <span>https://reLink.com/fghkens</span>

                        <input type="button" data-copied={false} value="Copy" />
                    </div>
                </div>

            </div>
            
        </div>
    </section>
  )
}

export default Shorter