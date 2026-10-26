// @mui
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
import { useAuthContext } from 'src/auth/hooks';
//

import { AccountPopover, LanguagePopover, AuthInput } from '../_common';
import Balance from '../_common/balance';

// ----------------------------------------------------------------------

type Props = {
    onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
    const { user } = useAuthContext();

    const lgUp = useResponsive('up', 'lg');

    const renderContent = (
        <Stack flexGrow={1} direction="row" alignItems="center" justifyContent="flex-end" spacing={0.6}>
            {user ? (
                <>
                    {lgUp && <Balance />}

                    <LanguagePopover />

                    <AccountPopover />
                </>
            ) : (
                <>
                    <AuthInput />

                    <LanguagePopover />
                </>
            )}
        </Stack>
    );

    return (
        <Toolbar
            sx={{
                height: 1,
                px: '0px !important'
            }}
        >
            {renderContent}
        </Toolbar>
    );
}
