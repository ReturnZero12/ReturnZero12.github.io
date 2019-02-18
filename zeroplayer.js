// 플레이 리스트를 가져온다.
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
  // click 이벤트를 설정
  listitems[i].addEventListener('click',
    (e)=>{
      var li=e.target;
      playMusic(li);
    }
  );
}

function playMusic(li){
  var file=li.getAttribute('data-file');
  var audio=document.querySelector('audio');
  audio.setAttribute('src', file);
  audio.play();
  // active한 항목 변경
  var activeli=document.querySelector('.active');
  activeli.className='';
  li.className='active';
}

// 재생 중과 정지 중 그림을 바꾼다.
var audio=document.querySelector('audio');
audio.addEventListener('play',
  (e)=>{
    var img=document.querySelector('img');
    img.setAttribute('src', '실행.png');
  }
);
audio.addEventListener('pause',
  (e)=>{
    var img=document.querySelector('img');
    img.setAttribute('src', '정지.png');
    }
  );

// 곡을 끝까지 재생했을 때
audio.addEventListener('ended',
  (e)=>{
    var img=document.querySelector('img');
    img.setAttribute('src', '정지.png');
    // 다음 곡으로 전환
    var activeli=document.querySelector('.active');
    var nextli=activeli.nextElementSibling;
    if(nextli !=null){
      playMusic(nextli);
    }
        }
    );

    //랜덤 선곡 기능
    var random=document.querySelector('#random');
    random.addEventListener('click',
      (e)=>{
        e.preventDefault();
        var listitems=document.querySelectorAll('li');
        var len=listitems.length;
        var rnd=Math.floor(Math.random() * len);
        playMusic(listitems[rnd]);
      }
    );
