(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{315:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i(112),n=i(26),s=i(42),c=i(10);t.default=function(e){e.abilities[12]=[{trigger:"onOtherCreatureMove",require:function(e){return!!this.testRequirements()&&(this.timesUsedThisTurn<this._getUsesPerTurn()&&e&&e.creature&&Object(n.b)(e.creature,this.creature,n.a.enemy)&&this.game.activeCreature!=this.creature&&this._getTriggerHexId(e)>=0&&void 0!==this._getHopHex(e))},activate:function(t){this.end(),this.creature.moveTo(this._getHopHex(t),{callbackStepIn:function(){e.activeCreature.queryMove()},ignorePath:!0,ignoreMovementPoint:!0})},_getUsesPerTurn:function(){return this.isUpgraded()?2:1},_getTriggerHexId:function(e){var t=this.creature.getHexMap(s.g),i=-1;return e.creature.hexagons.forEach((function(e){i=t.indexOf(e)>i?t.indexOf(e):i})),i},_getHopHex:function(e){var t,i=this._getTriggerHexId(e);switch(i){case 0:t=this.creature.getHexMap(s.b)[0];break;case 1:t=this.creature.getHexMap(s.m)[0];break;case 2:t=this.creature.getHexMap(s.c)[0]}if(1===i||void 0!==t&&t.isWalkable(this.creature.size,this.creature.id,!0)||(t=this.creature.getHexMap(s.m)[0]),void 0===t||t.isWalkable(this.creature.size,this.creature.id,!0))return t}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.adjacentHexes(1),{team:this._targetTeam})},query:function(){var t=this,i=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:i.id,flipped:i.player.flipped,hexes:i.adjacentHexes(1)})},activate:function(t){this.end();var i=this.damages;if(this.isUpgraded()&&t.stats.frozen)for(var r in i={pure:0},this.damages)({}).hasOwnProperty.call(this.damages,r)&&(i.pure+=this.damages[r]);var n=new a.a(this.creature,i,1,[],e);t.takeDamage(n)}},{trigger:"onQuery",directions:[1,1,1,1,1,1],_targetTeam:n.a.both,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this.directions})},query:function(){var t=this,i=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.player.flipped,team:this._targetTeam,id:i.id,requireCreature:!0,x:i.x,y:i.y,directions:this.directions})},activate:function(t,i){this.end();var r=c.d(t).creature,a=5-(this.isUpgraded()&&r.stats.frozen?0:r.size),n=[];switch(i.direction){case 0:n=e.grid.getHexMap(r.x,r.y-8,0,r.flipped,s.f).reverse();break;case 1:n=e.grid.getHexMap(r.x,r.y,0,r.flipped,s.q);break;case 2:n=e.grid.getHexMap(r.x,r.y,0,r.flipped,s.e);break;case 3:n=e.grid.getHexMap(r.x,r.y,-4,r.flipped,s.f);break;case 4:n=e.grid.getHexMap(r.x,r.y,0,!r.flipped,s.q);break;case 5:n=e.grid.getHexMap(r.x,r.y-8,-4,r.flipped,s.e).reverse()}var u=r.hexagons[0];r.moveTo(u,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()},animation:"push"}),e.Phaser.camera.shake(.01,500,!0,e.Phaser.camera.SHAKE_VERTICAL,!0),n=n.slice(0,a+1);for(var o=0;o<n.length&&n[o].isWalkable(r.size,r.id,!0);o++)u=n[o];r.moveTo(u,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()},animation:"push"}),e.Phaser.camera.shake(.01,500,!0,e.Phaser.camera.SHAKE_VERTICAL,!0)}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this.directions})},query:function(){var t=this,i=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.player.flipped,team:this._targetTeam,id:i.id,requireCreature:!0,x:i.x,y:i.y,directions:[1,1,1,1,1,1]})},activate:function(t,i){var n=this;n.end();var s=c.d(t).creature,u=e.animations.projectile(this,s,"effects_freezing-spit",t,i,52,-20),o=u[0],d=u[1],h=u[2];o.onComplete.add((function(){this.destroy();var t=r.extend({},n.damages);t.crush+=3*h;var i=new a.a(n.creature,t,1,[],e),c=s.takeDamage(i);n.isUpgraded()&&c.damageObj.melee&&(s.stats.frozen=!0,s.updateHealth(),e.UI.updateFatigue())}),d)},getAnimationData:function(){return{duration:500,delay:0,activateAnimation:!1}}}]}}}]);