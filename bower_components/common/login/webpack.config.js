var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

var IS_DEV;
if (typeof process.env.IS_DEV !== 'undefined') {
	IS_DEV = process.env.IS_DEV === 'true';
} else if (process.argv.indexOf('dev') !== -1) {
	IS_DEV = true;
} else {
	IS_DEV = process.argv.join('').indexOf('simple-dev-server') !== -1;
}
console.log('IS DEV?', IS_DEV);

var IS_PROD = process.argv.join('').indexOf('prod') !== -1;
console.log('IS PROD?', IS_PROD);

var IS_TESTS = false;

var plugins = [
	new ForceCaseSensitivityPlugin(),
	new webpack.ResolverPlugin(
		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main'])
	),
	new webpack.ResolverPlugin(
		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
	),
	new webpack.ProvidePlugin({
		$				   : 'jquery',
		jQuery			   : 'jquery',
		'window.jQuery'	   : 'jquery',
		Backbone		   : 'backbone',
		'window.Backbone'  : 'backbone',
		'window.underscore': 'underscore',
		'_'				   : 'underscore'
	}),
	new ExtractTextPlugin('assets/[name]-[hash].css', {allChunks: true}),
	new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
	new webpack.optimize.CommonsChunkPlugin({
		filename: 'assets/chunks/[id]-[hash].js',
		minChunks: 3,
		async: true
	}),
	new webpack.optimize.CommonsChunkPlugin({
		filename: 'assets/chunks/[id]-[hash].js',
		minChunks: 2,
		async: true
	}),
	new webpack.DefinePlugin({
		PROD: IS_PROD,
		DEV : IS_DEV
	}),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: __dirname + '/index.html'
	})
];

if (!IS_DEV) {
	plugins.unshift(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	);
}

if (IS_PROD) {
	plugins.unshift(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	);
}

var entry, output;

if (IS_TESTS) {
	entry = {
		tests: [__dirname + '/spec/index.js']
	};
	output = {
		path	  : __dirname + '/build',
		filename  : 'assets/[name].js',
		chunkFilename: 'assets/chunks/[id].js',
		publicPath: '/'
	};
} else {
	entry = {
		app: [__dirname + '/app.js']
	};

	output = {
		path	  : __dirname + '/build',
		filename  : 'assets/[name]-[hash].js',
		chunkFilename: 'assets/chunks/[id]-[hash].js',
		publicPath: '/'
	};
}

module.exports = {
	entry: entry,

	output: output,

	plugins: plugins,

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(dist|moment|promise|webpack|core-js)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-0'],
				plugins: ['transform-object-assign']
			}
		}, {
			test  : /\.hbs$/,
			loader: 'handlebars-loader',
			query : {
				knownHelpersOnly: false,
				helperDirs		: [
					__dirname + '/bower_components',
					__dirname + '/shared/core/util/handlebars_helpers',
					__dirname
				]
			}
		}, {
			test  : /\/es6-promise\.js$/,
			loader: 'imports?this=>window'
		}, {
			test  : /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		}, {
			test  : /\.less$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
		}, {
			test  : /\.(otf|eot|ttf|woff)$/,
			loader: 'file-loader?name=assets/fonts/[name]-[hash].[ext]'
		}, {
			test  : /\.(png|jpg|gif|ico)$/,
			loader: 'url-loader?limit=12288&name=assets/images/[name]-[hash].[ext]'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.svg$/,
			loader: 'svg-inline-loader'
		}]
	},

	devtool: IS_DEV ? '#eval' : '#source-map',

	resolveLoader: {
		root: [__dirname + '/../node_modules']
	},

	resolve: {
		extensions: ['', '.js', '.json', '.hbs', '.jpg', '.png'],
		root	  : [
			__dirname + '/../bower_components',
			__dirname + '/../node_modules'
		],
		alias: {
			common: __dirname + '/..'
		}
	}
};

