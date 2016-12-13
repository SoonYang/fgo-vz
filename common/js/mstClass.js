function findClassName(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].name;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].name;
	return "不明";
}
function findClassImageId(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].iconImageId;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].iconImageId;
	return 12;
}
var mstClass = JSON.parse('[{"id":1,"attri":1,"name":"Saber","attackRate":1000,"imageId":1,"iconImageId":1,"groupType":1},{"id":2,"attri":2,"name":"Archer","attackRate":950,"imageId":2,"iconImageId":2,"groupType":1},{"id":3,"attri":3,"name":"Lancer","attackRate":1050,"imageId":3,"iconImageId":3,"groupType":1},{"id":4,"attri":4,"name":"Rider","attackRate":1000,"imageId":4,"iconImageId":4,"groupType":1},{"id":5,"attri":5,"name":"Caster","attackRate":900,"imageId":5,"iconImageId":5,"groupType":1},{"id":6,"attri":6,"name":"Assassin","attackRate":900,"imageId":6,"iconImageId":6,"groupType":1},{"id":7,"attri":7,"name":"Berserker","attackRate":1100,"imageId":7,"iconImageId":7,"groupType":1},{"id":8,"attri":8,"name":"Shielder","attackRate":1000,"imageId":9999,"iconImageId":8,"groupType":2},{"id":9,"attri":9,"name":"Ruler","attackRate":1100,"imageId":8,"iconImageId":9,"groupType":2},{"id":10,"attri":10,"name":"Alter Ego","attackRate":1000,"imageId":9999,"iconImageId":10,"groupType":2},{"id":11,"attri":11,"name":"Avenger","attackRate":1000,"imageId":9999,"iconImageId":11,"groupType":2},{"id":12,"attri":12,"name":"？","attackRate":1000,"imageId":9999,"iconImageId":12,"groupType":2},{"id":13,"attri":1,"name":"Grand Saber","attackRate":1000,"imageId":1,"iconImageId":13,"groupType":2},{"id":14,"attri":2,"name":"Grand Archer","attackRate":950,"imageId":2,"iconImageId":14,"groupType":2},{"id":15,"attri":3,"name":"Grand Lancer","attackRate":1050,"imageId":3,"iconImageId":15,"groupType":2},{"id":16,"attri":4,"name":"Grand Rider","attackRate":1000,"imageId":4,"iconImageId":16,"groupType":2},{"id":17,"attri":5,"name":"Grand Caster","attackRate":900,"imageId":5,"iconImageId":17,"groupType":2},{"id":18,"attri":6,"name":"Grand Assassin","attackRate":900,"imageId":6,"iconImageId":18,"groupType":2},{"id":19,"attri":7,"name":"Grand Berserker","attackRate":1100,"imageId":7,"iconImageId":19,"groupType":2},{"id":20,"attri":20,"name":"BeastII","attackRate":1000,"imageId":9999,"iconImageId":20,"priority":50,"groupType":2},{"id":97,"attri":0,"name":"不明","attackRate":1000,"imageId":9999,"iconImageId":12,"groupType":2},{"id":98,"attri":0,"name":"NPC(不使用)","attackRate":1000,"imageId":9999,"iconImageId":98,"groupType":2},{"id":99,"attri":0,"name":"Enemy(不使用)","attackRate":1000,"imageId":9999,"iconImageId":99,"groupType":2},{"id":100,"attri":0,"name":"Test(不使用)","attackRate":1000,"imageId":9999,"iconImageId":100,"groupType":2},{"id":1000,"attri":1000,"name":"OTHER","attackRate":1000,"imageId":9999,"iconImageId":1000,"groupType":3},{"id":1001,"attri":1001,"name":"ALL","attackRate":1000,"imageId":9999,"iconImageId":1001,"groupType":3}]');