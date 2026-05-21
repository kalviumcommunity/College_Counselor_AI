import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { fetchRecommendations } from "../api";
import CardStack from "../components/CardStack";

export default function Recommendations() {
  const location = useLocation();
  const navigate = useNavigate();
  const conversation = location.state?.conversation || [];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (conversation.length === 0) {
      navigate("/chat");
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const result = await fetchRecommendations(conversation);
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [conversation, navigate]);

  return (
    <div className="min-h-[90vh] flex flex-col items-center px-4 py-6 bg-gradient-to-b from-zinc-50 to-zinc-100">
      <div className="w-full max-w-md mb-4">
        <button
          onClick={() => navigate("/chat")}
          className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition"
        >
          <ArrowLeft size={16} />
          Back to chat
        </button>
      </div>

      <div className="w-full max-w-md">
        {data?.profile && (
          <div className="bg-white rounded-2xl border border-zinc-200 p-4 mb-4">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
              Based on your preferences
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {data.profile.stream && (
                <span className="bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full">
                  Stream: {data.profile.stream}
                </span>
              )}
              {data.profile.budget && (
                <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
                  Budget: {data.profile.budget}
                </span>
              )}
              {data.profile.state && (
                <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                  {data.profile.state}
                </span>
              )}
              {data.profile.interests?.map((i) => (
                <span
                  key={i}
                  className="bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {loading && (
        <div className="flex flex-col items-center gap-3 mt-12 text-zinc-500">
          <Loader2 className="animate-spin" size={32} />
          <p className="text-sm">Pulling together your recommendations…</p>
        </div>
      )}

      {error && (
        <div className="bg-white border border-rose-200 rounded-2xl p-6 max-w-md w-full text-center mt-8">
          <p className="text-rose-600 font-medium mb-2">{error}</p>
          <button
            onClick={() => navigate("/chat")}
            className="text-sm text-blue-600 underline"
          >
            Go back to chat
          </button>
        </div>
      )}

      {!loading && !error && data && (
        <>
          {data.universities && data.universities.length > 0 ? (
            <CardStack universities={data.universities} />
          ) : (
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 max-w-md w-full text-center mt-4">
              <p className="text-zinc-700 mb-3">{data.message}</p>
              <button
                onClick={() => navigate("/chat")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
              >
                Back to chat
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
