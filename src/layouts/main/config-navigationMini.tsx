import { useMemo, useEffect, useCallback, useState } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
// import SvgColor from 'src/components/svg-color';
// auth
import { useAuthContext } from 'src/auth/hooks';
// apis
import { getSelectCateogry } from 'src/api/game';
// ----------------------------------------------------------------------

const itemSportsArray = [
    {
        path: paths.sports,
        id: 'sports',
        info: (
            <Image
                src="/assets/icons/navbar/mobile/sports.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.live_sports,
        id: 'livesports',
        info: (
            <Image
                src="/assets/icons/navbar/mobile/livesport.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.esports,
        id: 'esports',
        info: (
            <Image
                src="/assets/icons/navbar/mobile/e-sport.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.virtual,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/virtual.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.racing,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/racing.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.tournaments,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/tournament.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: '/download',
        info: (
            <Image
                src="/assets/icons/navbar/mobile/ic_download.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    }
];

const itemCasinoArray = [
    {
        path: paths.casino,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/casino.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.vip_casino,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/vipcasino.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.live_casino,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/livecasino.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },

    {
        path: paths.italianlottery,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/lottery.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.aviator,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/aviator.png"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: paths.chicken,
        info: (
            <Image
                src="/assets/icons/navbar/mobile/upgaming.png"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    },
    {
        path: '/download',
        info: (
            <Image
                src="/assets/icons/navbar/mobile/ic_download.svg"
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    transition: (theme) =>
                        theme.transitions.create('color', {
                            duration: 250
                        }),
                    '&:hover': {
                        color: 'text.primary'
                    }
                }}
            />
        )
    }
];

const itemFooterArray = [
    {
        title: 'FAQ',
        path: '/contact-us/faq'
    },
    {
        title: 'Privacy Policy',
        path: '/contact-us/privacy-policy'
    },
    {
        title: 'Terms & Conditions',
        path: '/contact-us/terms'
    },
    {
        title: 'Contact us',
        path: '/contact-us/contacts'
    },
    {
        title: 'Responsable Gaming',
        path: '/contact-us/responsive-gameing'
    },
    {
        title: 'Affiliations',
        path: '/contact-us/affiliations'
    },
    {
        title: 'Secure',
        path: '#'
    },
    {
        title: 'Cookies',
        path: '#'
    }
];

// ----------------------------------------------------------------------

export function useSportsNavData() {
    const { user } = useAuthContext();
    const [initArray, setInitArray] = useState<any>([]);
    const init = useCallback(async () => {
        if (user) {
            const res = await getSelectCateogry();
            if (res.length !== 0) {
                const resItem = itemSportsArray.filter(
                    (item, index) => item
                    // (index === 0 && res.sport && item) ||
                    // (index === 1 && res.casino && item) ||
                    // (index === 2 && res.casinovip && item) ||
                    // (index === 3 && res.livecasino && item) ||
                    // (index === 4 && res.virtual && item) ||
                    // (index === 5 && res.aviator && item) ||
                    // (index === 6 && res.chicken && item) ||
                    // (index === 7 && res.racing && item) || // Add your condition for index 7 here
                    // (index === 8 && res.turbogames && item) ||
                    // (index === 9 && res.italianlottery && item)
                );
                setInitArray(resItem);
            } else {
                setInitArray(itemSportsArray);
            }
        } else {
            setInitArray(itemSportsArray);
        }
    }, [user, setInitArray]);

    useEffect(() => {
        init();
    }, [init]);

    const data = useMemo(
        () => [
            // OVERVIEW
            // ----------------------------------------------------------------------
            {
                subheader: '',
                items: initArray
            }
        ],
        [initArray]
    );

    return data;
}

export function useCasinoNavData() {
    const { user } = useAuthContext();
    const [initArray, setInitArray] = useState<any>([]);
    const init = useCallback(async () => {
        console.log('123456');
        if (user) {
            const res = await getSelectCateogry();
            if (res.length !== 0) {
                const resItem = itemCasinoArray.filter(
                    (item, index) => item
                    // (index === 0 && res.sport && item) ||
                    // (index === 1 && res.casino && item) ||
                    // (index === 2 && res.casinovip && item) ||
                    // (index === 3 && res.livecasino && item) ||
                    // (index === 4 && res.virtual && item) ||
                    // (index === 5 && res.aviator && item) ||
                    // (index === 6 && res.chicken && item) ||
                    // (index === 7 && res.racing && item) || // Add your condition for index 7 here
                    // (index === 8 && res.turbogames && item) ||
                    // (index === 9 && res.italianlottery && item)
                );
                setInitArray(resItem);
            } else {
                setInitArray(itemCasinoArray);
            }
        } else {
            setInitArray(itemCasinoArray);
        }
    }, [user, setInitArray]);

    useEffect(() => {
        init();
    }, [init]);

    const data = useMemo(
        () => [
            // OVERVIEW
            // ----------------------------------------------------------------------
            {
                subheader: '',
                items: initArray
            }
        ],
        [initArray]
    );

    return data;
}

export function useFooterNavData() {
    const { user } = useAuthContext();
    const [initArray, setInitArray] = useState<any>([]);
    const init = useCallback(async () => {
        if (user) {
            const res = await getSelectCateogry();
            if (res.length !== 0) {
                const resItem = itemFooterArray.filter((item, index) => item);
                setInitArray(resItem);
            } else {
                setInitArray(itemFooterArray);
            }
        } else {
            setInitArray(itemFooterArray);
        }
    }, [user, setInitArray]);

    useEffect(() => {
        init();
    }, [init]);

    const data = useMemo(
        () => [
            {
                subheader: '',
                items: initArray
            }
        ],
        [initArray]
    );

    return data;
}
