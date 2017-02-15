'use strict';

module.exports = function() {
	$.gulp.task('sprite', function () {
  		var spriteData = $.gulp.src('./source/images/sprites/*.png').pipe($.gp.spritesmith({
  		   imgName: 'sprite.png',
    	   cssName: 'sprite.css'
  		}));
  		return spriteData.pipe($.gulp.dest($.config.root + '/assets/sprites'))
	});
};
