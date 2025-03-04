import React,{useRef,useEffect,useState} from 'react'
import ScrollReveal from "scrollreveal";
import styles from './home.module.css'
import { gsap } from "gsap";
import {Switch} from 'antd'


/* Images for home  */
import logo from '../../assets/Home/Asset 5.png'

export default function Home({ison, seton}) {
    


const firstLayer = useRef(null);
const secondLayer = useRef(null);
const span1 = useRef(null)
const span2 = useRef(null)
const span3 = useRef(null)

useEffect(() => {
    const tl = gsap.timeline();

    tl.to(span1.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        duration: 0.3,
        })
        .to(span2.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.3,
        })
        .to(span3.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        })

    .to(firstLayer.current, { y: -600, duration: 0.5, delay: 1.5 }) 
    .to(secondLayer.current, { y: -600, duration: 1}) 
      
}, []);

const sr = ScrollReveal({
    origin: "left",
    distance: "200px",
    duration: 2500,
    reset: false,
    delay: 400,
  });

sr.reveal(".left", { interval: 200 });


  return (
<div>
    <section className={styles.Hero}>

        {/* first part */}

        <div className={styles.intro}  ref={firstLayer}>
            <h1>
                <span className={styles.thinking} ref={span1} >THINKING</span>
                <br/>
                <span className={styles.design} ref={span2}><i>DESIGN?</i></span>
                <br/>
                <span className={styles.think} ref={span3}>THINK US!</span>
            </h1>
        </div>

        {/* middel part */}

        <div className={styles.transition} ref={secondLayer}>
        </div>

        {/* last part */}

        <div 
        className={styles.hero_container}
        style={ison ? { background: "url('./BULB.png') no-repeat center center/cover" } : { background: "" }}
        id='hero'
        >
            <div className={styles.bulb}>

                <div 
                className={styles.bulb_text} 
                style={{
                    visibility: ison ? "visible" : "hidden",
                    opacity: ison ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                  }}
                >

                    <img src={logo} alt="berenda logo" />
                    
                    <h1>
                        WHO WE ARE
                    </h1>
                    <p>
                    Berenda Technologies was founded a year ago by two friends driven by ambition and fueled by a vision, despite having limited resources. 
                    </p>
                    <br/>
                    <p className={styles.para}>
                    We began our journey as an advertising company with a deep focus on graphic design. For us, standing out in the industry wasn’t about finding a gimmick to sell to the public and saying “YEAH! THAT IS WHAT MAKES US DIFFERENT”—it's about consistently delivering exceptional services and results for the partners we serve.
                    </p>

                    <br/>

                    <p>
                        <strong>
                            <i>We want nothing more than to connect you to your audience on a DEEP LEVEL!</i>
                        </strong>
                    </p>

                </div>

                <div 
                className={styles.switch}
                style={{
                    transition: 'transform 0.5s ease-in-out',
                    transform: ison ? 'translateY(210px)' : 'translateY(0px)', 
                    position: ison? 'fixed' : 'relative',
                    zIndex: ison ? 100 : 0,
                    top: ison ? '50%' : 'auto',
                    left:ison ? '50%' : 'auto',
                  }}
                >
                    <Switch 
                    onChange={()=>{
                        seton((prev) => !prev)
                    }}
                    />
                </div>


                <div 
                className= {styles.bulb_img}
                style={{
                    visibility: ison ? "visible" : "hidden",
                    opacity: ison ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                }}
                >
                    <h2>EUREKA!</h2> 
                </div>
            </div>

            

        </div>

    </section>

    <section 
    className={styles.aboutus}
    style={ison ? { display:'block' } : { display:'none' }}
    id='about'
    >
        <div className={styles.us}>

        <div className={styles.about_img}>
               <img src={logo} alt="berenda logo" />
        </div>
            

          <div className={styles.about_text}>

            <div className={`${styles.mission} left`}>
                <h5>
                    <i>MISSION</i>
                </h5>
                <p>
                Support influential companies that stand for meaningful causes and help them forge authentic, lasting connections with their audience
                </p>
            </div>

            <div className={`${styles.vision} left`}>
                <h5>
                    <i>VISION</i>
                </h5>
                <p>
                We want to become the industry leading brand in design in Ethiopia and East Africa. 
                </p>
            </div>
          </div>

        </div>

    </section>

    <section 
    className={styles.corevalues}
    style={ison ? { display:'block' } : { display:'none' }}
    id='values'
    >
        <img src={logo} alt="berenda logo" />

        <h1>Core values</h1>
        <p>We are a Christian-led company. Our actions, ethics, and values are deeply rooted in our faith.</p>

        <div className={styles.values1}>

            <div className={styles.work}>
                <h6><i>Do Exceptional Work</i></h6>
                <p>
                Excellence is our standard; we aim to exceed expectations in everything we do.
                </p>
            </div>

            <div className={styles.connection}>
                <h6><i>Connections Over Finance</i></h6>
                <p>
                People matter more than profits. We value your relationship with us above any transaction.
                </p>
            </div>

            <div className={styles.integrating}>
                <h6><i>Unwavering Integrity</i></h6>
                <p>
                We stand firm in ethical business practices, never engaging in malpractice of any kind.
                </p>
            </div>
        </div>

        <div className={styles.values2}>

            <div className={styles.usefull}>
                <h6><i>Be Truly Useful to Clients</i></h6>
                <p>
                We prioritize genuine solutions, even if it means recommending services beyond our own.
                </p>
            </div>

            <div className={styles.give_back}>
                <h6><i>Give Back to the Community</i></h6>
                <p>
                We recognize our privilege and strive to create a positive impact in society.
                </p>
            </div>
            
            </div>
       

        <div className={styles.values_text}>
            <p>The Earth's core is solid at its center despite extreme heat and pressure</p>
        </div>
    </section>
</div>
    
  )
}
