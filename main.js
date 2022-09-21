document.querySelector('button').addEventListener('click', add)

function add() {
  document.querySelector('.container').classList.add('abc');
}
for(let index = 0; index < 10; index++) {
    let web = ['google','facebook','instagram'];
    let select = Math.floor(Math.random() * web.length)
    let width = [100, 400, 300, 700, 1000];
    let gotWidth = width[Math.floor(Math.random() * width.length)]
    let got = web[select]
    console.log(gotWidth);
    console.log(got);
	function target() {
	    myWindow = window.open(`https://www.${got}.com`, '', `width=${gotWidth}px,height=${gotWidth}px,top=${gotWidth},left=${gotWidth}`);
	}
	target()
}
