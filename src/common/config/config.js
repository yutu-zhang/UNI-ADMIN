export default {
	logo: 'UNI-ADMIN',
	navBar: {
		active: '0',
		list: [{
				name: "首页",
				subActive: '0',
				submenu: [{
						icon: "el-icon-s-home",
						name: "后台首页"
					},
					{
						icon: "el-icon-picture",
						name: "相册管理"
					},
					{
						icon: "el-icon-s-claim",
						name: "商品列表"
					}
				]
			},
			{
				name: "商品",
				subActive: '0',
				submenu: [{
					icon: "el-icon-s-claim",
					name: "商品列表"
				},
				{
					icon: "el-icon-s-help",
					name: "分类列表"
				},
				{
					icon: "el-icon-s-help",
					name: "商品规格"
				},
				{
					icon: "el-icon-s-help",
					name: "商品类型"
				},
				{
					icon: "el-icon-s-help",
					name: "商品评价"
				}]
			},
			{
				name: "订单",
				subActive: '0',
				submenu: [{
					icon: "el-icon-s-help",
					name: "订单管理"
				},
				{
					icon: "el-icon-s-help",
					name: "订单管理"
				},
				{
					icon: "el-icon-s-help",
					name: "售后服务"
				}]
			},
			{
				name: "会员",
				subActive: '0',
				submenu: [{
					icon: "el-icon-s-help",
					name: "会员列表"
				},
				{
					icon: "el-icon-s-help",
					name: "会员等级"
				}]
			},
			{
				name: "设置",
				subActive: '0',
				submenu: [{
					icon: "el-icon-s-help",
					name: "基础设置"
				},
				{
					icon: "el-icon-s-help",
					name: "物流设置"
				},
				{
					icon: "el-icon-s-help",
					name: "管理员设置"
				},
				{
					icon: "el-icon-s-help",
					name: "交易设置"
				},
				{
					icon: "el-icon-s-help",
					name: "测试设置"
				}]
			},
		]
	}
}
