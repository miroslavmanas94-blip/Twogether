CREATE TABLE IF NOT EXISTS matches (
  match_id TEXT PRIMARY KEY,
  room_code TEXT NOT NULL,
  game_id TEXT NOT NULL,
  player_one TEXT NOT NULL,
  player_two TEXT NOT NULL,
  winner_id TEXT,
  result TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_matches_created_at
  ON matches(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_matches_player_one
  ON matches(player_one, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_matches_player_two
  ON matches(player_two, created_at DESC);
