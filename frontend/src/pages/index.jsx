// pages/index.jsx (or page.tsx if using TypeScript)
import Card from '@/components/Card';

export default function Home() {
  const newsData = [
    { title: 'News 1', content: 'This is the content for news 1' },
    { title: 'News 2', content: 'This is the content for news 2' },
    { title: 'News 3', content: 'This is the content for news 3' },
    { title: 'News 4', content: 'This is the content for news 4' },
  ];

  return (
    <div className="scroll-container">
      {newsData.map((news, index) => (
        <Card key={index} title={news.title} content={news.content} />
      ))}
    </div>
  );
}
