'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type ProjectCardProps = {
  title: string;
  tags: string[];
  imageUrl: string;
  marginTopClass?: string;
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/10 w-full top-0">
      <nav className="flex justify-between items-center w-full px-[5vw] py-6 max-w-full mx-auto">
        <Link href="/" className="font-headline-md text-headline-md tracking-widest text-on-surface uppercase">
          AETHELGARD
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/gallery"
            className={`font-body-md text-body-md transition-colors duration-300 ${pathname === '/gallery' ? 'text-primary font-bold border-b border-primary pb-1 scale-95' : 'text-on-surface-variant hover:text-primary'}`}>
            Gallery
          </Link>
          <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300">
            Exhibitions
          </Link>
          <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300">
            Studio
          </Link>
          <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300">
            Inquiry
          </Link>
        </div>
        <button className="hidden md:block bg-primary-container text-on-primary font-label-lg text-label-lg px-6 py-3 hover:bg-primary transition-colors duration-300 uppercase">
          Book Session
        </button>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            menu
          </span>
        </button>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 mt-[160px]">
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-[5vw] py-12 max-w-full mx-auto gap-8">
      <div className="font-headline-md text-headline-md text-on-surface uppercase">AETHELGARD</div>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="font-label-sm text-label-sm text-on-secondary-container hover:text-primary transition-colors duration-300">
          Privacy Policy
        </a>
        <a href="#" className="font-label-sm text-label-sm text-on-secondary-container hover:text-primary transition-colors duration-300">
          Terms of Service
        </a>
        <a href="#" className="font-label-sm text-label-sm text-on-secondary-container hover:text-primary transition-colors duration-300">
          Archive
        </a>
        <a href="#" className="font-label-sm text-label-sm text-on-secondary-container hover:text-primary transition-colors duration-300">
          Contact
        </a>
      </div>
      <div className="font-body-md text-body-md text-on-secondary-container">© 2024 AETHELGARD. ALL RIGHTS RESERVED.</div>
    </div>
  </footer>
);

export const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-grow flex flex-col">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[819px] w-full">
          <div className="flex flex-col justify-center px-[5vw] py-[102px] bg-surface z-10 relative order-2 md:order-1">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-lg max-w-2xl">
              Visualizing the <span className="text-primary-container italic">Unseen</span> Layer.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
              Pioneering intersections of data visualization, remote sensing, and vector illustration. We translate complex datasets into cinematic, high-end editorial experiences for forward-thinking organizations.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <button
                onClick={() => router.push('/gallery')}
                className="bg-primary-container text-on-primary-container px-8 py-4 font-label-lg text-label-lg transition-transform hover:scale-95 duration-200 flex items-center gap-3">
                View Portfolio
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  arrow_forward
                </span>
              </button>
              <Link href="/gallery" className="text-on-surface border-b border-outline-variant pb-1 font-label-lg text-label-lg hover:text-primary hover:border-primary transition-colors duration-300">
                Explore Methodologies
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[512px] md:h-auto order-1 md:order-2 border-b md:border-b-0 md:border-l border-outline-variant/10 overflow-hidden bg-surface-container-low">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent z-10"></div>
            <img
              alt="Abstract data visualization"
              className="w-full h-full object-cover object-center scale-100 hover:scale-[1.02] transition-transform duration-[2s] ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9oZfFQz9OcR7-EV_CZzjoHruFbrPC0EoXx_d5sAEYTg3gcB4xWx0YfhtuXbMqAtSQH3zJgjPXVAZ7-OOERWeburuFfNbmjVspjMEd0XJS8aQzk9pLtNp0XZVvr2wG8sKulbAk7kv7ammghuphAU4DKFpHYbfMGnZc3U4psv5QQQzNulGIMVOISpbD2gcA5Ko7f1JdrR93bCxgRxJjxk1-1tmXysgPytXOgQAmpfG2F4a3oUX_YHdCUtelC5dnit4t44vdFaIKKhU"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const ProjectCard = ({ title, tags, imageUrl, marginTopClass = '' }: ProjectCardProps) => (
  <article className={`hover-card relative overflow-hidden rounded-lg aspect-[4/3] bg-surface-container border border-outline-variant/20 group cursor-pointer ${marginTopClass}`}>
    <div className="absolute inset-0 z-0 bg-image bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }} />
    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end hover-content">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 border border-primary-container text-primary-container font-label-sm text-label-sm rounded uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);

type Project = {
  title: string;
  tags: string[];
  imageUrl: string;
  marginTopClass?: string;
};

export const GalleryPage = ({ projects }: { projects: Project[] }) => {

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-grow px-[5vw] py-section-gap">
        <header className="mb-stack-lg max-w-3xl">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-sm">Selected Works</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            An exploration of spatial data, workflow automation, and creative design aesthetics housed in a cinematic digital environment.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-grid-gutter">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
