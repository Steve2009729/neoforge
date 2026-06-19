'use client';

const DEVS = [
  { id: 1, name: 'Alex Chen', title: 'Full Stack Engineer', skills: ['React', 'Node.js', 'TypeScript'], projects: 18, initials: 'AC' },
  { id: 2, name: 'Sarah Kim', title: 'ML Engineer', skills: ['Python', 'PyTorch', 'TensorFlow'], projects: 24, initials: 'SK' },
  { id: 3, name: 'Marcus Johnson', title: 'Web3 Developer', skills: ['Solidity', 'Rust', 'Web3.js'], projects: 15, initials: 'MJ' },
  { id: 4, name: 'Emma Davis', title: 'Frontend Specialist', skills: ['Vue', 'CSS', 'Figma'], projects: 31, initials: 'ED' },
  { id: 5, name: 'David Park', title: 'Cloud Architect', skills: ['AWS', 'Kubernetes', 'Go'], projects: 22, initials: 'DP' },
  { id: 6, name: 'Amara Diallo', title: 'Backend Engineer', skills: ['Go', 'PostgreSQL', 'Redis'], projects: 19, initials: 'AD' },
  { id: 7, name: 'Ryan Torres', title: 'Mobile Developer', skills: ['Swift', 'Kotlin', 'Flutter'], projects: 14, initials: 'RT' },
  { id: 8, name: 'Priya Patel', title: 'DevOps Engineer', skills: ['Terraform', 'Docker', 'CI/CD'], projects: 27, initials: 'PP' },
];

const COLORS = ['#7C3AED', '#9333ea', '#7e22ce', '#6d28d9', '#5b21b6', '#8b5cf6', '#a855f7', '#6366f1'];

const Card = ({ dev, colorIndex }: { dev: typeof DEVS[0]; colorIndex: number }) => (
  <div style={{
    flexShrink: 0, width: '280px', margin: '0 12px',
    backgroundColor: '#1A1A2E', borderRadius: '16px',
    border: '1px solid rgba(124,58,237,0.3)',
    padding: '24px', transition: 'all 0.3s',
  }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.7)';
    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.25)';
    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)';
    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
  }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{
        width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
        backgroundColor: COLORS[colorIndex % COLORS.length],
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: '700', color: 'white', fontSize: '14px',
      }}>
        {dev.initials}
      </div>
      <div>
        <div style={{ fontWeight: '600', color: 'white', fontSize: '15px' }}>{dev.name}</div>
        <div style={{ fontSize: '12px', color: '#B8B5C9' }}>{dev.title}</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
      {dev.skills.map(skill => (
        <span key={skill} style={{
          padding: '3px 10px', borderRadius: '100px', fontSize: '11px',
          backgroundColor: 'rgba(124,58,237,0.2)', color: '#c4b5fd',
          border: '1px solid rgba(124,58,237,0.3)',
        }}>{skill}</span>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '12px', color: '#6B6882' }}>{dev.projects} projects</span>
      <span style={{ fontSize: '12px', color: '#a855f7', cursor: 'pointer' }}>View Portfolio →</span>
    </div>
  </div>
);

export const PortfolioScroll = () => {
  const doubled = [...DEVS, ...DEVS];
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#0D0D14', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 40px' }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
          Developers Building Amazing Things
        </h2>
        <p style={{ color: '#B8B5C9', fontSize: '16px' }}>Join thousands of developers showcasing their portfolios</p>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #0D0D14, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #0D0D14, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', width: 'max-content' }} className="animate-scroll-x">
          {doubled.map((dev, i) => <Card key={`${dev.id}-${i}`} dev={dev} colorIndex={i} />)}
        </div>
      </div>
    </section>
  );
};
