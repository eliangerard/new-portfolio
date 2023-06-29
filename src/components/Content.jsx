import './Content.css';
import { Card } from './content/card';
import { motion } from 'framer-motion';
export const Content = () => {

    return (
        <div>
            <div className='w-100 d-flex align-items-center justify-content-center' >
                <motion.div className="renglon">
                    <motion.div
                        className='main-card'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}
                    >
                        <h3>About</h3>
                        <p>
                            <b>Frontend developer</b> based in Mexico, specializing in React.
                            <br />
                            <br />
                            Pursuing a degree in Computer Systems Engineering.
                            <br />
                            <br />
                            Passionate about <b>creating</b>.
                            <br />
                            <br />
                            Seeking <b>impactful projects</b> and collaborative opportunities.
                            <br />
                            <br />
                            I speak <b>Spanish</b>, <b>English</b> and <b>!</b>Japanese <br />
                            (I don’t speak Japanese but I think it’s very cool)
                        </p>
                    </motion.div>
                    <motion.div
                        className='img-card'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}
                    >
                        <img src="./assets/me.webp" alt="" />
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center' >
                <motion.div className="renglon rr">
                    <motion.div
                        className='rounded-0 small-wrapper'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}
                    >
                        <motion.div className='secondary-card react'
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 'some' }}
                            variants={{
                                offscreen: {
                                    scale: 0.9,
                                    rotate: -0.2,
                                },
                                onscreen: {
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.5,
                                        delay: Math.random()/8
                                    }
                                }
                            }}>
                            <h4>React</h4>
                        </motion.div>
                        <motion.div className='secondary-card node'
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 'some' }}
                            variants={{
                                offscreen: {
                                    scale: 0.9,
                                    rotate: -0.2,
                                },
                                onscreen: {
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.5,
                                        delay: Math.random()/8
                                    }
                                }
                            }}>
                            <h4>Node.js</h4>
                        </motion.div>
                    </motion.div>
                    <motion.div className='main-card'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h3>Skills</h3>
                        <p>
                            <b>React</b> and <b>Node.js</b> with a strong foundation in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
                            <br />
                            <br />
                            Proficient in crafting engaging user interfaces and handling server-side development.
                            <br />
                            <br />
                            Currently pursuing a <b>degree</b> in Computer Systems Engineering, especialized as fullstack.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center' >
                <motion.div className="renglon">
                    <motion.div className='main-card'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h3>Projects</h3>
                        <p>
                            <b>Personal</b>, <b>school</b> and <b>course</b> projects, this is a collection of <b>hand-picked</b> projects, each representing my dedication to going the <b>extra mile</b> in my development journey.
                        </p>
                    </motion.div>
                    <motion.div className='secondary-card react tall'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h4>GPI</h4>
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center' >
                <motion.div className="renglon">
                    <motion.div className='secondary-card react large'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h4>MyGPT</h4>
                    </motion.div>
                    <motion.div className='secondary-card node small'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h4>SimpleTTS</h4>
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center' >
                <motion.div className="renglon">
                    <motion.div className='secondary-card node small'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h4>Memer</h4>
                    </motion.div>
                    <motion.div className='secondary-card react large'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 'some' }}
                        variants={{
                            offscreen: {
                                scale: 0.9,
                                rotate: -0.2,
                            },
                            onscreen: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.5,
                                    delay: Math.random()/8
                                }
                            }
                        }}>
                        <h4>NavegaTec</h4>
                    </motion.div>
                </motion.div>
            </div>
            <p className='andMore'>And more on my GitHub!</p>
        </div>

    )
}
