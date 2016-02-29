var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');

gulp.task('html',function(){
	return gulp.src('templates/*.html')
		.pipe(nunjucks.compile())
		.pipe(gulp.dest('.'));
});
gulp.task('chenxing',function(){
	return gulp.src('templates/chenxing/*.html')
		.pipe(nunjucks.compile())
		.pipe(gulp.dest('chengxing'));
});
gulp.task('watch',function(){
	gulp.watch(['templates/*.html','templates/component/*','templates/chenxing/*'],['html','chenxing']);
});

gulp.task('default',['watch']);