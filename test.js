var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = '';
  return '<!DOCTYPE html>  <html lang="en"> <head> <meta charset="utf-8"/> <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"/> <meta content="ie=edge" http-equiv="x-ua-compatible"/> <title>시립왓숑</title> </head> <body> <!-- 페이지의 내비게이션 영역 --> <header> </header> <!-- 페이지의 메인 영역 --> <main> <div class="container-fluid text-center text-md-left"> <div class="row"> <div class="col-md-6 pb-3"> <h5 class="text-uppercase"> </h5> <p>                                                                                 1. 2020학년도 1학기 뉴욕 글로벌인턴십 프로그램 참가자 모집 공고(2019.11.14.).pdf     2020 학년도  1 학기 뉴욕 글로벌인턴십 프로그램 참가자 모집        국제교육원에서는 우리대학 학생들이 뉴욕에서 어학연수와 해외현장실습활동을 병행할 수 있는  2020 학년도  1 학기 뉴욕 글로벌인턴십 프로그램 참가자를 다음과 같이 선발합니다 .     [ 선발 일정 ]   ▶  접수기간  :  11.27.( 수 )  오전  9 시  ~ 11.29.( 금 )  오후  6 시까지   ▶  면접대상자 발표  : 12.2.( 월 )  오후  6 시 이후 예정   ▶  면접일정  : 12.5.( 목 ) ( 학생별 개별 시간은 홈페이지에 추후 안내 )   ▶ 합격자 발표 : 12.6.(금) 오후 6시  ※  상기 일정은 선발 과정에서 변동 가능하며 변동 시 공지     붙임  : 1. 2020 학년도  1 학기 뉴욕 글로벌인턴십 프로그램 참가자 모집 공고문 (2019.11.14.) - 합격자 발표 일정 추가 [12.6.(금) 오후 6시]   2. 2020 학년도  1 학기 뉴욕 글로벌인턴십 프로그램 지원 매뉴얼   3. 2020-1 학기 뉴욕 글로벌인턴십 파견기관 소개      문의  :  국제교육원 글로벌인턴십 담당자 김혜인  (kimhi610@uos.ac.kr)   </p> </div> </div> </div> </main> <!-- 페이지의 하단부 영역 --> <footer class="page-footer text-center text-md-left font-small blue pt-4 mt-4"> <div class="container-fluid text-center text-md-left"> <div class="row"> <div class="col-md-6 pb-3"> <h5 class="text-uppercase">푸터 내용</h5> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> </div> <div class="col-md-6 pb-3"> <h5 class="text-uppercase">부가 서비스</h5> <ul class="list-unstyled"> <li> <a href="#">Q/A</a> </li> <li> <a href="#">고객센터</a> </li> </ul> </div> </div> </div> <div class="footer-copyright py-3 te             <a href="#"> 이승현 </a> </div> </footer> <!-- jQuery --> <script src="js/jquery.min.js" type="text/javascript"></script> <!-- Bootstrap tooltips --> <script src="js/popper.min.js" type="text/javascript"></script> <!-- Bootstrap core JavaScript --> <script src="js/bootstrap.min.js" type="text/javascript"></script> <!-- MDB core JavaScript --> <script src="js/mdb.min.js" type="text/javascript"></script> <!-- Your custom scripts (optional) --> <script type="text/javascript"></script> </body> </html>';
};
