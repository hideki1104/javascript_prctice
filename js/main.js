'use strict'

{
	// const str = 'hello';
	// console.log(str.length);

	//str.substring(開始位置、終了位置)；
	// console.log(str.substring(2, 4));

	// console.log(str[1]);

	// const d = [2019, 11, 14];

	// // console.log(d.join('/'));

	// const t = '17:08:24';
	// // console.log(t.split(':'));
	// const [hour, minite, second] = t.split(':');
	// console.log(hour);
	// console.log(minite);
	// console.log(second);

	// const scores = [10, 3, 9];

	// let sum = 0;

	// scores.forEach(score => {
	// 	sum += score;
	// });

	// const avg = sum / scores.length;

	// console.log(sum);
	// console.log(avg);

	// console.log(Math.floor(avg));
	// console.log(Math.ceil(avg));
	// console.log(Math.round(avg));

	// console.log(Math.random())

	// console.log(Math.floor(Math.random() * 6 ) + 1);

	// const d = new Date();
	// // console.log(d);

	// console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);

	// alert('hello')

	// const answer = confirm('削除しますか？');
	// if (answer){
	// 	console.log('削除しました');
	// }else{
	// 	console.log('キャンセルしました')
	// }

    //#24
	// let i = 0;

	// function showTime() {
 //    console.log(new Date());
 //    i++
 //    if (i > 9){
 //    	clearInterval(intervalId);
 //    }
	// }

	// const intervalId = setInterval(showTime, 1000);

	//#25
	//メモ　3秒立つと返り値のclearTimeoutを返す
	// let i = 0;

	// function showTime(){
	// 	console.log(new Date());
	// 	const timeoutId = setTimeout(showTime, 1000);
	// 	i++;
	// 	if( i > 2 ){
	// 		clearTimeout(timeoutId);
	// 	}
	// }

	// showTime();

	//#26
	//setInterval()とsetTimeout()の違い

	//#27
	// const name = 'taguchi';
	// const name = 5;

 //    try{
 //        console.log(name.toUpperCase());
 //    }catch(e){
 //    	console.log(e);
 // //    }

	// console.log('Finish');

	//#28//#29

  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount}いいね`);
  //   }

  //   like(){
  //   	this.likeCount++;
  //   	this.show();
  //   }

  //   // static showInfo(){
  //   // 	console.log('Post class version 1.0');
  //   // }
  // }

  // const posts = [
  //   new Post('JavaScriptの勉強中…'),
  //   new Post('プログラミング楽しい！'),
  // ];

  // posts[0].show();

  // Post.showInfo();

//#3
  // function update(){
  //   // document.querySelector('h1').textContent = 'Change!!';
  //   // document.getElementById('target').textContent = 'Change!!';
  //   document.querySelectorAll('p').forEach((p, index) => {
  //   	p.textContent = `${index}番目のpです！`;
  //   });
  // }

  // setTimeout(update, 1000);

  //#5#5

  document.querySelector('button').addEventListener('click', () => {
  	const targetNode = document.getElementById('target')
  	
  	// if (targetNode.classList.contains('my-color') === true) {
  	// 	targetNode.classList.remove('my-color');
  	// }else{
  	// 	targetNode.classList.add('mycolor');
  	// }
  	targetNode.classList.toggle('my-color');
  	});

}