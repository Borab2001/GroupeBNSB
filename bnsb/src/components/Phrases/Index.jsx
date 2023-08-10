import styles from './style.module.css';

export default function Phrase() {
    const phrase = "Innovation translates an idea into a reality in Business, Process and Product. We help company to create a new fashion system with high degree of flexibility through innovation and sourcing process with our designers and experts.";

    const splitWords = () => {
        let body = []
        phrase.split(" ").forEach((word, index) => {
            const letters = splitLetters(word);
            body.push(<p key={`word_${index}`}>{letters}</p>)
        })
        return body;
    }

    const splitLetters = (word) => {
        let letters = [];
        word.split("").forEach((letter, index) => {
            letters.push(<span key={`letter_${index}`}>{letter}</span>)
        })
        return letters;
    }

    return (
        <div className={styles.phrase}>
            {
                splitWords()
            }
        </div>
    )
}