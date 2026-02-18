import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Filters from '../components/Filters';
import { communities } from '../data/communities';

const filterConfig = [
  { key: 'location', label: 'Location', options: ['All', ...new Set(communities.map((c) => c.location))] },
  { key: 'workMode', label: 'Work mode', options: ['All', ...new Set(communities.map((c) => c.workMode))] },
  {
    key: 'interest',
    label: 'Interests',
    options: ['All', ...new Set(communities.flatMap((c) => c.interests))],
  },
  { key: 'cause', label: 'Causes', options: ['All', ...new Set(communities.flatMap((c) => c.causes))] },
  {
    key: 'skill',
    label: 'Skill-sharing',
    options: ['All', ...new Set(communities.flatMap((c) => c.skillSharing))],
  },
];

export default function CommunitiesPage() {
  const [filters, setFilters] = useState({
    location: 'All',
    workMode: 'All',
    interest: 'All',
    cause: 'All',
    skill: 'All',
  });

  const filtered = useMemo(() => {
    return communities.filter((community) => {
      if (filters.location !== 'All' && community.location !== filters.location) return false;
      if (filters.workMode !== 'All' && community.workMode !== filters.workMode) return false;
      if (filters.interest !== 'All' && !community.interests.includes(filters.interest)) return false;
      if (filters.cause !== 'All' && !community.causes.includes(filters.cause)) return false;
      if (filters.skill !== 'All' && !community.skillSharing.includes(filters.skill)) return false;
      return true;
    });
  }, [filters]);

  const suggested = filtered.filter((community) => community.suggested);

  function handleFilterChange(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="section-title mb-4">Discovery filters</h3>
        <Filters config={filterConfig} values={filters} onChange={handleFilterChange} />
      </Card>

      <section>
        <h3 className="section-title mb-4">Suggested for you</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suggested.map((community) => (
            <Card key={community.id}>
              <div className="mb-3 flex items-center justify-between">
                <Badge tone="blue">{community.activity} activity</Badge>
                <span className="text-xs text-app-textMuted">{community.members} members</span>
              </div>
              <h4 className="mb-2 text-base font-bold">{community.name}</h4>
              <p className="mb-4 text-sm text-app-textSecondary">{community.purpose}</p>
              <div className="flex items-center gap-2">
                <Link to={`/communities/${community.id}`}>
                  <Button>View community</Button>
                </Link>
                <Button variant="secondary">Join</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="section-title mb-4">All communities</h3>
        <div className="space-y-3">
          {filtered.map((community) => (
            <Card key={community.id} className="p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-base font-bold">{community.name}</h4>
                  <p className="text-sm text-app-textSecondary">{community.purpose}</p>
                  <p className="mt-1 text-xs text-app-textMuted">
                    {community.location} • {community.workMode} • {community.members} members
                  </p>
                </div>
                <Link to={`/communities/${community.id}`}>
                  <Button variant="secondary">Open</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
