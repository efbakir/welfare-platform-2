import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { feedItems, suggestedNextStep, weeklyHighlights } from '../data/feed';

const typeTone = {
  challenge: 'blue',
  community: 'pink',
  volunteer: 'green',
  event: 'blue',
  appreciation: 'gray',
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="section-title">Today in your workplace</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {feedItems.map((item) => (
            <Card key={item.id}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge tone={typeTone[item.type]}>{item.type}</Badge>
                <span className="text-xs text-app-textMuted">{item.timestamp}</span>
              </div>
              <h4 className="mb-1 text-base font-bold text-app-textPrimary">{item.title}</h4>
              <p className="mb-3 text-sm text-app-textSecondary">{item.body}</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-app-surface2 px-2 py-1 text-xs font-semibold text-app-textSecondary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-app-textMuted">
                  {item.author} • {item.team}
                </p>
                <Link to={item.ctaHref}>
                  <Button variant="secondary" className="h-9 px-3">
                    {item.ctaLabel}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">Suggested next step</p>
          <h3 className="mb-2 text-lg font-bold">{suggestedNextStep.title}</h3>
          <p className="mb-4 text-sm text-app-textSecondary">{suggestedNextStep.body}</p>
          <Link to={suggestedNextStep.ctaHref}>
            <Button>{suggestedNextStep.ctaLabel}</Button>
          </Link>
        </Card>

        <Card>
          <h3 className="mb-3 text-base font-bold">This week&apos;s highlights</h3>
          <div className="space-y-3">
            {weeklyHighlights.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-app-textSecondary">{item.label}</span>
                <span className="text-sm font-bold text-app-textPrimary">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
