# TWogether — release plan

Last updated: 2026-11-07

## Confirmed product decisions
- Web application, Czech-first and responsive on desktop, tablet and mobile.
- Exactly two players per private room.
- Completely free: no ads, subscriptions, premium tier, or paid game unlocks.
- No mandatory registration. Anonymous guest identity, room code and invite link.
- Arcade-first delivery order; all 18 catalogue entries are intended to become fully playable.
- Calls are optional and the player chooses audio or video when starting a call.
- Deployment target: GitHub `main` followed by Cloudflare Worker `twogether`, only after checks pass.

## Release principles
1. A catalogue tile is not a game. A game is marked playable only after its complete rules, input handling, multiplayer synchronization, rematch/restart, disconnect behavior, and mobile layout have been tested.
2. Real-time games must be server-authoritative or use a clearly defined deterministic synchronization model. Never trust client-submitted scores or winners.
3. Keep the existing D1 database and Durable Object namespace. No destructive migrations, permission changes, or unrelated data changes.
4. Do not introduce paid APIs or services. Voice/video uses browser WebRTC with an explicit permission prompt and a graceful unavailable state when peer connectivity cannot be established. No promise of a TURN relay unless a free, reliable relay is configured.
5. Release in coherent, testable increments. A single Git push may contain multiple completed modules, but does not replace independent-browser testing.

## Game catalogue and intended mechanics

### Arcade-first wave
- **Kulečník:** 2-player turn-taking, aiming, power, collision/rail physics, legal ball/pocket rules, foul handling, score and match end.
- **Minigolf:** shared course, shot direction/power, obstacles, stroke count, hole completion, course progression and winner.
- **Bowling:** 10-frame scoring including strikes, spares and bonus rolls; alternating players and match summary.
- **Reakční hry:** synchronized round start, randomized cue timing, false-start detection, latency-aware result capture and best-of series.
- **Závodní hry:** synchronized countdown, deterministic race state, checkpoints, lap timing, finish order and reconnect recovery.

### Following waves
- **Piškvorky:** legal turn order, win/draw detection and rematch.
- **Šachy:** complete legal move generation, check/checkmate, castling, en passant, promotion, draw conditions and move history.
- **Dáma:** legal captures, mandatory capture, multi-jumps, king promotion and win conditions.
- **Lodě:** private ship placement, hidden opponent board, hit/miss feedback and win detection.
- **Karetní hry:** named variants with explicit rules and complete deck/discard/turn state; no generic placeholder.
- **Hádání slov:** private word selection, validated guesses, hints, round limits and scoring.
- **Kvízy pro páry:** curated question sets, simultaneous answer reveal, scoring and optional non-competitive mode.
- **Puzzle:** shared or race mode with validated piece placement and completion detection.
- **UNO-style:** original rules and original presentation, with draw/skip/reverse/wild actions and legal-play validation; no copied branding or assets.
- **Stolní hry:** individually specified board-game rules and move validation, not a generic board shell.
- **Kreativní hry:** synchronized prompts, drawing/creation turns and round voting or reveal.
- **Paměťové hry:** synchronized card layout, private turn state, match pairs and scoring.
- **Originální TWogether hry:** original mini-game collection designed specifically for two players.

## Shared platform work
- Room lifecycle, invite links, reconnect and presence.
- Guest identity recovery across devices using a recovery secret; store only a server-side hash, never plaintext recovery secrets.
- Match history and per-game leaderboards with clear anonymous-player labels.
- Friends and online status without mandatory registration.
- Audio/video calls both inside a game room and in a separate call room; user chooses audio or video each time.
- Accessible, responsive UI with keyboard and touch controls, reduced-motion support and clear connection/error states.

## Acceptance gates before production deployment
- JavaScript syntax and configuration checks pass.
- Game rules have automated unit tests for valid and invalid actions, edge cases and end states.
- Two independent browsers/devices complete a full match for every game marked playable.
- Room reconnect, full-room rejection, rematch, player disconnect and D1 match history are checked.
- Audio and video permission-denied, unsupported-browser and failed-peer-connection paths are checked.
- No destructive D1 migration or changes to database permissions.
- Cloudflare deployment reports success, then the public Worker is smoke-tested. If public live testing is blocked, state that limitation rather than claiming success.

## Current baseline (before implementation of this plan)
Only Tic-tac-toe is implemented in the production code. The other 17 entries, calls, and cross-device friends/recovery are not yet implemented. This plan does not mark any of them as completed.
