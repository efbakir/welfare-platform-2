import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { ActivityIcon, ArrowRightIcon, SparklesIcon, UsersIcon } from '../components/Icons';
import { feedItems, suggestedNextStep, weeklyHighlights } from '../data/feed';
import { communitySignals, peopleOpsActions } from '../data/insights';

const typeTone = {
  challenge: 'blue',
  community: 'pink',
  volunteer: 'green',
  event: 'blue',
  appreciation: 'gray',
};

const proofMetrics = [
  { label: 'Active participants this week', value: '312', icon: ActivityIcon },
  { label: 'Event RSVPs', value: '189', icon: SparklesIcon },
  { label: 'New community joins', value: '124', icon: UsersIcon },
];

const culturePulse = [
  { label: 'Cross-team interactions (weekly)', value: '248' },
  { label: 'Active communities', value: '37' },
  { label: 'Participation rate', value: '74%' },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Community Operating System</p>
        <div className="grid gap-4 md:grid-cols-3">
          {proofMetrics.map((metric) => (
            <Card key={metric.label} className="p-4">
              <metric.icon className="mb-2 h-4 w-4 text-brand-blue" />
              <p className="text-xs text-app-textMuted">{metric.label}</p>
              <p className="mt-1 text-3xl font-bold text-app-textPrimary">{metric.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Build culture</p>
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
                      <span
                        key={tag}
                        className="rounded-md bg-app-surface2 px-2 py-1 text-xs font-semibold text-app-textSecondary"
                      >
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
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
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
          </div>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
          <Card>
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
              <UsersIcon className="h-3.5 w-3.5" />
              Build culture
            </p>
            <h3 className="mb-3 text-base font-bold">Culture pulse</h3>
            <div className="space-y-3">
              {culturePulse.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-md bg-app-surface2 px-3 py-2">
                  <span className="text-sm text-app-textSecondary">{item.label}</span>
                  <span className="text-sm font-bold text-app-textPrimary">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
              <ActivityIcon className="h-3.5 w-3.5" />
              Gain clarity
            </p>
            <h3 className="mb-3 text-base font-bold">Community signals</h3>
            <p className="mb-3 text-xs text-app-textMuted">Signals based on activity.</p>
            <div className="space-y-2">
              {communitySignals.map((signal) => (
                <div key={signal.label} className="rounded-md border border-app-border bg-app-surface2 p-3">
                  <p className="text-sm font-semibold text-app-textPrimary">
                    {signal.label}: {signal.value}
                  </p>
                  <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                    {signal.cta}
                    <ArrowRightIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
              <SparklesIcon className="h-3.5 w-3.5" />
              Spark change
            </p>
            <h3 className="mb-3 text-base font-bold">Suggested actions for People Ops</h3>
            <div className="space-y-3">
              {peopleOpsActions.map((action) => (
                <div key={action.title} className="rounded-md border border-app-border bg-white p-3">
                  <p className="text-sm font-semibold text-app-textPrimary">{action.title}</p>
                  <p className="mt-1 text-xs text-app-textMuted">{action.why}</p>
                  <Button variant="secondary" className="mt-2 h-8 px-3 text-xs">
                    Create draft
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </section>
    </div>
  );
}
