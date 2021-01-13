module.exports = {
	docs: [
		 "Home",
		{
			type: "category",
			label: "软件",
			collapsed: true,
			items: [
				"software/test",
			],
		},

		{
			type: "category",
			label: "电路",
			collapsed: true,
			items: [
				"pcb/AltiumDesigner",
			],
		},

		{
			type: "category",
			label: "机械",
			collapsed: true,
			items: [
				"machine/SolidWorks",
			],
		},

		{
			type: "category",
			label: "书摘",
			collapsed: true,
			items: [
				{
					type: "category",
					label: "传记",
					collapsed: true,
					items: [
						"digest/乔布斯传",
					],
				},
				{
					type: "category",
					label: "管理",
					collapsed: true,
					items: [
						"digest/乔布斯传",
					],
				},
				{
					type: "category",
					label: "经济",
					collapsed: true,
					items: [
						"digest/乔布斯传",
					],
				},
				{
					type: "category",
					label: "社科",
					collapsed: true,
					items: [
						"digest/乔布斯传",
					],
				},
			],
		},

		{
			type: "category",
			label: "其他",
			collapsed: true,
			items: [
				"other/Other",
			],
		},
	],
  // someSidebar: {
  //   readme:[
	// 		'template',
	// 		{
	// 			type: "category",
	// 			label: "搭建知识库",
	// 			collapsed: true,
	// 			items: [
	// 				'test',
	// 			],
	// 		}
	// 	]
		
  // },
};
