"use client";

import { useUI } from "@/context/UIContext";
import { Modal } from "@/components/Modals/Modal";

const rows = [
  { size: "XS", chest: "86–91", waist: "68–73", hip: "88–93" },
  { size: "S", chest: "91–96", waist: "73–78", hip: "93–98" },
  { size: "M", chest: "96–101", waist: "78–83", hip: "98–103" },
  { size: "L", chest: "101–106", waist: "83–88", hip: "103–108" },
  { size: "XL", chest: "106–114", waist: "88–96", hip: "108–116" },
];

export function SizeGuideModal() {
  const { sizeGuideOpen, setSizeGuideOpen } = useUI();

  return (
    <Modal
      open={sizeGuideOpen}
      onOpenChange={setSizeGuideOpen}
      title="Size guide"
      description="Measurements in centimetres. If you sit between sizes, take the larger."
      className="max-w-lg"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
              <th className="py-2 pr-3 font-medium">Size</th>
              <th className="py-2 pr-3 font-medium">Chest</th>
              <th className="py-2 pr-3 font-medium">Waist</th>
              <th className="py-2 font-medium">Hip</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.size} className="border-b border-border/60">
                <td className="py-2.5 pr-3 font-medium">{r.size}</td>
                <td className="py-2.5 pr-3 text-muted-foreground">{r.chest}</td>
                <td className="py-2.5 pr-3 text-muted-foreground">{r.waist}</td>
                <td className="py-2.5 text-muted-foreground">{r.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
