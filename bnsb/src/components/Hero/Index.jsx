import styles from './style.module.css';
import Image from 'next/image';

export default function Index() {
    return (
        <div className={styles.hero}>
            <h2>Innovation translates an idea into reality</h2>
            <div className={styles.heroImages}>
                <div className={styles.heroLeft}>
                    <div className={styles.heroTopLeftImage}>
                        <Image 
                            src="/images/11.webp"
                            alt='image'
                            fill
                        />  
                    </div>
                    <div className={styles.heroBottomLeft}>
                        <div className={styles.heroBottomLeftSmallImage}>
                            <Image 
                                src="/images/10.webp"
                                alt='image'
                                fill
                            />
                        </div>
                        <div className={styles.heroBottomLeftMediumImage}>
                            <Image 
                                src="/images/9.webp"
                                alt='image'
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.heroRight}>
                    <Image 
                        src="/images/11.webp"
                        alt='image'
                        fill
                    />
                </div>
            </div>
        </div>
    )
}