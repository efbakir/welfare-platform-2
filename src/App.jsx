import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '../components/AppShell';
import HomePage from '../routes/HomePage';
import CommunitiesPage from '../routes/CommunitiesPage';
import CommunityDetailPage from '../routes/CommunityDetailPage';
import ChallengesPage from '../routes/ChallengesPage';
import ChallengeDetailPage from '../routes/ChallengeDetailPage';
import EventsPage from '../routes/EventsPage';
import EventDetailPage from '../routes/EventDetailPage';
import InsightsPage from '../routes/InsightsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/communities/:communityId" element={<CommunityDetailPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenges/:challengeId" element={<ChallengeDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
