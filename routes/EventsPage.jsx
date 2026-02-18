import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import Card from '../components/Card';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import { formatDate } from '../utils/format';

const viewTabs = [
  { key: 'list', label: 'List' },
  { key: 'calendar', label: 'Calendar' },
];

const defaultForm = {
  title: '',
  date: '',
  time: '',
  location: '',
  visibility: 'Public',
  description: '',
};

export default function EventsPage() {
  const [view, setView] = useState('list');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    []
  );

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsCreateOpen(false);
    setForm(defaultForm);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs items={viewTabs} activeKey={view} onChange={setView} />
        <Button onClick={() => setIsCreateOpen(true)}>Create event</Button>
      </div>

      {view === 'list' && (
        <div className="grid gap-4 xl:grid-cols-2">
          {sortedEvents.map((eventItem) => (
            <Card key={eventItem.id}>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">{eventItem.visibility}</p>
              <h3 className="mb-2 text-lg font-bold">{eventItem.title}</h3>
              <p className="mb-1 text-sm text-app-textSecondary">
                {formatDate(eventItem.date)} • {eventItem.time}
              </p>
              <p className="mb-1 text-sm text-app-textSecondary">{eventItem.location}</p>
              <p className="mb-4 text-xs text-app-textMuted">
                Organizer: {eventItem.organizer} • Attendees: {eventItem.attendees}
              </p>
              <Link to={`/events/${eventItem.id}`}>
                <Button variant="secondary">Open event</Button>
              </Link>
            </Card>
          ))}
        </div>
      )}

      {view === 'calendar' && (
        <Card>
          <h3 className="mb-4 text-base font-bold">Calendar overview</h3>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {sortedEvents.map((eventItem) => (
              <Link key={eventItem.id} to={`/events/${eventItem.id}`} className="rounded-md border border-app-border bg-app-surface2 p-3">
                <p className="text-xs font-semibold text-brand-blue">{formatDate(eventItem.date)}</p>
                <p className="mt-1 text-sm font-bold text-app-textPrimary">{eventItem.title}</p>
                <p className="text-xs text-app-textSecondary">{eventItem.time}</p>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isCreateOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-xl rounded-lg border border-app-border bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Create event</h3>
              <button onClick={() => setIsCreateOpen(false)} className="text-sm font-semibold text-app-textMuted">
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <input
                required
                value={form.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Title"
                className="h-10 rounded-md border border-app-border px-3 text-sm"
              />
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField('date', e.target.value)}
                  className="h-10 rounded-md border border-app-border px-3 text-sm"
                />
                <input
                  required
                  value={form.time}
                  onChange={(e) => updateField('time', e.target.value)}
                  placeholder="Time"
                  className="h-10 rounded-md border border-app-border px-3 text-sm"
                />
              </div>
              <input
                required
                value={form.location}
                onChange={(e) => updateField('location', e.target.value)}
                placeholder="Location or remote link"
                className="h-10 rounded-md border border-app-border px-3 text-sm"
              />
              <select
                value={form.visibility}
                onChange={(e) => updateField('visibility', e.target.value)}
                className="h-10 rounded-md border border-app-border px-3 text-sm"
              >
                <option>Public</option>
                <option>Team</option>
                <option>Community</option>
              </select>
              <textarea
                value={form.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Description"
                rows={3}
                className="rounded-md border border-app-border px-3 py-2 text-sm"
              />
              <div className="mt-1 flex justify-end gap-2">
                <Button type="button" variant="secondary" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
