import React from 'react'

const StatsInfo = () => {
  return (
    <section>
        <div className="section__title">
            
            <h2>Advanced Statistics</h2>
            
            <p>Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>

        </div>


        <div className="section__content stats__ercepts">

            <article>
                
                <div className="ercept__icon">
                    <img src="/images/icon-brand-recognition.svg" alt="Brand recognition"/>
                </div>

                <div className="ercept__content">

                    <h4 className='ercept__content--title'>Brand Recognition</h4>

                    <p className='ercept__content--content'>
                        Boost your brand recognition with each click. Generic links don't
                        mean a thing. Branded links help instil confidence in your content.
                    </p>

                </div>

            </article>

            <article>
                
                <div className="ercept__icon">
                      <img src="/images/icon-detailed-records.svg" alt="Detailed record"/>
                </div>

                <div className="ercept__content">

                    <h4 className='ercept__content--title'>Detailed Records</h4>

                    <p className='ercept__content--content'>
                        Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.
                    </p>

                </div>

            </article>

            <article>
                
                <div className="ercept__icon">
                      <img src="/images/icon-fully-customizable.svg" alt="fully customizable"/>
                </div>

                <div className="ercept__content">

                    <h4 className='ercept__content--title'>Fully Customizable</h4>

                    <p className='ercept__content--content'>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>

                </div>

            </article>

        </div>
    </section>
  )
}

export default StatsInfo