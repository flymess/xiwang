/**
 * Created by tao on 2016/10/31.
 */

$('#element_id').cxSelect({
	url: 'js/cityData.min.json',
	selects: ['province','city','area'],
});
$('#custom_data').cxSelect({
	selects: ['group','grade'],
	jsonName: 'value',
	jsonValue: 'name',
	jsonSub: 'sub',
	data: [
		{
			name:'A',value: '小学低段组',sub:[
			{
				name: 'A-1',value: '二年级'
			},{
				name: 'A-2',value: '三年级'
			}
		]
		},
		{
			name: 'B',value: '小学高段组',sub:[
			{
				name:'B-1',value: '四年级'
			},
			{
				name:'B-2',value: '五年级'
			},
			{
				name:'B-3',value: '六年级'
			}
		]
		},
		{
			name: 'C',value: '初中组',sub:[
			{
				name:'C-1',value: '初一'
			},
			{
				name:'C-2',value: '初二'
			},
			{
				name:'C-3',value: '初三'
			}
		]
		},
		{
			name: 'D',value: '高中组',sub:[
			{
				name:'D-1',value: '高一'
			},
			{
				name:'D-2',value: '高二'
			},
			{
				name:'D-3',value: '高三'
			}
		]
		}
	]
})
$('input[type="button"]').on('click',function () {
	var province = $('.province').val()
	alert(province)
	window.location.href = './check.html';
})
