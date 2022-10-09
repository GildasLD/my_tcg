import GameModel from "./game";
import DeckModel from "./deck";
import PlayerModel from "./player";
import HandModel from "./hand";
import BoardModel from "./board";

export default {
  game: {
    class: GameModel,
    param: "{}",
  },
  deck: {
    class: DeckModel,
    param:
      '{"cards":[{"face":"card-1"},{"face":"card-2"},{"face":"card-3"},{"face":"card-4"},{"face":"card-5"},{"face":"card-6"},{"face":"card-7"},{"face":"card-8"},{"face":"card-9"},{"face":"card-10"},{"face":"card-11"},{"face":"card-12"},{"face":"card-13"},{"face":"card-14"},{"face":"card-15"},{"face":"card-16"}]}',
  },
  player: {
    class: PlayerModel,
    param: "{}",
  },
  hand: {
    class: HandModel,
    param:
      '{"cards":[{"face":"card-1"},{"face":"card-2"},{"face":"card-3"}], "limit" : 7}',
  },
  board: {
    class: BoardModel,
    param: '{"cards": [], "limit": 7}',
  },
};
