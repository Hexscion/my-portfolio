import background from '/src/assets/Background.PNG';
import hill_back from '/src/assets/Hill Back.PNG';
import hill_front from '/src/assets/Hill Front.PNG';
import land_back from '/src/assets/Land Back.PNG';
import tree_1 from '/src/assets/Tree 1.PNG';
import tree_2 from '/src/assets/Tree 2.PNG';
import tree_3 from '/src/assets/Tree 3.PNG';
import land_front from '/src/assets/Land Front.PNG';
import cloud_1 from '/src/assets/Cloud 1.PNG';
import cloud_2 from '/src/assets/Cloud 2.PNG';
import birds from '/src/assets/Birds.PNG';
import react_logo from '/src/assets/react.svg';
import { useSpring, useSprings, animated } from '@react-spring/web';
import { useMove } from '@use-gesture/react';
import { useSpringRef, useChain } from '@react-spring/web';
import { RootContext } from '../pages/Root';
import { useContext, useEffect } from 'react';

export default function Hero() {
    const {headerHeight, setHeaderHeight} = useContext(RootContext);

    const [containerStyle, containerApi] = useSpring(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const sectionHeight = (windowWidth * (windowHeight / windowWidth)) - headerHeight

        return {
            maxHeight: `${sectionHeight}px`,
        }
    }, []);

    useEffect(() => {
        headerHeight != 0 && containerApi.start(() => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const sectionHeight = (windowWidth * (windowHeight / windowWidth)) - headerHeight
            
            return {
                maxHeight: `${sectionHeight}px`,
            }
        })
    }, [headerHeight]);

    const images = [
        { src: background, className: 'background', yInit: -100, speedx: 0.3, speedy: 0.5, speedz: 0, },
        { src: hill_back, className: 'hill-back', yInit: 100, speedx: 0.1, speedy: 0.1, speedz: 0.04, },
        { src: hill_front, className: 'hill-front', yInit: 100, speedx: 0.08, speedy: 0.08, speedz: 0.06, },
        { src: land_back, className: 'land-back', yInit: 100, speedx: 0.06, speedy: 0.06, speedz: 0.07, },
        { src: tree_1, className: 'tree-1', yInit: 100, speedx: 0.005, speedy: 0.035, speedz: 0.05, },
        { src: tree_2, className: 'tree-2', yInit: 100, speedx: 0.01, speedy: 0.04, speedz: 0.06, },
        { src: tree_3, className: 'tree-3', yInit: 100, speedx: 0.015, speedy: 0.045, speedz: 0.07, },
        { src: land_front, className: 'land-front', yInit: 100, speedx: 0.02, speedy: 0.03, speedz: 0.03, },
        { src: cloud_1, className: 'cloud-1', yInit: 100, speedx: 0.15, speedy: 0.11, speedz: 0.1, },
        { src: cloud_2, className: 'cloud-2', yInit: 100, speedx: 0.17, speedy: 0.13, speedz: 0.1, },
        { src: birds, className: 'birds', yInit: 100, speedx: 0.2, speedy: 0.2, speedz: 0.5, },
    ]
    const [styles, api] = useSprings(images.length, (index) => {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 725) {
            return { 
                transform : `perspective(2000px) translateX(calc(-50% + 0px)) translateY(calc(-50% + 0px)) translateZ(calc(0px))`,
            }
        }

        return { 
            from: {
                transform : `perspective(2000px) translateX(calc(-50% + 0px)) translateY(calc(${images[index].yInit}% + 0px)) translateZ(calc(0px))`,
            },
            to: [
                { transform : `perspective(2000px) translateX(calc(-50% + 0px)) translateY(calc(-50% + 0px)) translateZ(calc(0px))`,},
            ],
            config: {
                tension: 180, friction: 60,
            },
        }
    }, []);

    const titleRef = useSpringRef();
    const titleStyle = useSpring({
        ref: titleRef,
        from: { x: `calc(-200%)`, },
        to: { x: `calc(0%)`, },
        config: {
            tension: 280, friction: 60,
        },
    });

    const subtitleRef = useSpringRef();
    const subtitleStyle = useSpring({
        ref: subtitleRef,
        from: { x: `calc(-200%)`, },
        to: { x: `calc(0%)`, },
        config: {
            tension: 280, friction: 60,
        },
    });

    const reactLogoRef = useSpringRef();
    const [reactLogoStyle, reactLogoApi] = useSpring(() => {
        if (window.innerWidth <= 1300) return;
        
        return {
            ref: reactLogoRef,
            from: { opacity: 0, scale: 0, rotate: 0, },
            to: { opacity: 1, scale: 1, rotate: 360, },
            config: { tension: 280, friction: 120 },
            onResolve: () => {
                reactLogoApi.start({
                    from: { rotate: 0, },
                    to: { rotate: 360, },
                    loop: true,
                    config: { tension: 320, friction: 160 },
                })
            }
        }
    }, []);

    useChain([titleRef, subtitleRef, reactLogoRef], [0, 1, 5], 100);

    let [xPrevValue, yPrevValue] = ['', ''];
    const bind = useMove(({ xy: [x, y] }) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (((xPrevValue != '' && yPrevValue != '') && (Math.abs(xPrevValue-x) < (windowWidth / 20) && Math.abs(yPrevValue-y) < (windowHeight / 20))) 
        || windowWidth <= 725) {
            return;
        }

        const xValue = x - windowWidth / 2;
        const yValue = y - windowHeight / 2;

        xPrevValue = x;
        yPrevValue = y;

        api.start((index) => {
            const element = document.querySelector(`.${images[index].className}`);
            const isLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? -1 : 1;
            const zValue = (x - parseFloat(getComputedStyle(element).left)) * isLeft;
            return {
                to: {
                    transform : `perspective(2000px) 
                    translateX(calc(-50% + ${xValue * images[index].speedx}px)) 
                    translateY(calc(-50% + ${yValue * images[index].speedy}px)) 
                    translateZ(calc(${zValue * images[index].speedz}px))`,
                },
            }
        })
    });

    return (
        <animated.section className="parallax-container" {...bind()} style={containerStyle}>
            {
                styles?.map((style, index) => {
                    return (
                        <animated.img key={index} src={images[index].src} className={`parallax ${images[index].className}`} style={style} />
                    )
                })
            }
            <div className="intro-container">
                <animated.img src={react_logo} className="parallax react-logo" style={reactLogoStyle}/>
                <animated.h1 className="parallax parallax__title--intro" style={titleStyle}>
                    Hello, I am <strong className="parallax">Aldrick Rasquinha</strong>
                </animated.h1>
                <animated.p className="parallax parallax__subtitle--intro" style={subtitleStyle}>Front-End Developer</animated.p>
            </div>
        </animated.section>
    );
}