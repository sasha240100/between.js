import gulp from 'gulp';
import scss from 'gulp-sass';

gulp.task('scss:build', () => {
  return gulp.src('./examples/scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./examples/css/'))
});

gulp.task('scss:watch', () => {
  gulp.watch('./examples/scss/**/*.scss', ['scss:build']);
});
