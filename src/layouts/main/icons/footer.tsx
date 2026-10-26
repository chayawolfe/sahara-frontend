// config
import { ASSETS_API } from 'src/config-global';
// routes
import { paths } from 'src/routes/paths';

// import footer icons

export const footerHeadIcons = [
    `/logo/logo.svg`,
    `${ASSETS_API}/footer/icons/apple.svg`,
    `${ASSETS_API}/footer/icons/android.svg`,
    `${ASSETS_API}/footer/icons/flag.svg`,
    `${ASSETS_API}/footer/icons/solution.svg`
];

// ----------------------------------------------------------------------

export const _carousels = [
    `${ASSETS_API}/footer/partners/amex.png`,
    `${ASSETS_API}/footer/partners/apple_pay.png`,
    `${ASSETS_API}/footer/partners/astropay.png`,
    `${ASSETS_API}/footer/partners/binance.png`,
    `${ASSETS_API}/footer/partners/bitcoin.png`,
    `${ASSETS_API}/footer/partners/coinbase.png`,
    `${ASSETS_API}/footer/partners/discover.png`,
    `${ASSETS_API}/footer/partners/ecopayz.png`,
    `${ASSETS_API}/footer/partners/ethereum.png`,
    `${ASSETS_API}/footer/partners/gpay.png`,
    `${ASSETS_API}/footer/partners/mastercard.png`,
    `${ASSETS_API}/footer/partners/neteller.png`,
    `${ASSETS_API}/footer/partners/paysafe.png`,
    `${ASSETS_API}/footer/partners/skrill.png`,
    `${ASSETS_API}/footer/partners/visa.png`
];

export const footerInfo = [
    `${ASSETS_API}/footer/info/digicert.svg`,
    `${ASSETS_API}/footer/info/cert.svg`,
    `${ASSETS_API}/footer/info/18_logo.svg`,
    `${ASSETS_API}/footer/info/curacao.svg`
];

export const footerMobileInfo = [
    `${ASSETS_API}/footer/info/mobile/digicert.svg`,
    `${ASSETS_API}/footer/info/mobile/cert.svg`,
    `${ASSETS_API}/footer/info/mobile/18_logo.svg`,
    `${ASSETS_API}/footer/info/mobile/curacao.svg`
];

export const FooterLinks = [
    [
        { link: '#', title: 'INFORMATIONS GÉNÉRALES' },
        { link: '/contact-us/about-us', title: 'À propos de nous' },
        { link: '/contact-us/faq', title: 'FAQ' },
        { link: '/contact-us/contacts', title: 'Contactez-nous' },
        { link: '/contact-us/affiliations', title: 'Affiliations' }
    ],
    [
        { link: '#', title: 'CASINO' },
        { link: '/casino/Pragmatic%20Play', title: 'Pragmatic Play' },
        { link: '/casino/Amatic', title: 'Amatic' },
        { link: '/casino/Netent', title: 'NetEnt' },
        { link: '/casino/habanero', title: 'Habanero' },
        { link: 'https://www.babnet.net/sport.php', target: '_blank', title: 'World Match' }
    ],
    [
        { link: '#', title: 'CASINO EN  DIRECT' },
        { link: paths.live_casino, title: 'Evolution ' },
        { link: paths.live_casino, title: 'Portomaso' },
        { link: paths.live_casino, title: 'Ezugi' },
        { link: paths.live_casino, title: 'Pragmatic Live' },
        { link: paths.live_casino, title: 'TvBet' }
    ],
    [
        { link: '#', title: 'VIRTUEL' },
        { link: paths.virtual, title: '1X2 Games' },
        { link: paths.virtual, title: 'Golden Race' },
        { link: paths.virtual, title: 'Leap gaming' },
        { link: paths.virtual, title: 'Virtual Generation' },
        { link: paths.virtual, title: 'Kiron' }
    ],
    [
        { link: '/contact-us/contacts', title: 'PAIEMENTS' },
        { link: '#', title: 'Mastercard' },
        { link: '#', title: 'Visa' },
        { link: '#', title: 'Skrill' },
        { link: '#', title: 'Bitcoin' },
        { link: '#', title: 'Usdt' }
    ],
    [
        { link: '/contact-us/responsive-gameing', title: 'SÉCURITÉ ET CONFIDENTIALITÉ' },
        { link: '/contact-us/privacy-policy', title: 'Politique de Confidentialité' },
        { link: '/contact-us/terms', title: 'Termes et conditions' },
        { link: '/contact-us/responsive-gameing', title: 'Jeu responsable' },
        { link: '#', title: "Lutte contre le blanchiment d'argent" },
        { link: '#', title: 'Cookies' }
    ]
];
