const { getDefaultConfig } = require("metro-config");

module.exports = (async () => { 
	const {  
		resolver: { 
			sourceExts, 
			assetExts 
		}  
	} = await getDefaultConfig(); 

	return {
		transformer: {
			getTransformOptions: async () => ({
			  transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			  },
			}),
			assetPlugins: ['react-native-svg-asset-plugin'],
		  }};
})();