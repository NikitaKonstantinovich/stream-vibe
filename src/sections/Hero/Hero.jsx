import './Hero.scss'

const Hero = () => {
        const playButtonTitile = 'Play Video'

    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__pano">
                <div className="hero__pano-inner container">
                    <button
                        className="hero__play-button"
                        type="button"
                        aria-label={playButtonTitile}
                        title={playButtonTitile}
                    >
                        <img
                            src="/play.svg"
                            alt=""
                            className="hero__play-button-image"
                            width={470}
                            height={470}
                        />
                    </button>
                </div>
            </div>
            <div className="hero__body">
                <div className="hero__pano-inner container">

                </div>
            </div>
        </section>
    )
}

export default Hero