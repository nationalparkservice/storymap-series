app.cfg = {
	//
	// General UI
	//

	// Maximum number of entries
	MAX_NB_ENTRIES: 30,

	// Maximum number of preloaded maps (set to MAX_NB_ENTRIES for all,
	// currently limited due to detrimental effect on responsiveness of startup.
	// Can also be set on a story by story case with url parameter preload=N
	MAX_NB_PRELOADED_MAPS: 4,

	TIMEOUT_VIEWER_LOAD: 5000,
	TIMEOUT_VIEWER_REQUEST: 12000,
	TIMEOUT_BUILDER_REQUEST: 20000,

	// Control the social button configuration in builder
	// If disabled author won't be able to activate them
	// if disabled after the app has been created, this will override the settings
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},

	//
	// Layouts
	//

	// Size and position of represent the value relative to the Map
	LAYOUTS: [
		{
			id: "tab",
			thumbnail: "resources/tpl/builder/icons/builder-layout-tab.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_tabbed",
			sizes: { small: '20%', medium: '30%', large: '40%' },
			positions: ["left", "right"],
			themes: [
				{
					name: "tab-default-1",
					// Green color scheme
					// Group of matching theme across layout
					group: "default",
					themeMajor: "white",
					// Header background
					header: "#5e7630",
					// Header title
					headerTitle: "#FFFFFF",
					// Header link&sharing
					headerText: "#D9D9D9",
					// Main Panel background
					panel: "#afbd8e",
					// Description text
					text: "#000000",
					// Description link
					textLink: "#555555",
					// Media background
					media: "#B8B8B8",
					// Map Controls background
					mapControls: "#DBD9DA",
					// Map Controls text
					softText: "#444444",
					// Map Controls buttons
					softBtn: "#444444",
					// Esri logo "white" or "black"
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#515c36",
					tabActive: "#afbd8e",
					tabHover: "#7b9a3f ",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "tab-default-2",
					// Gray color scheme
					group: "antique",
					themeMajor: "white",
					header: "#898e8c",
					headerTitle: "#FFFFFF",
					headerText: "#D9D9D9",
					panel: "#CBCDCC",
					text: "#000000",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFF8E9",
					softText: "#4D4D4D",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#575b59",
					tabActive: "#CBCDCC",
					tabHover: "#afb2b0",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "tab-default-3",
					// Beige color scheme
					group: "bright",
					themeMajor: "white",
					header: "#b5ac8e",
					headerTitle: "#FFFFFF",
					headerText: "#FFFFFF",
					panel: "#DEDACC",
					text: "#333333",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFFFFF",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#958962",
					tabActive: "#DEDACC",
					tabHover: "#c8c1ab",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "tab-default-4",
					// Slate color scheme
					group: "dark",
					themeMajor: "black",
					header: "#a6a496",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#d9d8d2",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					tab: "#8f8c7a",
					tabActive: "#d9d8d2",
					tabHover: "#c0beb4",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "tab-default-5",
					// Tan color scheme
					group: "green",
					themeMajor: "white",
					header: "#c9a84e",
					headerTitle: "#D4E6C3",
					headerText: "#81997A",
					panel: "#e3d2a3",
					text: "#231F20",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#D4E6C3",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#af8e35",
					tabActive: "#e3d2a3",
					tabHover: "#d6bd78",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "tab-default-6",
					group: "dark",
					themeMajor: "black",
					header: "#283239",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#000000",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					tab: "#666666",
					tabActive: "#B8B8B8",
					tabHover: "#8D8F91",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				}
			]
		},
		{
			id: "accordion",
			thumbnail: "resources/tpl/builder/icons/builder-layout-accordion.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_side_accordion",
			sizes: { small: '25%', medium: '35%', large: '45%' },
			positions: ["left", "right"],
			themes: [
				{
					name: "accordion-default-1",
					// Green color scheme
					group: "default",
					themeMajor: "white",
					header: "#5e7630",
					headerTitle: "#FFFFFF",
					headerText: "#D9D9D9",
					panel: "#afbd8e",
					text: "#000000",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#DBD9DA",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					// Arrow and entries separator
					accordionArrow: "#515c36",
					accordionArrowActive: "#afbd8e",
					accordionArrowHover: "#7b9a3f",
					accordionNumber: "#5e7630",
					accordionTitle: "#FFFFFF"
				},
				{
					name: "accordion-default-2",
					// Gray color scheme
					group: "antique",
					themeMajor: "white",
					header: "#898e8c",
					headerTitle: "#FFFFFF",
					headerText: "#D9D9D9",
					panel: "#cbcdcc",
					text: "#000000",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFF8E9",
					softText: "#4D4D4D",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					accordionArrow: "#575b59",
					accordionArrowActive: "#cbcdcc",
					accordionArrowHover: "#afb2b0",
					accordionNumber: "#898e8c",
					accordionTitle: "#FFFFFF"
				},
				{
					name: "accordion-default-3",
					// Beige color scheme
					group: "bright",
					themeMajor: "white",
					header: "#b5ac8e",
					headerTitle: "#FFFFFF",
					headerText: "#FFFFFF",
					panel: "#dedacc",
					text: "#333333",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFFFFF",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					accordionArrow: "#958962",
					accordionArrowActive: "#dedacc",
					accordionArrowHover: "#c8c1ab",
					accordionNumber: "#b5ac8e",
					accordionTitle: "#FFFFFF"
				},
				{
					name: "accordion-default-4",
					// Slate color scheme
					group: "bright",
					themeMajor: "white",
					header: "#a6a496",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#d9d8d2",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					accordionArrow: "#8f8c7a",
					accordionArrowActive: "#d9d8d2",
					accordionArrowHover: "#c0beb4",
					accordionNumber: "#a6a496",
					accordionTitle: "#FFFFFF"
				},
				{
					name: "accordion-default-5",
					// Tan color scheme
					group: "green",
					themeMajor: "white",
					header: "#c9a84e",
					headerTitle: "#D4E6C3",
					headerText: "#81997A",
					panel: "#e3d2a3",
					text: "#231F20",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#D4E6C3",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					accordionArrow: "#af8e35",
					accordionArrowActive: "#e3d2a3",
					accordionArrowHover: "#d6bd78",
					accordionNumber: "#c9a84e",
					accordionTitle: "#FFFFFF"
				},
				{
					name: "accordion-default-6",
					group: "dark",
					themeMajor: "black",
					header: "#283239",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#181818",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					accordionArrow: "#B8B8B8",
					accordionArrowActive: "#FFFFFF",
					accordionArrowHover: "#C0C0C0",
					accordionNumber: "#FFFFFF",
					accordionTitle: "#D8D8D8"
				}
			]
		},
		{
			id: "bullet",
			thumbnail: "resources/tpl/builder/icons/builder-layout-bullet.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_bullets",
			sizes: { small: '20%', medium: '30%', large: '40%' },
			positions: ["left", "right"],
			themes: [
				{
					name: "bullet-default-1",
					// Green color scheme
					group: "default",
					themeMajor: "white",
					header: "#5e7630",
					headerTitle: "#FFFFFF",
					headerText: "#D9D9D9",
					panel: "#afbd8e",
					text: "#000000",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#DBD9DA",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#515c36",
					tabActive: "#afbd8e",
					tabHover: "#7b9a3f",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "bullet-default-2",
					// Gray color scheme
					themeMajor: "white",
					header: "#898e8c",
					headerTitle: "#FFFFFF",
					headerText: "#D9D9D9",
					panel: "#cbcdcc",
					text: "#000000",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFF8E9",
					softText: "#4D4D4D",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#575b59",
					tabActive: "#cbcdcc",
					tabHover: "#afb2b0",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "bullet-default-3",
					// Beige color scheme
					themeMajor: "white",
					header: "#b5ac8e",
					headerTitle: "#FFFFFF",
					headerText: "#FFFFFF",
					panel: "#dedacc",
					text: "#333333",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#FFFFFF",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#958962",
					tabActive: "#dedacc",
					tabHover: "#c8c1ab",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "bullet-default-4",
					// Slate color scheme
					group: "dark",
					themeMajor: "black",
					header: "#a6a496",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#d9d8d2",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					tab: "#8f8c7a",
					tabActive: "#d9d8d2",
					tabHover: "#c0beb4",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "bullet-default-5",
					// Tan color scheme
					group: "green",
					themeMajor: "white",
					header: "#c9a84e",
					headerTitle: "#D4E6C3",
					headerText: "#81997A",
					panel: "#e3d2a3",
					text: "#231F20",
					textLink: "#555555",
					media: "#B8B8B8",
					mapControls: "#D4E6C3",
					softText: "#444444",
					softBtn: "#444444",
					esriLogo: "white",
					esriLogoMobile: "black",
					tab: "#af8e35",
					tabActive: "#e3d2a3",
					tabHover: "#d6bd78",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				},
				{
					name: "bullet-default-6",
					group: "dark",
					themeMajor: "black",
					header: "#283239",
					headerTitle: "#FFFFFF",
					headerText: "#C5D5D5",
					panel: "#000000",
					text: "#D8D8D8",
					textLink: "#CCCCCC",
					media: "#B8B8B8",
					mapControls: "#404040",
					softText: "#C5D5D5",
					softBtn: "#C5D5D5",
					esriLogo: "white",
					esriLogoMobile: "white",
					tab: "#666666",
					tabActive: "#B8B8B8",
					tabHover: "#8D8F91",
					tabText: "#FFFFFF",
					tabTextHover: "#FFFFFF",
					tabTextActive: "#FFFFFF"
				}
			]
		}
	],

	/*
	 * Builder
	 */

	HELP_URL: "http://links.esri.com/storymaps/map_series_app",
	HELP_URL_PORTAL: "#/Story_Map_Series/0193000000vs000000/",

	// Control the authorized data source (for initialization and import screen)
	AUTHORIZED_IMPORT_SOURCE: {
		flickr: true,
		facebook: true,
		picasa: true,
		youtube: true
	},

	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// This Youtube key is valid for application running on arcgis.com and esri.com domains
	// If the application is deployed on Portal for ArcGIS or your own server, the Youtube api call
	//  won't be perfomed until you set the following flag and provide your own key
	YOUTUBE_DISABLE_ON_PORTAL: true,
	YOUTUBE_API_KEY: "AIzaSyCL0LWXaLRPW_MclPK4-aQJvPpboakP-Ao",

	//
	// Builder direct creation
	//

	// Text to be used as the browser page title during app creation
	TPL_NAME: "Map Series",
	TPL_ID: "mapseries",
	WEBAPP_TAG: ["Story Map", "Map Series"],
	WEBAPP_KEYWORD_GENERIC: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map"],
	WEBAPP_KEYWORD_APP: ["Story Map", "Story Maps", "MapSeries"],

	//
	// Portal configuration
	//

	// Optional array of servers that will leverage CORS (for development or specific cross domain deployment)
	CORS_SERVER: [],

	// Optional array of proxy rules
	PROXY_RULES: [
		/*{
			urlPrefix: "http://services.arcgis.com/",
			proxyUrl: "http://myserver.domain.com/DotNet/proxy.ash"
		}*/
	],

	BING_MAPS_KEY: "",
	HELPER_SERVICES: {
		geometry: {
			//url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
		},
		geocode: [
			/*
			{
				url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
				name: "My Geocoder"
			}
			*/
		]
	},

	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};
