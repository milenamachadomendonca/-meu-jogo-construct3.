const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Tilemap,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{moeda: 0},
	{Sólido: 0},
	{chão: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{mocinho: 0},
	{água: 0},
	{porta: 0},
	{tempo: 0},
	{Mosaico: 0},
	{céu: 0},
	{Projétil: 0},
	{bala: 0},
	{Teclado: 0},
	{inimigo: 0},
	{vida: 0},
	{vida2: 0}
];

self.InstanceType = {
	moeda: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	mocinho: class extends self.ISpriteInstance {},
	água: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	tempo: class extends self.ITextInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	céu: class extends self.ISpriteInstance {},
	bala: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	inimigo: class extends self.ISpriteInstance {},
	vida: class extends self.ITextInstance {},
	vida2: class extends self.ITextInstance {}
}