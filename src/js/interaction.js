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


/*报名页表单验证*/
function NameLenFocusOut() {
	var name = $(this).val();
	if (name == '') return
	else if(!(/^\S{1,32}$/.test(name))){
		$(this).val('');
		$(this).addClass('invalid');
		$(this).attr('placeholder','长度超过限制,请重新输入');
	}
}
function FocusIn(data) {
	$(this).removeClass('invalid');
	$(this).attr('placeholder',data.data);
}
function NumLenFocusOut() {
	var number = $(this).val();
	if (number == '') return
	else if (!(/^1[34578]\d{9}$/.test(number))){
		$(this).val('');
		$(this).addClass('invalid');
		$(this).attr('placeholder','手机号码格式错误');
	}
}
function EmailFocusOut() {
	var email = $(this).val();
	if (email == '') return
	else if (!(/.+@.+\.[a-zA-Z]{2,4}$/.test(email))){
		$(this).val('');
		$(this).addClass('invalid');
		$(this).attr('placeholder','邮箱格式错误');
	}
}
var $name = $('.bm-content form>input:nth-child(1)');
var $family = $('.bm-content form>input:nth-child(5)');
var $number = $('.bm-content form>input:nth-child(6)');
var $email = $('.bm-content form>input:nth-child(8)');



$name.focus('参赛者姓名',FocusIn);
$name.blur(NameLenFocusOut);

$family.focus('家长姓名',FocusIn);
$family.blur(NameLenFocusOut);

$number.focus('联系电话',FocusIn);
$number.blur(NumLenFocusOut);

$email.focus('邮箱',FocusIn);
$email.blur(EmailFocusOut);





$('.bm-content form').on('submit',function () {
	var province = $('.bm-content form select:nth-child(1)').val();
	var city = $('.bm-content form select:nth-child(2)').val();
	var area = $('.bm-content form select:nth-child(3)').val();
	var school = $('.bm-content form>input:nth-child(3)').val();
	var group = $('.group').val();
	var grade = $('.grade').val();
	var address = $('.bm-content form>input:nth-child(7)').val();
	return false
})