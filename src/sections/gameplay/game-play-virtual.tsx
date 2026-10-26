// @mui
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// components
import { useResponsive } from 'src/hooks/use-responsive';
import { useSnackbar } from 'src/components/snackbar';
import { useNavigate } from 'react-router';

// casino game provider game list
import { useGameContext } from '../casino/context';

const VirtualGameplay = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const { providerName, playURL } = useGameContext();

    const backPage = () => {
        navigate(`/virtual/${providerName}`);
    };

    const fullscreen = () => {
        const elem = document.getElementById('mygame');
        if (elem?.requestFullscreen) {
            elem?.requestFullscreen();
        }
    };

    if (playURL === 'no') {
        navigate('/virtual');
    } else if (!playURL) {
        enqueueSnackbar('Game provider server error', { variant: 'error' });
    }

    return (
        <Stack spacing={2} mt={-4}>
            {mdUp ? (
                <Card>
                    <Box sx={{ pl: 3, pt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Link href="#" underline="hover" onClick={backPage}>
                            <Typography variant="h6">Back</Typography>
                        </Link>
                        <Link href="#" underline="hover" onClick={fullscreen} sx={{ mr: 3 }}>
                            <Typography variant="h6">Full Screen</Typography>
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            p: 2,
                            mt: 2,
                            mx: 2,
                            mb: 2,
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh - 200px)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={playURL} title="game play" />
                    </Stack>
                </Card>
            ) : (
                <>
                    <Box sx={{ pl: 3, pt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Link href="#" underline="hover" onClick={backPage}>
                            <Typography variant="h6">Back</Typography>
                        </Link>
                        <Link href="#" underline="hover" onClick={fullscreen} sx={{ mr: 3 }}>
                            <Typography variant="h6">Full Screen</Typography>
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            mx: 2,
                            mb: 2,
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh - 200px)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={playURL} title="game play" />
                    </Stack>
                </>
            )}
        </Stack>
    );
};

export default VirtualGameplay;
