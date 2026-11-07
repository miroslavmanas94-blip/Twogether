# TWogether

A free, no-registration, two-player web game platform for couples and friends.

## Product principles
- Free to play: no ads, subscriptions, Premium tier, or paywalled games.
- No account required: players join with a room code or invite link.
- Turn-based and real-time multiplayer, depending on the game.
- Mobile-first interface with a warm romantic + modern gaming visual identity.
- Build a reliable shared game-room system before expanding the game catalogue.

## Planned catalogue
Tic-tac-toe, chess, checkers, billiards, mini golf, bowling, battleship, card games, word guessing, couples quizzes, reaction games, puzzles, UNO-style games, board games, creative games, memory games, racing games, and original TWogether games.

## Platform architecture
- Cloudflare Worker: HTTP API and application delivery.
- Durable Objects: strongly consistent state and WebSocket connections per game room.
- D1: persistent match history, public leaderboards, and room metadata without requiring accounts.
- WebRTC: optional voice communication, with WebSocket signaling and peer-to-peer media where possible.

## Privacy and guest identity
A browser-generated guest ID identifies a player without registration. Clearing browser storage can reset that identity; the app must explain this clearly. Room codes should be random, short-lived when unused, and protected against guessing.

## Development
The first milestone is the game-room foundation: create/join by code or link, reconnect, player presence, synchronized game state, turn validation, and match history. Games are added on top of a shared game interface and rules engine.

## Status
Initial repository scaffold. Features are not considered complete until tested in two separate browser sessions and deployed successfully.
