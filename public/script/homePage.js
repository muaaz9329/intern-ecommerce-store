function checkLogin(){
    if('isAuth' in localStorage){
      document.getElementById('notLogin').classList.replace('inline-flex','hidden')
      document.getElementById('login').classList.replace('hidden','inline-flex')
      document.getElementById('login').innerText= localStorage.getItem('username')
    }
  }
  ['mouseenter','touchstart'].forEach((evt)=>{
    document.getElementById('firstEventParent').addEventListener(evt,()=>{
      document.getElementById('firstEvent').classList.replace('invisible','visible')
      document.getElementById('firstEvent').classList.add("animate__fadeInUp","animate__slow")
    })
    document.getElementById('aboutSection').addEventListener(evt,()=>{
      document.getElementById('aboutImg').classList.replace('invisible','visible')
      
      document.getElementById('aboutHead').classList.replace('invisible','visible')
      document.getElementById('aboutImg').classList.add('animate__fadeInLeft','animate__slower')
      document.getElementById('aboutHead').classList.add('animate__fadeInRight','animate__slower')
    })
  })
  