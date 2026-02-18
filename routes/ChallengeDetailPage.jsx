import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { challenges } from '../data/challenges';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import AvatarStack from '../components/AvatarStack';

const teamBreakdown = [
  { team: 'Product Ops', distance: 124, progress: 100 },
  { team: 'Customer Support', distance: 84, progress: 68 },
  { team: 'Finance', distance: 53, progress: 43 },
];

const defaultCheckIn = {
  week: 'Week 1',
  distance: '',
  note: '',
};

export default function ChallengeDetailPage() {
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [checkInForm, setCheckInForm] = useState(defaultCheckIn);
  const challenge = useMemo(() => challenges.find((item) => item.id === challengeId), [challengeId]);

  function updateField(key, value) {
    setCheckInForm((prev) => ({ ...prev, [key]: value }));
  }

  function submitCheckIn(event) {
    event.preventDefault();
    setIsCheckInOpen(false);
    setCheckInForm(defaultCheckIn);
  }

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
    <>
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

            <div className="mt-4">
              <h5 className="mb-2 text-sm font-bold text-app-textPrimary">Team breakdown</h5>
              <div className="space-y-2">
                {teamBreakdown.map((item) => (
                  <div key={item.team} className="rounded-md bg-app-surface2 p-2.5">
                    <div className="mb-1 flex items-center justify-between text-xs font-semibold text-app-textSecondary">
                      <span>{item.team}</span>
                      <span>{item.distance} km</span>
                    </div>
                    <ProgressBar value={item.progress} />
                  </div>
                ))}
              </div>
            </div>

            <Button variant="secondary" className="mt-4 w-full" onClick={() => setIsCheckInOpen(true)}>
              Log my distance
            </Button>
          </Card>

          <Card>
            <h4 className="mb-3 text-base font-bold">Participants</h4>
            <AvatarStack names={challenge.participantNames} />
          </Card>
        </div>
      </div>

      {isCheckInOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-lg border border-app-border bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Weekly check-in</h3>
              <button onClick={() => setIsCheckInOpen(false)} className="text-sm font-semibold text-app-textMuted">
                Close
              </button>
            </div>

            <form onSubmit={submitCheckIn} className="space-y-3">
              <label className="block text-sm font-semibold text-app-textSecondary">
                Week
                <select
                  value={checkInForm.week}
                  onChange={(e) => updateField('week', e.target.value)}
                  className="mt-1 h-10 w-full rounded-md border border-app-border px-3 text-sm"
                >
                  <option>Week 1</option>
                  <option>Week 2</option>
                  <option>Week 3</option>
                  <option>Week 4</option>
                </select>
              </label>

              <label className="block text-sm font-semibold text-app-textSecondary">
                Distance (km)
                <input
                  required
                  type="number"
                  min="0"
                  step="0.1"
                  value={checkInForm.distance}
                  onChange={(e) => updateField('distance', e.target.value)}
                  className="mt-1 h-10 w-full rounded-md border border-app-border px-3 text-sm"
                />
              </label>

              <label className="block text-sm font-semibold text-app-textSecondary">
                Note (optional)
                <textarea
                  value={checkInForm.note}
                  onChange={(e) => updateField('note', e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-md border border-app-border px-3 py-2 text-sm"
                />
              </label>

              <div className="flex justify-end gap-2 pt-1">
                <Button type="button" variant="secondary" onClick={() => setIsCheckInOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
