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
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-800">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="bg-slate-950">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="whitespace-nowrap p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 bg-slate-900/60">
            {data.map((item, index) => (
              <tr key={index} className="align-top">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="max-w-[360px] p-3 text-sm leading-6 text-slate-300"
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