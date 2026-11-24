import * as i0 from "@angular/core";
import { OnInit } from "@angular/core";
export declare class HalloweenUi implements OnInit {
  constructor();
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<HalloweenUi, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<HalloweenUi, "lib-halloween-ui", never, {}, {}, never, never, true, never>;
}
export declare class MonsterCard {
  foto: string;
  titulo: string;
  texto: string;
  boton: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<MonsterCard, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<MonsterCard, "lib-monster-card", never, {
    "foto": {
      "alias": "foto";
      "required": false;
    };
    "titulo": {
      "alias": "titulo";
      "required": false;
    };
    "texto": {
      "alias": "texto";
      "required": false;
    };
    "boton": {
      "alias": "boton";
      "required": false;
    };
  }, {}, never, never, true, never>;
}