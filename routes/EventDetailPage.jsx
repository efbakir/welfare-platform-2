import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { events } from '../data/events';
import Card from '../components/Card';
import Button from '../components/Button';
import { formatDate } from '../utils/format';

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [rsvped, setRsvped] = useState(false);

  const event = useMemo(() => events.find((item) => item.id === eventId), [eventId]);

  if (!event) {
    return (
      <Card>
        <p className="text-sm text-app-textSecondary">Event not found.</p>
        <Button variant="secondary" className="mt-4" onClick={() => navigate('/events')}>
          Back to events
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">{event.visibility}</p>
      <h3 className="mb-2 text-2xl font-bold">{event.title}</h3>
      <p className="mb-1 text-sm text-app-textSecondary">
        {formatDate(event.date)} • {event.time}
      </p>
      <p className="mb-1 text-sm text-app-textSecondary">{event.location}</p>
      <p className="mb-3 text-sm text-app-textSecondary">Organizer: {event.organizer}</p>
      <p className="mb-4 text-sm text-app-textSecondary">{event.description}</p>
      <p className="mb-4 text-sm text-app-textMuted">Attendees: {event.attendees + (rsvped ? 1 : 0)}</p>
      <Button onClick={() => setRsvped((prev) => !prev)}>{rsvped ? 'RSVP confirmed' : 'RSVP'}</Button>
    </Card>
  );
}
