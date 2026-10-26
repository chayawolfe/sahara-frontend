import { useState, useCallback, useEffect } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
// hooks
import { useNavigate, useParams } from 'react-router';
// auth
import { useAuthContext } from 'src/auth/hooks';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

import { _userAbout } from 'src/_mock';
//
import ProfileCover from '../profile-cover';
import DepositMoney from '../deposit-money';
import ProfileAccount from '../profile-account';
import WithdrawMoney from '../withdraw-money';
import { TransactionHistory } from '../transaction-history';
import { GameHistory } from '../game-history';
import { Notifications } from '../notifications';

// ----------------------------------------------------------------------

const TABS = [
    // {
    //     value: 'dashboard',
    //     label: 'Dashboard',
    //     icon: <Iconify icon="ic:round-space-dashboard" width={24} />
    // },
    {
        value: 'profile',
        label: 'Profile',
        icon: <Iconify icon="solar:user-id-bold" width={24} />
    },
    {
        value: 'deposit',
        label: 'Deposit',
        icon: <Iconify icon="solar:card-send-bold-duotone" width={24} />
    },
    {
        value: 'withdraw',
        label: 'Withdraw',
        icon: <Iconify icon="solar:card-recive-bold-duotone" width={24} />
    },
    {
        value: 'transaction-history',
        label: 'Transaction History',
        icon: <Iconify icon="solar:card-search-bold-duotone" width={24} />
    },
    {
        value: 'game-history',
        label: 'Game History',
        icon: <Iconify icon="solar:card-search-bold-duotone" width={24} />
    },
    // {
    //     value: 'account-verification',
    //     label: 'Account Verification',
    //     icon: <Iconify icon="solar:diploma-verified-bold-duotone" width={24} />
    // },
    // {
    //     value: 'promo-code',
    //     label: 'Promo Code',
    //     icon: <Iconify icon="solar:banknote-bold-duotone" width={24} />
    // },
    {
        value: 'notifications',
        label: 'Notifications',
        icon: <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
    }
];

// ----------------------------------------------------------------------

export default function UserProfileView() {
    const settings = useSettingsContext();

    const { user } = useAuthContext();

    const navigate = useNavigate();

    const { id } = useParams();

    const [currentTab, setCurrentTab] = useState<string>('dashboard');

    const handleChangeTab = useCallback(
        (event: React.SyntheticEvent, newValue: string) => {
            navigate(`/user/${newValue}`);
        },
        [navigate]
    );

    useEffect(() => {
        if (id && TABS.find((tab) => tab.value === id)) {
            setCurrentTab(id);
        } else {
            navigate('404');
        }
    }, [id, navigate]);

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ mb: 5 }}>
            <Card
                sx={{
                    mb: 3,
                    height: 290
                }}
            >
                <ProfileCover
                    role={_userAbout.role}
                    name={user?.displayName}
                    avatarUrl={user?.avatar.split('http').length === 1 ? `${ASSETS_API}/${user?.avatar}` : user?.avatar}
                />

                <Tabs
                    value={currentTab}
                    onChange={handleChangeTab}
                    sx={{
                        width: 1,
                        bottom: 0,
                        zIndex: 9,
                        position: 'absolute',
                        bgcolor: 'background.paper',
                        [`& .${tabsClasses.flexContainer}`]: {
                            pr: { md: 3 },
                            justifyContent: {
                                sm: 'center',
                                md: 'flex-end'
                            }
                        }
                    }}
                >
                    {TABS.map((tab) => (
                        <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
                    ))}
                </Tabs>
            </Card>

            {currentTab === 'profile' && <ProfileAccount />}

            {currentTab === 'deposit' && <DepositMoney />}

            {currentTab === 'withdraw' && <WithdrawMoney />}

            {currentTab === 'transaction-history' && <TransactionHistory />}

            {currentTab === 'game-history' && <GameHistory />}

            {currentTab === 'notifications' && <Notifications />}
        </Container>
    );
}
