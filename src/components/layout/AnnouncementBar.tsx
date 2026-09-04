import { SITE } from "@/data";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <p className="py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em]">
        {SITE.announcement}
      </p>
    </div>
  );
}
