document.addEventListener("DOMContentLoaded",function(){
const variableName = document.querySelector('.tabs');
	M.Tabs.init(variableName,{
		swipeable:true,
		duration:300
	});
})