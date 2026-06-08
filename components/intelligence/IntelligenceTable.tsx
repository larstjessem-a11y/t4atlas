type IntelligenceTableColumn<T> = {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
};

type IntelligenceTableProps<T> = {
  columns: IntelligenceTableColumn<T>[];
  data: T[];
};

export default function IntelligenceTable<T>({
  columns,
  data,
}: IntelligenceTableProps<T>) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-[var(--t4-border)] bg-white/70">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="bg-[#f8f6f1]">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="whitespace-nowrap p-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--t4-muted)]"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--t4-border)] bg-white/60">
            {data.map((item, index) => (
              <tr key={index} className="align-top hover:bg-[#f8f6f1]">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="max-w-[360px] p-3 text-sm leading-6 text-[var(--t4-muted)]"
                  >
                    {column.render
                      ? column.render(item)
                      : String(
                          (item as Record<string, unknown>)[
                            String(column.key)
                          ] ?? "—"
                        )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}