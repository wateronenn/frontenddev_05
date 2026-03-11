import styles from './card.module.css'
import Image from 'next/image'


export default function Card({venueName,imgSrc,venueDes} : {venueName:string, imgSrc:string,venueDes:string}){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt ='Product Picture'
                fill
                />
            </div>
            <div className={styles.cardText}>
                    <h1 className='text-3xl font-bold text-blue-500'>{venueName}</h1>
                    <h3 className='text-xl '>{venueDes}</h3>
            </div>
        </div>
    );
}