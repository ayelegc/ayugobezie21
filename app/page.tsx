import Intro from '@/components/introduction'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Proficiency from '@/components/proficiency'

export default function Home() {
  return (
    <section className="pt-40 py-30">
      <div className="container max-w-3xl mx-auto">
        <Intro />
        <Proficiency/>
        <RecentPosts/>
        <RecentProjects/>
      </div>
    </section>
  );
}
