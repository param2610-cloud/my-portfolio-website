interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  href: string;
}

export function BlogPost({ title, excerpt, date, tag, href }: BlogPostProps) {
  return (
    <article className="card-hover rounded-xl border border-border/50 p-6 text-left h-full">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          {tag}
        </span>
        <span className="text-lg leading-none" aria-hidden="true">
          📝
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-3 leading-snug">
        <a href={href} className="transition-colors hover:text-primary">
          {title}
        </a>
      </h3>

      <p className="text-muted-foreground mb-4">{excerpt}</p>
      <div className="text-sm text-muted-foreground">{date}</div>
    </article>
  );
}
