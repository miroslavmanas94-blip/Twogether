# TWogether — implementation status

Last updated: 2026-11-07

## Deployed infrastructure
- Cloudflare Worker: `twogether`
- Public worker address: `https://twogether.miroslavmanas94.workers.dev`
- Cloudflare D1: `twogether-game-data` (EU jurisdiction)
- Durable Object class: `GameRoom` using SQLite-backed storage
- Worker bindings: `ROOMS` and `DB`
- Worker observability and invocation logs enabled
- workers.dev subdomain enabled for this Worker

## Implemented in the current build
- Create a room and receive a six-character code.
- Join a room by code or invite URL.
- Two-player WebSocket room synchronization.
- Server-authoritative Tic-tac-toe turn validation and win/draw detection.
- Player online/offline presence inside the room.
- Rematch without creating a new room.
- Anonymous match history in D1.
- Anonymous global wins leaderboard.
- Guest identity stored locally in the browser; no account or registration.
- Responsive Czech landing and game-room UI.
- GitHub Actions workflow for JavaScript syntax and configuration checks has been added.

## Not implemented yet
- Chess, checkers, billiards, mini golf, bowling, battleship, card games, word games, couples quizzes, reaction games, puzzles, UNO-style, board, creative, memory, racing, and original games.
- Voice communication / WebRTC.
- Cross-device friends list and persistent friend graph.
- Global online/friends presence outside active game rooms.
- Full game-specific leaderboard filters, seasons, and richer match summaries.
- End-to-end verification using two independent browsers/devices.

## Verification notes
- Cloudflare accepted the Worker module upload and reported a successful deployment.
- Worker settings confirm both D1 and Durable Object bindings.
- D1 SQL query confirms the `matches` table and its indexes exist.
- The execution environment used for this build blocks direct HTTP requests to `workers.dev`; therefore, a live two-browser gameplay test has not yet been completed here.
