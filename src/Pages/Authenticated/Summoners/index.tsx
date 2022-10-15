import RoutedTabs from "@Components/RoutedTabs"
import RegisterSummoner from './RegisterSummoner';
import LevelChart from './LevelChart';

const tabs = [
    {title: 'Register', content: <RegisterSummoner />},
    {title: 'Level Chart', content: <LevelChart />}
]

export default function Summoners () {
    return <RoutedTabs
    tabs={tabs}
    />
};