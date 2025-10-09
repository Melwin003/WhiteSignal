import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Rollup = {
  company_name: string;
  total_trades: number;
  total_value: number;
  highlight: string | null;
};

export default function RollupTable() {
  const [rows, setRows] = useState<Rollup[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch rollups once when page loads
  const fetchRollups = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("disclosures_by_company")
      .select("company_name, total_trades, total_value, highlight")
      .gte(
        "trade_date",
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      ) // last 7 days
      .order("total_value", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Error fetching rollups:", error);
    } else {
      setRows(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRollups();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading rollups…</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
        <thead className="bg-[#11201d] text-[#fffbf4]">
          <tr>
            <th className="px-6 py-3">Company</th>
            <th className="px-6 py-3">Trades</th>
            <th className="px-6 py-3">Value (₹ Cr)</th>
            <th className="px-6 py-3">Highlight</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 font-medium">{row.company_name}</td>
              <td className="px-6 py-4">{row.total_trades}</td>
              <td className="px-6 py-4">
                {row.total_value ? row.total_value.toFixed(2) : "—"}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {row.highlight || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
