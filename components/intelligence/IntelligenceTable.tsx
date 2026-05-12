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
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full text-sm">
        <thead className="bg-slate-950">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="p-3 text-left font-semibold text-slate-300"
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
                  className="p-3 leading-6 text-slate-300"
                >
                  {column.render
                    ? column.render(item)
                    : String((item as Record<string, unknown>)[String(column.key)] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}