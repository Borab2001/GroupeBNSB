import styles from './style.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Index() {

    return (
        <div className={styles.description}>
            {/* FIRST PART */}
            <AnimatedText>
                <h2>
                    Our Mission
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Innovation translates an idea into a reality in Business, Process and Product.
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    We help company to create a new fashion system with high degree of flexibility through innovation and sourcing process with our designers and experts.
                </p>
            </AnimatedText>


            {/* SECOND PART */}
            <AnimatedText>
                <h2>
                    Research &#124;  Design  &#124;  Development  &#124;  Execution
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Groupe BNSB Offering the full services from Design Conceptions, Production , QC &amp; Shipping – enables our customers to maximise high quality and brand identity.
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Our Creative &amp; Strategic thinking knowledge in the fashion industry will be bridging right designs with right producers considering your requests and expectations.
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Our partners are fully approved by Social Compliance Companies – Sedex &amp; BSCI, Fama for Licenced items. We follow up all order with a KPI supplier management.
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Our QC teams are experts in the field, that we currently perform the full process for all shipments. This enables us to deliver a consistently high standard of goods to all our customers.
                </p>
            </AnimatedText>


            {/* THIRD PART */}
            <AnimatedText>
                <h2>
                    Lab Design
                </h2>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Lab Design &amp; Market intelligence
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Fast Fashion Focus &amp; Consultancy for Sustainability Business
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Experience in European, Eastern Europe and Mena market
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Presentation every 3 weeks with inspiration, board &amp; sketch
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Graphic design support
                </p>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Exclusive print service
                </p>
            </AnimatedText>
            <AnimatedText>
                <p className={styles.lessMargin}>
                    Proactive organization
                </p>
            </AnimatedText>
            <AnimatedText>
                <span>
                    Focus on each client, analyse of brand, range product, price positioning, benchmark, built a collection according to the strategy of the client, and fashion industry way
                </span>
            </AnimatedText>
            <AnimatedText>
                <p>
                    R&amp;D for fabric, Yarn, accessories, services from the market
                </p>
            </AnimatedText>
        </div>
    )
}

function AnimatedText({children}) {

    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true
            },
            left: "-200px",
            opacity: 0
        })

    }, []);
    
    return (
        <div ref={text}>{children}</div>
    )
}