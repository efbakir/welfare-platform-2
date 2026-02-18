import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { challenges } from '../data/challenges';
import Card from '../components/Card';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import ProgressBar from '../components/ProgressBar';

const statusTabs = [
  { key: 'Active', label: 'Active' },
  { key: 'Upcoming', label: 'Upcoming' },
  { key: 'Completed', label: 'Completed' },
];

export default function ChallengesPage() {
  const [activeStatus, setActiveStatus] = useState('Active');

  const filtered = useMemo(
    () => challenges.filter((challenge) => challenge.status === activeStatus),
    [activeStatus]
  );

  return (
    <div className="space-y-6">
      <Tabs items={statusTabs} activeKey={activeStatus} onChange={setActiveStatus} />

      <div className="grid gap-4 xl:grid-cols-2">
        {filtered.map((challenge) => (
          <Card key={challenge.id}>
            <h3 className="mb-1 text-lg font-bold">{challenge.title}</h3>
            <p className="mb-3 text-sm text-app-textSecondary">{challenge.goal}</p>
            <p className="mb-2 text-xs text-app-textMuted">
              {challenge.duration} • {challenge.participants} participants
            </p>
            <div className="mb-2">
              <ProgressBar value={challenge.progress} />
            </div>
            <p className="mb-4 text-xs font-semibold text-app-textSecondary">Progress: {challenge.progress}%</p>
            <Link to={`/challenges/${challenge.id}`}>
              <Button variant="secondary">Open challenge</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
