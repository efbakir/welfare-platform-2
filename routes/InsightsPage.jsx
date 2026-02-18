import Card from '../components/Card';
import {
  engagementOverview,
  topCommunities,
  challengeParticipation,
  workModeSegments,
  aiSuggestions,
} from '../data/insights';

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="section-title mb-4">Engagement overview</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {engagementOverview.map((metric) => (
            <Card key={metric.label} className="p-4">
              <p className="text-xs text-app-textMuted">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold">{metric.value}</p>
              <p className="text-sm font-semibold text-[#2f9e44]">{metric.trend}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card>
          <h3 className="mb-3 text-base font-bold">Top communities</h3>
          <div className="space-y-3 text-sm">
            {topCommunities.map((item) => (
              <div key={item.name} className="rounded-md bg-app-surface2 p-3">
                <p className="font-semibold text-app-textPrimary">{item.name}</p>
                <p className="text-app-textSecondary">Growth: {item.growth}</p>
                <p className="text-app-textMuted">Activity: {item.activity}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-base font-bold">Challenge participation</h3>
          <div className="space-y-3 text-sm">
            {challengeParticipation.map((item) => (
              <div key={item.name} className="rounded-md bg-app-surface2 p-3">
                <p className="font-semibold text-app-textPrimary">{item.name}</p>
                <p className="text-app-textSecondary">Participants: {item.participants}</p>
                <p className="text-app-textMuted">Status: {item.completion}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-base font-bold">AI suggestions</h3>
          <ul className="space-y-2 text-sm text-app-textSecondary">
            {aiSuggestions.map((suggestion) => (
              <li key={suggestion} className="rounded-md bg-brand-blueTint px-3 py-2">
                {suggestion}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <h3 className="mb-3 text-base font-bold">Work mode segmentation and actions</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {workModeSegments.map((segment) => (
            <div key={segment.mode} className="rounded-md border border-app-border bg-app-surface2 p-3">
              <p className="text-sm font-bold">{segment.mode}</p>
              <p className="text-sm text-app-textSecondary">Engagement: {segment.engagement}</p>
              <p className="mt-1 text-xs text-app-textMuted">Recommended action: {segment.action}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
