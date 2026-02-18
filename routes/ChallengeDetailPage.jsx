import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { challenges } from '../data/challenges';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import AvatarStack from '../components/AvatarStack';

export default function ChallengeDetailPage() {
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const challenge = useMemo(() => challenges.find((item) => item.id === challengeId), [challengeId]);

  if (!challenge) {
    return (
      <Card>
        <p className="text-sm text-app-textSecondary">Challenge not found.</p>
        <Button variant="secondary" className="mt-4" onClick={() => navigate('/challenges')}>
          Back to challenges
        </Button>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <Card>
          <h3 className="mb-2 text-2xl font-bold">{challenge.title}</h3>
          <p className="mb-3 text-sm text-app-textSecondary">{challenge.purpose}</p>
          <p className="text-xs text-app-textMuted">{challenge.duration}</p>
          <Button className="mt-4">Join challenge</Button>
        </Card>

        <Card>
          <h4 className="mb-3 text-base font-bold">Rules</h4>
          <ul className="space-y-2 text-sm text-app-textSecondary">
            {challenge.rules.map((rule) => (
              <li key={rule} className="rounded-md bg-app-surface2 px-3 py-2">
                {rule}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h4 className="mb-3 text-base font-bold">Updates</h4>
          <ul className="space-y-2 text-sm text-app-textSecondary">
            {challenge.updates.map((update) => (
              <li key={update} className="rounded-md bg-app-surface2 px-3 py-2">
                {update}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <h4 className="mb-2 text-base font-bold">Progress tracker</h4>
          <p className="mb-2 text-sm text-app-textSecondary">Team progress: {challenge.progress}%</p>
          <ProgressBar value={challenge.progress} />
          <p className="mt-3 text-sm text-app-textSecondary">Your contribution: {challenge.personalContribution}</p>
          <p className="mt-1 text-xs text-app-textMuted">Participants: {challenge.participants}</p>
        </Card>

        <Card>
          <h4 className="mb-3 text-base font-bold">Participants</h4>
          <AvatarStack names={challenge.participantNames} />
        </Card>
      </div>
    </div>
  );
}
