# TWogether — Product specification

## Experience
TWogether is a free web app for two people to play together online. No account or registration is required. One player creates a private room and shares its code or invite URL; the second joins from another device.

## Core room requirements
1. Create a cryptographically random room code.
2. Join by code or invite link.
3. Show waiting/connected states and player presence.
4. Reconnect after refresh or temporary network loss.
5. Synchronize authoritative game state through the server.
6. Validate moves server-side; never trust a client-submitted winner or score.
7. Store completed matches and update public leaderboards without exposing personal data.
8. Provide a leave-room action and handle abandoned rooms.

## Game categories
Tic-tac-toe, chess, checkers, billiards, mini golf, bowling, battleship, card games, word guessing, couples quizzes, reaction games, puzzles, UNO-style games, board games, creative games, memory games, racing games, and original TWogether games.

## Multiplayer modes
- Turn-based games: server-authoritative turns and persistent room state.
- Real-time games: server-authoritative inputs/state snapshots with bounded update rates.
- Hybrid games: choose the mode appropriate to each game.

## Guest identity
Generate a random local guest identifier and display name locally. No email, social login, or registration. Do not use guest IDs as authentication secrets. Provide a clear warning that browser data loss may remove a guest's local identity.

## Social features
- Friends/invites: shareable invite links first; persistent friend lists can use anonymous guest IDs and should be described as device-bound.
- Online status: based on live room connections, with short expiry for stale presence.
- Match history: store anonymous player labels/IDs, game type, result, and timestamps.
- Leaderboards: separate rankings by game and season; avoid collecting real names.
- Voice: later milestone using WebRTC, explicit microphone permission, mute controls, and no recording.

## Visual direction
Warm cream surfaces, subtle coral/pink and violet accents, dark ink text, restrained glow, crisp game boards, and playful but polished details. Avoid generic full-screen gradients and excessive glass effects. Prioritize readability and responsive touch controls.

## Quality gates
- Two separate browsers/devices can create and join a room.
- Reconnection restores the same room and game state.
- Invalid moves are rejected server-side.
- A completed match appears in history and updates its leaderboard exactly once.
- No account, payment, ad, or premium flow exists.
- Test keyboard, touch, reduced motion, and narrow mobile layouts.
