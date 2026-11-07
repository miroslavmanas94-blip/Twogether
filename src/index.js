const HTML = String.raw`<!doctype html>
<html lang="cs">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#fff8f3"><meta name="description" content="TWogether — zahrajte si spolu. Zdarma, bez registrace.">
<title>TWogether — Hrajte spolu</title>
<style>
:root{color-scheme:light;--ink:#29233a;--muted:#82798e;--cream:#fff8f3;--paper:#fff;--pink:#ff7c9c;--coral:#ff9b83;--violet:#8274ed;--line:#f0e5e7;--shadow:0 18px 55px #4b31500d}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 8% 0%,#ffe8ed 0,transparent 34%),radial-gradient(ellipse at 95% 15%,#ebe8ff 0,transparent 32%),var(--cream);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100vh}
button,input{font:inherit}button{cursor:pointer;border:0}.shell{max-width:1120px;margin:auto;padding:26px 22px 70px}.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:62px}.brand{display:flex;gap:11px;align-items:center;font-weight:850;font-size:22px;letter-spacing:-.8px}.mark{width:39px;height:39px;border-radius:14px;background:linear-gradient(135deg,var(--pink),var(--violet));display:grid;place-items:center;color:white;font-size:20px;box-shadow:0 8px 22px #ff8ba744}.free{border:1px solid #eadfe9;border-radius:99px;padding:8px 13px;font-size:12px;color:#786e85;background:#ffffffa8}
.hero{text-align:center;max-width:740px;margin:0 auto 40px}.eyebrow{display:inline-flex;gap:7px;align-items:center;border:1px solid #f2dfe5;background:#fff9f8;border-radius:99px;padding:8px 13px;color:#b65f7b;font-size:12px;font-weight:750;letter-spacing:.3px}.hero h1{font-size:clamp(42px,7vw,70px);line-height:1.02;letter-spacing:-3.5px;margin:20px 0 14px}.gradient{background:linear-gradient(100deg,#f06f98,#9079ed);background-clip:text;color:transparent}.hero p{font-size:17px;line-height:1.7;color:var(--muted);margin:0 auto;max-width:570px}
.panel{max-width:760px;margin:0 auto;background:#ffffffd9;border:1px solid #fff;box-shadow:var(--shadow);border-radius:27px;padding:24px;backdrop-filter:blur(12px)}.panel h2{margin:0 0 6px;font-size:20px;letter-spacing:-.5px}.sub{color:var(--muted);font-size:13px;margin:0 0 18px}.actions{display:grid;grid-template-columns:1fr 1fr;gap:12px}.primary,.secondary{padding:15px 17px;border-radius:15px;font-weight:800;transition:transform .15s,box-shadow .15s}.primary{background:linear-gradient(110deg,#f47b9d,#8878ec);color:white;box-shadow:0 9px 22px #c27ba533}.secondary{background:#fff;border:1px solid var(--line);color:var(--ink)}.primary:hover,.secondary:hover{transform:translateY(-2px)}.join{display:flex;gap:9px;margin-top:12px}.join input{width:100%;min-width:0;border:1px solid var(--line);background:#fff;border-radius:14px;padding:14px 15px;outline:none;text-transform:uppercase;letter-spacing:2px}.join input:focus{border-color:#b9a7f1;box-shadow:0 0 0 3px #8c7be51a}.status{min-height:22px;color:#8a7189;font-size:13px;margin-top:12px}.games{max-width:930px;margin:60px auto 0}.section-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:18px}.section-head h2{margin:0;font-size:24px;letter-spacing:-.8px}.section-head p{margin:4px 0 0;color:var(--muted);font-size:13px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.game{background:#ffffffb8;border:1px solid #fff;border-radius:18px;padding:17px;min-height:118px;box-shadow:0 8px 25px #4b315007}.game .emoji{font-size:24px}.game strong{display:block;font-size:13px;margin-top:10px}.game small{color:#a49aa9;font-size:11px}.game.live{border-color:#f5c6d3;background:#fff8fa}.game.live small{color:#bf6683}.foot{text-align:center;color:#a39aa8;font-size:12px;margin-top:45px}
.room-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.code{background:#f9f1fa;border:1px dashed #d8c5e5;border-radius:12px;padding:9px 12px;font-weight:850;letter-spacing:2px}.board{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:390px;margin:24px auto}.cell{aspect-ratio:1;background:#fff;border:1px solid var(--line);border-radius:20px;font-size:clamp(42px,9vw,64px);font-weight:850;color:#8a77e9;box-shadow:0 5px 16px #39204b0a}.cell:disabled{cursor:default}.players{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}.player{padding:9px 13px;border-radius:99px;background:#fff;border:1px solid var(--line);font-size:12px;color:var(--muted)}.player.active{border-color:#e8a7bc;background:#fff4f7;color:#a94f70;font-weight:800}.room-actions{display:flex;justify-content:center;gap:9px;flex-wrap:wrap;margin-top:15px}.hidden{display:none!important}
@media(max-width:650px){.shell{padding:18px 14px 50px}.top{margin-bottom:44px}.hero h1{letter-spacing:-2px}.hero p{font-size:15px}.panel{padding:18px;border-radius:22px}.actions{grid-template-columns:1fr}.join{flex-direction:column}.grid{grid-template-columns:repeat(2,1fr)}.section-head{align-items:start;flex-direction:column;gap:6px}}
</style></head>
<body><main class="shell">
<header class="top"><div class="brand"><div class="mark">♡</div>TWogether</div><div class="free">✦ 100% zdarma · bez registrace</div></header>
<section id="home"><div class="hero"><div class="eyebrow">♡ Váš společný herní svět</div><h1>Dva hráči.<br><span class="gradient">Jeden společný zážitek.</span></h1><p>Propojte se během pár sekund a zahrajte si spolu. Ať jste vedle sebe, nebo každý na jiném konci světa.</p></div>
<div class="panel"><h2>Začněte hrát spolu</h2><p class="sub">Vytvořte místnost a pošlete kód druhému hráči.</p><div class="actions"><button class="primary" id="create">＋ Vytvořit místnost</button><button class="secondary" id="copyInvite" disabled>↗ Zkopírovat pozvánku</button></div><div class="join"><input id="roomCode" maxlength="6" placeholder="KÓD MÍSTNOSTI" aria-label="Kód místnosti"><button class="secondary" id="join">Připojit se</button></div><div class="status" id="status" role="status"></div></div>
<section class="games"><div class="section-head"><div><h2>Vyberte si svou hru</h2><p>Společné chvíle začínají jednou hrou.</p></div></div><div class="grid" id="catalog"></div></section></section>
<section id="room" class="hidden"><div class="panel"><div class="room-head"><div><h2>Vaše herní místnost</h2><p class="sub" style="margin:4px 0 0">Pošlete kód partnerovi a můžete začít.</p></div><div class="code" id="roomLabel"></div></div><div class="players" id="players"></div><h2 style="text-align:center;margin-top:25px">Piškvorky</h2><p class="sub" id="gameStatus" style="text-align:center">Čekáme na druhého hráče…</p><div class="board" id="board"></div><div class="room-actions"><button class="secondary" id="share">↗ Sdílet pozvánku</button><button class="secondary" id="back">Opustit místnost</button></div></div></section>
<footer class="foot">Vytvořeno pro chvíle, které chcete sdílet. ♡ TWogether</footer></main>
<script>
const catalog=[["⭕","Piškvorky","live"],["♟","Šachy","planned"],["♙","Dáma","planned"],["🎱","Kulečník","planned"],["⛳","Minigolf","planned"],["🎳","Bowling","planned"],["🚢","Lodě","planned"],["🃏","Karetní hry","planned"],["🔤","Hádání slov","planned"],["💞","Kvízy pro páry","planned"],["⚡","Reakční hry","planned"],["🧩","Puzzle","planned"],["🎴","UNO-style hra","planned"],["🎲","Stolní hry","planned"],["🎨","Kreativní hry","planned"],["🧠","Paměťové hry","planned"],["🏎️","Závodní hry","planned"],["✨","Originální hry","planned"]];
document.getElementById("catalog").innerHTML=catalog.map(([e,n,s])=>'<div class="game '+(s==="live"?"live":"")+'"><div class="emoji">'+e+'</div><strong>'+n+'</strong><small>'+(s==="live"?"● Hratelné":"Připravujeme")+'</small></div>').join("");
const $=id=>document.getElementById(id);let ws=null,room="",guest=localStorage.getItem("tw_guest")||crypto.randomUUID();localStorage.setItem("tw_guest",guest);let latest=null;
function setStatus(t){$("status").textContent=t}
function showRoom(code){room=code;$("home").classList.add("hidden");$("room").classList.remove("hidden");$("roomLabel").textContent=code;$("copyInvite").disabled=false}
function connect(code){if(ws)ws.close();const proto=location.protocol==="https:"?"wss:":"ws:";ws=new WebSocket(proto+"//"+location.host+"/ws/"+code+"?player="+encodeURIComponent(guest));ws.onopen=()=>{showRoom(code);setStatus("");};ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.type==="state")render(m.state);if(m.type==="error")$("gameStatus").textContent=m.message;};ws.onclose=()=>{$("gameStatus").textContent="Spojení bylo přerušeno. Zkuste se znovu připojit.";};ws.onerror=()=>setStatus("Nepodařilo se připojit. Zkontrolujte kód a zkuste to znovu.");}
async function create(){setStatus("Vytváříme místnost…");try{const r=await fetch("/api/rooms",{method:"POST"});const d=await r.json();if(!r.ok)throw Error(d.error||"Chyba");connect(d.code); }catch(e){setStatus("Místnost se nepodařilo vytvořit.");}}
async function join(){const c=$("roomCode").value.trim().toUpperCase();if(!/^[A-Z0-9]{6}$/.test(c)){setStatus("Zadejte platný šestimístný kód.");return;}setStatus("Připojujeme…");connect(c);}
function render(s){latest=s;$("players").innerHTML=s.players.map((p,i)=>'<div class="player '+(s.turn===i?"active":"")+'">'+(p.id===guest?"Ty":"Hráč "+(i+1))+" · "+(p.mark||"čeká")+"</div>").join("");$("gameStatus").textContent=s.winner?(s.winner==="draw"?"Remíza! Zkuste odvetu.":(s.players.find(p=>p.mark===s.winner)?.id===guest?"Vyhrál/a jsi! ♡":"Partner vyhrál! ♡")):s.players.length<2?"Čekáme na druhého hráče…":s.players[s.turn]?.id===guest?"Jsi na tahu!":"Na tahu je partner."; $("board").innerHTML=s.board.map((v,i)=>'<button class="cell" data-i="'+i+'" '+(v||s.winner||s.players.length<2||s.players[s.turn]?.id!==guest?"disabled":"")+'>'+(v==="X"?"×":v==="O"?"○":"")+'</button>').join("");$("board").querySelectorAll("button").forEach(b=>b.onclick=()=>ws?.readyState===1&&ws.send(JSON.stringify({type:"move",index:Number(b.dataset.i)})));}
async function invite(){const url=location.origin+"/?room="+room;try{await navigator.clipboard.writeText(url);$("gameStatus").textContent="Pozvánka zkopírována! Pošlete ji partnerovi."; }catch{$("gameStatus").textContent="Kód místnosti: "+room;}}
$("create").onclick=create;$("join").onclick=join;$("share").onclick=invite;$("copyInvite").onclick=invite;$("back").onclick=()=>{ws?.close();location.href="/";};const param=new URLSearchParams(location.search).get("room");if(param){$("roomCode").value=param;join();}
</script></body></html>`;
const WIN=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
export class GameRoom {
  constructor(ctx,env){this.ctx=ctx;this.env=env;}
  async fetch(request){
    const url=new URL(request.url);
    if(url.pathname==="/init"){const existing=await this.ctx.storage.get("state");if(!existing)await this.ctx.storage.put("state",{roomCode:url.searchParams.get("code")||"",board:Array(9).fill(null),players:[],turn:0,winner:null});return new Response("ok");}
    if(url.pathname!=="/connect"||request.headers.get("Upgrade")!=="websocket")return new Response("Not found",{status:404});
    let state=await this.ctx.storage.get("state");
    if(!state)return new Response("Room not found",{status:404});
    const player=new URL(request.url).searchParams.get("player")||crypto.randomUUID();
    let p=state.players.find(x=>x.id===player);
    if(!p){if(state.players.length>=2)return Response.json({error:"Místnost je plná."},{status:409});p={id:player,mark:state.players.length===0?"X":"O",online:true};state.players.push(p);}else{p.online=true;}
    await this.ctx.storage.put("state",state);
    const pair=new WebSocketPair();const [client,server]=Object.values(pair);this.ctx.acceptWebSocket(server);server.serializeAttachment({player});this.broadcast(state);
    return new Response(null,{status:101,webSocket:client});
  }
  async webSocketMessage(socket,message){
    let data;try{data=JSON.parse(message);}catch{return;}
    if(data.type!=="move"||!Number.isInteger(data.index)||data.index<0||data.index>8)return;
    const attachment=socket.deserializeAttachment();const state=await this.ctx.storage.get("state");
    if(!state||state.players.length!==2||state.winner||state.board[data.index])return;
    const current=state.players[state.turn];if(!current||current.id!==attachment?.player)return;
    state.board[data.index]=current.mark;
    const won=WIN.some(line=>line.every(i=>state.board[i]===current.mark));
    state.winner=won?current.mark:state.board.every(Boolean)?"draw":null;
    if(!state.winner)state.turn=1-state.turn;
    else if(!state.matchId){state.matchId=crypto.randomUUID();const winner=state.winner==="draw"?null:state.players.find(p=>p.mark===state.winner)?.id||null;await this.env.DB.prepare("INSERT OR IGNORE INTO matches (match_id,room_code,game_id,player_one,player_two,winner_id,result) VALUES (?,?,?,?,?,?,?)").bind(state.matchId,state.roomCode||this.ctx.id.toString(),"tic-tac-toe",state.players[0]?.id||"guest",state.players[1]?.id||"guest",winner,state.winner).run();}
    await this.ctx.storage.put("state",state);this.broadcast(state);
  }
  async webSocketClose(socket){const a=socket.deserializeAttachment();const state=await this.ctx.storage.get("state");if(!state)return;const p=state.players.find(x=>x.id===a?.player);if(p)p.online=false;await this.ctx.storage.put("state",state);this.broadcast(state);}
  async webSocketError(socket){await this.webSocketClose(socket);}
  broadcast(state){for(const socket of this.ctx.getWebSockets()){try{socket.send(JSON.stringify({type:"state",state}));}catch{}}}
}
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname==="/"||url.pathname==="")return new Response(HTML,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
  if(url.pathname==="/api/rooms"&&request.method==="POST"){
   const code=Array.from(crypto.getRandomValues(new Uint8Array(6)),x=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[x%32]).join("");
   const stub=env.ROOMS.getByName(code);await stub.fetch("https://room/init?code="+code);
   return Response.json({code});
  }
  const match=url.pathname.match(/^\/ws\/([A-Z0-9]{6})$/);
  if(match){const stub=env.ROOMS.getByName(match[1]);const target=new URL("https://room/connect");target.search=url.search;return stub.fetch(new Request(target,{headers:request.headers}));}
  if(url.pathname==="/api/history"){const player=url.searchParams.get("player");if(!player)return Response.json({error:"Missing player"},{status:400});const rows=await env.DB.prepare("SELECT game_id,result,created_at FROM matches WHERE player_one=? OR player_two=? ORDER BY created_at DESC LIMIT 50").bind(player,player).all();return Response.json({matches:rows.results||[]});}
  if(url.pathname==="/api/leaderboard"){const rows=await env.DB.prepare("SELECT winner_id AS player_id,COUNT(*) AS wins FROM matches WHERE winner_id IS NOT NULL GROUP BY winner_id ORDER BY wins DESC LIMIT 20").all();return Response.json({leaders:rows.results||[]});}
  return new Response("Not found",{status:404});
 }
};