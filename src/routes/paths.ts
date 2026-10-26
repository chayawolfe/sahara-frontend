// ----------------------------------------------------------------------

const ROOTS = {
    AUTH: '/auth',
    USER: '/user'
};

// ----------------------------------------------------------------------

export const paths = {
    // AUTH
    auth: {
        jwt: {
            login: `${ROOTS.AUTH}/login`,
            register: `${ROOTS.AUTH}/register`
        }
    },
    // USER
    user: {
        root: ROOTS.USER,
        profile: `${ROOTS.USER}/profile`,
        account: `${ROOTS.USER}/account`,
        notification: `${ROOTS.USER}/notifications`
    },
    home: '/',
    sports: '/sports',
    esports: '/sports/esports',
    live_sports: '/sports/live-sports',
    casino: '/casino',
    zeus_casino: '/zeus-casino',
    live_casino: '/live-casino',
    vip_casino: '/vip-casino',
    virtual: '/open/virtual',
    racing: '/racing',
    chicken: '/open/chicken',
    aviator: '/open/aviator',
    e_sports: '/e-sports',
    tournaments: '/tournaments',
    mini_games: '/mini-games',
    promotions: '/promotions',
    contact_us: '/contact-us',
    turbogame: '/turbogame',
    italianlottery: '/italianlottery'
};
