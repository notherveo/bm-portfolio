import type { ComponentType } from "react";

import { Card } from "@/components/ui/card";

export function ProjectCard({
  title,
  category,
  icon: Icon,
  desc,
  tags,
}: {
  title: string;
  category: string;
  icon: ComponentType<{ className?: string }>;
  desc: string;
  tags: string[];
}) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Icon className="size-4" />
        </span>
        <span className="text-sm text-muted-foreground">{category}</span>
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
