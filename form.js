window.onload=function(){
/** 추가 버튼 클릭시 */
const add=document.querySelector('.add');
add.addEventListener('click', function(event){
	const tr=document.createElement('tr');
	const td1=document.createElement('td');
	const td2=document.createElement('td');
	const td3=document.createElement('td');
	const td4=document.createElement('td');
	
	const input1=document.createElement('input');
	const input2=document.createElement('input');
	const input3=document.createElement('input');
	
	input1.setAttribute('type','text');
	input1.setAttribute('name','goodsNm');
	input2.setAttribute('type','text');
	input2.setAttribute('name','price');
	
	input3.setAttribute('type','text');
	input3.setAttribute('name','stock');
	
	const span=document.createElement('span');
	const text=document.createTextNode('삭제');
	span.appendChild(text);
	span.className='delete';
	
	//새로 추가한 요소는 이벤트 등록 필요
	span.addEventListener('click',function(event) {
		const target=event.target;
		const tr=target.parentElement.parentElement;
		
		const tbody=document.querySelector('tbody');
		tbody.removeChild(tr);
	});
	
	td1.appendChild(input1);
	td2.appendChild(input2);
	td3.appendChild(input3);
	td4.appendChild(span);
	
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	
	const tbody=document.querySelector('tbody');
	tbody.appendChild(tr);
});
/**삭제 버튼 클릭시*/
/*
const del=document.querySelector('.delete');
del.addEventListener('click',function(event){
	const target=event.target;
	const tr=target.parentElement.parentElement;
	const tbody=document.querySelector('tbody');
	tbody.removeChild(tr);
});
*/

const dels=document.querySelectorAll('.delete');
const tbody=document.querySelector('tbody');
dels.forEach(function(del) {
	del.addEventListener('click',function(event) {
		const target=event.target;
		const tr=target.parentElement.parentElement;
		tbody.removeChild(tr);
	});
});
};

/*
*항목 삭제 기능
*
*/
function removeItems(el) {
	el.addEventListener('click',function(event){
		const target=event.target;
		const tr=target.parentElement.parentElement;
		const tbody=document.querySelector('tbody')
		tbody.removeChild(tr);
	});
}

/** 입력 항목 추가
*
*
*/

