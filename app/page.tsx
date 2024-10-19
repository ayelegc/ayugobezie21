import Intro from '@/components/introduction'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
export default function Home() {
  return (
    <section className="pt-40 py-20">
      <div className="container max-w-3xl mx-auto">
        <Intro />
        <RecentPosts/>
        <RecentProjects/>
      </div>
    </section>
  );
}
