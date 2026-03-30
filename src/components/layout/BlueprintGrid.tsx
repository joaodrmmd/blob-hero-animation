const BlueprintGrid = () => (
  <div className="blueprint-grid fixed inset-0 pointer-events-none z-[2]" aria-hidden="true">
    {/* Vertical lines */}
    <div className="absolute left-[5%] top-0 bottom-0 w-px bg-primary/[0.06]" />
    <div className="absolute left-[25%] top-0 bottom-0 w-px bg-primary/[0.04]" />
    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-primary/[0.06]" />
    <div className="absolute left-[75%] top-0 bottom-0 w-px bg-primary/[0.04]" />
    <div className="absolute right-[5%] top-0 bottom-0 w-px bg-primary/[0.06]" />
  </div>
);

export default BlueprintGrid;
