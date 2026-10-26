import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
    chat: '/api/chat',
    kanban: '/api/kanban',
    calendar: '/api/calendar',
    profilUpdate: '/users',
    categories: '/users/categories',
    selectCategory: '/dashboard/selectCategory',
    auth: {
        me: '/auth/me',
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout'
    },
    mail: {
        list: '/api/mail/list',
        details: '/api/mail/details',
        labels: '/api/mail/labels'
    },
    post: {
        list: '/api/post/list',
        details: '/api/post/details',
        latest: '/api/post/latest',
        search: '/api/post/search'
    },
    product: {
        list: '/api/product/list',
        details: '/api/product/details',
        search: '/api/product/search'
    },
    casinogame: {
        gamelist: '/casino/gamelist',
        allgameget: '/casino/allgameget',
        liveList: '/casino/liveCasinolist',
        virtualgamelist: '/casino/virtualgamelist',
        provider: '/casino/provider',
        opengame: '/riseup/opengame',
        pragmaticPlay: '/loginx_pragmatic/opengame',
        searchGame: '/casino/searchgame',
        history: '/casino/history',
        eachgameget: '/casino/eachgameget'
    },
    zeusgame: {
        list: '/zeus/casino/list',
        liveList: '/zeus/casino/liveCasinolist',
        virtualgamelist: '/zeus/casino/virtualgamelist',
        providerGamelist: '/zeus/casino/providergame',
        gamePlay: '/zeus/casino/getGame',
        searchGame: '/zeus/casino/searchgame'
    },
    multigames: {
        gamelist: '/multigames/casino/gamelist',
        liveList: '/multigames/casino/liveCasinolist',
        virtualgamelist: '/multigames/casino/virtualgamelist',
        provider: '/multigames/casino/provider',
        opengame: '/multigames/casino/opengame',
        searchGame: '/multigames/casino/searchgame',
        history: '/multigames/casino/history'
    },
    user: {
        getTransaction: '/users/getTransaction',
        mailsend: '/users/mailsend'
    },
    jackpot: {
        get: '/casino/getJackpot'
    },
    message: {
        get: '/casino/getMessage',
        isRead: '/casino/isReadMessage'
    },
    freespin: {
        set: '/dashboard/setFreeBonus',
        get: '/dashboard/getFreeBonus'
    },
    sports: {
        open: '/sportsbook/callback/open'
    },
    favorite: {
        set: '/dashboard/favoriteSet',
        get: '/dashboard/favoriteGet'
    },
    ranking: {
        get: '/dashboard/get-ranking',
        getMonthly: '/dashboard/get-monthlyranking'
    },
    recently: {
        get: '/dashboard/get-recentlygames'
    }
};
