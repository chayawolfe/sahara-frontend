import { useContext } from 'react';
import { SportsContext } from 'src/sections/casino/sportsbook/sports-context';

import Sports from './sports';
import ESports from './esports';

export default function SportsBook() {
    const { active } = useContext(SportsContext);

    return <>{active === 'esports' ? <ESports active={active} /> : <Sports active={active} />}</>;
}
