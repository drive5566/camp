let cardGroup = document.querySelector('.card-group')
let worksData
let worksData1
axios.get('https://2023-engineer-camp.zeabur.app/api/v1/works').then(function(res){
    worksData = res.data.ai_works.data[1];
    worksData1 = res.data.ai_works.data[0];
   console.log(worksData);

let works = 
`<li class="card">
<div class="card__img">
<img src="${worksData.imageUrl}"
alt="聊天">
</div>

<div class="card__content ">
<h2>${worksData.title}</h2>
<p class="card_text">${worksData.description}
</p>

</div>
<div class="column_top ">
<h2>AI模型</h2>
<span class="card_text">${worksData.model}</span>
</div>
<div class="column_bot">
<p class="card_text">#${worksData.type}</p>
<a href='${worksData.link}'>
    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true" alt="">
</a>
</div>
</li>

<li class="card">
<div class="card__img">
<img src="${worksData1.imageUrl}"
alt="聊天">
</div>

<div class="card__content ">
<h2>${worksData1.title}</h2>
<p class="card_text">${worksData1.description}
</p>

</div>
<div class="column_top ">
<h2>AI模型</h2>
<span class="card_text">${worksData1.model}</span>
</div>
<div class="column_bot">
<p class="card_text">#${worksData1.type}</p>
<a href='${worksData1.link}'>
    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true" alt="">
</a>
</div>
</li>
`;

cardGroup.innerHTML = works

})



// API文件
// 1.是要拿甚麼資料? 取得所有AI作品
// 2.要用甚麼HTTP METHOD 拿資料? get
// 3.資料欄位的說明
// 4.資料來源(路由) /api/v1/works //加到Domain 後面變成以下
// https://2023-engineer-camp.zeabur.app/api/v1/works

// 5.需要帶入的內容是甚麼? Query String
// ...?type='甚麼甚麼'&sort=0&page=3&searxch='水水' //加到上面API位置的後面 變成以下
// https://2023-engineer-camp.zeabur.app/api/v1/works?type='甚麼甚麼'&sort=0&page=3&searxch='水水'

// 返回頂部
function animate(obj, target,callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 10; //加入緩動動畫公式
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (window.pageYOffset == target) {
            clearInterval(obj.timer)
            if(callback){
                callback()
            }
        } else {
            // obj.style.left = window.pageYOffset + step + 'px'
            window.scroll(0,window.pageYOffset + step)
        }
    }, 15)
}
// 返回頂部結束

let goTop = document.querySelector('.go-top')
goTop.addEventListener('click',function(){
    animate(window, 0)
})

// 頁碼
let cardPage = document.querySelector('.card-page')
let p = cardPage.querySelectorAll('p')
for(i = 0;i < p.length; i++){
    p[i].onclick= function(){
        for(i = 0 ;i < p.length ; i++){
            p[i].className=''
        }
        this.className='card-page-style'
        
    }
}


let cardNav = document.querySelector('.card-nav')
let pp = cardNav.querySelectorAll('p')
for(i = 0;i < pp.length; i++){
    pp[i].onclick= function(){
        for(i = 0 ;i < pp.length ; i++){
            pp[i].className=''
        }
        this.className='card-nac-style'
        
    }
}
// 頁碼結束

// 下拉選單
let question_list = document.querySelector('.question-list')
let drap_text = document.querySelectorAll('.drap-text')
let li = question_list.querySelectorAll('li')
let flag = true

for (let i = 0; i < drap_text.length; i++) {
    li[i].addEventListener('click', createEventListener(i));
  }
  
  function createEventListener(index) {
    return function() {
      if (flag) {
        drap_text[index].style.display = 'block';
        flag = false;
      } else {
        drap_text[index].style.display = 'none';
        flag = true;
      }
    };
  }

// 下拉選單結束