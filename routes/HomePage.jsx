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

const wellbeingCards = [
  {
    title: 'Social connection',
    value: 'You connected with 6 colleagues this week',
    detail: 'You have not connected cross-team this week.',
    cta: 'Join Coffee Roulette',
    icon: UsersIcon,
  },
  {
    title: 'Participation',
    value: 'You joined 2 communities and participated in 1 challenge',
    detail: '3 activities currently match your interests.',
    cta: 'View activities',
    icon: ActivityIcon,
  },
  {
    title: 'Support available',
    value: '2 activities are available near you this week',
    detail: '1 support group matches your profile and interests.',
    cta: 'Explore support',
    icon: SparklesIcon,
  },
];

const culturePulse = [
  { label: 'Cross-team interactions (weekly)', value: '248' },
  { label: 'Active communities', value: '37' },
  { label: 'Participation rate', value: '74%' },
];

const supportResources = ['Burnout support group', 'Parenting network', 'Returning from leave resources'];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Card className="border-brand-blue/15 bg-gradient-to-r from-brand-blueTint to-white p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Your wellbeing</p>
          <h3 className="text-2xl font-bold">Your wellbeing this week</h3>
          <p className="mt-2 text-sm text-app-textSecondary">
            Welfare is more than benefits. It is how we support each other through shared moments.
          </p>
        </Card>

        <div className="grid gap-4 xl:grid-cols-3">
          {wellbeingCards.map((card) => (
            <Card key={card.title} className="p-5">
              <card.icon className="mb-2 h-4 w-4 text-brand-blue" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">{card.title}</p>
              <p className="mt-2 text-sm font-semibold text-app-textPrimary">{card.value}</p>
              <p className="mt-1 text-xs text-app-textMuted">{card.detail}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                {card.cta}
                <ArrowRightIcon className="h-3 w-3" />
              </button>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Suggested next action</p>
            <h3 className="mb-2 text-lg font-bold">{suggestedNextStep.title}</h3>
            <p className="mb-4 text-sm text-app-textSecondary">{suggestedNextStep.body}</p>
            <Link to={suggestedNextStep.ctaHref}>
              <Button>{suggestedNextStep.ctaLabel}</Button>
            </Link>
          </Card>

          <Card>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Support pathways</p>
            <h3 className="mb-3 text-base font-bold">Life events &amp; support</h3>
            <p className="text-sm text-app-textSecondary">
              Planning a move? Becoming a parent? Returning from leave?
            </p>
            <Button variant="secondary" className="mt-4 h-9 px-3">
              Explore support pathways
            </Button>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Connect &amp; Participate</p>
        <h3 className="section-title">Ways to engage</h3>
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

      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">Support &amp; Community</p>
          <h3 className="mb-3 text-base font-bold">Need support?</h3>
          <div className="grid gap-2 md:grid-cols-3">
            {supportResources.map((resource) => (
              <div key={resource} className="rounded-md border border-app-border bg-app-surface2 px-3 py-2 text-sm text-app-textSecondary">
                {resource}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-base font-bold">Your activity summary</h3>
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

      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-app-textMuted">Organizational insights</p>
          <h3 className="mb-3 text-base font-bold">Culture pulse</h3>
          <div className="space-y-2">
            {culturePulse.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-md bg-app-surface2 px-3 py-2">
                <span className="text-sm text-app-textSecondary">{item.label}</span>
                <span className="text-sm font-bold text-app-textPrimary">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-app-textMuted">Engagement signals</p>
            <h3 className="mb-3 text-base font-bold">Signals based on activity</h3>
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-app-textMuted">Recommended actions</p>
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
        </div>
      </section>
    </div>
  );
}
