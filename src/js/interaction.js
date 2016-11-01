/**
 * Created by tao on 2016/10/31.
 */
/*多级联动*/
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

function change() {
	this.setCustomValidity('锁定技佛顶山金佛啥的')
}

/*报名页表单验证*/
$('.bm-content form').on('submit',function () {
	var name = $('.bm-content form>input:nth-child(1)').val();
	var province = $('.bm-content form select:nth-child(1)').val();
	var city = $('.bm-content form select:nth-child(2)').val();
	var area = $('.bm-content form select:nth-child(3)').val();
	var school = $('.bm-content form>input:nth-child(3)').val();
	var group = $('.group').val();
	var grade = $('.grade').val();
	var family = $('.bm-content form>input:nth-child(5)').val();
	var number = $('.bm-content form>input:nth-child(6)').val();
	var address = $('.bm-content form>input:nth-child(7)').val();
	var email = $('.bm-content form>input:nth-child(8)').val();
	return false
})