module.exports = function(grunt) {
	
	grunt.initConfig({
		less: {
			app: {
				options: {
					compress: true
				},
				src: 'app/assets/less/style.less',
				dest: 'web/css/style.css'
			}
		},
		watch: {
			styles: {
				files: ['app/assets/less/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			}
			//,
			//js: {
			//	files: ['public/js/**/*.js'],
			//	tasks: ['uglify'],
			//	options: {
			//		spawn: false
			//	}
			//}
		}
		//,
		//uglify: {
		//	app : {
		//		options : {
		//			sourceMap : true,
		//			sourceMapRoot: '/js',
		//			sourceMapName : 'public/js/source-map.map'
		//		},
		//		files : {
		//			'public/js/app.min.js' : [
		//				'public/js/vendor/jquery/jquery.js',
		//				'public/js/vendor/jquery/jquery-ui.js',
		//				'public/js/vendor/jquery/jquery.noty.js',
		//				'public/js/vendor/jquery/jquery.highlight-3.js',
		//				'public/js/vendor/jquery/jquery.qtip.js',
		//				'public/js/vendor/jquery/jquery.ui.monthpicker.js',
		//				'public/js/vendor/datatables/dataTables.js',
		//				'public/js/vendor/datatables/dataTables.fnSetFilteringDelay.js',
		//				'public/js/vendor/datatables/dataTables.fnReloadAjax.js',
		//				'public/js/vendor/moment.js',
		//				'public/js/vendor/accounting.js',
		//				'public/js/vendor/bignumber.js',
		//				'public/js/vendor/intro.js',
		//
		//				'public/js/jquery.validationEngine.js',
		//				'public/js/jquery.validationEngine-pl.js',
		//				'public/js/document.js',
		//
		//				'public/js/ck/headers.js',
		//				'public/js/ck/**/!(headers).js',
		//				'public/js/main.js',
		//
		//				'public/js/filterValuePicker.js'
		//			],
		//			'public/js/lang/en.min.js' : ['public/js/lang/en.js'],
		//			'public/js/lang/fr.min.js' : ['public/js/lang/fr.js'],
		//			'public/js/lang/pl.min.js' : ['public/js/lang/pl.js'],
		//			'public/js/jquery.deleteManager.min.js' : ['public/js/jquery.deleteManager.js'],
		//			'public/js/dtExport.min.js' : ['public/js/dtExport.js'],
		//			'public/js/esign.min.js' : ['public/js/esign.js'],
		//			'public/js/formManager.min.js' : ['public/js/formManager.js'],
		//			'public/js/sequence.min.js' : ['public/js/sequence.js'],
		//			'public/js/locale.min.js' : ['public/js/locale.js']
		//		}
		//	}
		//}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-uglify');

};