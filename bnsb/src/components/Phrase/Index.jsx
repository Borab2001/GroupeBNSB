'use client';

import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Index() {
    
    // PHRASE FOR ONE PARAGRAPH
    // const phrase = "Innovation translates an idea into a reality in Business, Process and Product. We help company to create a new fashion system with high degree of flexibility through innovation and sourcing process with our designers and experts.";
    const phrase = "Innovation translates an idea into reality ";

    // PHRASE FOR MULRIPLE PARAGRAPHS
    // const phrases = [
    //     "Innovation translates an idea into a reality in Business, Process and Product. We help company to create a new fashion system with high degree of flexibility through innovation and sourcing process with our designers and experts.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida.",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a augue iaculis gravida."
    // ];

    const refs = useRef([])
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimations()
    }, []);

    const createAnimations = () => {
        gsap.to(refs.current, {
            opacity: 0.35,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top',
                end: `+=${window.innerHeight / 2.75}`,
                markers: false,
                scrub: true
            }
        })
    }

    // SPLITWORDS FOR ONE PARAGRAPH
    const splitWords = () => {
        let body = []
        phrase.split(" ").forEach((word, index) => {
            const letters = splitLetters(word);
            body.push(<p key={`word_${index}`}>{letters}</p>)
        })
        return body;
    }

    // SPLITWORDS FOR MULTIPLE PARAGRAPHS
    // const splitWords = () => {
    //     let body = [];
    //     phrases.forEach((phrase, phraseIndex) => {
    //         body.push(
    //             <p className={styles.sentences} key={`phrase_${phraseIndex}`}>
    //                 {phrase.split(" ").map((word, wordIndex) => (
    //                     <span key={`word_${phraseIndex}_${wordIndex}`}>
    //                         {splitLetters(word)}
    //                         {wordIndex < phrase.split(' ').length - 1 && ' '}
    //                     </span>
    //                 ))}
    //             </p>
    //         )
    //     })
    //     return body;
    // }

    const splitLetters = (word) => {
        let letters = [];
        word.split("").forEach((letter, index) => {
            letters.push(<span ref={el => {refs.current.push(el)}} key={`letter_${index}`}>{letter}</span>)
        })
        return letters;
    }

    return (
        <div ref={container} className={styles.phrase}>
            <div className={styles.phraseBody}>
                {
                    splitWords()
                }
            </div>
        </div>
    )
}