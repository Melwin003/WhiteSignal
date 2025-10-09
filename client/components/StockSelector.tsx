import { useState, useEffect } from "react";

interface Company {
  issuer: string;
  security: string;
  isin: string;
}

export default function StockSelector({
  onSelect,
}: {
  onSelect: (company: Company) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (query.length < 1 || selectedCompany) {
      // ✅ Don’t fetch if already selected
      setResults([]);
      return;
    }

    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://35.225.124.79.sslip.io/webhook/api/search-company?query=${encodeURIComponent(
            query
          )}`
        );
        const data = await res.json();
        setResults(data || []);
      } catch (err) {
        console.error("API error:", err);
        setResults([]);
      }
      setLoading(false);
    };

    const timeout = setTimeout(fetchCompanies, 300);
    return () => clearTimeout(timeout);
  }, [query, selectedCompany]);

  const handleSelect = (company: Company) => {
    setSelectedCompany(company);   // save chosen company
    setQuery(company.issuer);      // show issuer name in input
    setResults([]);                // clear list
    onSelect(company);             // pass ISIN up to Signup.tsx
  };

  return (
    <div className="max-w-lg">
      <div className="border border-brand-olive rounded-lg bg-[#11120D] text-brand-cream shadow-lg">
        <input
          type="text"
          placeholder="Select a Stock..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedCompany(null); // allow re-search
          }}
          className="w-full bg-[#11120D] text-brand-cream placeholder-gray-400 p-3 rounded-t-lg"
        />

        {/* Only show search results when typing, not after selection */}
        {!selectedCompany && (
          <div>
            {loading && <div className="p-3">Loading…</div>}
            {!loading && query.length > 0 && results.length === 0 && (
              <div className="p-3">No companies found.</div>
            )}
            {results.map((company) => (
              <div
                key={company.isin}
                onClick={() => handleSelect(company)}
                className="cursor-pointer hover:bg-brand-olive hover:text-brand-cream p-3 border-t border-gray-700"
              >
                <div className="grid grid-cols-3 gap-4 w-full">
                  <span>{company.issuer}</span>
                  <span className="text-sm text-gray-400">{company.security}</span>
                  <span className="text-sm text-gray-500">{company.isin}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✅ After selection → show only chosen stock */}
        {selectedCompany && (
          <div className="p-3 border-t border-gray-700">
            <div className="grid grid-cols-3 gap-4 w-full">
              <span>{selectedCompany.issuer}</span>
              <span className="text-sm text-gray-400">{selectedCompany.security}</span>
              <span className="text-sm text-gray-500">{selectedCompany.isin}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
