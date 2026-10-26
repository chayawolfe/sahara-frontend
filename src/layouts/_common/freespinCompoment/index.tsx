import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// apis
import { set_free_bonus, get_free_bonus } from 'src/api/game';

import ViewHistory from './spinhistory/index';

import './main.css';
import MTImg from './spinfile/dt-icon.png';
import WheelImg from './spinfile/wheel.png';

import WheelLightImg from './spinfile/wheel-light.png';
import WheelDiamonds from './spinfile/wheel-diamonds.png';
import Selector from './spinfile/selector.png';
import BTNtitle from './spinfile/btn-title.png';
import Banner from './spinfile/banner.png';

import LuckyCoin from './spinfile/lucky-lottery-coins.png';
import LuckyLottery from './spinfile/lucky-lottery.png';

export default function GiftPopover() {
    const [win, setWin] = useState(true);
    const [value, setValue] = useState(0);
    const [availableTime, setAvailableTime] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });

    const spinArray = [100, 0.5, 0.5, 0.1, 0.1, 0, 0, 50, 30, 20, 10, 5, 2, 1, 1, 7];
    const spinValArray = [30, 50, 0, 0, 0.1, 0.1, 0.5, 0.5, 100, 7, 1, 1, 2, 5, 10, 20];

    const spin = () => {
        // 22.5
        const ang = 22.5;
        // 6s
        const duration = 6;
        // 0.02s
        const intTimer = 20;
        // total times
        const times = (duration * 1000) / intTimer;
        // selected value
        const selectedIndex = Math.floor(Math.random() * 15);

        let index = 0;
        let halfTimes = times / 2;

        const totalAngel = 5 * 360 + selectedIndex * ang;
        const speed1 = totalAngel / (times / 2);
        let totalDeg = 0;

        const interval = setInterval(() => {
            index += 1;
            if (index <= times / 2) {
                totalDeg += (speed1 / (times / 2 + 1)) * index;
            } else {
                totalDeg += (speed1 / (times / 2 + 1)) * halfTimes;
                halfTimes -= 1;
            }

            const wheel: any = document.getElementById('wheel');
            wheel.style.transform = `rotate(${totalDeg}deg) translateZ(0px)`;

            if (index === times) {
                clearInterval(interval);
                setValue(spinValArray[selectedIndex]);
                setTimeout(() => {
                    setWin(false);
                    set_free_bonus(spinValArray[selectedIndex]);
                }, 2000);
            }
        }, intTimer);
    };

    const init = async () => {
        const result = await get_free_bonus();
        console.log('init', result);
        if (24 - result.diffTime.hour <= 0) {
            setAvailableTime({
                hour: 0,
                minute: 0,
                second: 0
            });
        } else {
            setAvailableTime({
                hour: 23 - result.diffTime.hour,
                minute: 59 - result.diffTime.minute,
                second: 59 - result.diffTime.second
            });
        }
    };

    const [openHistory, setOpenHistory] = useState(true);

    const viewHistory = async () => {
        setOpenHistory(false);
    };

    useEffect(() => {
        init();
    }, []);

    // setTimeout(() => {
    //     if (availableTime.second > 0) {
    //         setAvailableTime({ ...availableTime, second: availableTime.second - 1 });
    //         if (availableTime.second - 1 === 0) {
    //         setAvailableTime({ ...availableTime, second: 59,minute });

    //         }
    //     }
    // }, 1000);

    return (
        <>
            {openHistory ? (
                <>
                    {win ? (
                        <div className="wheel-game">
                            <div className="wheel-game__roulette-wrapper">
                                <div className="roulette-game__container">
                                    <div className="roulette-game__wheel" id="wheel">
                                        <div className="roulette-game__wheel-wrapper">
                                            <div className="loadable-image__container loadable-image__container_loaded">
                                                <img
                                                    className="loadable-image__image loadable-image__image_loaded roulette-game__img roulette-game__img_wheel"
                                                    src={WheelImg}
                                                    alt="wheel"
                                                />
                                            </div>
                                            <div className="roulette-game__data-on-wheel">
                                                <div className="roulette-game__data-on-wheel__container">
                                                    {spinArray.map((item, key) => (
                                                        <div key={key} className="roulette-game__data-on-wheel__item">
                                                            <div className="roulette-game__data-on-wheel__icon">
                                                                <img
                                                                    className="wheel-game__currency-icon"
                                                                    src={MTImg}
                                                                    alt="item.name"
                                                                />
                                                            </div>
                                                            <div className="roulette-game__data-on-wheel__value">
                                                                {item}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="loadable-image__container loadable-image__container_loaded roulette-game__img roulette-game__img_light">
                                            <img
                                                className="loadable-image__image loadable-image__image_loaded"
                                                src={WheelLightImg}
                                                alt="wheel-light"
                                            />
                                        </div>
                                        <div className="loadable-image__container loadable-image__container_loaded roulette-game__img roulette-game__img_diamonds">
                                            <img
                                                className="loadable-image__image loadable-image__image_loaded"
                                                src={WheelDiamonds}
                                                alt="diamonds"
                                            />
                                        </div>
                                    </div>
                                    <img src={Selector} className="roulette-game__selector-img" alt="selector" />
                                    <div className="roulette-game__spin-btn">
                                        <div className="roulette-game__spin-btn_container">
                                            <img src={BTNtitle} className="roulette-game__spin-btn_text" alt="" />
                                        </div>
                                    </div>
                                    <div className="roulette-game__bottom-heading">
                                        <div className="loadable-image__container loadable-image__container_loaded">
                                            <img
                                                className="loadable-image__image loadable-image__image_loaded roulette-game__bottom-heading_img"
                                                src={Banner}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    {availableTime.hour === 0 &&
                                    availableTime.second === 0 &&
                                    availableTime.minute === 0 ? (
                                        <button
                                            onClick={spin}
                                            className="roulette-game__btn-spin"
                                            aria-label="spin"
                                            type="button"
                                        >
                                            <div className="roulette-game__btn-spin_inner">Free Spin</div>
                                        </button>
                                    ) : (
                                        <Stack>
                                            <button className="roulette-game__btn-spin" aria-label="spin" type="button">
                                                <div className="roulette-game__btn-spin_inner">
                                                    Next Free Spin {availableTime.hour}:{availableTime.minute}:
                                                    {availableTime.second}
                                                </div>
                                            </button>
                                            <button
                                                onClick={viewHistory}
                                                className="roulette-game__btn-spin view_spin_history"
                                                aria-label="spin"
                                                type="button"
                                            >
                                                <div className="roulette-game__btn-spin_inner">View History</div>
                                            </button>
                                        </Stack>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Stack width="max-content">
                            <Box component="img" src={LuckyCoin} />
                            <Box sx={{ position: 'absolute', top: '30%' }} component="img" src={LuckyLottery} />
                            <Stack justifyContent="center" alignItems="center">
                                <Box
                                    sx={{
                                        backgroundImage: 'conic-gradient(from 1turn,#ffcb40,#fbff00)',
                                        borderRadius: '6.25rem',
                                        minWidth: 300,
                                        p: 1,
                                        textShadow: '2px 2px 5px red',
                                        fontSize: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        fontWeight: 900
                                    }}
                                >
                                    + {value}
                                </Box>
                            </Stack>
                        </Stack>
                    )}
                </>
            ) : (
                <ViewHistory />
            )}
        </>
    );
}
