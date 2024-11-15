var posts=["2024/11/15/一条小鱼写给你的一封信/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };