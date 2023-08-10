import Image from 'next/image';
import styles from './style.module.css';

const images = [
    "" //images here
]

export default function Index() {
    return (
        <div className={styles.gallery}>
            <div className='galleryBody'>
                <Column images={[images[0], images[1], images[2]]} />
                <Column images={[images[3], images[4], images[5]]} />
                <Column images={[images[6], images[7], images[8]]} />
            </div>
        </div>
    )
}

const Column = ({images}) => {
    return (
        <div className={styles.column}>
            {
                images.map((src, index) => {
                    return <div key={index} className={styles.imageContainer}>
                        <Image 
                            src={`/images/${src}`}
                            fill
                            alt="image"
                        />
                    </div>
                })
            }
        </div>
    )
}