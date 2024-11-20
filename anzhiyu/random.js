var posts=["2024/11/15/一条小鱼写给你的一封信/","2024/11/20/分析「你在学校期间因何事一举成名全校皆知？」/","2024/11/20/对人类笑点的简单观察/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };