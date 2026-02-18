import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { communities } from '../data/communities';
import Card from '../components/Card';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import AvatarStack from '../components/AvatarStack';

const tabs = [
  { key: 'about', label: 'About' },
  { key: 'posts', label: 'Posts' },
  { key: 'members', label: 'Members' },
  { key: 'upcoming', label: 'Upcoming' },
];

export default function CommunityDetailPage() {
  const { communityId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  const community = useMemo(() => communities.find((item) => item.id === communityId), [communityId]);

  if (!community) {
    return (
      <Card>
        <p className="text-sm text-app-textSecondary">Community not found.</p>
        <Button variant="secondary" className="mt-4" onClick={() => navigate('/communities')}>
          Back to communities
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold">{community.name}</h3>
            <p className="mt-2 max-w-3xl text-sm text-app-textSecondary">{community.purpose}</p>
            <p className="mt-2 text-xs text-app-textMuted">
              {community.members} members • {community.activity} activity • {community.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button>Join community</Button>
            <Button variant="secondary">Invite colleague</Button>
          </div>
        </div>
      </Card>

      <Tabs items={tabs} activeKey={activeTab} onChange={setActiveTab} />

      {activeTab === 'about' && (
        <Card>
          <p className="text-sm text-app-textSecondary">{community.about}</p>
        </Card>
      )}

      {activeTab === 'posts' && (
        <Card>
          <h4 className="mb-3 text-base font-bold">Recent posts</h4>
          <ul className="space-y-2 text-sm text-app-textSecondary">
            {community.posts.map((post) => (
              <li key={post} className="rounded-md bg-app-surface2 px-3 py-2">
                {post}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {activeTab === 'members' && (
        <Card>
          <h4 className="mb-3 text-base font-bold">Member snapshot</h4>
          <AvatarStack names={community.membersPreview} />
        </Card>
      )}

      {activeTab === 'upcoming' && (
        <Card>
          <h4 className="mb-3 text-base font-bold">Upcoming moments</h4>
          <ul className="space-y-2 text-sm text-app-textSecondary">
            {community.upcoming.map((item) => (
              <li key={item} className="rounded-md bg-app-surface2 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
