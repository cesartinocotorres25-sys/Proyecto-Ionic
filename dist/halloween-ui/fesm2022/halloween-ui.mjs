import * as i0 from "@angular/core";
import { Component, Input } from "@angular/core";
var HalloweenUi = class HalloweenUi {
	constructor() {}
	ngOnInit() {}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: HalloweenUi,
			deps: [],
			target: i0.ɵɵFactoryTarget.Component
		});
	}
	static {
		this.ɵcmp = i0.ɵɵngDeclareComponent({
			minVersion: "14.0.0",
			version: "22.3.0",
			type: HalloweenUi,
			isStandalone: true,
			selector: "lib-halloween-ui",
			ngImport: i0,
			template: "<p>halloween-ui works!</p>\n",
			styles: [""]
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: HalloweenUi,
	decorators: [{
		type: Component,
		args: [{
			selector: "lib-halloween-ui",
			imports: [],
			template: "<p>halloween-ui works!</p>\n"
		}]
	}],
	ctorParameters: () => []
});
var MonsterCard = class MonsterCard {
	constructor() {
		this.foto = "";
		this.titulo = "Sin nombre";
		this.texto = "";
		this.boton = "";
	}
	static {
		this.ɵfac = i0.ɵɵngDeclareFactory({
			minVersion: "12.0.0",
			version: "22.3.0",
			ngImport: i0,
			type: MonsterCard,
			deps: [],
			target: i0.ɵɵFactoryTarget.Component
		});
	}
	static {
		this.ɵcmp = i0.ɵɵngDeclareComponent({
			minVersion: "17.0.0",
			version: "22.3.0",
			type: MonsterCard,
			isStandalone: true,
			selector: "lib-monster-card",
			inputs: {
				foto: "foto",
				titulo: "titulo",
				texto: "texto",
				boton: "boton"
			},
			ngImport: i0,
			template: "<article>\n    <div class=\"card__cuerpo\">\n        \n        <h1 class=\"card__titulo\">{{ titulo }}</h1>\n        <h2 class=\"card__texto\">{{ texto }}</h2>\n        @if (foto) {\n            <img class=\"card__foto\" [src]=\"foto\"/>\n        }\n        <br>\n        @if (boton) {\n            <button class=\"card__boton\" type=\"button\" onmousedown=\"sonido.play()\">{{ boton }}</button>\n            <audio src=\"\"></audio>\n            <script>\n                let boton = document.querySelector(\".card__boton\")\n                let audioEtiqueta = document.querySelector(\"audio\")\n\n                boton.addEventListener(\"click\", () => {\n                audioEtiqueta.setAttribute(\"src\", \"assets/mp3/dragon-studio-chimes-of-death-359879.mp3\")\n                audioEtiqueta.play()\n                console.log(`Reproduciendo: ${audioEtiqueta.src}`)\n                })\n            <\/script>\n        }\n    </div>\n</article>",
			styles: [".card{display:flex;align-items:flex;margin:12px 0;overflow:hidden;border:2px solid var(#ed910f);border-radius:16px;background:#42385a;box-shadow:0 4px 12px #0000001f}.card__foto{width:300px}.card__titulo{margin:2;color:#ed910f;line-height:1.5}.card__titulo{margin:0;color:#fff7ef;line-height:1.5}.card__boton{color:#ed910f}\n"]
		});
	}
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.3.0",
	ngImport: i0,
	type: MonsterCard,
	decorators: [{
		type: Component,
		args: [{
			selector: "lib-monster-card",
			imports: [],
			template: "<article>\n    <div class=\"card__cuerpo\">\n        \n        <h1 class=\"card__titulo\">{{ titulo }}</h1>\n        <h2 class=\"card__texto\">{{ texto }}</h2>\n        @if (foto) {\n            <img class=\"card__foto\" [src]=\"foto\"/>\n        }\n        <br>\n        @if (boton) {\n            <button class=\"card__boton\" type=\"button\" onmousedown=\"sonido.play()\">{{ boton }}</button>\n            <audio src=\"\"></audio>\n            <script>\n                let boton = document.querySelector(\".card__boton\")\n                let audioEtiqueta = document.querySelector(\"audio\")\n\n                boton.addEventListener(\"click\", () => {\n                audioEtiqueta.setAttribute(\"src\", \"assets/mp3/dragon-studio-chimes-of-death-359879.mp3\")\n                audioEtiqueta.play()\n                console.log(`Reproduciendo: ${audioEtiqueta.src}`)\n                })\n            <\/script>\n        }\n    </div>\n</article>",
			styles: [".card{display:flex;align-items:flex;margin:12px 0;overflow:hidden;border:2px solid var(#ed910f);border-radius:16px;background:#42385a;box-shadow:0 4px 12px #0000001f}.card__foto{width:300px}.card__titulo{margin:2;color:#ed910f;line-height:1.5}.card__titulo{margin:0;color:#fff7ef;line-height:1.5}.card__boton{color:#ed910f}\n"]
		}]
	}],
	propDecorators: {
		foto: [{ type: Input }],
		titulo: [{ type: Input }],
		texto: [{ type: Input }],
		boton: [{ type: Input }]
	}
});
export { HalloweenUi, MonsterCard };

//# sourceMappingURL=halloween-ui.mjs.map