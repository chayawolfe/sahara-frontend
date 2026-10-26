import { useMemo, useEffect, useCallback, useState } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';
// auth
import { useAuthContext } from 'src/auth/hooks';
// apis
import { getSelectCateogry } from 'src/api/game';

// locales
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

const icon = (name: string) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
    // OR
    // <Iconify icon="fluent:mail-24-filled" />
    // https://icon-sets.iconify.design/solar/
    // https://www.streamlinehq.com/icons
);

const ICONS = {
    sports: icon('ic_sports'),
    live_sports: icon('ic_live_sports'),
    casino: icon('ic_casino'),
    live_casino: icon('ic_live_casino'),
    virtual: icon('ic_virtual'),
    racing: icon('ic_racing'),
    e_sports: icon('ic_e_sports'),
    tournaments: icon('ic_tournaments'),
    mini_games: icon('ic_mini_games'),
    promotions: icon('ic_promotions'),
    contact_us: icon('ic_contact_us'),
    aviator: icon('aviator'),
    upgaming: icon('upgaming')
};

// ----------------------------------------------------------------------

export function useNavData() {
    const { user } = useAuthContext();
    const { t } = useLocales();
    const [initArray, setInitArray] = useState<any>([]);

    const itemArray = useMemo(
        () => [
            {
                title: t('header.sportsLive'),
                path: paths.sports,
                id: 'sport'
            },
            {
                title: t('header.casino'),
                path: paths.casino,
                info: (
                    <Label
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: -7,
                            right: -6,
                            height: 17,
                            fontSize: '10px',
                            borderRadius: '3px !important',
                            background: '#D9B80B',
                            color: 'black'
                        }}
                    >
                        Neuf
                    </Label>
                )
            },
            {
                title: t('header.vip_casino'),
                path: paths.vip_casino,
                info: (
                    <Label
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: -7,
                            right: -6,
                            height: 17,
                            fontSize: '10px',
                            borderRadius: '3px !important',
                            background: '#D9B80B',
                            color: 'black'
                        }}
                    >
                        Neuf
                    </Label>
                )
            },
            {
                title: t('header.live_casino'),
                path: paths.live_casino
            },
            {
                title: t('header.virtual'),
                path: paths.virtual,
                info: (
                    <Label
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: -7,
                            right: -6,
                            height: 17,
                            fontSize: '10px',
                            borderRadius: '3px !important',
                            background: '#D9B80B',
                            color: 'black'
                        }}
                    >
                        Neuf
                    </Label>
                )
            },
            {
                title: '',
                path: paths.aviator,
                info: (
                    <Image
                        src="/assets/icons/navbar/aviator.svg"
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
                title: t('header.upgaming'),
                path: paths.chicken,
                icon: ICONS.upgaming
            },
            {
                title: t('header.lottery'),
                path: paths.italianlottery
            },
            {
                title: t('header.tournament'),
                path: paths.tournaments,
                info: (
                    <Label
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: -7,
                            right: -6,
                            height: 17,
                            fontSize: '10px',
                            borderRadius: '3px !important',
                            background: '#FFFFFF',
                            color: 'black'
                        }}
                    >
                        HOT
                    </Label>
                )
            },
            {
                title: t('header.racing'),
                path: paths.racing
            },
            {
                title: t('header.esports'),
                path: paths.esports,
                id: 'sport',
                info: (
                    <Label
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: -7,
                            right: -6,
                            height: 17,
                            fontSize: '10px',
                            borderRadius: '3px !important',
                            background: '#D9B80B',
                            color: 'black'
                        }}
                    >
                        Neuf
                    </Label>
                )
            }
        ],
        [t]
    );

    const init = useCallback(async () => {
        if (user) {
            const res = await getSelectCateogry();
            if (res.length !== 0) {
                const resItem = itemArray.filter(
                    (item, index) =>
                        (index === 0 && res.sport && item) ||
                        (index === 1 && res.casino && item) ||
                        (index === 2 && res.casinovip && item) ||
                        (index === 3 && res.livecasino && item) ||
                        (index === 4 && res.virtual && item) ||
                        (index === 5 && res.aviator && item) ||
                        (index === 6 && res.chicken && item) ||
                        (index === 7 && res.racing && item) || // Add your condition for index 7 here
                        (index === 8 && res.turbogames && item) ||
                        (index === 9 && res.italianlottery && item)
                );
                setInitArray(resItem);
            } else {
                setInitArray(itemArray);
            }
        } else {
            setInitArray(itemArray);
        }
    }, [user, setInitArray, itemArray]);

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
