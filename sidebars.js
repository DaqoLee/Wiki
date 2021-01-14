module.exports = {
	docs: [
		 "Home",
		 {
			type: "category",
			label: "笔记",
			collapsed: true,
			items: [
				{
					type: "category",
					label: "软件",
					collapsed: true,
					items: [
						"software/C_数组",
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

				
		
			],
		},

		{
			type: "category",
			label: "项目",
			collapsed: true,
			items: [
				"project/B数显示器",
				"project/小改体重秤",
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
						"digest/史蒂夫·乔布斯传",
					],
				},
				{
					type: "category",
					label: "管理",
					collapsed: true,
					items: [
						"digest/软件管理沉思录",
						"digest/六顶思考帽",
						"digest/原则",
					],
				},
				{
					type: "category",
					label: "经济",
					collapsed: true,
					items: [
						"digest/小岛经济学",
						"digest/贫穷的本质",
					],
				},
				{
					type: "category",
					label: "社科",
					collapsed: true,
					items: [
						"digest/人类简史",
						"digest/时间简史",
						"digest/未来简史",
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
