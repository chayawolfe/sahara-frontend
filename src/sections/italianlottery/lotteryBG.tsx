// @mui
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

// config
import { ASSETS_API } from 'src/config-global';

import './view/style.css';

// ----------------------------------------------------------------------

const _carousels = [`${ASSETS_API}/bg/bg_italinlottery.png`];

const LiveCasinoCarousel = () => (
    <>
        <Box component="img" src={_carousels[0]} />
        <Box sx={{ bgcolor: 'white', p: 4 }}>
            <Box>
                <Typography
                    sx={{ color: 'black', border: '10px solid #034b91', borderRadius: 7, p: 4 }}
                >{`Page d'accueil: Bienvenue dans le monde captivant du 10eLotto ! Explorez la tradition italienne des jeux de hasard avec nous et vivez la magie de cette expérience unique. Le 10eLotto n'est pas seulement un jeu, c'est un rituel fascinant qui a captivé l'imagination des Italiens depuis des années. Découvrez la tradition et la chance qui entourent ce jeu extraordinaire.
                        Qui Nous Sommes :Nous sommes passionnés par le 10eLotto et nous voulons partager avec vous l'enthousiasme pour ce jeu qui a des racines profondes dans la culture italienne. Notre mission est d'offrir une expérience de jeu immersive, célébrant la tradition et la possibilité de remporter de grands prix.
                        La Tradition du 10eLotto: Le 10eLotto est plus qu'un simple jeu : c'est une partie intégrante de la tradition populaire italienne. Avec des tirages quotidiens et la possibilité de gagner même sans deviner tous les numéros, ce jeu incarne l'espoir et la chance que les Italiens cherchent dans leur vie quotidienne. Depuis des générations, le 10eLotto a été un moyen de rêver en grand et d'oser un peu plus.
                        Pourquoi Jouer Avec Nous :
                        Choisissez notre plateforme pour une expérience de jeu inégalée. Nous offrons un environnement sûr et fiable pour vivre l'excitation du 10eLotto. Avec des graphismes captivants, des tirages en temps réel et des prix alléchants, nous sommes là pour rendre votre voyage dans le monde du 10eLotto inoubliable.
                        Rêvez en Grand avec le 10eLotto :
                        Le 10eLotto est plus qu'un jeu de hasard, c'est une chance de réaliser vos rêves. Rejoignez-nous et plongez dans la tradition populaire italienne, où la chance sourit à ceux qui osent jouer. Avec le 10eLotto, chaque tirage est une opportunité de transformer votre destin. Jouez avec nous et commencez votre voyage vers la fortune dès aujourd'hui !`}</Typography>
            </Box>
        </Box>
    </>
);

export default LiveCasinoCarousel;
