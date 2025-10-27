import React from 'react'
import { HairData } from '../serviceData/HairData'
import styles from '../styles/Services.module.css'
import { AnimateButton } from '../utils/AnimateButton'
import { Link } from 'react-router-dom'

const HairComponent = () => {
    return (
        <div className={styles.componentContainer}>
            <div>
                <h1>Haircare</h1>
                <p>
                    Hair artistry with care at the centre. All services are tailored for
                    all hair textures, using health-conscious products that protect the
                    integrity of your hair and scalp. We work with colour ranges derived
                    from natural ingredients, infused with coconut oil, PPD-free formulas,
                    and vegan options.
                </p>
            </div>
            <div className={styles.serviceContainer}>
                {HairData.map((d) => (
                    <div key={d.index} className={styles.grid}>
                        <h2>{d.heading}</h2>
                        <p>{d.content}</p>
                    </div>
                ))}
            </div>
            <div className={styles.contactButtonWrapper}>
                <Link to="/contactme">
                    <AnimateButton className={styles.servicetButton}>
                        Book a consultation
                    </AnimateButton>
                </Link>
            </div>
            <div>
                <p>
                    Please note: A patch test is required at least 48 hours prior to any
                    colour service your safety and scalp health always come first.
                </p>
            </div>
        </div>
    )
}

export default HairComponent