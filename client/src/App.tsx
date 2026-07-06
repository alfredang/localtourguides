import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guides from './pages/Guides';
import GuideProfile from './pages/GuideProfile';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import HowItWorks from './pages/HowItWorks';
import Verification from './pages/Verification';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideProfile />} />
        <Route path="/destinations/:slug" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}
