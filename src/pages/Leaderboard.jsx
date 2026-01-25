import { useState, useEffect, useRef } from "react";
import { leaderboardData } from "../data";


const events = [
  "Overall",
  "Calligraphy Competition",
  "Science Fair",
  "Drama & Skit Competition",
  "Modelling Competition",
  "Rubik’s Cube Competition",
  "Stand-Up Comedy",
  "PPT Making Competition",
  "Social Science Quiz",
  "Drawing Competition",
  "Poem Writing",
  "Robotics Competition",
  "Debate Competition",
  "Mehendi Art Competition",
  "Storytelling Competition",
  "Carrom Competition",
  "Ideas and Innovation Challenge",
  "Dance Competition",
  "Public Speaking Competition",
  "Throw Ball",
  "Poem Recitation",
  "Poster Making",
  "Handwriting Competition",
  "Talent Show - X Factor",
  "Script Writing Competition",
  "Fireless Cooking",
  "Tech Quiz Competition",
  "Musical Instrument Playing Competition",
  "Pencil Sketch Competition",
  "Anchoring Competition",
  "Hula Hoop",
  "Logo Designing Competition",
  "Mobile App / Web Designing Competition",
  "One Act Play",
  "Target Competition",
  "Physics Quiz",
  "GK Quiz Competition",
  "Hairstyling Competition",
  "Chess Competition",
  "Basketball",
  "Badminton Competition",
  "Model Making Competition",
  "Makeup Competition",
  "Maths Puzzle",
  "Yoga Competition",
  "Chemistry Quiz",
  "Essay Writing Competition",
  "Biology Quiz",
  "Singing Competition",
  "Social Media Ad Making Competition",
  "Painting Competition",
  "Rangoli Making Competition",
  "Fancy Dress Competition",
  "Art & Craft Competition",
  "Volleyball",
  "Coding Competition",
  "History Quiz",
  "Spell Bee Competition",
];

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("Overall");
  const [eventSearch, setEventSearch] = useState("");

  // animation states
  const [pressedTop, setPressedTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const listRef = useRef(null);
  useEffect(() => {
    let timeout;

    const handleTouchMove = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 120);
    };

    const list = listRef.current;
    if (!list) return;

    list.addEventListener("touchmove", handleTouchMove);

    return () => {
      list.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const filtered = leaderboardData
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    .filter((s) =>
      selectedEvent === "Overall" ? true : s.event === selectedEvent
    )
    .sort((a, b) => b.points - a.points)
    .map((s, i) => ({ ...s, rank: i + 1 }));

  return (
    <div className="app">
      {/* SEARCH + FILTER */}
      <div className="search-filter">
        <div className="search-box">
          🔍
          <input
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="filter-btn" onClick={() => setShowFilter(true)}>
          🏆 {selectedEvent}
        </button>
      </div>
         {/* TABLE HEADER */}
       <div className="leaderboard-header">
            <span className="col-rank">Rank</span>
            <span className="col-avatar"></span>
            <span className="col-name">Name</span>
              <span className="col-score">Points</span>
        </div>
      {/* LEADERBOARD */}
      <div className="list" ref={listRef}>
        {filtered.map((s) => (
          <div
            key={s.rank}
            className={`rank-card
              ${s.rank === 1 && pressedTop ? "is-pressed" : ""}
              ${pressedTop && s.rank !== 1 ? "is-dimmed" : ""}
              ${isScrolling ? "is-scrolling" : ""}
            `}
            onTouchStart={() => s.rank === 1 && setPressedTop(true)}
            onTouchEnd={() => setPressedTop(false)}
            onTouchCancel={() => setPressedTop(false)}
          >
            <div className="rank-badge">
              {s.rank <= 3 ? (
                <span className={`medal medal-${s.rank}`}>{s.rank}</span>
              ) : (
                <span className="rank-number">{s.rank}</span>
              )}
            </div>

            <div className="rank-avatar">
              {s.name.charAt(0).toUpperCase()}
            </div>

            <div className="rank-info">
              <div className="rank-name">{s.name}</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.min(5, Math.ceil(s.points / 600))
                        ? "star filled"
                        : "star"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="rank-score">{s.points}</div>
          </div>
        ))}
      </div>

      {/* FILTER MODAL */}
      {showFilter && (
        <div className="modal-overlay" onClick={() => setShowFilter(false)}>
          <div className="side-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Select Event</h3>

            <div className="modal-search">
              🔍
              <input
                placeholder="Search Event..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
              />
            </div>

            <ul className="event-list">
              {events
                .filter((e) =>
                  e.toLowerCase().includes(eventSearch.toLowerCase())
                )
                .map((event) => (
                  <li
                    key={event}
                    className={event === selectedEvent ? "active" : ""}
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowFilter(false);
                      setEventSearch("");
                    }}
                  >
                    {event}
                    {event === selectedEvent && " ✔"}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
