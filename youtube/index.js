var youtubes = document.getElementsByClassName("youtube-content");
var isLogin = false;
for (var i in youtubes) {
  youtubes[i].onclick = function() {
    if (isLogin == false) alert("로그인 후 이용 바랍니다");
    else alert("안녕하세요");
    // window.location.href = ""
  };
}
document.getElementById("login").onclick = function() {
  userId = prompt("아이디 입력 바랍니다", null);
  userPw = prompt("비밀번호 입력 바랍니다.", null);
  if (userId == null || userPw == null) {
    alert("아이디와 비밀번호 입력 바랍니다.");
    return;
  } else if (userId == "admin" && userPw == "admin") {
    alert("로그인 되었습니다.");
    isLogin = true;
    document.getElementById("login").innerHTML = "JJJ님";
    return;
  } else {
    alert("아이디와 비밀번호 확인 바랍니다.");
  }
};
