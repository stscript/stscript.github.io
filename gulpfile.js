var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
gulp.task('html',function(){
	return gulp.src('templates/*.html')
		.pipe(nunjucks.compile())
		.pipe(gulp.dest('.'));
});

gulp.task('watch',function(){
	gulp.watch(['templates/*.html','templates/component/layout.nunjucks'],['html']);
});

gulp.task('default',['watch']);